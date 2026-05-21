<template>
  <div class="app">
    <!-- 标题栏 -->
    <div class="title-bar">
      <div class="title-bar-inner">
        <img v-if="isElectron" class="drag-region" style="position:absolute;top:0;left:0;right:0;height:30px;-webkit-app-region:drag;z-index:0" />
        <h1 style="position:relative;z-index:1">📋 DevOps刷题</h1>
        <span class="subtitle">桌面版 · 选择题 · 随时刷</span>
      </div>
    </div>

    <!-- 统计栏 -->
    <div class="stats-bar">
      <div class="stat-item">
        <div class="stat-num">{{ stats.totalDone }}</div>
        <div class="stat-label">已刷</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">{{ stats.correctRate }}%</div>
        <div class="stat-label">正确率</div>
      </div>
      <div class="stat-item" style="cursor:pointer" @click="switchView('wrong')">
        <div class="stat-num">{{ stats.wrongCount }}</div>
        <div class="stat-label">错题</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">{{ stats.favCount }}</div>
        <div class="stat-label">收藏</div>
      </div>
      <div class="stat-item" style="cursor:pointer;flex:0.5" @click="confirmReset" title="重置刷题记录">
        <div class="stat-num" style="font-size:14px;color:#999">🗑️</div>
        <div class="stat-label">重置</div>
      </div>
    </div>

    <!-- 分类栏 -->
    <div class="category-bar">
      <button class="cat-tab" :class="{ active: view === 'quiz' && catFilter === '' }" @click="switchCategory('')">📋 全部</button>
      <button v-for="cat in categories" :key="cat.key" class="cat-tab"
        :class="{ active: view === 'quiz' && catFilter === cat.key, done: isCategoryDone(cat.key) }"
        @click="switchCategory(cat.key)">
        {{ cat.label }}
      </button>
      <button class="cat-tab" :class="{ active: view === 'wrong' }" @click="switchView('wrong')">❌ 错题本</button>
      <button class="cat-tab" :class="{ active: view === 'fav' }" @click="switchView('fav')">⭐ 收藏</button>
    </div>

    <!-- 模式栏 -->
    <div class="mode-bar" v-if="view === 'quiz'">
      <button class="mode-btn" :class="{ active: mode === 'order' }" @click="mode = 'order'">📑 顺序</button>
      <button class="mode-btn" :class="{ active: mode === 'random' }" @click="mode = 'random'">🎲 随机</button>
      <span class="mode-counter">{{ currentIdx + 1 }} / {{ filteredQuestions.length }}</span>
    </div>

    <!-- 错题本 -->
    <div v-if="view === 'wrong'" class="view-panel">
      <div v-if="wrongQuestions.length === 0" class="empty-state">
        <div class="empty-icon">🎉</div>
        <p>暂无错题！继续保持</p>
      </div>
      <div v-else>
        <div class="list-header">
          <span>共 {{ wrongQuestions.length }} 道错题</span>
          <span class="link-btn danger" @click="clearWrong">清空全部</span>
        </div>
        <div v-for="(q, idx) in wrongQuestions" :key="q.id" class="list-item">
          <div class="list-item-q">{{ idx + 1 }}. {{ q.question }}</div>
          <div class="list-item-meta">
            <span>{{ getCategoryLabel(q.category) }}</span>
            <span class="link-btn success" @click="removeWrong(q.id)">✓ 已掌握</span>
            <span class="link-btn primary" @click="jumpToQuestion(q.id)">去重刷</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 收藏夹 -->
    <div v-if="view === 'fav'" class="view-panel">
      <div v-if="favQuestions.length === 0" class="empty-state">
        <div class="empty-icon">⭐</div>
        <p>还没有收藏的题目</p>
      </div>
      <div v-else>
        <div class="list-header">
          <span>共 {{ favQuestions.length }} 道收藏</span>
        </div>
        <div v-for="(q, idx) in favQuestions" :key="q.id" class="list-item">
          <div class="list-item-q">{{ idx + 1 }}. {{ q.question }}</div>
          <div class="list-item-meta">
            <span>{{ getCategoryLabel(q.category) }}</span>
            <span class="link-btn primary" @click="jumpToQuestion(q.id)">去刷</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 答题 -->
    <div v-if="view === 'quiz'">
      <div v-if="filteredQuestions.length === 0" class="empty-state">
        <div class="empty-icon">📭</div>
        <p>该分类暂无题目</p>
      </div>

      <template v-else>
        <!-- 题目卡片 -->
        <div class="question-card">
          <div class="q-header">
            <div class="q-tags">
              <span class="tag" :class="currentQ.difficulty">{{ diffLabel(currentQ.difficulty) }}</span>
              <span class="tag" :class="currentQ.type">{{ currentQ.type === 'single' ? '单选' : '多选' }}</span>
            </div>
            <div class="q-id">{{ currentQ.id }}</div>
          </div>
          <div class="q-text">{{ currentQ.question }}</div>

          <!-- 选项 -->
          <div class="options">
            <div v-for="(opt, oi) in currentQ.options" :key="oi"
              class="option"
              :class="{
                selected: selected.includes(oi),
                correct: submitted && currentQ.answer.includes(letters[oi]),
                wrong: submitted && selected.includes(oi) && !currentQ.answer.includes(letters[oi]),
                disabled: submitted
              }"
              @click="selectOption(oi)">
              <div class="opt-letter">{{ letters[oi] }}</div>
              <div class="opt-text">{{ opt }}</div>
            </div>
          </div>

          <!-- 解析 -->
          <div v-if="submitted" class="explanation">
            <div class="explanation-title">📖 解析</div>
            <div class="explanation-text">{{ currentQ.explanation }}</div>
          </div>

          <!-- 操作按钮 -->
          <div class="action-bar">
            <button v-if="!submitted" class="btn btn-primary" @click="submitAnswer" :disabled="selected.length === 0">确认答案</button>
            <button v-if="submitted" class="btn btn-success" @click="nextQuestion">下一题 →</button>
            <button class="btn btn-icon" :class="{ favorited: favorites.has(currentQ.id) }"
              @click="toggleFavorite(currentQ.id)">
              {{ favorites.has(currentQ.id) ? '⭐' : '☆' }}
            </button>
            <button v-if="submitted" class="btn btn-icon" @click="resetQuestion">⟳ 重做</button>
          </div>
        </div>

        <!-- 导航 -->
        <div class="nav-bar">
          <button class="nav-btn" :disabled="currentIdx === 0" @click="prevQuestion">← 上一题</button>
          <button class="nav-btn" @click="randomQuestion">🎲 随机</button>
          <button class="nav-btn" :disabled="currentIdx >= filteredQuestions.length - 1" @click="nextQuestion">下一题 →</button>
        </div>
      </template>
    </div>

    <div class="footer">💾 数据存储在本地 · 关闭窗口最小化到托盘</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import QUESTIONS, { CATEGORIES, LETTERS, getCategoryLabel, getDifficultyLabel as diffLabel } from './data/questions.js'
import { loadData, saveData } from './utils/storage.js'

// ========== 状态 ==========
const view = ref('quiz')
const catFilter = ref('')
const mode = ref('order')
const currentIdx = ref(0)
const selected = ref([])
const submitted = ref(false)
const favorites = ref(new Set())
const wrongSet = ref(new Set())
const totalDone = ref(0)
const totalCorrect = ref(0)
const isElectron = ref(false)

const letters = LETTERS
const categories = CATEGORIES

// ========== 加载/保存 ==========
onMounted(() => {
  if (window.electronAPI) isElectron.value = true
  const saved = loadData()
  if (saved) {
    if (saved.favorites) favorites.value = saved.favorites
    if (saved.wrongSet) wrongSet.value = saved.wrongSet
    if (saved.totalDone) totalDone.value = saved.totalDone
    if (saved.totalCorrect) totalCorrect.value = saved.totalCorrect
  }
})

function persist() {
  saveData({
    favorites: favorites.value,
    wrongSet: wrongSet.value,
    totalDone: totalDone.value,
    totalCorrect: totalCorrect.value,
  })
}

// ========== 计算 ==========
const filteredQuestions = computed(() => {
  let qs = QUESTIONS
  if (catFilter.value) qs = qs.filter(q => q.category === catFilter.value)
  return mode.value === 'random' ? [...qs].sort(() => Math.random() - 0.5) : qs
})

const currentQ = computed(() => filteredQuestions.value[currentIdx.value] || filteredQuestions.value[0] || {})

const wrongQuestions = computed(() => QUESTIONS.filter(q => wrongSet.value.has(q.id)))
const favQuestions = computed(() => QUESTIONS.filter(q => favorites.value.has(q.id)))

const stats = computed(() => {
  const rate = totalDone.value > 0 ? Math.round(totalCorrect.value / totalDone.value * 100) : 0
  return {
    totalDone: totalDone.value,
    correctRate: rate,
    wrongCount: wrongQuestions.value.length,
    favCount: favQuestions.value.length,
  }
})

// ========== 方法 ==========
function switchCategory(key) {
  catFilter.value = key
  currentIdx.value = 0
  selected.value = []
  submitted.value = false
  view.value = 'quiz'
}

function switchView(v) {
  view.value = v
}

function selectOption(idx) {
  if (submitted.value) return
  const q = currentQ.value
  if (q.type === 'single') {
    selected.value = [idx]
  } else {
    const i = selected.value.indexOf(idx)
    if (i > -1) selected.value.splice(i, 1)
    else selected.value.push(idx)
  }
}

function submitAnswer() {
  if (selected.value.length === 0) return
  const q = currentQ.value
  const correct = q.answer.map(a => letters.indexOf(a))
  const sortedSelected = [...selected.value].sort()
  const sortedCorrect = [...correct].sort()
  const isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect)

  totalDone.value++
  if (isCorrect) totalCorrect.value++
  else wrongSet.value.add(q.id)
  submitted.value = true
  persist()
}

function nextQuestion() {
  if (currentIdx.value < filteredQuestions.value.length - 1) currentIdx.value++
  else currentIdx.value = 0
  resetQuestion()
}

function prevQuestion() {
  if (currentIdx.value > 0) currentIdx.value--
  resetQuestion()
}

function randomQuestion() {
  const qs = filteredQuestions.value
  if (qs.length <= 1) return
  let idx
  do { idx = Math.floor(Math.random() * qs.length) }
  while (idx === currentIdx.value && qs.length > 1)
  currentIdx.value = idx
  resetQuestion()
}

function resetQuestion() {
  selected.value = []
  submitted.value = false
}

function toggleFavorite(id) {
  if (favorites.value.has(id)) favorites.value.delete(id)
  else favorites.value.add(id)
  persist()
}

function removeWrong(id) {
  wrongSet.value.delete(id)
  persist()
}

function clearWrong() {
  wrongSet.value.clear()
  persist()
}

function confirmReset() {
  if (confirm('确定要重置所有刷题记录吗？\n\n这将清空：\n• 刷题数量\n• 正确率\n• 错题本\n• 收藏夹')) {
    totalDone.value = 0
    totalCorrect.value = 0
    wrongSet.value.clear()
    favorites.value.clear()
    persist()
  }
}

function jumpToQuestion(id) {
  const idx = QUESTIONS.findIndex(q => q.id === id)
  if (idx > -1) {
    catFilter.value = ''
    mode.value = 'order'
    currentIdx.value = idx
    view.value = 'quiz'
    resetQuestion()
  }
}

function isCategoryDone(key) {
  const qs = QUESTIONS.filter(q => q.category === key)
  if (qs.length === 0) return false
  const wrong = qs.filter(q => wrongSet.value.has(q.id)).length
  return wrong === 0
}
</script>

<style>
/* ========== 全局 ========== */
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif;
  background: #f0f2f5;
  color: #333;
}
.app { max-width: 800px; margin: 0 auto; padding-bottom: 30px; }

/* ========== 标题栏 ========== */
.title-bar {
  background: linear-gradient(135deg, #1a73e8, #0d47a1);
  color: #fff;
  padding: 8px 16px;
  -webkit-app-region: drag;
}
.title-bar-inner { position: relative; display: flex; align-items: center; gap: 8px; }
.title-bar h1 { font-size: 16px; font-weight: 600; }
.subtitle { font-size: 11px; opacity: 0.7; }

/* ========== 统计栏 ========== */
.stats-bar {
  display: flex;
  background: #fff;
  padding: 12px 16px;
  gap: 8px;
  border-bottom: 1px solid #eee;
}
.stat-item { flex: 1; text-align: center; }
.stat-num { font-size: 22px; font-weight: 700; color: #1a73e8; }
.stat-label { color: #888; font-size: 11px; margin-top: 2px; }

/* ========== 分类栏 ========== */
.category-bar {
  display: flex;
  overflow-x: auto;
  gap: 6px;
  padding: 10px 16px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.category-bar::-webkit-scrollbar { display: none; }
.cat-tab {
  flex-shrink: 0;
  padding: 5px 12px;
  border-radius: 14px;
  font-size: 12px;
  background: #f0f2f5;
  color: #666;
  cursor: pointer;
  border: none;
  white-space: nowrap;
  transition: all 0.2s;
}
.cat-tab.active { background: #1a73e8; color: #fff; }
.cat-tab.done::after { content: ' ✓'; color: #34c759; margin-left: 2px; }
.cat-tab.active.done::after { color: #fff; }

/* ========== 模式栏 ========== */
.mode-bar {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #fff;
  border-bottom: 1px solid #eee;
  gap: 10px;
}
.mode-btn {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  color: #666;
}
.mode-btn.active { background: #e8f0fe; border-color: #1a73e8; color: #1a73e8; }
.mode-counter { margin-left: auto; font-size: 12px; color: #999; }

/* ========== 题目卡片 ========== */
.question-card {
  margin: 12px 16px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}
.q-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.q-tags { display: flex; gap: 6px; }
.tag {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
}
.tag.easy { background: #e8f5e9; color: #2e7d32; }
.tag.medium { background: #fff3e0; color: #e65100; }
.tag.hard { background: #fce4ec; color: #c62828; }
.tag.single { background: #e3f2fd; color: #1565c0; }
.tag.multiple { background: #f3e5f5; color: #7b1fa2; }
.q-id { font-size: 12px; color: #999; }

.q-text {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 16px;
}

/* 选项 */
.options { display: flex; flex-direction: column; gap: 8px; }
.option {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1.5px solid #eee;
  cursor: pointer;
  transition: all 0.15s;
  font-size: 14px;
  line-height: 1.5;
}
.option:hover { border-color: #1a73e8; background: #f8faff; }
.opt-letter {
  flex-shrink: 0;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #666;
}
.opt-text { flex: 1; }

.option.correct { border-color: #34c759; background: #f0faf3; }
.option.correct .opt-letter { background: #34c759; color: #fff; }
.option.wrong { border-color: #ff3b30; background: #fff2f2; }
.option.wrong .opt-letter { background: #ff3b30; color: #fff; }
.option.selected { border-color: #1a73e8; background: #f0f5ff; }
.option.selected .opt-letter { background: #1a73e8; color: #fff; }
.option.disabled { cursor: default; }
.option.disabled:hover { border-color: #eee; background: transparent; }

/* 解析 */
.explanation {
  margin-top: 16px;
  padding: 14px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 3px solid #1a73e8;
}
.explanation-title { font-weight: 600; font-size: 13px; color: #333; margin-bottom: 6px; }
.explanation-text { font-size: 14px; line-height: 1.7; color: #555; }

/* 操作按钮 */
.action-bar {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
.btn {
  padding: 10px 18px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.btn:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-primary { background: #1a73e8; color: #fff; flex: 1; }
.btn-primary:hover { background: #1557b0; }
.btn-success { background: #34c759; color: #fff; flex: 1; }
.btn-icon {
  width: 40px; padding: 10px 0;
  background: #fff;
  border: 1.5px solid #ddd;
  font-size: 16px;
  text-align: center;
}
.btn-icon.favorited { border-color: #ff9500; background: #fff8e1; }
.btn-icon:hover { border-color: #1a73e8; }

/* 导航 */
.nav-bar {
  display: flex;
  gap: 10px;
  margin: 0 16px;
}
.nav-btn {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  border: 1.5px solid #ddd;
  background: #fff;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
}
.nav-btn:disabled { opacity: 0.4; cursor: not-allowed; }

/* ========== 列表视图（错题本/收藏） ========== */
.view-panel { margin: 12px 16px; }
.list-header {
  display: flex;
  justify-content: space-between;
  padding: 0 4px 8px;
  font-size: 13px;
  color: #999;
}
.list-item {
  background: #fff;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.list-item-q { font-size: 14px; margin-bottom: 6px; line-height: 1.5; }
.list-item-meta { font-size: 12px; color: #999; display: flex; gap: 12px; }
.link-btn { cursor: pointer; }
.link-btn.danger { color: #ff3b30; }
.link-btn.success { color: #34c759; }
.link-btn.primary { color: #1a73e8; }

/* 空状态 */
.empty-state { text-align: center; padding: 60px 20px; color: #999; }
.empty-icon { font-size: 48px; margin-bottom: 12px; }
.empty-state p { font-size: 14px; line-height: 1.6; }

/* 底部 */
.footer { text-align: center; padding: 20px; font-size: 12px; color: #ccc; }
</style>

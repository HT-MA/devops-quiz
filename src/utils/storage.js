const STORAGE_KEY = 'devops_quiz_data'

export function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    // 恢复 Set
    if (data.favorites) data.favorites = new Set(data.favorites)
    if (data.wrongSet) data.wrongSet = new Set(data.wrongSet)
    return data
  } catch {
    return null
  }
}

export function saveData(data) {
  try {
    const toStore = {
      ...data,
      favorites: [...(data.favorites || [])],
      wrongSet: [...(data.wrongSet || [])],
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
  } catch {
    // localStorage 满了或不可用，静默失败
  }
}

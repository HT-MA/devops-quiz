# DevOps刷题

> 桌面版 · 选择题 · 随时刷

基于 Electron + Vue3 的 Windows 桌面应用，专注 **DevOps 工程师面试刷题**，无需联网，单机运行。

## 截图

![screenshot](./public/screenshot.png)

## 功能

- 🐧 **8 大分类**：Linux / Git / Docker / K8s / CI/CD / IaC / 监控 / DevOps理论
- 📝 **221 道选择题**：单选 + 多选，每道带详细解析
- 📊 **刷题统计**：已刷数量、正确率、错题数、收藏数
- ❌ **错题本**：自动收录错题，支持重刷和标记已掌握
- ⭐ **收藏夹**：收藏高频考点和难题
- 🎲 **两种模式**：顺序刷题 / 随机刷题
- 🗑️ **一键重置**：清空所有刷题记录
- 💾 **本地存储**：数据保存在浏览器 localStorage，关掉再开还在
- 🪟 **系统托盘**：关闭窗口最小化到托盘，随时唤出
- ⌨️ **快捷键**：`Ctrl+Shift+D` 快速显示/隐藏窗口

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/HT-MA/devops-quiz.git
cd devops-quiz

# 安装依赖
npm install

# 启动开发模式
npm run dev

# 打包为 .exe 安装包
npm run build
```

## 技术栈

| 层 | 技术 |
|----|------|
| 桌面壳 | Electron |
| 前端 | Vue 3 + Vite |
| UI | 纯 CSS（移动端自适应） |
| 题库 | JSON 数据文件 |
| 存储 | localStorage |
| 打包 | electron-builder (NSIS) |

## 项目结构

```
devops-quiz/
├── electron/
│   ├── main.js          # Electron 主进程
│   └── preload.js       # 桥接
├── src/
│   ├── App.vue          # 主界面
│   ├── main.js          # Vue 入口
│   ├── data/
│   │   └── questions.js # 题库
│   └── utils/
│       └── storage.js   # 本地存储
├── package.json
├── vite.config.js
└── .gitignore
```

## 题库

目前收录 **221 道题**，覆盖 DevOps 全栈考点：

| 分类 | 题数 | 覆盖内容 |
|------|:---:|---------|
| 🐧 Linux | 50 | 命令、权限、进程、网络、Shell、systemd |
| 📦 Git | 24 | 分支、合并、rebase、stash、tag、GitFlow |
| 🐳 Docker | 27 | 镜像、容器、网络、Dockerfile、Compose |
| ☸️ K8s | 28 | Pod、Service、Deployment、存储、调度、RBAC |
| 🔧 CI/CD | 27 | Jenkins、GitLab CI、GitHub Actions、ArgoCD |
| 📜 IaC | 30 | Terraform、Ansible、Pulumi |
| 📊 监控 | 20 | Prometheus、Grafana、ELK、链路追踪 |
| 📖 DevOps理论 | 15 | CALMS、SRE、DORA指标、混沌工程 |

## 开发计划

- [ ] 扩充题库至每类 50+ 题
- [ ] 模拟考试模式（计时 + 随机组卷）
- [ ] 每日一题推送
- [ ] 导出错题为 Markdown
- [ ] 多设备数据同步（可选）

## License

MIT

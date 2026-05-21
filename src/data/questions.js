// DevOps刷题 - 题库 (221题)
// 生成时间: 2026-05-21T13:38:32.103Z

const QUESTIONS = [
  {
    "id": "linux-001",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "Linux中，查看当前目录下所有文件（包括隐藏文件）的命令是？",
    "options": [
      "A. ls",
      "B. ls -l",
      "C. ls -a",
      "D. ls -lh"
    ],
    "answer": [
      "C"
    ],
    "explanation": "ls -a 中的 -a 参数表示 all，显示所有文件包括以 . 开头的隐藏文件。"
  },
  {
    "id": "linux-002",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "以下哪个命令用于修改文件权限？",
    "options": [
      "A. chown",
      "B. chmod",
      "C. chgrp",
      "D. usermod"
    ],
    "answer": [
      "B"
    ],
    "explanation": "chmod 用于修改文件或目录的读、写、执行权限。chown 用于修改文件所有者。"
  },
  {
    "id": "linux-003",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "Linux系统中，查看进程占用端口的命令是？",
    "options": [
      "A. ps aux",
      "B. netstat -tlnp",
      "C. top",
      "D. df -h"
    ],
    "answer": [
      "B"
    ],
    "explanation": "netstat -tlnp 显示TCP监听端口及对应进程PID。也可用 ss -tlnp。"
  },
  {
    "id": "linux-004",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "Shell脚本中，变量赋值正确的语法是？",
    "options": [
      "A. name = \"Tom\"",
      "B. name= \"Tom\"",
      "C. name=\"Tom\"",
      "D. $name=\"Tom\""
    ],
    "answer": [
      "C"
    ],
    "explanation": "Shell变量赋值时等号两侧不能有空格。引用变量时用 $name 或 ${name}。"
  },
  {
    "id": "linux-005",
    "category": "linux",
    "type": "multiple",
    "difficulty": "medium",
    "question": "以下哪些是Linux发行版？（多选）",
    "options": [
      "A. Ubuntu",
      "B. CentOS",
      "C. Windows Server",
      "D. Debian"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Ubuntu、CentOS、Debian 都是Linux发行版。Windows Server 是微软操作系统。"
  },
  {
    "id": "git-001",
    "category": "git",
    "type": "single",
    "difficulty": "easy",
    "question": "Git中，将修改添加到暂存区的命令是？",
    "options": [
      "A. git commit",
      "B. git push",
      "C. git add",
      "D. git status"
    ],
    "answer": [
      "C"
    ],
    "explanation": "git add 将工作区的修改添加到暂存区（stage），然后才能 git commit 提交。"
  },
  {
    "id": "git-002",
    "category": "git",
    "type": "single",
    "difficulty": "easy",
    "question": "Git中创建一个新分支并切换过去的命令是？",
    "options": [
      "A. git branch dev",
      "B. git checkout dev",
      "C. git checkout -b dev",
      "D. git switch dev"
    ],
    "answer": [
      "C"
    ],
    "explanation": "git checkout -b dev 等于 git branch dev + git checkout dev，一步创建并切换分支。"
  },
  {
    "id": "git-003",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "当两个分支修改了同一个文件的同一行，合并时会发生？",
    "options": [
      "A. 自动合并成功",
      "B. 合并冲突",
      "C. 自动回退",
      "D. 分支删除"
    ],
    "answer": [
      "B"
    ],
    "explanation": "当两个分支对同一文件同一行做了不同修改，Git无法自动决定保留哪个，需要手动解决冲突。"
  },
  {
    "id": "git-004",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "以下哪个命令用于查看提交历史？",
    "options": [
      "A. git diff",
      "B. git log",
      "C. git show",
      "D. git status"
    ],
    "answer": [
      "B"
    ],
    "explanation": "git log 显示提交历史记录。git diff 显示工作区与暂存区的差异。"
  },
  {
    "id": "git-005",
    "category": "git",
    "type": "multiple",
    "difficulty": "hard",
    "question": "以下哪些操作会改写Git历史？（多选）",
    "options": [
      "A. git commit --amend",
      "B. git rebase",
      "C. git reset",
      "D. git merge"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "git commit --amend 修改最近提交、git rebase 变基、git reset 回退都会改写历史。git merge 不会。"
  },
  {
    "id": "docker-001",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "Docker中，查看正在运行容器的命令是？",
    "options": [
      "A. docker ps",
      "B. docker images",
      "C. docker start",
      "D. docker inspect"
    ],
    "answer": [
      "A"
    ],
    "explanation": "docker ps 列出正在运行的容器。docker ps -a 列出所有容器（包括已停止的）。"
  },
  {
    "id": "docker-002",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "Dockerfile中，用于指定基础镜像的指令是？",
    "options": [
      "A. RUN",
      "B. CMD",
      "C. FROM",
      "D. COPY"
    ],
    "answer": [
      "C"
    ],
    "explanation": "FROM 指定基础镜像，是Dockerfile的第一条有效指令。如 FROM ubuntu:22.04。"
  },
  {
    "id": "docker-003",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "Docker容器默认的网络模式是？",
    "options": [
      "A. host",
      "B. bridge",
      "C. none",
      "D. overlay"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Docker默认使用 bridge 网络模式，容器通过docker0网桥与宿主机通信。"
  },
  {
    "id": "docker-004",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "将容器内端口映射到宿主机端口的参数是？",
    "options": [
      "A. -e",
      "B. -v",
      "C. -p",
      "D. --name"
    ],
    "answer": [
      "C"
    ],
    "explanation": "-p 或 --publish 将容器端口映射到宿主机端口，如 docker run -p 8080:80 nginx。"
  },
  {
    "id": "docker-005",
    "category": "docker",
    "type": "multiple",
    "difficulty": "hard",
    "question": "以下哪些是Docker存储驱动？（多选）",
    "options": [
      "A. overlay2",
      "B. aufs",
      "C. devicemapper",
      "D. ext4"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "overlay2、aufs、devicemapper 都是Docker支持的存储驱动。ext4 是文件系统类型。"
  },
  {
    "id": "k8s-001",
    "category": "kubernetes",
    "type": "single",
    "difficulty": "easy",
    "question": "K8s中保证指定数量Pod副本始终运行的资源是？",
    "options": [
      "A. Service",
      "B. Deployment",
      "C. Ingress",
      "D. ConfigMap"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Deployment 通过 ReplicaSet 管理 Pod 副本数，确保指定数量的 Pod 始终运行。"
  },
  {
    "id": "k8s-002",
    "category": "kubernetes",
    "type": "single",
    "difficulty": "easy",
    "question": "K8s中为Pod提供稳定网络访问入口的资源是？",
    "options": [
      "A. Deployment",
      "B. Service",
      "C. Pod",
      "D. Namespace"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Service 为一组Pod提供稳定的虚拟IP和DNS名称，作为服务访问入口。"
  },
  {
    "id": "k8s-003",
    "category": "kubernetes",
    "type": "single",
    "difficulty": "medium",
    "question": "K8s中，以下哪个组件负责调度Pod到合适的Node？",
    "options": [
      "A. kubelet",
      "B. kube-proxy",
      "C. kube-scheduler",
      "D. controller-manager"
    ],
    "answer": [
      "C"
    ],
    "explanation": "kube-scheduler 负责根据资源需求、约束条件等将新创建的Pod调度到合适的Node上。"
  },
  {
    "id": "k8s-004",
    "category": "kubernetes",
    "type": "multiple",
    "difficulty": "medium",
    "question": "以下哪些是K8s的存储资源类型？（多选）",
    "options": [
      "A. PersistentVolume",
      "B. ConfigMap",
      "C. Secret",
      "D. Deployment"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "PV、ConfigMap、Secret 都是K8s存储相关资源。Deployment 是工作负载资源。"
  },
  {
    "id": "k8s-005",
    "category": "kubernetes",
    "type": "single",
    "difficulty": "hard",
    "question": "K8s中，用于管理加密信息的资源是？",
    "options": [
      "A. ConfigMap",
      "B. Secret",
      "C. ServiceAccount",
      "D. Role"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Secret 用于存储敏感信息如密码、Token、密钥等，以base64编码存储，支持加密。"
  },
  {
    "id": "cicd-001",
    "category": "cicd",
    "type": "single",
    "difficulty": "easy",
    "question": "Jenkins中，Pipeline脚本通常使用的语言是？",
    "options": [
      "A. Python",
      "B. Groovy",
      "C. YAML",
      "D. JSON"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Jenkins Pipeline 使用 Groovy 语言编写脚本。声明式Pipeline使用Groovy语法的简化版本。"
  },
  {
    "id": "cicd-002",
    "category": "cicd",
    "type": "single",
    "difficulty": "easy",
    "question": "GitLab CI的配置文件名称是？",
    "options": [
      "A. .travis.yml",
      "B. Jenkinsfile",
      "C. .gitlab-ci.yml",
      "D. Dockerfile"
    ],
    "answer": [
      "C"
    ],
    "explanation": ".gitlab-ci.yml 放在项目根目录，GitLab会自动识别并执行CI/CD流水线。"
  },
  {
    "id": "cicd-003",
    "category": "cicd",
    "type": "single",
    "difficulty": "medium",
    "question": "CI/CD中，\"持续集成\"的核心目的是？",
    "options": [
      "A. 每天只部署一次",
      "B. 频繁将代码合并到主干并自动构建测试",
      "C. 手动审批所有代码变更",
      "D. 只在周末部署"
    ],
    "answer": [
      "B"
    ],
    "explanation": "持续集成的核心是频繁（每天多次）将代码合并到主干，并通过自动化构建和测试尽早发现问题。"
  },
  {
    "id": "cicd-004",
    "category": "cicd",
    "type": "single",
    "difficulty": "medium",
    "question": "以下哪个工具不是CI/CD工具？",
    "options": [
      "A. Jenkins",
      "B. GitLab CI",
      "C. Docker",
      "D. GitHub Actions"
    ],
    "answer": [
      "C"
    ],
    "explanation": "Docker 是容器化平台，不是CI/CD工具。Jenkins、GitLab CI、GitHub Actions 都是CI/CD工具。"
  },
  {
    "id": "cicd-005",
    "category": "cicd",
    "type": "multiple",
    "difficulty": "hard",
    "question": "以下哪些属于CI/CD流水线的典型阶段？（多选）",
    "options": [
      "A. 代码检查",
      "B. 单元测试",
      "C. 咖啡时间",
      "D. 构建镜像"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "典型的CI/CD流水线包括：代码检查(lint)→单元测试→构建→部署等阶段。"
  },
  {
    "id": "iac-001",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Terraform中，用于初始化工作目录的命令是？",
    "options": [
      "A. terraform plan",
      "B. terraform apply",
      "C. terraform init",
      "D. terraform destroy"
    ],
    "answer": [
      "C"
    ],
    "explanation": "terraform init 初始化工作目录，下载Provider插件，是使用Terraform的第一步。"
  },
  {
    "id": "iac-002",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Ansible中，Playbook文件的格式是？",
    "options": [
      "A. JSON",
      "B. YAML",
      "C. XML",
      "D. TOML"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Ansible Playbook 使用 YAML 格式编写，结构清晰，易于阅读和维护。"
  },
  {
    "id": "iac-003",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "Terraform中，查看将要创建/修改/删除哪些资源的命令是？",
    "options": [
      "A. terraform init",
      "B. terraform plan",
      "C. terraform apply",
      "D. terraform show"
    ],
    "answer": [
      "B"
    ],
    "explanation": "terraform plan 显示执行计划，预览将要创建、修改或删除的资源，不会实际执行变更。"
  },
  {
    "id": "iac-004",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "Ansible中，用于在远程主机执行命令的模块是？",
    "options": [
      "A. copy",
      "B. shell",
      "C. file",
      "D. service"
    ],
    "answer": [
      "B"
    ],
    "explanation": "shell 模块在远程主机上通过shell执行命令。command模块类似但不支持管道和重定向。"
  },
  {
    "id": "iac-005",
    "category": "iac",
    "type": "multiple",
    "difficulty": "hard",
    "question": "以下哪些是IaC工具？（多选）",
    "options": [
      "A. Terraform",
      "B. Ansible",
      "C. Pulumi",
      "D. Jenkins"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Terraform、Ansible、Pulumi 都是IaC工具。Jenkins 是CI/CD工具。"
  },
  {
    "id": "mon-001",
    "category": "monitoring",
    "type": "single",
    "difficulty": "easy",
    "question": "Prometheus 使用什么模型来收集监控数据？",
    "options": [
      "A. Push模型",
      "B. Pull模型",
      "C. 消息队列",
      "D. UDP广播"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Prometheus 采用 Pull 模型，定期从目标端点（/metrics）拉取指标数据。"
  },
  {
    "id": "mon-002",
    "category": "monitoring",
    "type": "single",
    "difficulty": "easy",
    "question": "Grafana 的主要功能是？",
    "options": [
      "A. 数据采集",
      "B. 数据可视化与仪表盘",
      "C. 告警通知",
      "D. 日志存储"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Grafana 是一个开源的可视化平台，用于将多个数据源的指标数据展示为图表和仪表盘。"
  },
  {
    "id": "mon-003",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "ELK Stack 中，负责日志收集和解析的组件是？",
    "options": [
      "A. Elasticsearch",
      "B. Logstash",
      "C. Kibana",
      "D. Beats"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Logstash 负责收集、解析、转换日志数据并发送到Elasticsearch存储。"
  },
  {
    "id": "mon-004",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "Prometheus 告警规则配置文件的格式是？",
    "options": [
      "A. JSON",
      "B. YAML",
      "C. XML",
      "D. TOML"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Prometheus 告警规则使用 YAML 格式配置，定义触发条件和告警表达式。"
  },
  {
    "id": "mon-005",
    "category": "monitoring",
    "type": "multiple",
    "difficulty": "hard",
    "question": "以下哪些属于可观测性的三大支柱？（多选）",
    "options": [
      "A. 指标(Metrics)",
      "B. 日志(Logs)",
      "C. 代码(Code)",
      "D. 链路追踪(Traces)"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "可观测性三大支柱：指标(Metrics)、日志(Logs)、链路追踪(Traces)。"
  },
  {
    "id": "devops-001",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "easy",
    "question": "DevOps 的核心目标是？",
    "options": [
      "A. 加快开发速度",
      "B. 缩短交付周期并保证质量",
      "C. 减少测试人员",
      "D. 全用自动化"
    ],
    "answer": [
      "B"
    ],
    "explanation": "DevOps 通过文化、实践和工具的结合，实现更快的交付周期和更高的软件质量。"
  },
  {
    "id": "devops-002",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "easy",
    "question": "以下哪个是 DevOps 的核心理念之一？",
    "options": [
      "A. 瀑布开发",
      "B. 持续交付",
      "C. 代码复用",
      "D. 数据库优化"
    ],
    "answer": [
      "B"
    ],
    "explanation": "持续交付（Continuous Delivery）是DevOps的核心实践，确保代码随时可部署到生产环境。"
  },
  {
    "id": "devops-003",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "medium",
    "question": "CALMS 是 DevOps 评估框架，其中 \"C\" 代表？",
    "options": [
      "A. Code",
      "B. Culture",
      "C. Cloud",
      "D. CI/CD"
    ],
    "answer": [
      "B"
    ],
    "explanation": "CALMS 代表 Culture（文化）、Automation（自动化）、Lean（精益）、Measurement（度量）、Sharing（共享）。"
  },
  {
    "id": "devops-004",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "medium",
    "question": "以下哪个是微服务架构的典型优势？",
    "options": [
      "A. 部署更简单",
      "B. 独立扩展",
      "C. 调试更容易",
      "D. 网络开销更小"
    ],
    "answer": [
      "B"
    ],
    "explanation": "微服务可以独立部署和扩展，每个服务可根据自身负载独立扩缩容。"
  },
  {
    "id": "devops-005",
    "category": "devops-theory",
    "type": "multiple",
    "difficulty": "hard",
    "question": "以下哪些属于 DevOps 实践？（多选）",
    "options": [
      "A. 基础设施即代码",
      "B. 蓝绿部署",
      "C. 每日站会",
      "D. 监控告警"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "IaC、蓝绿部署、监控告警都是DevOps实践。每日站会是敏捷开发实践。"
  },
  {
    "id": "linux-006",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "Linux系统中使用哪个命令可以查看当前工作目录的完整路径？",
    "options": [
      "A. pwd",
      "B. cd",
      "C. ls",
      "D. dir"
    ],
    "answer": [
      "A"
    ],
    "explanation": "pwd显示当前工作目录的绝对路径。"
  },
  {
    "id": "linux-007",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "使用ls -l输出-rwxr--r--表示该文件类型是？",
    "options": [
      "A. 目录",
      "B. 普通文件",
      "C. 符号链接",
      "D. 块设备"
    ],
    "answer": [
      "B"
    ],
    "explanation": "首字符-表示普通文件。"
  },
  {
    "id": "linux-008",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "找出file.txt中含error的行的命令是？",
    "options": [
      "A. find",
      "B. grep error file.txt",
      "C. locate",
      "D. cat"
    ],
    "answer": [
      "B"
    ],
    "explanation": "grep搜索文件中匹配模式的行。"
  },
  {
    "id": "linux-009",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "chmod将script.sh设所有者rwx同组rx其他rx的数字是？",
    "options": [
      "A. 755",
      "B. 754",
      "C. 744",
      "D. 766"
    ],
    "answer": [
      "A"
    ],
    "explanation": "r=4,w=2,x=1。所有者7=4+2+1。"
  },
  {
    "id": "linux-010",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "显示磁盘分区使用情况的命令是？",
    "options": [
      "A. df",
      "B. du",
      "C. fdisk",
      "D. mount"
    ],
    "answer": [
      "A"
    ],
    "explanation": "df显示文件系统磁盘空间。"
  },
  {
    "id": "linux-011",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "tar创建gzip压缩归档的选项是？",
    "options": [
      "A. -cvf",
      "B. -czvf",
      "C. -cjvf",
      "D. -cJvf"
    ],
    "answer": [
      "B"
    ],
    "explanation": "-z=gzip -j=bzip2 -J=xz。"
  },
  {
    "id": "linux-012",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "查看所有运行进程的命令是？",
    "options": [
      "A. ps aux",
      "B. ls -la",
      "C. df -h",
      "D. which"
    ],
    "answer": [
      "A"
    ],
    "explanation": "ps aux显示所有用户所有进程。"
  },
  {
    "id": "linux-013",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "kill默认发送的信号是？",
    "options": [
      "A. SIGKILL 9",
      "B. SIGTERM 15",
      "C. SIGSTOP 19",
      "D. SIGHUP 1"
    ],
    "answer": [
      "B"
    ],
    "explanation": "默认SIGTERM(15)优雅终止。"
  },
  {
    "id": "linux-014",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "创建用户并自动创建主目录的命令是？",
    "options": [
      "A. useradd u",
      "B. useradd -m u",
      "C. adduser u -d",
      "D. usermod"
    ],
    "answer": [
      "B"
    ],
    "explanation": "useradd -m在/home下创建主目录。"
  },
  {
    "id": "linux-015",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "查看系统发行版信息的命令是？",
    "options": [
      "A. cat /etc/os-release",
      "B. /etc/passwd",
      "C. /proc/cpuinfo",
      "D. /etc/hosts"
    ],
    "answer": [
      "A"
    ],
    "explanation": "/etc/os-release含发行版标识。"
  },
  {
    "id": "linux-016",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "删除非空目录dir及其内容的命令是？",
    "options": [
      "A. rm dir",
      "B. rmdir dir",
      "C. rm -rf dir",
      "D. del dir"
    ],
    "answer": [
      "C"
    ],
    "explanation": "rm -rf递归强制删除。"
  },
  {
    "id": "linux-017",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "crontab 0 2 * * *表示什么？",
    "options": [
      "A. 每分钟",
      "B. 每天2:00",
      "C. 每周二凌晨",
      "D. 每小时第2分"
    ],
    "answer": [
      "B"
    ],
    "explanation": "分时日月周。0 2 *=每天2:00。"
  },
  {
    "id": "linux-018",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "将file1重命名为file2的命令是？",
    "options": [
      "A. mv file1 file2",
      "B. rename",
      "C. cp && rm",
      "D. cp"
    ],
    "answer": [
      "A"
    ],
    "explanation": "mv可移动可重命名。"
  },
  {
    "id": "linux-019",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "实时查看CPU/内存/进程的命令是？",
    "options": [
      "A. top",
      "B. df",
      "C. netstat",
      "D. free"
    ],
    "answer": [
      "A"
    ],
    "explanation": "top含CPU内存进程实时信息。"
  },
  {
    "id": "linux-020",
    "category": "linux",
    "type": "single",
    "difficulty": "easy",
    "question": "软链接和原文件的关系是？",
    "options": [
      "A. 删原文件后仍可用",
      "B. inode相同",
      "C. 删原文件后变断链",
      "D. 修改不影响原文件"
    ],
    "answer": [
      "C"
    ],
    "explanation": "软链接指向路径，原文件删除后变断链。"
  },
  {
    "id": "linux-021",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "yum安装httpd的命令是？",
    "options": [
      "A. yum install httpd",
      "B. yum remove",
      "C. yum update",
      "D. yum search"
    ],
    "answer": [
      "A"
    ],
    "explanation": "yum install安装软件包及依赖。 在Debian中apt install与之对应。"
  },
  {
    "id": "linux-022",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "find -exec删除找到文件的正确语法是？",
    "options": [
      "A. -exec rm {}",
      "B. -exec rm {} ;",
      "C. -exec rm {} ;",
      "D. | xargs rm"
    ],
    "answer": [
      "C"
    ],
    "explanation": "-exec以;结尾，{}代表找到文件。"
  },
  {
    "id": "linux-023",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "awk默认分隔符和最后一列变量是？",
    "options": [
      "A. 空格 $0",
      "B. 连续空白 $NF",
      "C. 冒号 $1",
      "D. 制表符 NR"
    ],
    "answer": [
      "B"
    ],
    "explanation": "默认连续空白分隔，$NF是最后一列。"
  },
  {
    "id": "linux-024",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "sed原地替换并备份为.bak的用法是？",
    "options": [
      "A. sed -i",
      "B. sed -i.bak",
      "C. sed > file",
      "D. sed -e"
    ],
    "answer": [
      "B"
    ],
    "explanation": "-i.bak原地修改并备份原文件。"
  },
  {
    "id": "linux-025",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "nice值范围及优先级影响是？",
    "options": [
      "A. -20~19越大越高",
      "B. -20~19越小越高",
      "C. 0~100越大越高",
      "D. 0~100越小越高"
    ],
    "answer": [
      "B"
    ],
    "explanation": "-20~19，越小（越负）优先级越高。"
  },
  {
    "id": "linux-026",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "netstat查看监听TCP及进程的选项是？",
    "options": [
      "A. -antp",
      "B. -aunp",
      "C. -s",
      "D. -rn"
    ],
    "answer": [
      "A"
    ],
    "explanation": "-a全部 -n数字 -tTCP -p进程。"
  },
  {
    "id": "linux-027",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "shell中$?变量含义是？",
    "options": [
      "A. 当前PID",
      "B. 退出状态码",
      "C. shell选项",
      "D. 后台PID"
    ],
    "answer": [
      "B"
    ],
    "explanation": "$?=$(上一个命令退出状态码)。"
  },
  {
    "id": "linux-028",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "硬链接和软链接的区别是？",
    "options": [
      "A. 硬链接可跨FS",
      "B. 软链接可跨FS和目录",
      "C. 硬链接可指向目录",
      "D. A和C对"
    ],
    "answer": [
      "B"
    ],
    "explanation": "软链接可跨FS、可指向目录。硬链接不能。"
  },
  {
    "id": "linux-029",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "systemctl设置服务开机自启的是？",
    "options": [
      "A. start",
      "B. enable",
      "C. daemon-reload",
      "D. status"
    ],
    "answer": [
      "B"
    ],
    "explanation": "enable创建符号链接实现自启。"
  },
  {
    "id": "linux-030",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "umask 022创建的文件和目录权限是？",
    "options": [
      "A. 644 755",
      "B. 755 644",
      "C. 666 777",
      "D. 622 733"
    ],
    "answer": [
      "A"
    ],
    "explanation": "文件666-022=644，目录777-022=755。"
  },
  {
    "id": "linux-031",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "记录内核日志的文件通常是？",
    "options": [
      "A. /var/log/messages",
      "B. /var/log/kern.log",
      "C. 以上都可能",
      "D. /var/log/boot.log"
    ],
    "answer": [
      "C"
    ],
    "explanation": "RHEL用messages，Debian用kern.log。"
  },
  {
    "id": "linux-032",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "iptables阻止192.168.1.0/24 SSH的规则是？",
    "options": [
      "A. INPUT ACCEPT",
      "B. INPUT DROP",
      "C. OUTPUT DROP",
      "D. FORWARD DROP"
    ],
    "answer": [
      "B"
    ],
    "explanation": "INPUT链+源地址+端口22+DROP。"
  },
  {
    "id": "linux-033",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "shell for循环遍历.txt文件的正确写法？",
    "options": [
      "A. for f in *.txt; do",
      "B. for f in ls *.txt",
      "C. for ((f=1;f<=*.txt))",
      "D. foreach f (*.txt)"
    ],
    "answer": [
      "A"
    ],
    "explanation": "for变量in列表;do命令;done标准语法。"
  },
  {
    "id": "linux-034",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "mount /dev/sdb1到/data需满足？",
    "options": [
      "A. /data存在为空",
      "B. /data已格式化",
      "C. 设备已格式化+目录存在",
      "D. 设备存在目录是文件"
    ],
    "answer": [
      "C"
    ],
    "explanation": "设备需文件系统，挂载点需存在。"
  },
  {
    "id": "linux-035",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "journalctl查看今日日志的命令是？",
    "options": [
      "A. --today",
      "B. -t today",
      "C. --since today",
      "D. -f"
    ],
    "answer": [
      "C"
    ],
    "explanation": "--since today查看今日00:00至今日志。"
  },
  {
    "id": "linux-036",
    "category": "linux",
    "type": "single",
    "difficulty": "medium",
    "question": "Debian/Ubuntu用apt安装nginx是？",
    "options": [
      "A. apt install",
      "B. apt-get install",
      "C. 以上均可",
      "D. apt add"
    ],
    "answer": [
      "C"
    ],
    "explanation": "apt和apt-get install均可安装。"
  },
  {
    "id": "linux-037",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "inode结构中不包含哪项信息？",
    "options": [
      "A. 文件大小",
      "B. 文件名",
      "C. 文件权限",
      "D. 时间戳"
    ],
    "answer": [
      "B"
    ],
    "explanation": "inode不含文件名，文件名存于dentry目录项。"
  },
  {
    "id": "linux-038",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "awk中BEGIN和END的执行时机是？",
    "options": [
      "A. BEGIN行前 END行后",
      "B. BEGIN行后 END行前",
      "C. 都在行后",
      "D. BEGIN行时 END末行"
    ],
    "answer": [
      "A"
    ],
    "explanation": "BEGIN先执行（初始化），END最后执行（汇总）。"
  },
  {
    "id": "linux-039",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "后台进程退出终端后继续运行的方法是？",
    "options": [
      "A. command &",
      "B. nohup command &",
      "C. command & disown",
      "D. B和C均可"
    ],
    "answer": [
      "D"
    ],
    "explanation": "nohup忽略SIGHUP，disown移出作业表。"
  },
  {
    "id": "linux-040",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "rsyslog排除mail和authpriv的info以上日志到messages的正确选择器？",
    "options": [
      "A. *.info;mail.none;authpriv.none",
      "B. *.info",
      "C. info.*",
      "D. *.info,mail.*"
    ],
    "answer": [
      "A"
    ],
    "explanation": "选择器格式：设施.级别;排除项分号分隔。"
  },
  {
    "id": "linux-041",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "shell数组arr=(a b c)获取元素和个数的正确语法？",
    "options": [
      "A. ${arr[*]} ${#arr[*]}",
      "B. $arr[*] $#arr[*]",
      "C. ${arr[@]} ${#arr}",
      "D. $arr ${arr[*]}"
    ],
    "answer": [
      "A"
    ],
    "explanation": "${arr[*]}展开元素，${#arr[*]}元素个数。"
  },
  {
    "id": "linux-042",
    "category": "linux",
    "type": "multiple",
    "difficulty": "hard",
    "question": "关于文件描述符哪些说法正确？",
    "options": [
      "A. stdin是0",
      "B. stdout是1",
      "C. stderr是2",
      "D. 所有FD指向终端"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "0=stdin 1=stdout 2=stderr。非所有FD指向终端。"
  },
  {
    "id": "linux-043",
    "category": "linux",
    "type": "multiple",
    "difficulty": "hard",
    "question": "哪些命令可查看网络连接状态？",
    "options": [
      "A. netstat -tuln",
      "B. ss -tuln",
      "C. ps aux",
      "D. lsof -i"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "ps aux看进程列表非网络连接。"
  },
  {
    "id": "linux-044",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "fdisk分区后partprobe的作用是？",
    "options": [
      "A. 格式化",
      "B. 重读分区表免重启",
      "C. 删除分区",
      "D. 备份分区表"
    ],
    "answer": [
      "B"
    ],
    "explanation": "partprobe通知内核重读分区表。"
  },
  {
    "id": "linux-045",
    "category": "linux",
    "type": "multiple",
    "difficulty": "hard",
    "question": "哪些chown用法正确？",
    "options": [
      "A. chown user file",
      "B. chown :group file",
      "C. chown user:group file",
      "D. chown -R user dir"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "全正确：改所有者/改所属组/同时改/递归改。"
  },
  {
    "id": "linux-046",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "shell函数中全局和局部变量的规则是？",
    "options": [
      "A. 默认局部",
      "B. 默认全局用local声明局部",
      "C. 函数内自动局部",
      "D. 需global声明全局"
    ],
    "answer": [
      "B"
    ],
    "explanation": "bash默认全局，local声明才为局部。"
  },
  {
    "id": "linux-047",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "du -sh *配合.[!.]*的目的是？",
    "options": [
      "A. 含隐藏文件的全部文件大小",
      "B. 仅总大小",
      "C. 子目录排序",
      "D. 文件行数"
    ],
    "answer": [
      "A"
    ],
    "explanation": "*非隐藏文件，.[!.]*隐藏文件（排除..）。"
  },
  {
    "id": "linux-048",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "/etc/fstab中defaults挂载选项包含？",
    "options": [
      "A. rw,suid,dev,exec,auto,nouser,async",
      "B. 含sync",
      "C. 含noatime",
      "D. 含relatime"
    ],
    "answer": [
      "A"
    ],
    "explanation": "defaults含rw,suid,dev,exec,auto,nouser,async。"
  },
  {
    "id": "linux-049",
    "category": "linux",
    "type": "single",
    "difficulty": "hard",
    "question": "systemd Type=forking表示什么？",
    "options": [
      "A. 不fork前台运行",
      "B. fork子进程父进程退出即就绪",
      "C. socket激活",
      "D. 等待进程退出"
    ],
    "answer": [
      "B"
    ],
    "explanation": "forking：主进程fork子进程后退出，systemd认为就绪。"
  },
  {
    "id": "linux-050",
    "category": "linux",
    "type": "multiple",
    "difficulty": "hard",
    "question": "crontab */15 9-17 * * 1-5的含义？",
    "options": [
      "A. 周一至周五",
      "B. 9-17点",
      "C. 每15分钟",
      "D. 仅9月和17月"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "工作日9:00-17:59每15分钟执行一次。"
  },
  {
    "id": "git-006",
    "category": "git",
    "type": "single",
    "difficulty": "easy",
    "question": "以下哪个命令可以创建一个新的分支但不切换到该分支？",
    "options": [
      "A. git branch feature-login",
      "B. git checkout -b feature-login",
      "C. git switch -c feature-login",
      "D. git branch -m feature-login"
    ],
    "answer": [
      "A"
    ],
    "explanation": "git branch <name> 创建新分支但停留在当前分支。B和C会创建并切换，D是重命名分支。"
  },
  {
    "id": "git-007",
    "category": "git",
    "type": "single",
    "difficulty": "easy",
    "question": "要将暂存区的修改撤销，使文件回到工作区的修改状态，应使用？",
    "options": [
      "A. git reset --soft HEAD",
      "B. git reset HEAD <file>",
      "C. git checkout -- <file>",
      "D. git restore --staged <file>"
    ],
    "answer": [
      "D"
    ],
    "explanation": "git restore --staged <file> 将文件从暂存区移回工作区(取消暂存)。"
  },
  {
    "id": "git-008",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "执行 git merge 时遇到冲突，下列哪项操作是正确的解决流程？",
    "options": [
      "A. 直接 git commit 会自动解决冲突",
      "B. 编辑冲突文件，git add，git commit",
      "C. 执行 git rebase --continue 即可跳过冲突",
      "D. 删除冲突文件后重新 git merge"
    ],
    "answer": [
      "B"
    ],
    "explanation": "解决冲突需要手动编辑文件消除冲突标记，然后用 git add 标记为已解决，最后 git commit 完成合并。"
  },
  {
    "id": "git-009",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "git stash 命令的主要用途是什么？",
    "options": [
      "A. 删除所有未跟踪的文件",
      "B. 暂时保存工作区和暂存区的修改，使工作目录恢复干净",
      "C. 将本地修改强制推送到远程",
      "D. 创建一个隐藏的分支"
    ],
    "answer": [
      "B"
    ],
    "explanation": "git stash 将当前未提交的修改(工作区和暂存区)保存到栈中，让工作目录恢复到上一次提交的状态。"
  },
  {
    "id": "git-010",
    "category": "git",
    "type": "single",
    "difficulty": "hard",
    "question": "关于 git reset 和 git revert 的区别，以下描述正确的是？",
    "options": [
      "A. git reset 会删除提交历史，git revert 会保留历史并创建新的反提交",
      "B. git reset 只能用于未推送的提交，git revert 只能用于已推送的提交",
      "C. git reset 和 git revert 效果完全一样",
      "D. git revert 会删除提交历史，git reset 会创建新的提交"
    ],
    "answer": [
      "A"
    ],
    "explanation": "git reset 移动 HEAD 指针并可能丢弃提交(改写历史)，而 git revert 通过创建新的反向提交来撤销更改，保留完整历史记录。"
  },
  {
    "id": "git-011",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "以下哪个命令用于查看当前分支相较于远程分支领先了多少个提交？",
    "options": [
      "A. git log --oneline origin/main..main",
      "B. git diff HEAD origin/main",
      "C. git status --short",
      "D. git branch -vv"
    ],
    "answer": [
      "A"
    ],
    "explanation": "git log A..B 显示在B中但不在A中的提交。git log origin/main..main 显示本地领先远程的提交。"
  },
  {
    "id": "git-012",
    "category": "git",
    "type": "single",
    "difficulty": "easy",
    "question": "要将本地仓库与远程仓库关联并推送，正确的命令序列是？",
    "options": [
      "A. git clone && git push",
      "B. git remote add origin <url> && git push -u origin main",
      "C. git init --remote <url>",
      "D. git connect <url> && git sync"
    ],
    "answer": [
      "B"
    ],
    "explanation": "先用 git remote add 添加远程仓库，再用 git push -u 设置上游分支并推送代码。"
  },
  {
    "id": "git-013",
    "category": "git",
    "type": "multiple",
    "difficulty": "medium",
    "question": "以下关于 git fetch 和 git pull 的说法，哪些是正确的？（多选）",
    "options": [
      "A. git fetch 会从远程仓库下载数据但不自动合并",
      "B. git pull = git fetch + git merge",
      "C. git fetch 会直接修改工作区的文件",
      "D. git pull 可能产生合并冲突"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "git fetch 仅下载远程数据到本地仓库，不修改工作区。git pull 拉取并尝试合并，因此可能产生冲突。"
  },
  {
    "id": "git-014",
    "category": "git",
    "type": "single",
    "difficulty": "hard",
    "question": "在 rebase 过程中遇到冲突，正确解决后应执行什么命令继续？",
    "options": [
      "A. git rebase --continue",
      "B. git rebase --skip",
      "C. git rebase --abort",
      "D. git commit --amend"
    ],
    "answer": [
      "A"
    ],
    "explanation": "冲突解决并 git add 后，执行 git rebase --continue 继续应用剩余的补丁。"
  },
  {
    "id": "git-015",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "git rebase 和 git merge 的核心区别是？",
    "options": [
      "A. rebase 会创建合并提交，merge 不会",
      "B. rebase 通过重写提交历史使分支呈线性，merge 保留分支分叉历史",
      "C. merge 不能处理冲突，rebase 可以自动解决",
      "D. rebase 只能用于本地分支，merge 只能用于远程分支"
    ],
    "answer": [
      "B"
    ],
    "explanation": "rebase 将提交在最新基底上重新应用，产生线性历史；merge 保留各分支的分叉和合并点。"
  },
  {
    "id": "git-016",
    "category": "git",
    "type": "single",
    "difficulty": "easy",
    "question": "要标记当前提交为 v1.0 版本，应使用？",
    "options": [
      "A. git tag v1.0",
      "B. git branch v1.0",
      "C. git version v1.0",
      "D. git release v1.0"
    ],
    "answer": [
      "A"
    ],
    "explanation": "git tag v1.0 为当前 HEAD 所在提交添加轻量标签。"
  },
  {
    "id": "git-017",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "要将标签推送到远程仓库，应使用？",
    "options": [
      "A. git push --tags",
      "B. git push origin tag v1.0",
      "C. 二者都可以",
      "D. 标签会自动推送"
    ],
    "answer": [
      "C"
    ],
    "explanation": "git push --tags 推送所有本地标签，git push origin <tag-name> 推送指定标签。"
  },
  {
    "id": "git-022",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "要查看两个提交之间的差异，应使用？",
    "options": [
      "A. git diff <commit1> <commit2>",
      "B. git log <commit1> <commit2>",
      "C. git status <commit1> <commit2>",
      "D. git show <commit1> <commit2>"
    ],
    "answer": [
      "A"
    ],
    "explanation": "git diff 显示两个提交之间的内容差异。"
  },
  {
    "id": "git-023",
    "category": "git",
    "type": "single",
    "difficulty": "easy",
    "question": "使用 SSH 方式连接 GitHub 时，首先需要？",
    "options": [
      "A. 在 GitHub 上创建仓库",
      "B. 生成 SSH 密钥对并将公钥添加到 GitHub 账户",
      "C. 安装 GitHub 桌面客户端",
      "D. 设置 Git 用户名和邮箱"
    ],
    "answer": [
      "B"
    ],
    "explanation": "SSH 连接需要先本地生成密钥对，再将公钥添加到 GitHub账户。"
  },
  {
    "id": "git-024",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "以下哪个命令可以交互式地选择需要暂存的代码块？",
    "options": [
      "A. git add -i",
      "B. git add -p",
      "C. git add --all",
      "D. git add --interactive --patch"
    ],
    "answer": [
      "B"
    ],
    "explanation": "git add -p 交互式地逐个检查文件中的变更块，选择是否将每个块暂存。"
  },
  {
    "id": "git-025",
    "category": "git",
    "type": "single",
    "difficulty": "hard",
    "question": "在 GitLab Flow 中，environment branches 的主要用途是？",
    "options": [
      "A. 管理不同环境(staging/production)的部署",
      "B. 管理多位开发者的个人分支",
      "C. 替代 feature branches",
      "D. 存储数据库迁移脚本"
    ],
    "answer": [
      "A"
    ],
    "explanation": "GitLab Flow 引入 environment branches，将代码变更从开发环境逐步提升到生产环境。"
  },
  {
    "id": "git-026",
    "category": "git",
    "type": "single",
    "difficulty": "hard",
    "question": "关于 detached HEAD 状态，以下描述正确的是？",
    "options": [
      "A. 在 detached HEAD 状态下无法查看任何文件",
      "B. 在 detached HEAD 状态下提交的修订版本在切换到其他分支后可能丢失",
      "C. detached HEAD 是 Git 的异常状态需要 git repair 修复",
      "D. detached HEAD 状态下 git push 和正常分支一样"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Detached HEAD 时 HEAD 直接指向某个提交而非分支。新提交不会被任何分支引用，可能被垃圾回收。"
  },
  {
    "id": "git-027",
    "category": "git",
    "type": "single",
    "difficulty": "medium",
    "question": "要移动或重命名一个已经跟踪的文件并让 Git 记录该操作，应使用？",
    "options": [
      "A. 直接 mv 文件后 git add 新文件 + git rm 旧文件",
      "B. git mv old_name new_name",
      "C. 以上两种方式都可以",
      "D. 直接重命名文件，Git 会自动检测"
    ],
    "answer": [
      "C"
    ],
    "explanation": "git mv 是便捷方式，效果等同于 mv + git rm old + git add new。两种方式等效。"
  },
  {
    "id": "git-028",
    "category": "git",
    "type": "single",
    "difficulty": "hard",
    "question": "以下关于 git revert -m 1 <merge-commit> 的描述正确的是？",
    "options": [
      "A. 撤销 merge commit 并保留第一个父分支的变更",
      "B. 将 merge commit 拆分为多个独立提交",
      "C. 删除 merge commit 中的所有变更",
      "D. 创建 merge commit 的副本"
    ],
    "answer": [
      "A"
    ],
    "explanation": "git revert 撤销 merge commit 时必须用 -m 指定主分支。revert -m 1 表示撤销 merge 引入的变更。"
  },
  {
    "id": "docker-006",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "Dockerfile 中 FROM 指令的作用是？",
    "options": [
      "A. 设置容器启动时的默认命令",
      "B. 指定基础镜像",
      "C. 复制文件到镜像中",
      "D. 声明容器监听的端口"
    ],
    "answer": [
      "B"
    ],
    "explanation": "FROM 指定构建镜像所基于的基础镜像，必须是 Dockerfile 中的第一个非注释指令。"
  },
  {
    "id": "docker-007",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "Dockerfile 中 CMD 和 ENTRYPOINT 的主要区别是？",
    "options": [
      "A. CMD 可以被 docker run 后的命令覆盖，ENTRYPOINT 不能被覆盖",
      "B. ENTRYPOINT 可以被覆盖，CMD 不能",
      "C. 二者功能完全相同",
      "D. CMD 必须在 ENTRYPOINT 之后声明"
    ],
    "answer": [
      "A"
    ],
    "explanation": "CMD 提供默认命令，可以被 docker run 时指定的命令覆盖。ENTRYPOINT 配置容器启动程序，默认不会被覆盖。"
  },
  {
    "id": "docker-008",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "Docker 镜像分层机制的核心原理是？",
    "options": [
      "A. 每个 RUN 指令创建一个新的可写层",
      "B. 每个指令创建一个只读层，层与层之间共享不变的内容，并利用写时复制(Copy-on-Write)机制",
      "C. 所有层合并为一个巨大文件",
      "D. 分层只在推送时发生，构建时不分层"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Docker 镜像是分层只读结构，每一层是 Dockerfile 指令的结果，运行时容器层可写。"
  },
  {
    "id": "docker-009",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "构建 Docker 镜像的命令是？",
    "options": [
      "A. docker create -t myapp .",
      "B. docker build -t myapp .",
      "C. docker compile -t myapp .",
      "D. docker make -t myapp ."
    ],
    "answer": [
      "B"
    ],
    "explanation": "docker build -t <tag> <path> 根据 Dockerfile 构建镜像。"
  },
  {
    "id": "docker-010",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "要在新容器中运行一个交互式 Bash shell，应使用？",
    "options": [
      "A. docker start -i ubuntu bash",
      "B. docker run -it ubuntu bash",
      "C. docker exec -it ubuntu bash",
      "D. docker attach ubuntu bash"
    ],
    "answer": [
      "B"
    ],
    "explanation": "docker run -it 创建并启动新容器，分配交互式终端。"
  },
  {
    "id": "docker-011",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "要在运行中的容器内执行命令，应使用？",
    "options": [
      "A. docker run container_name command",
      "B. docker exec -it container_name command",
      "C. docker attach container_name command",
      "D. docker enter container_name command"
    ],
    "answer": [
      "B"
    ],
    "explanation": "docker exec 在已运行的容器中执行新命令。"
  },
  {
    "id": "docker-012",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "docker commit 命令的主要用途是？",
    "options": [
      "A. 提交 Dockerfile 到镜像仓库",
      "B. 将容器的当前状态保存为一个新的镜像",
      "C. 将本地代码提交到 Git",
      "D. 提交容器日志到日志服务"
    ],
    "answer": [
      "B"
    ],
    "explanation": "docker commit 基于容器的当前状态创建新镜像。通常用于调试，生产应使用 Dockerfile。"
  },
  {
    "id": "docker-013",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "Docker 默认使用的网络模式是？",
    "options": [
      "A. host 模式",
      "B. bridge 模式",
      "C. none 模式",
      "D. overlay 模式"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Docker 默认网络模式是 bridge，容器通过虚拟网桥 docker0 与宿主机通信。"
  },
  {
    "id": "docker-014",
    "category": "docker",
    "type": "multiple",
    "difficulty": "hard",
    "question": "以下关于 Docker 网络模式的描述，哪些是正确的？（多选）",
    "options": [
      "A. host 模式下容器直接使用宿主机网络栈，性能最好",
      "B. none 模式表示容器完全隔离网络，只有 loopback 接口",
      "C. overlay 模式用于跨主机的容器通信，常配合 Swarm 使用",
      "D. bridge 模式中容器与宿主机共享 IP 地址"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "host 容器共享宿主机网络栈。none 无外部网络。overlay 用于多主机网络。"
  },
  {
    "id": "docker-015",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "要将宿主机的 /data 目录挂载到容器的 /app/data 目录，且不依赖 Docker 卷管理，应使用？",
    "options": [
      "A. docker run -v /data:/app/data myapp",
      "B. docker run --mount type=bind,src=/data,dst=/app/data myapp",
      "C. 以上两种方式都可以",
      "D. docker run --volume /data:/app/data myapp"
    ],
    "answer": [
      "C"
    ],
    "explanation": "-v 和 --mount 都可以创建 bind mount。"
  },
  {
    "id": "docker-016",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "Docker 数据卷(Volume)和绑定挂载(Bind Mount)的主要区别是？",
    "options": [
      "A. 数据卷由 Docker 管理，存储在 Docker 数据目录；绑定挂载映射宿主机任意路径",
      "B. 绑定挂载由 Docker 管理，数据卷映射宿主机任意路径",
      "C. 二者没有区别",
      "D. 数据卷只能在 Linux 上使用"
    ],
    "answer": [
      "A"
    ],
    "explanation": "数据卷由 Docker 管理，跨容器共享方便；绑定挂载直接映射宿主机文件系统任意路径。"
  },
  {
    "id": "docker-017",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "docker-compose.yml 文件中定义的服务之间默认通过什么方式通信？",
    "options": [
      "A. 宿主机 IP 加映射端口",
      "B. 服务名称作为主机名通过网络互相访问",
      "C. 共享文件系统",
      "D. 环境变量传递 IP 地址"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Docker Compose 为同一项目创建默认网络，每个服务可用服务名称作为主机名互相解析访问。"
  },
  {
    "id": "docker-018",
    "category": "docker",
    "type": "single",
    "difficulty": "hard",
    "question": "以下哪个 docker-compose.yml 片段正确设置了资源限制？",
    "options": [
      "A. services: app: resources: limits:cpus: 0.5 memory: 512M",
      "B. services: app: deploy: resources: limits: cpus: 0.5 memory: 512M",
      "C. services: app: limits: cpu: 0.5 mem: 512M",
      "D. services: app: cpus: 0.5 memory: 512M"
    ],
    "answer": [
      "B"
    ],
    "explanation": "在 Compose V3 中，资源限制在 deploy.resources.limits 下定义。"
  },
  {
    "id": "docker-019",
    "category": "docker",
    "type": "single",
    "difficulty": "hard",
    "question": "Docker 多阶段构建(Multi-stage Build)的主要优势是？",
    "options": [
      "A. 同时构建多个 Dockerfile",
      "B. 通过多个 FROM 语句分离构建环境和运行环境，减小最终镜像大小",
      "C. 加快 Dockerfile 的构建速度",
      "D. 允许多个容器同时构建"
    ],
    "answer": [
      "B"
    ],
    "explanation": "多阶段构建使用多个 FROM，将构建工具和依赖放在前面阶段，最终阶段仅复制需要的产物。"
  },
  {
    "id": "docker-020",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "要将本地镜像推送到 Docker Hub，应使用？",
    "options": [
      "A. docker push myimage:latest",
      "B. docker upload myimage:latest",
      "C. docker publish myimage:latest",
      "D. docker sync myimage:latest"
    ],
    "answer": [
      "A"
    ],
    "explanation": "docker push <image>:<tag> 将本地镜像推送到镜像仓库(默认为 Docker Hub)。"
  },
  {
    "id": "docker-021",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "要限制容器最多使用 1 个 CPU 和 512MB 内存，运行容器时应添加什么参数？",
    "options": [
      "A. docker run --cpus=1 --memory=512m myapp",
      "B. docker run --cpu=1 --mem=512m myapp",
      "C. docker run --limit-cpu=1 --limit-memory=512m myapp",
      "D. docker run -c 1 -m 512m myapp"
    ],
    "answer": [
      "A"
    ],
    "explanation": "--cpus 限制 CPU 核心数量，--memory 限制内存使用量。"
  },
  {
    "id": "docker-022",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "Docker 容器健康检查(Health Check)的配置方式是什么？",
    "options": [
      "A. 在 docker run 命令中使用 --health-cmd 参数",
      "B. 在 Dockerfile 中使用 HEALTHCHECK 指令",
      "C. 在 docker-compose.yml 的 healthcheck 字段中配置",
      "D. 以上全部都可以"
    ],
    "answer": [
      "D"
    ],
    "explanation": "健康检查可以通过 Dockerfile HEALTHCHECK 指令、docker run --health-cmd 参数，或 docker-compose.yml 的 healthcheck 字段配置。"
  },
  {
    "id": "docker-023",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "Docker 容器的日志驱动(log driver)默认是什么？",
    "options": [
      "A. syslog",
      "B. json-file",
      "C. journald",
      "D. fluentd"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Docker 默认日志驱动是 json-file，将 stdout/stderr 输出以 JSON 格式写入文件。"
  },
  {
    "id": "docker-024",
    "category": "docker",
    "type": "single",
    "difficulty": "hard",
    "question": "关于 Docker 镜像仓库(Registry)的描述，以下正确的是？",
    "options": [
      "A. Docker Hub 是唯一的镜像仓库",
      "B. 私有仓库可以通过 docker run registry 部署",
      "C. 镜像一旦推送就无法删除",
      "D. 私有仓库只能部署在 Docker Hub 上"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Docker 官方提供 registry 镜像可部署私有仓库：docker run -d -p 5000:5000 --name registry registry:2"
  },
  {
    "id": "docker-025",
    "category": "docker",
    "type": "single",
    "difficulty": "easy",
    "question": "Dockerfile 中 COPY 和 ADD 指令的区别是？",
    "options": [
      "A. COPY 功能更强大，支持自动解压和 URL 下载",
      "B. ADD 支持自动解压 tar 文件和从 URL 添加文件，COPY 仅复制本地文件",
      "C. COPY 和 ADD 功能完全相同",
      "D. ADD 只能添加目录，COPY 只能添加文件"
    ],
    "answer": [
      "B"
    ],
    "explanation": "ADD 支持从 URL 下载和自动解压 tar，官方推荐优先使用 COPY。"
  },
  {
    "id": "docker-026",
    "category": "docker",
    "type": "single",
    "difficulty": "medium",
    "question": "Docker 中 tmpfs 挂载(mount)的特点是？",
    "options": [
      "A. 数据持久化到宿主机磁盘",
      "B. 数据存储在内存中，容器停止后数据丢失",
      "C. 数据自动同步到远程存储",
      "D. 数据存储在容器的可写层"
    ],
    "answer": [
      "B"
    ],
    "explanation": "tmpfs 挂载将数据存储在宿主机内存，容器停止后数据自动清除，不持久化。"
  },
  {
    "id": "docker-027",
    "category": "docker",
    "type": "single",
    "difficulty": "hard",
    "question": "Docker 构建时，以下哪种情况会触发 BuildKit 缓存失效？",
    "options": [
      "A. 上一层 RUN 指令的输出与缓存不一致",
      "B. COPY 指令复制的文件内容发生变化",
      "C. ARG 变量的值发生变化",
      "D. 以上全部都会"
    ],
    "answer": [
      "D"
    ],
    "explanation": "BuildKit 缓存逐层检查：上层输出变化、COPY/ADD 文件内容变化、ARG 值变化等都会导致缓存失效。"
  },
  {
    "id": "k8s-006",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于kube-scheduler的调度策略，以下哪个说法是正确的？",
    "options": [
      "A. kube-scheduler默认使用随机调度算法将Pod分配到Node",
      "B. kube-scheduler通过预选(Predicates)和优选(Priorities)两个阶段为Pod选择最合适的Node",
      "C. kube-scheduler只能使用内置调度策略，不支持扩展",
      "D. kube-scheduler由kubelet直接管理，运行在每个Node上"
    ],
    "answer": [
      "B"
    ],
    "explanation": "kube-scheduler通过预选和优选两阶段调度Pod。预选过滤Node，优选打分选择最优Node。"
  },
  {
    "id": "k8s-007",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "简单",
    "question": "kubelet的主要职责是什么？",
    "options": [
      "A. 负责集群的整体资源管理和调度决策",
      "B. 管理Node上的Pod生命周期，确保Pod中的容器健康运行",
      "C. 为集群提供DNS服务发现功能",
      "D. 管理Ingress规则并配置反向代理"
    ],
    "answer": [
      "B"
    ],
    "explanation": "kubelet是每个Node上的主要代理，负责管理Pod生命周期、执行健康检查、上报Node和Pod状态到API Server。"
  },
  {
    "id": "k8s-008",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于Calico网络插件，以下哪个描述是正确的？",
    "options": [
      "A. Calico只能使用VXLAN封装，不支持纯路由模式",
      "B. Calico基于BGP协议实现纯三层网络，支持网络策略(NetworkPolicy)",
      "C. Calico不支持跨节点Pod通信",
      "D. Calico仅适用于小规模集群"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Calico基于BGP实现纯三层网络，支持NetworkPolicy、多种数据面，适用于大规模集群。"
  },
  {
    "id": "k8s-009",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "简单",
    "question": "Flannel网络插件实现Pod跨节点通信的主要机制是什么？",
    "options": [
      "A. 通过BGP协议直接路由三层流量",
      "B. 通过覆盖网络使用VXLAN或host-gw封装Pod流量",
      "C. 通过iptables规则创建NAT规则",
      "D. 通过为每个Pod分配公网IP"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Flannel通过覆盖网络实现跨Node Pod通信，使用VXLAN或host-gw模式。功能简单，不实现NetworkPolicy。"
  },
  {
    "id": "k8s-010",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于Cilium网络插件，以下哪个描述是错误的？",
    "options": [
      "A. Cilium依赖eBPF技术实现高性能网络和安全策略",
      "B. Cilium支持L3/L4/L7层网络策略",
      "C. Cilium必须搭配另一个CNI插件才能使用",
      "D. Cilium可实现透明的API流量可见性和加密"
    ],
    "answer": [
      "C"
    ],
    "explanation": "Cilium本身是完整CNI插件，不需搭配其他CNI。基于eBPF实现高性能网络、安全策略和可观测性。"
  },
  {
    "id": "k8s-011",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "简单",
    "question": "ClusterIP类型的Service具有什么特征？",
    "options": [
      "A. 分配一个仅在集群内部可访问的虚拟IP地址",
      "B. 在每个Node上绑定宿主机的固定端口",
      "C. 使用云服务商提供的负载均衡器暴露服务",
      "D. 为Service创建一个外部DNS记录"
    ],
    "answer": [
      "A"
    ],
    "explanation": "ClusterIP是默认Service类型，分配仅集群内部可达的虚拟IP。Pod通过此IP或DNS名称访问。"
  },
  {
    "id": "k8s-012",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "简单",
    "question": "NodePort类型的Service如何暴露服务？",
    "options": [
      "A. 仅在集群内部暴露，外部无法访问",
      "B. 在每个Node绑定固定端口(30000-32767)，外部可通过Node IP:端口访问",
      "C. 自动创建云负载均衡器并分配公网IP",
      "D. 通过Ingress Controller暴露服务"
    ],
    "answer": [
      "B"
    ],
    "explanation": "NodePort在每个Node绑定固定端口(30000-32767)，外部可通过任意Node IP+端口访问。"
  },
  {
    "id": "k8s-013",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于LoadBalancer类型的Service，以下哪个说法是正确的？",
    "options": [
      "A. 只能在公有云使用，不能在裸金属环境使用",
      "B. 自动调用云提供商负载均衡器API并分配公网IP",
      "C. 不创建ClusterIP，直接使用负载均衡器IP",
      "D. 不支持会话保持"
    ],
    "answer": [
      "B"
    ],
    "explanation": "LoadBalancer调用云提供商API自动创建外部负载均衡器并分配公网IP。在NodePort和ClusterIP之上构建。"
  },
  {
    "id": "k8s-014",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "Ingress和Ingress Controller的关系是什么？",
    "options": [
      "A. Ingress处理流量，Ingress Controller是其配置文件",
      "B. Ingress是路由规则API对象，Ingress Controller是实现规则的流量代理",
      "C. 两者是同一个组件的不同名称",
      "D. Ingress Controller定义规则，Ingress执行转发"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Ingress是API对象定义路由规则。Ingress Controller是实际流量代理，监听Ingress资源变化并配置反向代理。"
  },
  {
    "id": "k8s-015",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "简单",
    "question": "关于ConfigMap和Secret，以下哪个描述是正确的？",
    "options": [
      "A. ConfigMap存二进制数据，Secret存文本数据",
      "B. Secret以Base64编码存储，主要用于存储敏感信息",
      "C. ConfigMap默认加密，Secret明文存储",
      "D. 两者只能通过环境变量注入，不能挂载为文件"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Secret存敏感信息，Base64编码并支持KMS加密。ConfigMap存非敏感配置。都可通过环境变量或Volume挂载。"
  },
  {
    "id": "k8s-016",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于PV和PVC的绑定机制，以下哪个说法准确？",
    "options": [
      "A. PVC只能绑定到名称相同的PV",
      "B. PVC根据存储需求自动匹配Available状态的PV",
      "C. PV和PVC绑定是随机的",
      "D. 一个PV可同时被多个PVC绑定"
    ],
    "answer": [
      "B"
    ],
    "explanation": "PVC声明大小、访问模式、StorageClass条件，系统从Available PV中匹配一对一绑定。找不到则PVC保持Pending。"
  },
  {
    "id": "k8s-017",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "StatefulSet相比于Deployment的核心特征是什么？",
    "options": [
      "A. StatefulSet不支持滚动更新",
      "B. 为每个Pod提供稳定网络标识和有序存储",
      "C. Pod可随意调度到任何Node",
      "D. 不支持使用PVC"
    ],
    "answer": [
      "B"
    ],
    "explanation": "StatefulSet每个Pod有唯一序号和稳定主机名，创建删除按顺序，每个Pod可绑定独立PVC，支持有序滚动更新。"
  },
  {
    "id": "k8s-018",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "简单",
    "question": "DaemonSet的典型使用场景是什么？",
    "options": [
      "A. 运行指定副本数的无状态应用",
      "B. 在每个Node上运行一个Pod副本",
      "C. 管理有状态应用的有序部署",
      "D. 执行一次性批处理任务"
    ],
    "answer": [
      "B"
    ],
    "explanation": "DaemonSet确保每个Node运行一个Pod副本。场景：日志收集(Fluentd)、节点监控(Prometheus Node Exporter)、网络插件。"
  },
  {
    "id": "k8s-019",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "简单",
    "question": "Job和CronJob的主要区别是什么？",
    "options": [
      "A. Job是CronJob的旧版本名称",
      "B. Job做一次性任务，CronJob按时间表周期性触发Job",
      "C. Job可长时间运行，CronJob是短期任务",
      "D. Job只串行，CronJob支持并行"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Job管理一次性任务。CronJob基于Cron时间表周期性创建Job。CronJob底层也是创建Job。"
  },
  {
    "id": "k8s-020",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于HPA和VPA，以下哪个说法正确？",
    "options": [
      "A. HPA调副本数，VPA调资源请求/限制",
      "B. HPA和VPA可同时使用互不冲突",
      "C. VPA调副本数，HPA调资源规格",
      "D. 两者都只能基于CPU使用率"
    ],
    "answer": [
      "A"
    ],
    "explanation": "HPA水平自动伸缩调整副本数。VPA垂直自动伸缩调整Pod的requests和limits。同一目标不能同时使用HPA和VPA。"
  },
  {
    "id": "k8s-021",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "ResourceQuota和LimitRange的作用分别是什么？",
    "options": [
      "A. ResourceQuota限制Namespace累计上限，LimitRange设Pod默认/最小/最大限制",
      "B. ResourceQuota设Pod默认请求，LimitRange设Namespace总限制",
      "C. 两者功能完全相同",
      "D. ResourceQuota管存储配额，LimitRange管带宽"
    ],
    "answer": [
      "A"
    ],
    "explanation": "ResourceQuota限制Namespace累计上限。LimitRange提供Pod级默认值和限制。两者配合管理集群资源。"
  },
  {
    "id": "k8s-022",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于RBAC和ServiceAccount的关系，哪个正确？",
    "options": [
      "A. ServiceAccount不需绑定Role即可使用",
      "B. ServiceAccount绑定Role/ClusterRole获得权限，Pod指定ServiceAccount获得对应权限",
      "C. RBAC和ServiceAccount完全独立",
      "D. ServiceAccount只能绑定ClusterRole"
    ],
    "answer": [
      "B"
    ],
    "explanation": "ServiceAccount通过RoleBinding获得权限。Pod指定serviceAccountName后使用该凭据与API Server通信。"
  },
  {
    "id": "k8s-023",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "困难",
    "question": "etcd备份恢复的关键命令，哪个顺序正确？",
    "options": [
      "A. snapshot restore创建备份，snapshot save恢复",
      "B. snapshot save创建快照，snapshot restore恢复数据到新目录后启动etcd",
      "C. 直接复制/var/lib/etcd目录",
      "D. 备份需停止整个K8s集群"
    ],
    "answer": [
      "B"
    ],
    "explanation": "备份：etcdctl snapshot save。恢复：etcdctl snapshot restore到新数据目录后启动etcd。"
  },
  {
    "id": "k8s-024",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "简单",
    "question": "哪个kubectl命令查看Pod的标准输出日志？",
    "options": [
      "A. kubectl logs <pod-name>",
      "B. kubectl describe pod <pod-name>",
      "C. kubectl get pod <pod-name> -o yaml",
      "D. kubectl exec <pod-name> -- logs"
    ],
    "answer": [
      "A"
    ],
    "explanation": "kubectl logs获取Pod容器标准输出。多容器用-c指定。延伸：-f跟踪，--tail=N查看最近N行。"
  },
  {
    "id": "k8s-025",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "livenessProbe/readinessProbe/startupProbe的区别？",
    "options": [
      "A. 三者功能完全相同，仅检查间隔不同",
      "B. liveness判断存活(失败重启)，readiness判断就绪(失败移除端点)，startup用于慢启动",
      "C. readiness失败重启Pod，liveness失败不会重启",
      "D. startup检查启动完成失败删除Pod"
    ],
    "answer": [
      "B"
    ],
    "explanation": "liveness判断存活失败重启。readiness判断就绪失败移除端点。startup保护启动慢容器。"
  },
  {
    "id": "k8s-026",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "Deployment滚动更新中maxSurge和maxUnavailable含义？",
    "options": [
      "A. maxSurge允许超出期望副本数的Pod数，maxUnavailable允许不可用Pod数",
      "B. maxSurge是最大不可用Pod数，maxUnavailable是最大额外Pod数",
      "C. 两者只能用绝对数值",
      "D. maxSurge控制速度，maxUnavailable控制回滚"
    ],
    "answer": [
      "A"
    ],
    "explanation": "maxSurge超出期望副本数的最大Pod数(默认25%)。maxUnavailable允许不可用Pod数(默认25%)。"
  },
  {
    "id": "k8s-027",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "nodeAffinity和podAffinity的关系，哪个正确？",
    "options": [
      "A. nodeAffinity决定Pod不能调度到哪些Node",
      "B. podAffinity倾向与特定Pod调度到一起，podAntiAffinity倾向不调度到一起",
      "C. 亲和性只能设硬性要求",
      "D. nodeAffinity和podAffinity功能相同"
    ],
    "answer": [
      "B"
    ],
    "explanation": "podAffinity倾向与特定Pod同拓扑域，podAntiAffinity倾向不在一起(高可用分散)。支持required和preferred两种。"
  },
  {
    "id": "k8s-028",
    "category": "kubernetes",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于Taints和Tolerations，哪个描述是错误的？",
    "options": [
      "A. Taints标记Node排斥不匹配Pod，Tolerations标记Pod允许调度到有污点Node",
      "B. 一个Pod可容忍多个污点",
      "C. Taint效果：NoSchedule/PreferNoSchedule/NoExecute",
      "D. Master节点加Taint后任何Pod都无法调度上去"
    ],
    "answer": [
      "D"
    ],
    "explanation": "Pod声明对应Tolerations仍可调度到有污点Node。Master节点Taint不阻止有Tolerations的系统组件。"
  },
  {
    "id": "cicd-006",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "Jenkins声明式Pipeline和脚本式Pipeline的区别？",
    "options": [
      "A. 声明式用Groovy自由编写，脚本式用结构化语法",
      "B. 声明式用结构化DSL(pipeline/agent/stages/steps)，脚本式用Groovy自由编写",
      "C. 两者语法完全相同",
      "D. 脚本式不支持并行执行"
    ],
    "answer": [
      "B"
    ],
    "explanation": "声明式Pipeline使用结构化DSL语法易维护。脚本式是Groovy脚本用node块定义节点，灵活性高。"
  },
  {
    "id": "cicd-007",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "Jenkins脚本式Pipeline正确的节点和阶段写法？",
    "options": [
      "A. pipeline { agent any; stages { stage(Build) { steps { ... } } } }",
      "B. node { stage(Build) { sh ... } }",
      "C. job { stage(Build) { script { ... } } }",
      "D. workflow { node { stage(Build) { ... } } }"
    ],
    "answer": [
      "B"
    ],
    "explanation": "脚本式Pipeline用node块定义节点，stage定义阶段，内部用sh/echo等。选项A是声明式写法。"
  },
  {
    "id": "cicd-008",
    "category": "cicd",
    "type": "单选",
    "difficulty": "简单",
    "question": "GitLab CI中stages关键字的作用？",
    "options": [
      "A. 定义Pipeline所有Job的执行顺序和阶段划分",
      "B. 定义分支保护规则",
      "C. 定义Docker镜像构建阶段",
      "D. 定义测试环境部署步骤"
    ],
    "answer": [
      "A"
    ],
    "explanation": "stages定义Pipeline阶段执行顺序。同阶段Jobs并行，全部成功后才进入下一阶段。"
  },
  {
    "id": "cicd-009",
    "category": "cicd",
    "type": "单选",
    "difficulty": "简单",
    "question": "哪个GitLab CI配置表示仅在main分支执行该Job？",
    "options": [
      "A. only: - main",
      "B. branch: main",
      "C. when: main",
      "D. if:  == main"
    ],
    "answer": [
      "A"
    ],
    "explanation": "only: - main表示仅main分支触发。GitLab 12.3后推荐用rules代替。"
  },
  {
    "id": "cicd-010",
    "category": "cicd",
    "type": "单选",
    "difficulty": "简单",
    "question": "GitHub Actions中workflow/job/step的关系？",
    "options": [
      "A. workflow含多个step，step含多个job",
      "B. workflow含一个或多个job，每个job含一个或多个step",
      "C. job含多个workflow，workflow含多个step",
      "D. step含多个job，job含多个workflow"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Workflow含一个或多个job，job含一个或多个step。jobs默认并行(needs控制依赖)。"
  },
  {
    "id": "cicd-011",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "如何让GitHub Actions中Job B在Job A成功后再执行？",
    "options": [
      "A. 将两Job放同一个step",
      "B. 在Job B中用needs: [job_a]指定依赖",
      "C. 在Job A中用runs-on: [job_b]",
      "D. 在Workflow级别设置dependson"
    ],
    "answer": [
      "B"
    ],
    "explanation": "needs定义Job间依赖。Job B中needs: [job_a]表示等待Job A成功。支持多依赖。"
  },
  {
    "id": "cicd-012",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于ArgoCD的核心功能，哪个最准确？",
    "options": [
      "A. ArgoCD是CI工具，用于构建测试",
      "B. ArgoCD是GitOps持续交付工具，自动同步集群状态与Git仓库一致",
      "C. ArgoCD是监控工具",
      "D. ArgoCD是日志聚合系统"
    ],
    "answer": [
      "B"
    ],
    "explanation": "ArgoCD以Git仓库为唯一可信源，持续监控集群实际状态与期望状态对比，出现偏差时自动同步。"
  },
  {
    "id": "cicd-013",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "Argo Workflows和ArgoCD的主要区别？",
    "options": [
      "A. 两者功能完全相同",
      "B. Argo Workflows是K8s工作流引擎，ArgoCD是GitOps交付工具",
      "C. Argo Workflows只支持DAG",
      "D. ArgoCD运行在Argo Workflows之上"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Argo Workflows是云原生工作流引擎(DAG/Step)，用于CI Pipeline/数据处理。ArgoCD是GitOps交付工具。"
  },
  {
    "id": "cicd-014",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "蓝绿部署的核心思想是什么？",
    "options": [
      "A. 新版本部署到部分用户逐步增加流量",
      "B. 同时运行两套完整环境，切换流量实现零停机发布",
      "C. 删除旧版本直接部署新版本",
      "D. 不同Region同时部署新旧版本"
    ],
    "answer": [
      "B"
    ],
    "explanation": "蓝绿部署维护两套完整环境，新环境验证后一键切换流量，出问题立即切回。零停机瞬时切换快速回滚。"
  },
  {
    "id": "cicd-015",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "金丝雀发布的核心特征是什么？",
    "options": [
      "A. 直接将新版本100%替换旧版本",
      "B. 新版本部署到少量用户(如5%)，观察无问题逐步扩大到全量",
      "C. 同时运行多版本并行环境",
      "D. 只在测试环境验证"
    ],
    "answer": [
      "B"
    ],
    "explanation": "金丝雀发布渐进式策略：先少量实例部署新版本，监控错误率/延迟，正常则逐步增加流量。"
  },
  {
    "id": "cicd-016",
    "category": "cicd",
    "type": "单选",
    "difficulty": "简单",
    "question": "SonarQube在CI/CD流水线中的主要作用？",
    "options": [
      "A. 编译打包源代码",
      "B. 执行单元测试并生成报告",
      "C. 执行代码质量分析，检测Bug/漏洞/代码异味",
      "D. 管理Docker镜像构建"
    ],
    "answer": [
      "C"
    ],
    "explanation": "SonarQube担任质量门禁角色，通过静态分析检测Bug、安全漏洞、代码异味、技术债务。"
  },
  {
    "id": "cicd-017",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "Harbor和Artifactory在制品管理方面的主要区别？",
    "options": [
      "A. Artifactory管Docker镜像，Harbor管通用制品",
      "B. Harbor专精容器镜像/Helm Chart，Artifactory是综合制品管理平台",
      "C. 两者功能完全相同",
      "D. Harbor不支持漏洞扫描"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Harbor(CNCF毕业项目)专注容器镜像和Helm Chart。Artifactory是通用平台支持Maven/npm/PyPI/Docker等。"
  },
  {
    "id": "cicd-018",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "Harbor的复制(Replication)功能的作用？",
    "options": [
      "A. 自动分发镜像到多个Harbor实例，实现高可用和加速拉取",
      "B. 同一实例中镜像多份副本",
      "C. 从Docker Hub同步到Harbor",
      "D. 自动删除旧版本镜像"
    ],
    "answer": [
      "A"
    ],
    "explanation": "复制功能支持镜像自动分发到多个实例。A中心推送自动同步到B中心，B中心K8s从本地Harbor拉取加速。"
  },
  {
    "id": "cicd-019",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "GitOps理念的核心原则是什么？",
    "options": [
      "A. Git仓库是唯一可信源，自动同步到目标环境",
      "B. 用Git运行CI/CD",
      "C. Git只存代码，基础设施手动管理",
      "D. GitOps只适用于Kubernetes"
    ],
    "answer": [
      "A"
    ],
    "explanation": "GitOps核心：Git仓库为唯一可信源。变更通过Git PR发起，合并后GitOps Operator自动同步。手动修改被自愈纠正。"
  },
  {
    "id": "cicd-020",
    "category": "cicd",
    "type": "单选",
    "difficulty": "简单",
    "question": "dev/staging/prod环境的典型配置区别？",
    "options": [
      "A. dev用真实数据，staging用模拟，prod用测试",
      "B. dev低资源频繁变更，staging接近生产验证，prod高可用严格权限",
      "C. dev/staging不需监控",
      "D. 三个环境完全相同"
    ],
    "answer": [
      "B"
    ],
    "explanation": "dev开发调试低资源频繁变更。staging接近生产用于集成验收。prod处理真实流量高可用严格权限。"
  },
  {
    "id": "cicd-021",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "关于Trivy安全扫描工具，哪个说法正确？",
    "options": [
      "A. 只能扫描容器镜像",
      "B. 开源全能工具，可扫描镜像/文件系统/Git仓库/K8s清单",
      "C. 只能扫描OS级漏洞",
      "D. 商业产品社区版有限"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Trivy支持镜像/文件系统/Git仓库/K8s清单/Helm Chart扫描。扫描OS和语言依赖库漏洞。开源免费。"
  },
  {
    "id": "cicd-022",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "Snyk在CI/CD流水线中的典型作用？",
    "options": [
      "A. 自动发现开源组件漏洞并提供修复建议",
      "B. 性能分析",
      "C. 自动生成API文档",
      "D. 管理Docker镜像构建"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Snyk扫描依赖清单/Docker镜像/IaC配置，匹配已知CVE漏洞，提供升级版本或自动创建PR修复。"
  },
  {
    "id": "cicd-023",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "CI/CD构建缓存优化的最佳实践？",
    "options": [
      "A. 每次从零开始确保纯净",
      "B. 利用包管理器和Docker层缓存，不常变依赖放缓存层加速构建",
      "C. 用最高性能机器不需缓存",
      "D. 缓存只对测试阶段有效"
    ],
    "answer": [
      "B"
    ],
    "explanation": "缓存优化：包缓存避免重复下载，Docker层缓存优化分层，缓存失效策略基于lock文件哈希。"
  },
  {
    "id": "cicd-024",
    "category": "cicd",
    "type": "单选",
    "difficulty": "困难",
    "question": "GitHub Actions中复用工作流的正确方式？",
    "options": [
      "A. 用actions/checkout重复步骤",
      "B. 用workflow_call触发器，jobs中通过uses引用其他工作流",
      "C. 手动复制到每个仓库",
      "D. 用Docker Compose编排工作流"
    ],
    "answer": [
      "B"
    ],
    "explanation": "可复用工作流通过workflow_call被调用。uses: owner/repo/.github/workflows/file.yml@ref。支持inputs/secrets。"
  },
  {
    "id": "cicd-025",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "语义化版本(SemVer)的正确格式？",
    "options": [
      "A. vYYYY.MM.DD",
      "B. MAJOR.MINOR.PATCH(如2.1.3)",
      "C. rX.Y",
      "D. build-X.Y.Z"
    ],
    "answer": [
      "B"
    ],
    "explanation": "SemVer：MAJOR不兼容变更，MINOR新增功能，PATCH修复Bug。CI/CD中PATCH自动递增。"
  },
  {
    "id": "cicd-026",
    "category": "cicd",
    "type": "单选",
    "difficulty": "困难",
    "question": "Jenkins Pipeline中如何根据Git分支自动切换部署环境？",
    "options": [
      "A. 手动为各分支配不同Job",
      "B. 用when + BRANCH_NAME条件判断，根据分支设不同环境变量",
      "C. 全局设置固定目标环境",
      "D. 用Docker Compose profile"
    ],
    "answer": [
      "B"
    ],
    "explanation": "声明式Pipeline用when + branch条件判断分支，配合environment指令设不同变量。实现Single Pipeline Multi-Environment。"
  },
  {
    "id": "cicd-027",
    "category": "cicd",
    "type": "单选",
    "difficulty": "中等",
    "question": "GitLab CI中artifacts关键字的作用？",
    "options": [
      "A. 定义Job间依赖关系",
      "B. 保存Job产生文件并传给后续Job或供下载",
      "C. 定义Docker镜像构建参数",
      "D. 控制Job并发数"
    ],
    "answer": [
      "B"
    ],
    "explanation": "artifacts保存Job产生的文件(JAR包/测试报告)并自动传给后续阶段Job。可设置expire_in控制保留时间。"
  },
  {
    "id": "iac-006",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "在Terraform工作流中，哪个命令用于初始化工作目录、下载provider插件和module？",
    "options": [
      "A. terraform plan",
      "B. terraform init",
      "C. terraform apply",
      "D. terraform validate"
    ],
    "answer": [
      "B"
    ],
    "explanation": "terraform init 是Terraform工作流的第一个命令，负责初始化工作目录、下载所需的provider插件和后端配置，以及获取module依赖。"
  },
  {
    "id": "iac-007",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Terraform中，哪个命令可以在不实际创建资源的情况下预览将要执行的变更？",
    "options": [
      "A. terraform plan",
      "B. terraform apply",
      "C. terraform fmt",
      "D. terraform destroy"
    ],
    "answer": [
      "A"
    ],
    "explanation": "terraform plan 会读取当前状态和配置文件，生成一个执行计划，显示将要创建、修改或删除的资源，而不会实际执行任何变更。"
  },
  {
    "id": "iac-008",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "Terraform state文件的主要作用是什么？",
    "options": [
      "A. 存储provider的认证信息",
      "B. 记录已管理资源的元数据和映射关系",
      "C. 保存terraform二进制文件",
      "D. 存储用户的SSH密钥"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Terraform state（terraform.tfstate）记录了已管理资源与实际基础设施的映射关系，包括资源的属性、依赖关系和元数据，是Terraform知道哪些资源已被管理的核心机制。"
  },
  {
    "id": "iac-009",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "在Terraform中，要从根模块中引用子模块的输出值，应该使用什么语法？",
    "options": [
      "A. module.module_name.output_name",
      "B. var.module_name.output_name",
      "C. resource.module_name.output_name",
      "D. data.module_name.output_name"
    ],
    "answer": [
      "A"
    ],
    "explanation": "在Terraform中，子模块通过output块暴露的输出值，可以通过 module.<MODULE_NAME>.<OUTPUT_NAME> 语法在根模块中引用。"
  },
  {
    "id": "iac-010",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Terraform中，variable块中的type参数用于什么目的？",
    "options": [
      "A. 指定变量的默认值",
      "B. 定义变量的数据类型约束",
      "C. 设置变量的描述信息",
      "D. 控制变量的可见性"
    ],
    "answer": [
      "B"
    ],
    "explanation": "type 参数用于定义变量的数据类型约束，如 string、number、bool、list、map、object、set 等，确保传入的变量值符合预期类型。"
  },
  {
    "id": "iac-011",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "Terraform provider的作用是什么？",
    "options": [
      "A. 提供Terraform CLI的扩展功能",
      "B. 作为与特定基础设施平台（如AWS、Azure）交互的插件",
      "C. 管理Terraform state文件的存储",
      "D. 生成基础设施的架构图"
    ],
    "answer": [
      "B"
    ],
    "explanation": "Provider是Terraform的插件机制，负责与特定基础设施平台API交互，定义可用的资源和数据源。每个provider封装了对特定平台（如AWS、Azure、GCP）的管理能力。"
  },
  {
    "id": "iac-012",
    "category": "iac",
    "type": "single",
    "difficulty": "hard",
    "question": "Terraform中data source（数据源）与resource（资源）的核心区别是什么？",
    "options": [
      "A. data source只能读取数据，resource可以创建/修改/删除资源",
      "B. data source比resource执行速度更快",
      "C. data source不需要provider支持",
      "D. data source只能在module中使用"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Data source用于查询外部基础设施或读取已存在的资源信息，它是只读的；而resource用于声明式地管理基础设施资源的完整生命周期（创建、读取、更新、删除）。"
  },
  {
    "id": "iac-013",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "Terraform Workspace的用途是什么？",
    "options": [
      "A. 管理不同环境（开发/测试/生产）的独立state",
      "B. 允许多人同时编辑同一个配置文件",
      "C. 作为Terraform代码的版本控制工具",
      "D. 管理不同provider的版本"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Workspace允许在同一个工作目录下维护多个独立的state文件，常用于区分开发、测试、生产等不同环境的部署状态。每个workspace有自己的state。"
  },
  {
    "id": "iac-014",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Terraform中用于自动格式化配置文件的命令是？",
    "options": [
      "A. terraform validate",
      "B. terraform fmt",
      "C. terraform style",
      "D. terraform lint"
    ],
    "answer": [
      "B"
    ],
    "explanation": "terraform fmt 会自动将Terraform配置文件（.tf文件）格式化为规范样式，包括缩进对齐、空格调整等，提高代码可读性和一致性。"
  },
  {
    "id": "iac-015",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Terraform validate命令的主要功能是？",
    "options": [
      "A. 检查配置文件的语法和内部一致性",
      "B. 验证基础设施的实际状态",
      "C. 测试terraform provider的连通性",
      "D. 检查state文件的完整性"
    ],
    "answer": [
      "A"
    ],
    "explanation": "terraform validate 检查配置文件的语法正确性和内部引用一致性（如变量引用、资源依赖等），确保配置在语义上是有效的，但不会与远程API交互。"
  },
  {
    "id": "iac-016",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "在Terraform中，如果只想销毁特定资源而非全部资源，应该使用哪个参数？",
    "options": [
      "A. terraform destroy --target=resource_type.name",
      "B. terraform destroy -target=resource_type.name",
      "C. terraform apply -destroy -target=resource_type.name",
      "D. terraform delete resource_type.name"
    ],
    "answer": [
      "C"
    ],
    "explanation": "使用 terraform apply -destroy -target=resource_type.name 可以仅销毁指定的资源，而 terraform destroy 默认会销毁state中管理的所有资源。"
  },
  {
    "id": "iac-017",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Ansible中，inventory文件的主要作用是什么？",
    "options": [
      "A. 定义需要管理的远程主机列表和分组信息",
      "B. 存储Ansible的安装配置",
      "C. 定义playbook的执行顺序",
      "D. 管理Ansible模块的版本"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Inventory文件（如/etc/ansible/hosts或自定义文件）定义了Ansible管理的所有远程主机及其分组信息，还可以为主机指定变量。"
  },
  {
    "id": "iac-018",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Ansible Playbook使用什么格式编写？",
    "options": [
      "A. JSON",
      "B. XML",
      "C. YAML",
      "D. TOML"
    ],
    "answer": [
      "C"
    ],
    "explanation": "Ansible Playbook使用YAML（YAML Ain't Markup Language）格式编写，这种格式以缩进为基础，易读易写，是人类友好的数据序列化标准。"
  },
  {
    "id": "iac-019",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "在Ansible中，handler和普通task的关键区别是什么？",
    "options": [
      "A. handler只能通过notify触发器执行，不会在playbook执行时自动运行",
      "B. handler执行速度比普通task更快",
      "C. handler只能在roles中使用",
      "D. handler不需要指定模块"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Handler是一种特殊的task，它不会在playbook执行时自动运行，而是通过其他task的notify指令触发。通常用于在配置变更后执行重启服务等操作。"
  },
  {
    "id": "iac-020",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "在Ansible的Jinja2模板文件中，引用变量 {{ ansible_facts[\"os_family\"] }} 的作用是什么？",
    "options": [
      "A. 获取目标主机的操作系统家族类型（如RedHat、Debian）",
      "B. 设置ansible的运行模式",
      "C. 定义模板的输出格式",
      "D. 获取ansible的版本号"
    ],
    "answer": [
      "A"
    ],
    "explanation": "{{ ansible_facts[\"os_family\"] }} 通过Ansible Facts获取远程主机的操作系统家族类型，可用于根据不同系统执行差异化配置，例如区分RedHat系和Debian系的包管理方式。"
  },
  {
    "id": "iac-021",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "Ansible Role的目录结构中，tasks/main.yml文件存放的是什么？",
    "options": [
      "A. 角色的主要任务列表",
      "B. 角色的变量定义",
      "C. 角色的依赖关系",
      "D. 角色的默认配置"
    ],
    "answer": [
      "A"
    ],
    "explanation": "在Ansible Role的标准目录结构中，tasks/main.yml是角色执行的入口文件，定义了该角色要执行的所有任务。其他目录如vars/存放变量，defaults/存放默认值，handlers/存放处理器。"
  },
  {
    "id": "iac-022",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "ansible-galaxy命令的主要用途是什么？",
    "options": [
      "A. 管理Ansible的Galaxy角色仓库，安装/创建/发布角色",
      "B. 连接远程主机的管理接口",
      "C. 实时监控Ansible任务的执行状态",
      "D. 管理Ansible的配置文件"
    ],
    "answer": [
      "A"
    ],
    "explanation": "ansible-galaxy 是Ansible的角色管理工具，允许用户从Ansible Galaxy（社区角色仓库）安装角色、创建角色骨架、管理角色依赖以及发布自己的角色。"
  },
  {
    "id": "iac-023",
    "category": "iac",
    "type": "single",
    "difficulty": "hard",
    "question": "使用ansible-vault加密敏感数据后，在运行playbook时如何提供解密密码？",
    "options": [
      "A. 使用 --ask-vault-pass 或 --vault-password-file 参数",
      "B. 自动使用当前用户的SSH密钥解密",
      "C. 在inventory文件中指定密码",
      "D. 密码必须硬编码在playbook中"
    ],
    "answer": [
      "A"
    ],
    "explanation": "ansible-vault加密的文件可以通过 --ask-vault-pass（交互式输入密码）或 --vault-password-file（指定密码文件）参数在运行playbook时解密，避免敏感信息明文存储。"
  },
  {
    "id": "iac-024",
    "category": "iac",
    "type": "multiple",
    "difficulty": "hard",
    "question": "以下哪些是Ansible中file模块支持的文件操作状态（state参数值）？",
    "options": [
      "A. directory",
      "B. link",
      "C. hard",
      "D. touch",
      "E. absent"
    ],
    "answer": [
      "A, B, D, E"
    ],
    "explanation": "file模块的state参数支持 directory（创建目录）、link（创建软链接）、hard（创建硬链接）——但注意hard也是支持的、touch（类似touch命令创建空文件）、absent（删除文件或目录）等。C选项hard是支持的，但题目问的是哪些是支持的，A/B/D/E均正确。"
  },
  {
    "id": "iac-025",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "在Ansible中，template模块与copy模块的核心区别是什么？",
    "options": [
      "A. template模块支持Jinja2模板渲染，copy模块直接复制文件",
      "B. copy模块支持Jinja2模板渲染，template模块直接复制文件",
      "C. template模块只能复制二进制文件",
      "D. 两者功能完全相同"
    ],
    "answer": [
      "A"
    ],
    "explanation": "template模块在复制文件之前会使用Jinja2引擎对源文件进行模板渲染（处理{{ }}变量替换等），而copy模块直接原样复制文件，不做任何模板处理。"
  },
  {
    "id": "iac-026",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "Pulumi与Terraform相比，最显著的区别是什么？",
    "options": [
      "A. Pulumi允许使用通用编程语言（如TypeScript、Python、Go）编写基础设施代码",
      "B. Pulumi不支持公有云provider",
      "C. Pulumi只支持AWS一个云平台",
      "D. Pulumi使用HCL（HashiCorp Configuration Language）编写配置"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Pulumi的核心特点是可以使用通用编程语言（TypeScript、Python、Go、C#等）来定义和管理基础设施，而非像Terraform那样使用领域特定语言HCL。这使得开发者可以利用编程语言的特性（循环、函数、类、条件语句等）。"
  },
  {
    "id": "iac-027",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "Packer的主要用途是什么？",
    "options": [
      "A. 创建一致的基础镜像（如AMI、VM模板、Docker镜像）",
      "B. 管理容器编排",
      "C. 配置负载均衡",
      "D. 监控基础设施状态"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Packer是HashiCorp推出的用于创建一致的基础机器镜像的工具，支持多种构建器（AWS AMI、Azure VHD、VMware、Docker等），通过自动化流程生成可重复使用的黄金镜像。"
  },
  {
    "id": "iac-028",
    "category": "iac",
    "type": "single",
    "difficulty": "easy",
    "question": "Vagrant的主要使用场景是什么？",
    "options": [
      "A. 本地开发和测试环境的快速搭建与配置管理",
      "B. 生产环境的容器编排",
      "C. 云端基础设施的自动化管理",
      "D. 监控和日志收集"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Vagrant是一个用于构建和管理虚拟化开发环境的工具，通过Vagrantfile定义环境配置，可以快速创建、配置和共享可重复的本地开发环境，常与VirtualBox、VMware等配合使用。"
  },
  {
    "id": "iac-029",
    "category": "iac",
    "type": "single",
    "difficulty": "medium",
    "question": "不可变基础设施（Immutable Infrastructure）的核心原则是什么？",
    "options": [
      "A. 部署后绝不修改基础设施组件，而是替换为新的实例",
      "B. 基础设施一旦创建就永久不变",
      "C. 只允许手动修改基础设施",
      "D. 所有基础设施都必须使用同一操作系统版本"
    ],
    "answer": [
      "A"
    ],
    "explanation": "不可变基础设施的核心思想是一旦部署了基础设施组件（如服务器、容器），就不再对其进行修改或打补丁。当需要变更时，直接构建新的镜像并替换旧的实例，确保环境的一致性和可重复性。"
  },
  {
    "id": "iac-030",
    "category": "iac",
    "type": "single",
    "difficulty": "hard",
    "question": "从可变基础设施迁移到不可变基础设施模式时，以下哪项是必须解决的关键挑战？",
    "options": [
      "A. 状态管理：如何处理有状态应用的数据持久化和会话保持",
      "B. 减少服务器数量",
      "C. 降低云服务费用",
      "D. 增加运维团队人数"
    ],
    "answer": [
      "A"
    ],
    "explanation": "迁移到不可变基础设施模式时，有状态应用的状态管理是最关键挑战之一。因为实例会被频繁替换，需要将状态（数据库、用户会话、文件存储等）外移到独立的有状态服务中，如使用外部数据库、对象存储、Redis等。"
  },
  {
    "id": "mon-006",
    "category": "monitoring",
    "type": "single",
    "difficulty": "easy",
    "question": "Prometheus中，Counter类型的指标适合用于以下哪种场景？",
    "options": [
      "A. 累计的请求总数、错误总数等只增不减的计数",
      "B. 当前的内存使用量",
      "C. 请求耗时的分布统计",
      "D. CPU温度等可升可降的测量值"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Counter是只能递增（或在重启时重置为0）的指标类型，适合记录累计的请求数、错误数、任务完成数等只会增加的数量。对于可升可降的值应使用Gauge。"
  },
  {
    "id": "mon-007",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "Prometheus的Histogram和Summary指标类型的共同点是什么？",
    "options": [
      "A. 都用于计算和暴露分位数（quantiles）",
      "B. 都不支持聚合操作",
      "C. 都不需要配置bucket或quantile",
      "D. 都只能用于整数类型的数据"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Histogram和Summary都用于观测数据分布（如请求延迟），并能计算分位数。区别在于：Histogram在服务端通过bucket计算分位数，Summary在客户端预计算并暴露分位数。"
  },
  {
    "id": "mon-008",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "以下PromQL查询的含义是什么？ rate(http_requests_total{status=\"500\"}[5m])",
    "options": [
      "A. 过去5分钟内HTTP 500错误的每秒平均增长率",
      "B. 过去5分钟内HTTP 500错误的总数",
      "C. 当前HTTP 500错误的瞬时值",
      "D. 所有HTTP请求中500错误的比例"
    ],
    "answer": [
      "A"
    ],
    "explanation": "rate()函数计算Counter类型指标在指定时间窗口内的每秒平均增长率。rate(http_requests_total{status=\"500\"}[5m]) 表示过去5分钟内，状态码为500的HTTP请求的每秒平均增长速率。"
  },
  {
    "id": "mon-009",
    "category": "monitoring",
    "type": "single",
    "difficulty": "hard",
    "question": "在Prometheus Alertmanager中，group_wait和group_interval参数分别控制什么？",
    "options": [
      "A. group_wait：首次告警发送前的等待时间；group_interval：同类告警合并后的发送间隔",
      "B. group_wait：告警恢复后的沉默期；group_interval：告警重试间隔",
      "C. group_wait：不同告警间的发送间隔；group_interval：分组大小限制",
      "D. group_wait：告警升级的等待时间；group_interval：通知渠道切换间隔"
    ],
    "answer": [
      "A"
    ],
    "explanation": "group_wait定义在第一次发送告警前等待多长时间以收集更多同组告警进行合并；group_interval定义告警发送后，下次同类告警再次发送的最小间隔时间，用于防止告警风暴。"
  },
  {
    "id": "mon-010",
    "category": "monitoring",
    "type": "single",
    "difficulty": "easy",
    "question": "Prometheus中，exporter的作用是什么？",
    "options": [
      "A. 将第三方系统的指标转换为Prometheus可以抓取的格式",
      "B. 将Prometheus指标导出到外部存储",
      "C. 负责发送告警通知",
      "D. 管理Prometheus的配置文件"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Exporter是一个中间组件，负责从第三方系统（如数据库、操作系统、消息队列等）收集指标数据，并将其转换为Prometheus可以抓取的格式（通常通过/metrics HTTP端点暴露）。"
  },
  {
    "id": "mon-011",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "在Kubernetes环境中，Prometheus Operator的ServiceMonitor自定义资源用于什么目的？",
    "options": [
      "A. 声明式定义Prometheus应该从哪些Service抓取指标",
      "B. 监控Service的可用性状态",
      "C. 管理Service的负载均衡配置",
      "D. 自动扩展Service的副本数"
    ],
    "answer": [
      "A"
    ],
    "explanation": "ServiceMonitor是Prometheus Operator引入的自定义资源，用于声明式地定义Prometheus的目标抓取配置。它通过标签选择器匹配Kubernetes Service，自动生成Prometheus的scrape配置。"
  },
  {
    "id": "mon-012",
    "category": "monitoring",
    "type": "single",
    "difficulty": "hard",
    "question": "Prometheus Pushgateway最合适的适用场景是什么？",
    "options": [
      "A. 批处理任务或短生命周期任务的指标推送",
      "B. 替代Prometheus Server的拉取模式",
      "C. 存储长期历史数据",
      "D. 替代Alertmanager发送告警"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Pushgateway用于接收无法被Prometheus以拉取方式抓取的短期或批处理任务的指标。由于Prometheus采用pull模式，对于执行时间很短、瞬时而逝的批处理任务，需要通过Pushgateway推送指标。但不应将其用于替代常规pull抓取。"
  },
  {
    "id": "mon-013",
    "category": "monitoring",
    "type": "single",
    "difficulty": "easy",
    "question": "在Grafana中，Panel（面板）是什么？",
    "options": [
      "A. 数据可视化的基本单元，用于展示一个或多个查询结果",
      "B. Grafana的插件管理工具",
      "C. 用户权限管理模块",
      "D. 数据源连接配置"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Panel是Grafana Dashboard中的基本可视化单元，每个Panel通过查询一个或多个数据源来获取数据，并以图表、表格、仪表盘等形式展示。一个Dashboard由多个Panel组成。"
  },
  {
    "id": "mon-014",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "Grafana中配置数据源（Data Source）时，以下哪项不是内置支持的数据源类型？",
    "options": [
      "A. Prometheus",
      "B. Elasticsearch",
      "C. Kubernetes",
      "D. MySQL"
    ],
    "answer": [
      "C"
    ],
    "explanation": "Grafana内置支持Prometheus、Elasticsearch、MySQL等多种数据源，但Kubernetes不是Grafana内置的数据源类型。Kubernetes的指标通常通过Prometheus抓取后再由Grafana展示。"
  },
  {
    "id": "mon-015",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "Grafana Alerting（告警）功能中，告警规则（Alert Rule）的三个核心组成部分是什么？",
    "options": [
      "A. 条件表达式、评估间隔、通知策略",
      "B. 数据源、面板、仪表盘",
      "C. 指标名称、标签、值",
      "D. 查询语句、时间范围、图表类型"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Grafana告警规则由三个核心部分组成：条件表达式（定义何时触发告警的条件）、评估间隔（多久检查一次条件）和通知策略（触发的告警发送给谁以及通过什么渠道发送）。"
  },
  {
    "id": "mon-016",
    "category": "monitoring",
    "type": "single",
    "difficulty": "easy",
    "question": "在ELK（Elasticsearch, Logstash, Kibana）技术栈中，Logstash的主要作用是？",
    "options": [
      "A. 日志数据的采集、解析、转换和传输",
      "B. 日志数据的存储和检索",
      "C. 日志数据的可视化展示",
      "D. 日志数据的压缩归档"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Logstash是ELK栈中的数据处理管道，负责从多种来源采集日志数据，通过filter插件进行解析、转换和结构化处理，然后将处理后的数据发送到Elasticsearch进行存储。"
  },
  {
    "id": "mon-017",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "Filebeat与Logstash在日志采集方面的主要区别是什么？",
    "options": [
      "A. Filebeat是轻量级日志采集器（shipper），Logstash是功能更丰富的数据处理管道",
      "B. Filebeat负责数据可视化，Logstash负责数据采集",
      "C. Filebeat只能采集系统日志，Logstash可以采集任何数据",
      "D. 两者功能完全相同"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Filebeat是Go语言编写的轻量级日志采集器，占用资源少，专注于可靠地读取和转发日志文件；Logstash功能更丰富，提供强大的数据解析、转换和过滤能力，但资源消耗较高。通常组合使用Filebeat作为日志采集端，Logstash作为中央处理管道。"
  },
  {
    "id": "mon-018",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "在Elasticsearch集群中，什么是Shard（分片）？",
    "options": [
      "A. 将一个索引的数据水平分割成多个子集分布在集群节点上",
      "B. Elasticsearch的配置文件",
      "C. 集群中的索引别名",
      "D. 用于连接客户端的网络端口"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Shard是Elasticsearch实现水平扩展的核心机制。一个索引可以被分割成多个分片，每个分片是一个独立的Lucene实例，分布在集群的不同节点上，从而实现数据的分布式存储和并行处理。"
  },
  {
    "id": "mon-019",
    "category": "monitoring",
    "type": "single",
    "difficulty": "medium",
    "question": "Jaeger和Zipkin主要用于解决什么问题？",
    "options": [
      "A. 分布式系统中的请求链路追踪（Distributed Tracing）",
      "B. 基础设施监控和告警",
      "C. 日志集中管理和分析",
      "D. 容器编排和调度"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Jaeger和Zipkin都是分布式追踪系统，用于监控和诊断微服务架构中的请求全链路。它们可以追踪一个请求经过的所有服务，显示各服务的耗时和依赖关系，帮助定位性能瓶颈和故障点。"
  },
  {
    "id": "mon-020",
    "category": "monitoring",
    "type": "single",
    "difficulty": "hard",
    "question": "在分布式追踪中，Trace和Span的关系是什么？",
    "options": [
      "A. 一个Trace由多个Span组成，Span代表Trace中的单步操作",
      "B. Trace和Span是同一个概念的不同名称",
      "C. 一个Span由多个Trace组成",
      "D. Trace用于日志收集，Span用于指标收集"
    ],
    "answer": [
      "A"
    ],
    "explanation": "在分布式追踪中，Trace代表一个完整的请求链路（从入口到所有下游服务的完整路径），而Span是Trace中的一个命名操作单元，记录了一个服务调用的开始和结束时间、状态等元数据。多个Span通过Trace ID关联形成完整的请求链路树。"
  },
  {
    "id": "devops-006",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "easy",
    "question": "DevOps文化中，CALMS框架的五个要素分别代表什么？",
    "options": [
      "A. Culture, Automation, Lean, Measurement, Sharing",
      "B. Code, Analytics, Logging, Monitoring, Security",
      "C. Continuous, Agile, Lean, Metrics, Services",
      "D. Cloud, Automation, Linux, Microservices, Scripting"
    ],
    "answer": [
      "A"
    ],
    "explanation": "CALMS是DevOps文化评估框架：Culture（协作文化）、Automation（自动化）、Lean（精益思想）、Measurement（度量）、Sharing（共享），全面涵盖了DevOps的核心价值观和实践维度。"
  },
  {
    "id": "devops-007",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "medium",
    "question": "SRE中，SLI（Service Level Indicator）、SLO（Service Level Objective）和SLA（Service Level Agreement）的正确层级关系是什么？",
    "options": [
      "A. SLI是实际测量值 → SLO是基于SLI设定的目标值 → SLA是SLO未达标时对外承担的责任协议",
      "B. SLO是测量值 → SLA是内部目标 → SLI是对外协议",
      "C. SLA是测量值 → SLI是目标值 → SLO是责任协议",
      "D. 三者是同义词，无层级关系"
    ],
    "answer": [
      "A"
    ],
    "explanation": "SLI是指标（如请求延迟的百分位值），SLO是基于SLI设定的内部目标（如99.9%请求在200ms内完成），SLA是对外承诺并包含惩罚条款的服务协议，通常比SLO更宽松以留出安全余量。"
  },
  {
    "id": "devops-008",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "hard",
    "question": "错误预算（Error Budget）的基本原理是什么？",
    "options": [
      "A. 100% - SLO = 允许的错误/不可用时间，用于平衡系统可靠性和创新速度",
      "B. 预留给基础设施故障的备用预算",
      "C. 团队每周用于修复bug的时间预算",
      "D. 每月允许发布的错误次数"
    ],
    "answer": [
      "A"
    ],
    "explanation": "错误预算 = 100% - SLO目标值。例如SLO为99.9%时，错误预算为0.1%（每月约43分钟）。当错误预算充足时，团队可以放心发布新功能；当错误预算耗尽时，应优先投入可靠性工作。这协调了开发速度和稳定性的矛盾。"
  },
  {
    "id": "devops-009",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "medium",
    "question": "混沌工程（Chaos Engineering）的核心目标是什么？",
    "options": [
      "A. 主动向系统中注入故障，验证系统在异常条件下的韧性",
      "B. 完全消除系统中的所有故障",
      "C. 只在生产环境测试新功能",
      "D. 定期删除生产数据以测试备份"
    ],
    "answer": [
      "A"
    ],
    "explanation": "混沌工程是一种实验性方法论，通过主动向系统中注入可控的故障（如网络延迟、服务宕机、资源耗尽等），验证系统在异常条件下的表现，发现弱点并改进，从而增强系统对生产环境中不可预测故障的韧性。"
  },
  {
    "id": "devops-010",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "medium",
    "question": "敏捷开发（Agile）与DevOps的核心区别是什么？",
    "options": [
      "A. 敏捷聚焦开发和交付流程的迭代优化，DevOps在此基础上延伸至运维和持续运营",
      "B. 敏捷只适用于小团队，DevOps只适用于大团队",
      "C. 敏捷不包含测试，DevOps只包含测试",
      "D. 敏捷使用瀑布模型，DevOps使用迭代模型"
    ],
    "answer": [
      "A"
    ],
    "explanation": "敏捷开发主要关注开发和交付流程的迭代化、快速反馈和持续改进，而DevOps在敏捷基础上进一步延伸，打破开发与运维壁垒，将运维实践（监控、部署、基础设施管理等）纳入持续交付流水线，实现从代码到生产的全生命周期管理。"
  },
  {
    "id": "devops-011",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "easy",
    "question": "以下哪个不是DevOps工具链中的典型环节？",
    "options": [
      "A. 项目管理（如Jira）",
      "B. 持续集成（如Jenkins）",
      "C. 桌面办公软件（如Microsoft Word）",
      "D. 监控和日志（如Prometheus、ELK）"
    ],
    "answer": [
      "C"
    ],
    "explanation": "DevOps工具链覆盖从计划、编码、构建、测试、发布、部署到监控和运营的全生命周期。桌面办公软件不属于DevOps工具链的核心环节。典型工具包括Git（版本控制）、Jenkins（CI/CD）、Docker（容器化）、Prometheus（监控）等。"
  },
  {
    "id": "devops-012",
    "category": "devops-theory",
    "type": "multiple",
    "difficulty": "hard",
    "question": "DORA DevOps报告中定义的四个关键软件交付指标（DORA Metrics）包括哪些？",
    "options": [
      "A. 部署频率（Deployment Frequency）",
      "B. 代码复杂度（Code Complexity）",
      "C. 变更前置时间（Lead Time for Changes）",
      "D. 平均恢复时间（Mean Time to Restore / Time to Restore Service）",
      "E. 变更失败率（Change Failure Rate）"
    ],
    "answer": [
      "A, C, D, E"
    ],
    "explanation": "DORA（DevOps Research and Assessment）定义的四个核心指标是：部署频率（频繁度）、变更前置时间（从代码提交到生产部署的速度）、平均恢复时间（从故障中恢复的速度）和变更失败率（部署导致故障的比例）。代码复杂度不是DORA指标。"
  },
  {
    "id": "devops-013",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "hard",
    "question": "持续交付成熟度模型中，达到\"持续交付\"（Continuous Delivery）级别与\"持续部署\"（Continuous Deployment）级别的关键区别是什么？",
    "options": [
      "A. 持续交付要求每次提交自动部署到生产环境，持续部署要求人工审批后再部署",
      "B. 持续交付要求代码随时可部署到生产环境但需要人工触发，持续部署则每次通过自动检查的变更自动部署到生产",
      "C. 持续交付只适用于移动应用，持续部署只适用于Web应用",
      "D. 两者没有区别"
    ],
    "answer": [
      "B"
    ],
    "explanation": "在持续交付成熟度模型中，持续交付意味着每次代码变更都经过自动化构建、测试和环境验证，确保可以随时部署到生产环境，但实际部署由人工决策触发；持续部署则将最后一步也自动化，每次通过所有质量检查的变更都会自动部署到生产环境。"
  },
  {
    "id": "devops-014",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "medium",
    "question": "平台工程（Platform Engineering）的主要目标是什么？",
    "options": [
      "A. 构建内部开发者平台（Internal Developer Platform），通过自助服务简化开发者的基础设施操作",
      "B. 将所有基础设施迁移到公有云",
      "C. 用单一编程语言重写所有应用",
      "D. 减少开发团队数量"
    ],
    "answer": [
      "A"
    ],
    "explanation": "平台工程专注于构建和维护内部开发者平台（IDP），通过提供标准化的自助服务接口、抽象基础设施复杂性、Golden Path模板等，使开发者可以自主完成部署、配置和运维操作，提升开发者体验（DX）和组织效率。"
  },
  {
    "id": "devops-015",
    "category": "devops-theory",
    "type": "single",
    "difficulty": "medium",
    "question": "开发者体验（Developer Experience, DX）在DevOps实践中的核心价值是什么？",
    "options": [
      "A. 减少开发者在基础设施和部署流程中的认知负荷和摩擦，提升交付效率",
      "B. 为开发者提供更好的办公设备",
      "C. 只关注编程语言的易用性",
      "D. 增加文档的篇幅和复杂度"
    ],
    "answer": [
      "A"
    ],
    "explanation": "开发者体验（DX）关注开发者在使用工具、平台和流程时的整体感受和效率。在DevOps上下文中，良好的DX意味着通过清晰的文档、自助服务平台、快速的反馈循环、自动化的CI/CD流水线等手段，减少开发者在基础设施和运维操作上的认知负荷，让他们能专注于业务逻辑开发。"
  }
];

export const CATEGORIES = [
  {
    "key": "linux",
    "label": "🐧 Linux"
  },
  {
    "key": "git",
    "label": "📦 Git"
  },
  {
    "key": "docker",
    "label": "🐳 Docker"
  },
  {
    "key": "kubernetes",
    "label": "☸️ K8s"
  },
  {
    "key": "cicd",
    "label": "🔧 CI/CD"
  },
  {
    "key": "iac",
    "label": "📜 IaC"
  },
  {
    "key": "monitoring",
    "label": "📊 监控"
  },
  {
    "key": "devops-theory",
    "label": "📖 DevOps理论"
  }
];

export const LETTERS = ["A","B","C","D"];

export function getCategoryLabel(key) {
  const c = CATEGORIES.find(x => x.key === key);
  return c ? c.label : key;
}

export function getDifficultyLabel(d) {
  const m = { easy: '简单', medium: '中等', hard: '困难' };
  return m[d] || d;
}

export default QUESTIONS;

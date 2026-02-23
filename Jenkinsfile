pipeline {
    agent any

    environment {
        // 构建目录
        BUILD_DIR = 'dist'
        // 远程服务器配置名称（需要在 Jenkins 中配置 Publish Over SSH）
        SSH_SERVER = 'hkfxy'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 正在克隆仓库...'
                git branch: 'main',
                    url: 'https://fastgit.cc/https://github.com/yealqp/ME-Frp_TPCA_Website.git',
                    credentialsId: 'github-credentials' // 如果是私有仓库需要配置凭据
            }
        }

        stage('Setup & Build') {
            steps {
                echo '🛠️ 正在配置 Node.js 环境...'
                sh '''
                    # 安装 NVM
                    if [ ! -d "$HOME/.nvm" ]; then
                        echo "正在安装 NVM..."
                        curl -o- https://cdn.yealqp.cn/Script/InstallNvm.sh | bash
                    fi

                    # 加载 NVM
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"

                    # 安装并使用指定版本的 Node.js
                    nvm install 24
                    nvm use 24

                    # 验证安装
                    node --version
                    npm --version

                    # 安装 pnpm
                    if ! command -v pnpm &> /dev/null; then
                        echo "正在安装 pnpm..."
                        npm install -g pnpm
                    fi

                    pnpm --version
                    pnpm install
                    pnpm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo '📦 正在上传构建文件到远程服务器...'
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "${SSH_SERVER}",
                                transfers: [
                                    sshTransfer(
                                        // 1. 清空远程目录（如果是部署前端，通常开启，它会清空下面的 remoteDirectory）
                                        cleanRemote: true,

                                        // 2. 源文件：匹配构建目录下的所有文件和子目录
                                        sourceFiles: "${BUILD_DIR}/**",

                                        // 3. 移除前缀：移除构建目录，这样 index.html 就会直接出现在目标目录
                                        removePrefix: BUILD_DIR,

                                        // 4. 远程子目录：由于全局根目录是 /www/wwwroot，这里填项目文件夹名
                                        // 最终路径 = /www/wwwroot + / + mefrp-tpca
                                        remoteDirectory: 'mefrp-tpca.yealqp.cn'
                                    )
                                ],
                                usePromotionTimestamp: false,
                                useWorkspaceInPromotion: false,
                                verbose: true
                            )
                        ]
                    )
                }
                echo '✅ 构建文件上传完成'
            }
        }

        stage('Refresh CDN Cache') {
            steps {
                echo '🔄 正在刷新 CDN 缓存...'
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: "${SSH_SERVER}",
                                transfers: [
                                    sshTransfer(
                                        execCommand: '/usr/script/refresh_eo.sh'
                                    )
                                ],
                                usePromotionTimestamp: false,
                                useWorkspaceInPromotion: false,
                                verbose: true
                            )
                        ]
                    )
                }
                echo '✅ CDN 缓存刷新完成'
            }
        }
    }

    post {
        always {
            echo '🧹 正在清理工作空间...'
            cleanWs()
        }

        success {
            echo '🎉 流水线执行成功！'
            // 可以添加成功通知，比如发送邮件或 Slack 消息
        }

        failure {
            echo '❌ 流水线执行失败！'
            // 可以添加失败通知
        }
    }
}

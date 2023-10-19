pipeline{
    agent any
    stages{
        stage('Pull') { 
            steps {
                sh 'echo ${GIT_BRANCH}'
            }
        }
        stage('checkout') { 
            steps {
                sh 'echo git pull origin ${GIT_BRANCH}'
            }
        }
        stage("Build") {
            steps {
                sh 'npm install'
            }
        }
        stage("Deploy") {
            steps {
                sh 'npm run dev'
            }
        }
        stage('Done'){
            steps {
                sh 'echo Ya fue realizado todo'
            }
        }
    }
}
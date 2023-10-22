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
                sh 'docker build -t notes:latest .'
            }
        }
        stage("Deploy") {
            steps {
                sh 'docker compose up -d notes'
            }
        }
        stage('Done'){
            steps {
                sh 'echo Ya fue realizado todo'
            }
        }
    }
}
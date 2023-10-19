pipeline{
    agent any
    stages{
        stage('Pull') { 
            steps {
                sh 'echo ${GIT_BRANCH}'
            }
            steps {
                sh 'git pull origin ${GIT_BRANCH}'
            }
        }
        stage("Build") {
            steps {
                sh 'docker build -t notes:latest .'
            }
        }
        stage("Deploy") {
            steps {
                sh 'docker compose up notes'
            }
        }
        stage('Done'){
            steps {
                sh 'echo Ya fue realizado todo'
            }
        }
    }
}
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/cc901109/MedicalWeb.git',
                    credentialsId: 'github'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
    }
}


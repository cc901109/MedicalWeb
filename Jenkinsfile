pipeline {
    agent {
        label 'test1'
    }
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
	stage('test1') {
            steps {
                sh '''pwd
		  ls -al '''
            }
        }

    }
}

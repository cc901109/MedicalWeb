pipeline {
    agent {
        label 'test1'
    }
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
		echo '1235'
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

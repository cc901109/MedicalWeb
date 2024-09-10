pipeline{
  agent any
  
  stages{
    
    stage('Git'){
      steps{
        
        sh'''pwd
        ls -al
        id
        echo git'''
      }
    }
    
    stage('Upload'){
      steps{
        sh'''pwd
        ls -al
        echo This is Upload Stage'''
      }
    }

    stage('WsClean'){
      steps{
        cleanWs(deleteDirs: true)
      }
    }
  }

  post {
        success {
            emailext(
                to: "${env.recipient_group_1}",
                subject: 'Jenkins Build Successful',
                body: 'The Jenkins build was successful.'
            )
        }
        failure {
            emailext(
                to: "${env.GROUP2_RECIPIENTS}",
                subject: 'Jenkins Build Failed',
                body: 'The Jenkins build failed. Please check the logs for more details.'
            )
        }
    }
  
}

pipeline{
  agent any

  
  stages{
    
    stage('Git'){
      steps{
        mail bcc: '', body: 'aaaaa', cc: '', from: '', replyTo: '', subject: 'aa', to: 'tzuyu1109@gmail.com'
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
        always {
            script {
                def emailSubject
                def emailBody
                def recipientEmail

                if (currentBuild.result == "SUCCESS") {
                    emailSubject = "Pipeline Success: ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}"
                    emailBody = "The pipeline run for ${env.JOB_NAME} - Build #${env.BUILD_NUMBER} was successful. You can view the details at ${env.BUILD_URL}"
                    recipientEmail = "tzuyu1109@gmail.com"
                }
                else {
                    emailSubject = "Pipeline Failure: ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}"
                    emailBody = "The pipeline run for ${env.JOB_NAME} - Build #${env.BUILD_NUMBER} has failed. You can view the details at ${env.BUILD_URL}"
                    recipientEmail = "tzuyu1109@gmail.com"
                }

                emailext (
                    subject: emailSubject,
                    body: emailBody,
                    to: recipientEmail
                )
            }
        }
    }

  

 
  
}

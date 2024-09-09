pipeline{
  agent any

  
  stages{
    
    stage('Git'){
      steps{
        
        emailext body: 'aaa', subject: 'aaa', to: 'tzuyu1109@gmail.com'
        
        sh'''pwd
        echo "Build process is completing" | mail -s "Build Complete" tzuyu@gmail.com
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
            emailext (
                to: config.SUCCESS_RECIPIENTS,
                subject: "Build ${env.JOB_NAME} - ${env.BUILD_NUMBER} - SUCCESS",
                body: "Build succeeded"
            )
        }
        failure {
            emailext (
                to: config.FAILURE_RECIPIENTS,
                subject: "Build ${env.JOB_NAME} - ${env.BUILD_NUMBER} - FAILURE",
                body: "Build failed"
            )
        }
    }
  
}

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
            emailext (
                subject: "Pipeline Success",
                body: "The pipeline completed successfully.",
                to: "tzuyu1109@gmail.com"
            )
        }
        failure {
            emailext (
                subject: "Pipeline Failure",
                body: "The pipeline failed.",
                to: "tzuyu1109@gmail.com"
            )
        }
    }

 
  
}

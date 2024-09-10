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

  stage('Notify') {
    steps {
      emailext(subject: 'Completed ${JOB_NAME} - ${BUILD_NUMBER}',
               body: '$DEFAULT_CONTENT',
               templateName: 'test001'
              )
    }
  }

 
  
}

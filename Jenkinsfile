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
                emailext(
                    subject: '构建完成 - ${JOB_NAME} - ${BUILD_NUMBER}',
                    body: '$DEFAULT_CONTENT',
                    recipientProviders: [developers()],
                    // 使用模板
                    templateName: 'test001'
                )
            }
        }

 
  
}

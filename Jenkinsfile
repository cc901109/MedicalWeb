pipeline{
  agent any

  environment {
        CONFIG_FILE_ID_GROUP_1 = 'a2bdd23c-86ea-4a29-ac94-6f99765b18b6'
        CONFIG_FILE_ID_GROUP_2 = '7cd7fbe0-fba1-467c-ada5-b9832e9eb64e'
    }

  
  stages{
    
    stage('Git'){
      steps{
        
        sh'''pwd
        ls -al
        id
        echo git'''
      }
    }

    stage('Notify') {
            steps {
                script {
                    def configFileId = someCondition ? "${env.CONFIG_FILE_ID_GROUP_1}" : "${env.CONFIG_FILE_ID_GROUP_2}"
                    def emailList
                    configFileProvider([configFile(fileId: configFileId, variable: 'EMAIL_CONFIG')]) {
                        def config = readProperties file: "${EMAIL_CONFIG}"
                        emailList = config['email.recipients']
                    }

                    emailext(
                        subject: 'Notification - ${JOB_NAME} - ${BUILD_NUMBER}',
                        body: 'The build has completed.',
                        to: emailList
                    )
                }
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

  

  

 
  
}

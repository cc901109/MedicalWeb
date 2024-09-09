pipeline{
  agent any

  
  stages{
    
    stage('Git'){
      steps{
        
        emailext attachLog: true, body: 'hihihihihiihihihihihi', subject: 'hello', to: 'tzuyu1109@gmail.com'
      
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

 
  
}

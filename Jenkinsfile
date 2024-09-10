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

  

 
  
}

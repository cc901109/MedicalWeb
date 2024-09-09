pipeline{
  agent any

  
  stages{
    
    stage('Git'){
      steps{
        
        emailext body: 'aaa', subject: 'aaa', to: 'tzuyu1109'
        
        sh'''
        
        pwd
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

pipeline{
  agent {
    label 'test_0828_001'
  }
  
  stages{
    
    stage('Git'){
      steps{
        emailext body: 'Build process is completing', subject: 'Build Complete', to: 'tzuyu1109@gmail.com'
        checkout scmGit(branches: [[name: '*/$BRANCH_NAME']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/cc901109/MedicalWeb']])
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

pipeline{
  agent {
    label 'test_0828_001'
  }
  
  stages{
    
    stage('Git'){
      steps{
        emailext body: 'Build process is completing', subject: 'Bild Complete', to: 'carol.ty.hsin@mail.foxconn.com'
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
        echo This is Upload Stage > upload.txt
        curl -u "carol:carol240819!" -T upload.txt https://fidirve-hc-cns.fiinet.com/remote.php/dav/files/carol/carol_use_only_carol_create/upload.txt'''
      }
    }

    stage('WsClean'){
      steps{
        sh'''
        cleanWs(deleteDirs: true)'''
      }
    }
  }
}

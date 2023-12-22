pipeline{
    agent any
    tools {nodejs "node"}
    environment{
        imageName =  "bharatgareja/jenkins_image" 
        // registry = "bharatgareja/docker_jenkins"
        rigistryCredential="bharatgareja"
        dockerImage = ''
    }
    stages {

       stage("Install Dependencies"){
            steps{  
                sh 'npm install'
            }
       }    
     

       stage("Building Image"){
            steps{
               script{
                 dockerImage = docker.build imageName
               }
            }
       }

                   
    stage("Deploy Image"){
            steps{
               script{
                docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_cred' ) {
                    dockerImage.push("${env.BUILD_NUMBER}")
                }
            }
       }
    }

    }
}   
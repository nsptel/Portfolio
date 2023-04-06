pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'echo "Building the image..."'
        sh 'docker build -t nsptel/portfolio:test .'
      }
    }

    stage('Test') {
      steps {
        sh 'docker run -d --name test-container-portfolio -p 3000:3000 nsptel/portfolio:test'
        sh 'docker exec -it --name test-container-portfolio /bin/sh'
        echo 'Tests should run here.'
        sh 'docker stop test-container-portfolio'
        sh 'docker rm test-container-portfolio'
        sh 'echo "Deleted the container"'
      }
    }

    stage('Push') {
      steps {
        sh 'echo "Pushing the image to docker hub..."'
        sh 'docker login --username nsptel --password dckr_pat_zlBoODMArGDBM5VJwZITiEViZEE'
        sh 'docker push nsptel/portfolio:test'
        sh 'echo "Image pushed successfully!"'
      }
    }
  }
}
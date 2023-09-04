pipeline {
  agent any

  parameters {
    string(name: 'PR_NUMBER', defaultValue: '', description: 'Pull Request Number')
  }

  environment {
    DOCKER_USERNAME = credentials('docker-username')
    DOCKER_PAT = credentials('docker-pat')
  }

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
        sh 'docker exec -i test-container-portfolio /bin/sh'
        echo 'Tests should run here.'
        sh 'docker stop test-container-portfolio'
        sh 'docker rm test-container-portfolio'
        sh 'echo "Deleted the container"'
      }
    }

    stage('Push') {
      steps {
        sh 'echo "Pushing the image to docker hub..."'
        sh 'docker login --username ${DOCKER_USERNAME} --password ${DOCKER_PAT}'
        sh 'docker push nsptel/portfolio:test'
        sh 'echo "Image pushed successfully!"'
      }
    }
  }
}
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'echo "Building the image..."'
                bat 'docker build -t nsptel/portfolio:test .'
            }
        }

        stage('Test') {
            steps {
                bat 'docker run -d --name test-container-portfolio -p 3000:3000 nsptel/portfolio:test'
                // need to add something that executes tests on running container 
                bat 'docker stop test-container-portfolio'
                bat 'docker rm test-container-portfolio'
                bat 'echo "Deleted the container"'
            }
        }

        stage('Push') {
            steps {
                bat 'echo "Pushing the image to docker hub..."'
                bat 'docker login --username nsptel --password dckr_pat_1wG5G9SCrUScpBn67cF0Y_CqXc4'
                bat 'docker push nsptel/portfolio:test'
                bat 'echo "Image pushed successfully!"'
            }
        }
    }
}
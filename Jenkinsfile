pipeline{
    agent any
    stages{
        stage("Install NPM dependeccies"){
            steps{
                bat "npm install"
            }
        }
        stage("Test and Audit"){
            parallel{
                stage("Run unit tests"){
                    steps{
                        bat "npm test"
                    }
                }
                stage("Run integration tests"){
                    steps{
                        echo "Running integration tests"
                    }
                }

            }
          
        }
    }
}
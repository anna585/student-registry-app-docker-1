pipeline{
    agent{
        label "node"
    }
    stages{
        stage("Install NPM dependeccies"){
            steps{
                bat "npm install"
            }
        }
        stage("Run tests"){
            steps{
                bat "npm test"
            }
        }
    }
}
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Clonando el repositorio...'
                checkout scm
            }
        }

        stage('Instalar dependencias') {
            steps {
                echo 'Instalando dependencias...'
                bat 'npm ci'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                echo 'Ejecutando pruebas WDIO...'
                catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                    bat 'npx wdio run ./wdio.conf.js'
                }
            }
        }

        stage('Reporte Allure') {
            steps {
                echo 'Generando reporte Allure...'
                allure([
                    commandline: 'Allure',
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

    post {
        success {
            echo 'Pruebas WDIO ejecutadas con éxito.'
        }
        failure {
            echo 'Falló alguna etapa del pipeline.'
        }
    }
}

Feature: Login en HerokuApp

@loginValido
Scenario: Login exitoso con credenciales validas
    Given estoy en la pagina de login
    When ingreso "tomsmith" y "SuperSecretPassword!"
    Then deberia ver el mensaje "You logged into a secure area!"

@loginInvalido
Scenario: Login fallido con credenciales invalidas
    Given estoy en la pagina de login
    When ingreso "usuario_invalido" y "clave_invalida"
    Then deberia ver el mensaje "Your username is invalid!"

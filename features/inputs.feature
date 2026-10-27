Feature: Validar campo numerico

Scenario: Ingresar un numero y verificar el valor
    Given estoy en la pagina de inputs
    When ingreso el numero "42"
    Then el campo deberia tener el valor "42"

Feature: Detectar tecla presionada

Scenario: Presionar una tecla y ver el resultado
    Given estoy en la pagina de pulsacion de teclas
    When presiono la tecla "a"
    Then deberia ver el resultado "You entered: A"

Feature: Mostrar informacion al pasar el mouse sobre un usuario

Scenario: Ver el nombre del usuario al hacer hover
    Given estoy en la pagina de hovers
    When paso el mouse sobre el primer avatar
    Then deberia ver el texto "name: user1"

Feature: Verificar codigo de estado HTTP

Scenario: Ver la pagina del codigo 200
    Given estoy en la pagina de codigos de estado
    When hago clic en el codigo "200"
    Then la pagina deberia mostrar el texto "This page returned a 200 status code."

Feature: Mover el control deslizante horizontal

Scenario: Aumentar el valor del slider usando las flechas del teclado
    Given estoy en la pagina del control deslizante
    When presiono la flecha derecha 3 veces
    Then el valor del slider deberia ser "1.5"

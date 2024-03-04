
@Compra

Feature: Compra de productos en Euro supermercado

 Background: Inicio de sesion exitoso
        Given que soy un usuario registrado en la página
        When ingreso mi nombre de usuario "valentinarengifonarvaez1111@gmail.com" y mi contraseña "Anyela@R3ngifo"
        Then se inicia sesión correctamenta

    Scenario: validar una compra exitosa en Euro supermercado

    Given que inicie sesion correctamente
    And selecciono una categoría
    When agrego productos aleatoriamnete al carrito de compra 
    Then se agregan correctamente
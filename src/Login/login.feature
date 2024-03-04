
@login

Feature: Inicio de sesion en SWAGLABS

    Scenario: Inicio de sesion exitoso
        Given que soy un usuario registrado en la página
        When ingreso mi nombre de usuario "valentinarengifonarvaez1111@gmail.com" y mi contraseña "Anyela@R3ngifo"
        Then se inicia sesión correctamenta



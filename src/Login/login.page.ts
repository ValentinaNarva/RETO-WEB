import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
   // closeButton: `//button[@class='vtex-modal-layout-0-x-closeButton vtex-modal-layout-0-x-closeButton--delivery-geolocation-modal ma0 bg-transparent pointer bw0 pa3']//*[name()='svg']`,
   closeButton: `[class*="closeButton-"]`,
    loginOption: `.vtex-login-2-x-label.t-action--small.pl4.gray.dn.db-l`, 
    gmailLoginOption: `//span[normalize-space()='Entrar con e-mail y contraseña']`, 
    gmailInput: `input[placeholder="Ej.: ejemplo@mail.com"]`, 
    passwordInput: `//input[@placeholder='Ingrese su contraseña ']`, 
    button_login: `.vtex-login-2-x-sendButton.ml-auto`,
    modalAddress: `vtex-modal-layout-0-x-paper`
}

@PageContext({
    path: '/v1/',
    wrapper: 'body'//Nodo Padre
})

export class loginGSPage extends Page {
    enterCredentials(username: string, password: string) {
      if ( $(selectors.closeButton)){
        $(selectors.closeButton).click();
      }

        $(selectors.loginOption).click();
        $(selectors.gmailLoginOption).click();
        $(selectors.gmailInput).setValue(username);
        $(selectors.passwordInput).setValue(password);
        $(selectors.button_login).click();
        browser.pause(5000);
    }
}
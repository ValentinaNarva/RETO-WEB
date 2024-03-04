import { pageProvider } from "@testing/wdio-page-objects";
import { loginGSPage } from "./login.page";
import { dashboardPage } from "./dashboard.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";

export class loginGSStep {
    private loginGSPage: loginGSPage;
    private dashboardPage: dashboardPage;

    constructor() {
        this.loginGSPage = new loginGSPage();
        this.dashboardPage = new dashboardPage();
    }

    @Given(/^que soy un usuario registrado en la página$/)
    navigateToLoginPage() {
        pageProvider.go(loginGSPage);
    }

    @When(/^ingreso mi nombre de usuario "([^"]*)" y mi contraseña "([^"]*)"$/)
     enterCredentials(username: string, password: string) {
        this.loginGSPage.enterCredentials(username, password);
    }

    @Then(/^se inicia sesión correctamenta$/)
   verifySuccessfulLogin() {
        expect(this.dashboardPage.obtainText()).to.be.true;
    }

}
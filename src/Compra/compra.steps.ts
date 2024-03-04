import { pageProvider } from "@testing/wdio-page-objects";
import { buys } from "./compra.page";
import { dashboardPage } from "./dashboard.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";

export class loginGSStep {
    private buys: buys;
    private dashboardPage: dashboardPage;

    constructor() {
        this.buys = new buys();
        this.dashboardPage = new dashboardPage();
    }
    @Given(/^que inicie sesion correctamente$/)
    navigateToLoginPage() {
     pageProvider.go(buys);
    }

   
    @When(/^selecciono una categoría$/)
     category(){
        this.buys.OpenCategory();
     };
    
    
     
    @When(/^agrego productos aleatoriamnete al carrito de compra$/)
    verifySuccessfulAdd() {
        this.buys.selectRandomProduct()
    }


    @Then(/^se agregan correctamenta$/)
   verifySuccessfulCompra() {
        expect(this.dashboardPage.obtainText()).to.be.true;
    }

    }


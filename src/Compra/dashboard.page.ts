
import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";
 
const selectors = {
  userTextField: `//h5[normalize-space()='Filtros']`
};
 
@PageContext({
  path: '/',
  wrapper: `body`, //Padre  o nodo principal
})
 
export class dashboardPage extends Page {
    obtainText() {
      $(selectors.userTextField).waitForDisplayed(5000);
      $(selectors.userTextField).scrollIntoView();

    }
    /*
    obtainCartText() {
      $(selectors.buyls).waitForDisplayed(5000)
      $(selectors.cartAdd).scrollIntoView();
      return $(selectors.cartAdd).isExisting();
    }*/

  }
 

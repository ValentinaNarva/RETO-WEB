
import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";
 
const selectors = {
  userTextField: `.flex.pv2.items-center`
};
 
@PageContext({
  path: '/v1/',
  wrapper: `body`, //Padre  o nodo principal
})
 
export class dashboardPage extends Page {
 
  obtainText() {
    $(selectors.userTextField).waitForDisplayed(5000)
 
    return $(selectors.userTextField).isExisting();
 
  }
 
}
 
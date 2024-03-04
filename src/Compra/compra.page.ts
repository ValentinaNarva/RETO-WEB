
import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";



const selectors = {
  closeButton: `[class*="closeButton-"]`,
  category: `//button[contains(@class,'vtex-mega-menu-2-x-triggerContainer pointer')]//*[name()='svg']`,
  personalcategory: `//div[contains(text(),'Aseo hogar')]`,
  addProducts: `//div[@id='1870']//div[@class='vtex-add-to-cart-button-0-x-buttonDataContainer vtex-add-to-cart-button-0-x-buttonDataContainer--add-to-cart-button-summary-shelf flex justify-center']`,
  filter: `//h5[normalize-space()='Filtros']`,
  //addcarts: `//div[@id='1870']//div[@class='dib relative vtex-product-summary-2-x-imageContainer vtex-product-summary-2-x-imageContainer--summary-shelf-image vtex-product-summary-2-x-imageStackContainer vtex-product-summary-2-x-hoverEffect']`,
  cart: `div[id='1870'] div[role='button']`,
  productList: `//div[@id='1870']`,
  TextEmail: `//input[@placeholder='Ingresa tu correo electrónico']`,
  cloudButton: `//div[contains(text(),'INGRESAR')]`,
  address: `input[placeholder='Carrera 12 # 56 - 33']`,
  save: `//div[contains(text(),'GUARDAR')]`,
  return: `//div[contains(text(),'VOLVER')]`,
  products: `.vtex-button__label [class^="vtex-add-to"]`,
  modalAddress: `.vtex-modal-layout-0-x-paper`,

  bottonAdd: `//span[@class='vtex-add-to-cart-button-0-x-buttonText vtex-add-to-cart-button-0-x-buttonText--quick-view']`,
};

@PageContext({
  path: '/',
  wrapper: 'body'//Nodo Padre
})

export class buys extends Page {
  elements: any;
  /*
      Entrega(TextEmail: string) {
          $(selectors.TextEmail).setValue(TextEmail),
       
            $(selectors.cloudButton).click();
          browser.pause(5000)
        }
  
        
  */
  //Ingresar dirección y guardarla
  enterAddress(direccion: string) {

    $(selectors.address).setValue(direccion);
    const selectModalAddress = $(selectors.modalAddress);
    const btnsave = $(selectors.save);
    //Busca elemento(btnsave)
    browser.execute((position) => {
      window.scrollTo(0, position);
    }, btnsave);

    btnsave.click();

    browser.pause(2000)
    //Pregunta si el botón modal existe y si existe lo cierra
    if ($(selectors.closeButton)) {
      $(selectors.closeButton).click();
    }
    browser.pause(5000)

  }

  OpenCategory() {

    if ($(selectors.closeButton)) {
      $(selectors.closeButton).click();
    }
    const categoryElement = $(selectors.category);
    $(selectors.category).click();
    $(selectors.personalcategory).click();
    $(selectors.filter).scrollIntoView();
    $(selectors.closeButton).click();

    browser.pause(2000)

  }



  //Selecciona aleatoriamentr los productos
  selectRandomProduct() {


    for (let i = 0; i < 3; i++) {
      // Obtener todos los botones
      const bottons_span = $$(selectors.products);

      // Seleccionar botones aleatorio
      const selectRandomSpan = bottons_span[Math.floor(Math.random() * bottons_span.length)];


      browser.execute((position) => {
        window.scrollTo(0, position);
      }, selectRandomSpan);
      selectRandomSpan.click();
      //Pregunta si existe Modal e ingresa dirección
      if ($(selectors.closeButton)) {
        this.enterAddress("Calle 30A #11-18")
      }
    }
  }

  

}











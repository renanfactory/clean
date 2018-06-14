import { AdminSearchPage } from './Administrador/Usuarios/search.page';


export class PageLoader {
  private AdminSearchPage:AdminSearchPage;

  constructor() {
    this.AdminSearchPage = new AdminSearchPage();
  }

  public Activate() {
    this.AdminSearchPage.Activate();
  }

}


$(document).ready(function () {
    // testing Main class
    var instanceOfMain = new PageLoader();
    instanceOfMain.Activate();
});
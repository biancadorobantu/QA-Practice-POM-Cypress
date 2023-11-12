//// <reference types= "cypress" />
import HeaderPage from "../pages/HeaderPage";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";
import LoginPage from "../pages/LoginPage";

describe("Authentication test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });
  it("Login test", () => {
    LeftSideMenuPage.getForms().click();
    LeftSideMenuPage.getFormsLogin().click()
    LoginPage.getEmail().type("admin@admin.com");
    LoginPage.getPsw().type("admin123");
    LoginPage.getLoginBtn().click();
    HeaderPage.getLogoutBtn().should('be.visible');
  });
});

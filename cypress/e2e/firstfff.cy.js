describe("Testing for HW 15", () => {
  beforeEach("Visit", () => {
   cy.loginSanta({ email: 'testbizyaev@gmail.com', password: 'rty123'});
 
   
  });
  it("BOX", () => {
    cy.get(
      "#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(1) > div"
    ).click();
    cy.get(
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__footer > section > div > footer > section > div.footer__right-items > div > span"
    ).should("have.text", "© 2014-2022 Santa-Secret");
    cy.url().should("include", "/");
  });

  it("Create box", () => {
    cy.get("div.btn-main").click();
    cy.get("#root > div.layout-1").should("have.length", 1);
    cy.url().should("include", "/");
  });
  it("Quick draw", () => {
    cy.get(
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main.layout-1__main--wide > section > div > div > div.form-card__header > span"
    ).should("have.text", "Быстрая жеребьевка");
    cy.url().should("include", "/randomizer");
  });
  it("Account", () => {
    cy.get(
      "#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(3) > div"
    ).click();
    cy.get("#account_profile_settings").should(
      "have.text",
      "Настройки профиля"
    );
    cy.url().should("include", "/account");
  });
});

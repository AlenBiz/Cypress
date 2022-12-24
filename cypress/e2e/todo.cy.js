/// <reference types="cypress" />

describe("Testing Header", () => {
    beforeEach("Visit", () => {
      cy.visit('/');
    });
  
    it("header have LogIn", () => {
      cy.get(
        '#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > a > div > div > span'
      ).should('have.text', 'Вход и регистрация');
    });
    it("header have santa", () => {
      cy.get(
        '#root > div.layout-1 > section.layout-1__header-wrapper.layout-1__header-wrapper--fixed > header > section > span'
      ).should('have.text', '19 Сант в этом году');
    });
  });
  
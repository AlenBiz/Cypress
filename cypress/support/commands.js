// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add("loginSanta", (user) => {
  cy.session(
    user,
    () => {
      cy.visit("/login");
      cy.get("input[name=email]").type(user.email);
      cy.get("input[name=password]").type(user.password);
      cy.get(
        "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div"
      ).click();
      cy.get("#root").should("have.length", 1);
    }
  );
});

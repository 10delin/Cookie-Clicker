// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('#teal-decline-consent').click();
  cy.get('[data-cy="logon-button"]').click();
  cy.get('[data-cy="email"]').type(email);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="logon-submit"]').click();
  cy.url().should('include', 'dashboard');
});

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add('handleCookies', () => {
  cy.visit('/');
  cy.get('#teal-decline-consent').click();
});

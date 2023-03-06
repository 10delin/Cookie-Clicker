import { faker } from '@faker-js/faker';

const randomEmail = faker.internet.email();

describe('Register User Test', () => {
  beforeEach(() => {
    cy.fixture('register.json').as('registerUserData');
  });

  before(() => {
    cy.handleCookies();
  });

  it('Should go to register page', () => {
    cy.getBySel('redirect-register-page').click();
    cy.url().should('include', 'register');
    cy.getBySel('register-progress-bar').should('have.css', 'transform', 'matrix(0.33, 0, 0, 1, 0, 0)');
  });

  it('Should complete register form', () => {
    cy.get('@registerUserData').then((fixture) => {
      cy.getBySel('name').type(fixture.name);
      cy.getBySel('email').type(fixture.invalidEmail);
      cy.getBySel('company').type(fixture.company);
      cy.getBySel('country').select(fixture.country);
      cy.getBySel('turnover').select(fixture.turnover);
      cy.getBySel('customer').check();
    });
  });

  it('Should detect when email exists', () => {
    cy.getBySel('submit').click();
    cy.getBySel('input-error').should('be.visible');
  });

  it('Should go to step 2', () => {
    cy.getBySel('email').clear();
    cy.getBySel('email').type(randomEmail);
    cy.getBySel('submit').click();

    cy.getBySel('register-progress-bar').should('have.css', 'transform', 'matrix(0.66, 0, 0, 1, 0, 0)');
  });

  it('Should go back and persist data', () => {
    cy.getBySel('go-back').click();
    cy.get('@registerUserData').then((fixture) => {
      cy.getBySel('name').should('have.value', fixture.name);
      cy.getBySel('email').should('have.value', randomEmail);
      cy.getBySel('company').should('have.value', fixture.company);
      cy.getBySel('country').should('have.value', fixture.countryValue);
      cy.getBySel('turnover').should('have.value', fixture.turnover);
      cy.getBySel('customer').should('have.value', fixture.customer);
    });
    cy.getBySel('submit').click();
    cy.getBySel('register-progress-bar').should('have.css', 'transform', 'matrix(0.66, 0, 0, 1, 0, 0)');
  });

  it('Should validate incorrect passwords', () => {
    cy.getBySel('submit').click();
    cy.getBySel('input-error').should('be.visible');

    cy.get('@registerUserData').then((fixture) => {
      cy.getBySel('password').type(fixture.incorrectPassword);
      cy.getBySel('password-confirmation').type(fixture.incorrectPassword);
      cy.getBySel('input-error').should('be.visible');

      cy.getBySel('password-confirmation').clear();
      cy.getBySel('password-confirmation').type(fixture.password);
      cy.getBySel('input-error').should('be.visible');

      cy.getBySel('password').clear();
      cy.getBySel('password-confirmation').clear();
      cy.getBySel('password').type(fixture.password);
      cy.getBySel('password-confirmation').type(fixture.password);
      cy.getBySel('input-error').should('not.exist');
    });
  });

  it('Should go to step 3', () => {
    cy.getBySel('submit').click();
    cy.getBySel('register-progress-bar').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
  });

  it('Should validate accept terms', () => {
    cy.getBySel('submit').click();
    cy.getBySel('input-error').should('be.visible');

    cy.getBySel('terms-acceptance').check();
    cy.getBySel('terms-acceptance').should('be.checked');
    cy.getBySel('input-error').should('not.exist');
    cy.getBySel('email-consent').check();
    cy.getBySel('terms-acceptance').should('be.checked');
    cy.getBySel('email-consent').uncheck();
    cy.getBySel('email-consent').should('not.be.checked');
  });

  it('Should complete registration', () => {
    cy.getBySel('submit').click();

    cy.getBySel('full-screen-modal').should('be.visible');
    cy.getBySel('submit-modal').click();
    cy.getBySel('full-screen-modal').should('not.exist');
  });
});

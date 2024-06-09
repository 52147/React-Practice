// End-to-End Testing
// End-to-end (E2E) testing involves testing the complete flow of an application from start to finish. It simulates real user scenarios and interactions to ensure the application works as a whole.

// Cypress
// Cypress is a modern end-to-end testing framework that is fast, reliable, and easy to set up. It provides a robust API for interacting with the application and has built-in support for assertions and automatic waiting.

// Example Usage:
// cypress/integration/sample_spec.js
describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    });
  });
  
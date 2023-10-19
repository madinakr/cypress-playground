/// <reference types="cypress" /.>
Cypress.on('uncaught:expection', () => false);
it('should opem web site', { scrollBehavior: false },  ()=>{
    cy.visit('https://www.cypress.io');

});
/// <reference types="cypress" ?>

it('should be open site', () => {
    cy.visit('https://www.alza.cz');
    cy.get('.header-alz-104 > [data-testid="searchInput"]').type('Iphone');
    cy.get('[data-testid="button-search"]').contains("Hledat").click();
});
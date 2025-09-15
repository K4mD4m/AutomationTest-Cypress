/// <reference types="cypress" />

describe("Type text in search box", () => {
    it("Type text", () => {
        cy.visit("/");
        cy.get('#search_query_top').type("Example text");
        cy.wait(3000);
        cy.get('#search_query_top').clear();
        cy.wait(3000);
        cy.get('#search_query_top').type("Example text {enter}");
    });
});
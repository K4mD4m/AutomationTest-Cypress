/// <reference types="cypress" />

describe("Type text in search box", () => {
    it("Type text", () => {
        cy.visit("/");
        cy.get('#search_query_top').type("Example text");
        cy.get('#search_query_top').should("have.value", "Example text");
        cy.wait(3000);
        cy.get('#search_query_top').clear();
        cy.wait(3000);
        cy.get('#search_query_top').type("Example text {enter}");
        cy.get("p.alert").should("be.visible").and("include.text", "No results were found for your search");
        cy.get('#search_query_top').should("have.class", "search_query");
        cy.get('#search_query_top').should("have.css", "margin-right", "1px");
    });
});
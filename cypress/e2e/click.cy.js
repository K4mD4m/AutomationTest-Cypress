/// <reference types="cypress" />

describe("My Click Test Case", () => {
    it("click on Contact us button", () => {
        cy.visit("/");
        cy.get('a[title="Contact us"]').click();
    });
})
/// <reference types="cypress" />

describe("My First Test Case", () => {
    it("Visit google.com", () => {
        cy.visit("https://www.google.com");
    });
});
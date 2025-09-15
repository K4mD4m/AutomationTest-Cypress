/// <reference types="cypress" />

describe("Select Test Case", () => {
    it("Click on tab Women", () => {
        cy.visit("/");
        cy.get('a[title="Women"]').click();
    })

    it("Chose filtr option Instock", () => {
        cy.get("#selectProductSort").select("In stock")
    })

    it("Chose filtr option Product Name: A to Z", () => {
        cy.get("#selectProductSort").select("Product Name: A to Z")
    })
})
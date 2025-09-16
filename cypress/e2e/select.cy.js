/// <reference types="cypress" />

describe("Select Test Case", () => {
    it("Click on tab Women", () => {
        cy.visit("/");
        cy.get('a[title="Women"]').click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Chose filtr option Instock", () => {
        cy.get("#selectProductSort").select("In stock")
        cy.get("#selectProductSort").should("have.value", "quantity:desc")
    })

    it("Chose filtr option Product Name: A to Z", () => {
        cy.get("#selectProductSort").select("Product Name: A to Z")
        cy.get("#selectProductSort").should("have.value", "name:asc")
    })
})
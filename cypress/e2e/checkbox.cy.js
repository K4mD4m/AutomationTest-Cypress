/// <reference types="cypress" />

describe("Checkbox Test Case", () => {
    it("Click on tab Women", () => {
        cy.visit("/");
        cy.get('a[title="Women"]').click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Click on checkbox Women", () => {
        cy.get("#layered_category_4").check();
        cy.get("#layered_category_4").should("be.checked");
        cy.get("#layered_category_8").check();
        cy.get('#ul_layered_id_attribute_group_1 input').check();
    })
})
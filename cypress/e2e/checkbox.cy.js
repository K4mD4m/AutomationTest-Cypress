/// <reference types="cypress" />

import Base from "../pages/Base";
import Home from "../pages/Home";
import Women from "../pages/Women";

describe("Checkbox Test Case", () => {
    it("Click on tab Women", () => {
        Base.openHomePage();
        Home.clickonWomenTab();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Click on checkbox Women", () => {
        Women.checkTops();
        Women.topsCheckbox.should("be.checked");
        Women.checkDresses();
        Women.checkSize();
    })
})
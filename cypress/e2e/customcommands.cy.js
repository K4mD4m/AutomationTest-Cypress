/// <reference types="cypress" />

import { login, password } from "../fixtures/loginData.json";

describe("Custom Commands", () => {
    it("Login", () => {
        cy.login(login, password);
    })
})
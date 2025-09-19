class Home {
    get WomenTab() {
        return cy.get('a[title="Women"]');
    }

    clickonWomenTab() {
        this.WomenTab.click();
    }
}

export default new Home();
class LeftSideMenuPage{
    getForms(){
        return cy.get('a').contains('Forms')
    }

    getFormsLogin(){
        return cy.get('a#login');
    }
}

export default new LeftSideMenuPage();


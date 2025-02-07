import * as loginLocator from "../Locators/loginLocators"
export class loginPage {
    verifyWarningMessage(){
        return cy.get(loginLocator.warningMessage)
    }

    verifyLogoutButton(){
        cy.get(loginLocator.logOutButton).last().then((text)=>{
          cy.wrap(text.text());
        }).should('eq','Logout');
    }
}
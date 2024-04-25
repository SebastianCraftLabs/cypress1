export class LoginPage {
    visit() {
      cy.visit("https://practicetestautomation.com/practice-test-login/");
    }
  
    login(username: string, password: string) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);    }


    clickLoginButton(){
      cy.get('#submit').click();
    }
    
    successfulLogin(){
      cy.get('.post-title',{timeout: 10000})
      .should('be.visible')
      .and('contain.text', 'Logged In Successfully');
        }
    
  }
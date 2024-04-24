export class GoogleSearchPage {
    visit() {
      cy.visit("https://www.google.com");
    }
  
    search(query: string) {
      cy.get('.SDkEP').type(query).type("{enter}");    }
  }
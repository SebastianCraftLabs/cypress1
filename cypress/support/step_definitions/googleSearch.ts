import {Given, When , Then} from '@badeball/cypress-cucumber-preprocessor';
import {GoogleSearchPage} from '../../model/pages/GoogleSearchPage';


const googleSearchPage = new GoogleSearchPage
Given("I am on Google home page", () =>{
googleSearchPage.visit();
})

When("I tried to search for {string}", (search : string) =>{
    googleSearchPage.search(search)
})



Then("I got relevant results" ,() =>{
    cy.url().should("include", "q=");
    cy.get('.DoxwDb > .PZPZlf').should('be.visible');
})
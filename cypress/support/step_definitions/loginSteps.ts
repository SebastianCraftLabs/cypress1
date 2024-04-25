import {Given, When , Then} from '@badeball/cypress-cucumber-preprocessor';
import {LoginPage} from '../../model/pages/LoginPage';


const loginPage = new LoginPage
Given("the login page", () =>{
    loginPage.visit();
})

When("I enter valid Credentials", () =>{
    const username = 'student'
    const password = 'Password123'
    loginPage.login(username,password)
})



When("Click on the login button" ,() =>{
  loginPage.clickLoginButton();
})

Then("I'm redirected to the dashboard",()=>{
    loginPage.successfulLogin();
})
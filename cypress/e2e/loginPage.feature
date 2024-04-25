Feature: This is my feature

Scenario: Successful login on the login page
Given the login page
When I enter valid Credentials
And Click on the login button
Then I'm redirected to the dashboard

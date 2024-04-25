import { User } from "../model/interfaces/User";

describe('API Testing', () => {
  it('should return a list of users', () => {
      cy.request<User[]>('GET', 'https://jsonplaceholder.typicode.com/users')
          .then((response: Cypress.Response<User[]>) => {
              expect(response.status).to.eq(200);
              expect(response.body).to.have.length.above(0);
              expect(response.headers['content-type']).to.include('application/json');
              expect(response.body[0]).to.have.property("name","Leanne Graham")
              // Add more assertions as needed
          });
  });

  it('should create a new user', () => {
      const newUser: User = {
          id: 11,
          name: 'John Doe',
          email: 'john.doe@example.com',
          // Add more user properties as needed
      };

      cy.request<User>('POST', 'https://jsonplaceholder.typicode.com/users', newUser)
          .then((response: Cypress.Response<User>) => {
              expect(response.status).to.eq(201);
              expect(response.body).to.deep.equal(newUser);
              expect(response.body).to.be.ok;
              // Add more assertions as needed
          });
  });
});

describe('new test', () => {
    it('more testss', () => {
        const newUser: User = {
            id: 11,
            name: 'John Doe',
            email: 'john.doe@example.com',
            // Add more user properties as needed
        };
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            body: newUser,
            
        }).then((response) => {
            // Assert response status code
            expect(response.status).to.equal(201);
            expect(response.body).to.deep.eq(newUser)
            // Add more assertions as needed
        });
    });
});

/// <reference types="cypress" />

context('Comportement Page', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:8080/Comportement')
  })


  it('cy.request() - make an XHR request', () => {
    // https://on.cypress.io/request
    cy.request('http://localhost:3000/Comportement/25')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })
  ,
  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('.button-send').click()
  });
});
/// <reference types="cypress" />

context('Inscription Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:8080/')
        cy.wait(1000)
    })
    it('Inscription page', () => {
        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Inscription').click({force: true})
        cy.location('pathname').should('eq', '/inscription')
        cy.wait(1000)

        cy.get('#name').type('Test1')
        cy.wait(1000)
        cy.get('#firstname').type('Cyress')
        cy.wait(1000)
        cy.get('#email').type('Cypress@gmail.com')
        cy.wait(1000)
        cy.get('#password').type('Cypress123')
        cy.wait(1000)
        cy.get('#re-password').type('Cypress123')
        cy.wait(1000)
        cy.get('#inscription').click({force: true})
        cy.wait(5000)
        cy.get("#deconnexion").click({force: true})
        cy.wait(1000)
        
    });

    it('Connexion page', () => {
        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Connexion').click({force: true})
        cy.location('pathname').should('eq', '/connexion')
        cy.wait(1000)
        cy.get('#email').type('Cypress@gmail.com')
        cy.wait(1000)
        cy.get('#password').type('Cypress123')
        cy.wait(1000)
        cy.get('#btn-connexion').click({force: true})
        cy.wait(1000)
        


    });
});
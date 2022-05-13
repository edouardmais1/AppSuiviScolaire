/// <reference types="cypress" />

context('Navbar', () => {
    beforeEach(() => {
      cy.visit(' http://localhost:8080/')
    })

    it('.click() - click on a DOM element', () => {

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Calendrier').click({force: true})
        cy.location('pathname').should('eq', '/calendrier')
        cy.wait(1000)
        cy.go('back')

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Comportement').click({force: true})
        cy.location('pathname').should('eq', '/comportement')
        cy.wait(1000)
        cy.go('back')

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Bulletin').click({force: true})
        cy.location('pathname').should('eq', '/bulletin')
        cy.wait(1000)
        cy.go('back')
        
        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Contact').click({force: true})
        cy.location('pathname').should('eq', '/contact')
        cy.wait(1000)
        cy.go('back')

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Inscription').click({force: true})
        cy.location('pathname').should('eq', '/inscription')
        cy.wait(1000)
        cy.go('back')

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Connexion').click({force: true})
        cy.location('pathname').should('eq', '/connexion')
        cy.wait(1000)
        cy.go('back')
      });


      it('.click() - click on a DOM element full screen', () => {
        cy.viewport(1920, 1080)

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Calendrier').click({force: true})
        cy.location('pathname').should('eq', '/calendrier')
        cy.wait(1000)
        cy.go('back')

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Comportement').click({force: true})
        cy.location('pathname').should('eq', '/comportement')
        cy.wait(1000)
        cy.go('back')

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Bulletin').click({force: true})
        cy.location('pathname').should('eq', '/bulletin')
        cy.wait(1000)
        cy.go('back')
        
        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Contact').click({force: true})
        cy.location('pathname').should('eq', '/contact')
        cy.wait(1000)
        cy.go('back')

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Inscription').click({force: true})
        cy.location('pathname').should('eq', '/inscription')
        cy.wait(1000)
        cy.go('back')

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Connexion').click({force: true})
        cy.location('pathname').should('eq', '/connexion')
        cy.wait(1000)
        cy.go('back')
      });
});
/// <reference types="cypress" />

import { walkIdentifiers } from "@vue/compiler-core";

context('Calendrier Page', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit(' http://localhost:8080/')
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
      cy.reload(true)
    });

    it('.click() - click on a DOM element', () => {   
      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Comportement').click({force: true})
      cy.location('pathname').should('eq', '/comportement')
      cy.wait(1000)
    });
});
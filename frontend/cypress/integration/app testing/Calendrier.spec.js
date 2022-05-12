/// <reference types="cypress" />

import { walkIdentifiers } from "@vue/compiler-core";

context('Calendrier Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:8080/calendrier')
        cy.scrollTo('top')
    })

    it('.click() - click on a DOM element', () => {   
        cy.get('select').select('1A',{force: true})
        cy.wait(1000)
        cy.get('.fc-next-button').click({force: true})
        cy.wait(1000)
        cy.get('.fc-prev-button').click({force: true})
        cy.wait(1000)
        cy.get('.fc-timeGridWeek-button').click({force: true})
        cy.wait(1000)
        cy.get('.fc-next-button').click({force: true})
        cy.wait(1000)
        cy.get('.fc-timeGridDay-button').click({force: true})
        cy.wait(1000)
        cy.get('.fc-listWeek-button').click({force: true})
        cy.wait(1000)
        cy.contains('Modification   ').click({force: true})
        cy.location('pathname').should('eq', '/calendrier/modification')
        cy.wait(1000)
        
      });
    it
  });
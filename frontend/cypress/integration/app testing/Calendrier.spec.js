/// <reference types="cypress" />

import { walkIdentifiers } from "@vue/compiler-core";

context('Calendrier Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:8080/calendrier')
        cy.wait(1000)
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

        //Passage en mode professeur

        cy.contains('Modification').click({force: true})
        cy.location('pathname').should('eq', '/calendrier/modification')
        cy.wait(1000)
        /cy.get('#exampleInputEmail1').type('Test-cypress')
        cy.wait(1000)
        cy.get('#object1').select('1A',{force: true})
        cy.wait(1000)
        cy.get('#départ').type('2022-05-13T08:30')
        cy.wait(1000)
        cy.get('#fin').type('2022-05-13T09:30')
        cy.wait(1000)
        cy.get('textarea').type('Je suis un test Cypress')
        cy.wait(1000)
        cy.contains('Ajouter').click({force: true})
        cy.wait(1000)

        cy.request('http://localhost:3000/calendrier/1A/2022-05-13').should(
          (response) => {
            expect(response.status).to.eq(200)
            const respBody = response.body[0]
            const place = (respBody['length'])-1
            const id = respBody[place]['EvenementID']
            expect(response.body)
            console.log(id)
            
          
        //Recherche de l'événement ajouté 
        cy.get('#object2').select('1A',{force: true})
        cy.wait(1000)
        cy.get('#exampleInputPassword1').type('2022-05-13')
        cy.wait(1000)
        cy.contains('Rechercher').click({force: true})
        cy.wait(1000)
        cy.get('#'+id).click({ force: true })
        cy.wait(1000)
        cy.get('#object2').select('1A',{force: true})
        cy.wait(1000)
        cy.get('#exampleInputPassword1').type('2022-05-13')
        cy.wait(1000)
        cy.contains('Rechercher').click({force: true})
        cy.wait(1000)    
      },
      )
      });
  });
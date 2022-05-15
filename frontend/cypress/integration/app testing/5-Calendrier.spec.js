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
      cy.get('#email').type('test.prof@gmail.com')
      cy.wait(1000)
      cy.get('#password').type('testtest')
      cy.wait(1000)
      cy.get('#btn-connexion').click({force: true})
      cy.wait(1000)
      cy.reload(true)
    });

    it('.click() - click on a DOM element', () => {   
        
      //Passage en mode professeur
      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Calendrier').click({force: true})
      cy.location('pathname').should('eq', '/calendrier')
      cy.wait(1000)
      cy.contains('Modification').click({force: true})
      cy.location('pathname').should('eq', '/calendrier/modification')
      cy.wait(1000)
      
      /cy.get('#exampleInputEmail1').type('Test-cypress')
      cy.wait(1000)
      cy.get('#object1').select('1A',{force: true})
      cy.wait(1000)
      cy.get('#départ').type('2022-05-16T08:30')
      cy.wait(1000)
      cy.get('#fin').type('2022-05-16T09:30')
      cy.wait(1000)
      cy.get('textarea').type('Je suis un test Cypress')
      cy.wait(1000)
      cy.contains('Ajouter').click({force: true})
      cy.wait(1000)

      //Déconnexion en tant que professeur

      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Profile').click({force: true})
      cy.location('pathname').should('eq', '/profile')
      cy.wait(2000)
      cy.get('#deconnexion').click({force: true})
      cy.wait(1000)

      //Connexion en tant que parent 

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

      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Calendrier').click({force: true})
      cy.location('pathname').should('eq', '/calendrier')
      cy.wait(1000)

      cy.get('select').select('1A',{force: true})
      cy.wait(1000)
      cy.get('.fc-today-button').click({force: true})
      cy.wait(1000)
      cy.get('.fc-next-button').click({force: true})
      cy.wait(1000)
      cy.get('.fc-prev-button').click({force: true})
      cy.wait(1000)
      cy.get('.fc-timeGridWeek-button').click({force: true})
      cy.wait(1000)
      cy.get('.fc-today-button').click({force: true})
      cy.wait(1000)
      cy.get('.fc-timeGridDay-button').click({force: true})
      cy.wait(1000)
      cy.get('.fc-listWeek-button').click({force: true})
      cy.wait(1000)

      //Déconnexion en tant que utilisateur

      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Profile').click({force: true})
      cy.location('pathname').should('eq', '/profile')
      cy.wait(2000)
      cy.get('#deconnexion').click({force: true})
      cy.wait(1000)
      
      //Connexion en tant que prof

      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Connexion').click({force: true})
      cy.location('pathname').should('eq', '/connexion')
      cy.wait(1000)
      cy.get('#email').type('test.prof@gmail.com')
      cy.wait(1000)
      cy.get('#password').type('testtest')
      cy.wait(1000)
      cy.get('#btn-connexion').click({force: true})
      cy.wait(1000)
      cy.reload(true)

      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Calendrier').click({force: true})
      cy.location('pathname').should('eq', '/calendrier')
      cy.wait(1000)
      cy.contains('Modification').click({force: true})
      cy.location('pathname').should('eq', '/calendrier/modification')
      cy.wait(1000)

      // Recherche et supprimer l'événement ajouté 

      cy.get('#object2').select('1A',{force: true})
      cy.wait(1000)
      cy.get('#exampleInputPassword1').type('2022-05-16')
      cy.wait(1000)
      cy.contains('Rechercher').click({force: true})
      cy.wait(1000)
      cy.get('#supprimer').click({ force: true })
      cy.wait(1000) 

          // cy.request('http://localhost:3000/calendrier/1A/2022-05-13').should(
    //   (response) => {
    //     expect(response.status).to.eq(200)
    //     const respBody = response.body[0]
    //     const place = (respBody['length'])-1
    //     const id = respBody[place]['EvenementID']
    //     expect(response.body)
    //     console.log(id)
    //});
      });
  });
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('RT Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should show the title of the application', () => {
    cy.get('#header').contains('Rancid Tomatillos')
  })

  it('Should see a collection of movies on page load.', () => {
    cy.get('.movies-container').contains('div')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

  })
})

describe('RT Testing', () => {
  beforeEach(() => {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
    statusCode: 200,
    fixture: 'movieData.json'
    });
    cy.visit('http://localhost:3000/')
  })
  

  it('Should show the title of the application', () => {
    cy.get('#header').should('contain.text', 'Rancid Tomatillos')
  })

  it('Should see a collection of movies on page load.', () => {
    cy.get('.movies-container').get('.movie-card').should('have.length', 8)
    .get(".movie-card").first().should('contain.text', "Black Adam")
    .get(".movie-card").last().should('contain.text', "Smile")
  })

  it('Should click on the first movie and be shown additional details about that movie.', () => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200, 
      fixture: 'firstMovie.json'
      });
    cy.get('.movies-container')
    .find('.movie-card').first()
    .find('button.details').click()
    .get('li.title').should('contain', 'Black Adam')
    .get('li').should('contain', 'The world needed a hero. It got Black Adam.')
  })

  it('Should click on the last movie and be shown additional details about that movie.', () => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/882598', {
      statusCode: 200, 
      fixture: 'lastMovie.json'
      });
    cy.get('.movies-container')
    .find('.movie-card').last()
    .find('button.details').click()
    .get('li.title').should('contain.text', 'Smile')
    .get('li').should('contain.text', 'After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can\'t explain.')
  })

  it('Should return to the collection of movies clicking on the \'back\' button', () => {
    cy.intercept("GET", '*/movies', {
      statusCode: 200, 
      fixture: 'movieData.json'
      });
    cy.get('.movies-container')
    .find('.movie-card').first()
    .find('button.details').click()
    .get('.exit').click()
    .get('.movies-container').get('.movie-card').should('have.length', 8)
    .get(".movie-card").first().should('contain.text', "Black Adam")
    .get(".movie-card").last().should('contain.text', "Smile")
  })


})

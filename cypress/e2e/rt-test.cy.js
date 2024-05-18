describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

  })
})

describe('RT Testing', () => {
  beforeEach(() => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200, 
      fixture: 'firstMovie.json'
      });

    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/882598', {
      statusCode: 200, 
      fixture: 'lastMovie.json'
      });

    cy.intercept({
      method: 'GET',
      url: '/movies*',
      hostname: 'localhost',
      }, {
      statusCode: 200, 
      fixture: 'movieData.json'
      });

    cy.visit('http://localhost:3000/')
  })
  

  it('Should show the title of the application', () => {
    cy.get('#header').should('contain.text', 'Rancid Tomatillos')
  })

  it('Should see a collection of movies on page load.', () => {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 200,
      fixture: 'movieData.json'
      });
    cy.get('.movies-container').get('.movie-card').should('have.length', 8)
    .get(".movie-card").first().should('contain.text', "Black Adam")
    .get(".movie-card").last().should('contain.text', "Smile")
  })

  it('Should click on the first movie and be shown additional details about that movie.', () => {
    cy.get('.movies-container')
    .find('.movie-card').first()
    .find('button.details').click()
    .get('li.title').should('contain', 'Black Adam')
    .get('li').should('contain', 'The world needed a hero. It got Black Adam.')
  })

  it('Should click on the last movie and be shown additional details about that movie.', () => {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 200,
      fixture: 'movieData.json'
      });
    cy.get('.movies-container')
    .find('.movie-card').last()
    .find('button.details').click()
    .get('li.title').should('contain.text', 'Smile')
    .get('li').should('contain.text', 'After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can\'t explain.')
  })

  it('Should return to the collection of movies clicking on the \'back\' button', () => {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 200,
      fixture: 'movieData.json'
      });
    cy.get('.movies-container')
    .find('.movie-card').first()
    .find('button.details').click()
    .get('.exit').click()
    cy.url().should('include', '/movies')
    .get('.movies-container').get('.movie-card').should('have.length', 8)
    .get(".movie-card").first().should('contain.text', "Black Adam")
    .get(".movie-card").last().should('contain.text', "Smile")
  })

  it('Should filter a movie list based on entered title', () => {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 200,
      fixture: 'movieData.json'
      });
     cy.get('.live-search')
    .type('black')
    .get(".movie-card").first().should('contain.text', "Black Adam")
    .get(".movie-card").last().should('contain.text', "Black Panther")
    .get('.movies-container').get('.movie-card').should('have.length', 2)
  })

  it('Should let the user know if a search does not return movies', () => {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 200,
      fixture: 'movieData.json'
      });
     cy.get('.live-search')
    .type('potato')
    .get(".movie-card").first().should('contain.text', "Uh oh! No Results.")
    .get('.movies-container').get('.movie-card').should('have.length', 1)
  })

  it('Should alert the user on a 400 level error', () => {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 400,
      fixture: 'movieData.json'
      });
    cy.get('.error-message')
   .should('contain.text', "Error: Uh oh! something went wrong, please refresh the page or navigate to home page if issue persists")
  })

  it('Should alert the user on a 500 level error', () => {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
      statusCode: 500,
      fixture: 'movieData.json'
      });
    cy.get('.error-message')
   .should('contain.text', "Error: Uh oh! something went wrong, please refresh the page or navigate to home page if issue persists")
  })


})

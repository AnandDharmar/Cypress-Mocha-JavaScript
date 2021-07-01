describe('A simple GET request against an API which provides a list of movie genres', function () {

  const endpoint = '/genres';
  const specificValue = '/genres/1'

  const getItems = () =>
    cy.request('GET', endpoint)
    .its('body')

  let initialItems = [{
      id: 1,
      name: 'Action'
    },
    {
      id: 2,
      name: 'Comedy'
    },
    {
      id: 3,
      name: 'Drama'
    },
    {
      id: 4,
      name: 'Fantasy'
    },
    {
      id: 5,
      name: 'Horror'
    },
    {
      id: 6,
      name: 'Mystery'
    },
    {
      id: 7,
      name: 'Romance'
    },
    {
      id: 8,
      name: 'Thriller'
    },
    {
      id: 9,
      name: 'Western'
    }
  ]
  it('GET -- Successful GET request', () => {
    cy.request('GET', endpoint)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.not.be.null
      });
  });

  it('GET -- API returns a JSON Response', () => {
    cy.request('GET', endpoint)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })


  it('GET -- API loads all the default items on the first run', () => {
    getItems()
      .should('deep.eq', initialItems)
  })

  it('GET -- API loads 9 items present within the default setup before any insertions and deletions', () => {
    getItems()
      .should('have.length', 9)
  })

  it('GET -- API loads a specific genre based on the id provided', () => {
    cy.request('GET', specificValue)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.not.be.null
        expect(response.body).property('id').to.equal(1)
      })
  })
});
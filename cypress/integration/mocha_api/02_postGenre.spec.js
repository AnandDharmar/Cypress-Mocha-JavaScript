describe('A simple POST request against an API to add a movie genre', function () {

  const endpoint = '/genres';


  before(() => {
    cy.fixture('payloads').then((data) => {
      this.data = data
    });
  });

  it('POST -- Successful API POST request', () => {
    cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body: this.data.postRequest
      })
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.not.be.null
        expect(response.body).property('name').to.equal(this.data.postRequest.name)

      });
  });
});
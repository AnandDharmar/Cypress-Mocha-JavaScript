describe('A simple PUT request against an API to update a movie genre', function () {

    const specificEndpoint = '/genres/9';

    before(() => {
        cy.fixture('payloads').then((data) => {
            this.data = data
        });
    });

    it('PUT -- Successful API PUT request', () => {
        cy.request({
                method: 'PUT',
                url: specificEndpoint,
                failOnStatusCode: false,
                body: this.data.putRequest
            })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(response.body).property('name').to.equal(this.data.putRequest.name)
            });
    });
});
describe('A simple DELETE request against an API to delete a movie genre', function () {

   const specificEndpoint = '/genres/9';

   it('DELETE -- Successful API DELETE request', () => {
      cy.request({
            method: 'DELETE',
            url: specificEndpoint,
            failOnStatusCode: false
         })
         .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
         });
   });


});
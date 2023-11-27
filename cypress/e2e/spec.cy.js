describe('using service workers in cypress e2e test', () => {
  it('should receive message from service worker after page reload', () => {
    cy.visit('http://localhost:8080');
    cy.get('#worker-output').contains('Hello World'); // ok - Service Worker is loaded properly

    cy.reload();
    cy.get('#worker-output').contains('Hello World'); // should fail if reload is not working properly
  })
})
/* eslint @typescript-eslint/no-namespace: "off" */

export {}

declare global {
  namespace Cypress {
    interface Chainable {
      loadAndWaitWidget(): Chainable
      widgetIframe(selector?: string): Chainable
    }
  }
}

Cypress.Commands.add("loadAndWaitWidget", () => {
  cy.visit("test/integration/index.html")
  cy.intercept("/raja/data*").as("rajaDataRequest")
  return cy.wait("@rajaDataRequest")
})

Cypress.Commands.add("widgetIframe", () => {
  return cy
    .get("iframe")
    .its("0.contentDocument")
    .its("body")
    .should("not.be.undefined")
    .then(cy.wrap)
})

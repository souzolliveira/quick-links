/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
const { baseUrl } = Cypress.config();

describe("App", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Verify if app component exist", () => {
    cy.get("#app").should("exist");
  });

  it("Verify if sidebar with quick links exist", () => {
    cy.get("#sidebar").should("exist");
  });

  it("Verify if mainbar with files exist", () => {
    cy.get("#mainbar").should("exist");
  });
});

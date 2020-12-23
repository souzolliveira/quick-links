const { baseUrl } = Cypress.config();

describe("App", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it("Verify if app component exist", () => {
    cy.get("#app").should("exist");
  });
});

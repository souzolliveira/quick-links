const { baseUrl } = Cypress.config();

describe("Files", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Verify if files are displayed", () => {
    cy.get("#mainbar").find("a");
  });
});

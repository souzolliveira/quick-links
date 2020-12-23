const { baseUrl } = Cypress.config();

describe("Files", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Verify if files are displayed", () => {
    cy.get("#mainbar").find("a");
  });

  it("Verify if when you click on Files title, the application redirects to root", () => {
    cy.get("#filesTitle").click();
    cy.url().should("eq", baseUrl);
  });
});

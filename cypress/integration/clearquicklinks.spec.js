/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
const { baseUrl } = Cypress.config();

describe("Clear quick links", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Verify if clear button is displayed", () => {
    cy.get("#clearButton").should("exist");
  });
});

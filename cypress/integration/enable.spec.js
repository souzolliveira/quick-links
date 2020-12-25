/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
const { baseUrl } = Cypress.config();

describe("Enalbe quick links", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Verify if checkbox to enable is displayed", () => {
    cy.get("#enableCheckbox").should("exist");
  });
});

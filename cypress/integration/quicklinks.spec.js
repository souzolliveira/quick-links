/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
const { baseUrl } = Cypress.config();

describe("Files", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Verify if when click on file, it's added on quick links", () => {
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        const index = Math.floor(Math.random() * data.length);
        const file = data[index].innerHTML;
        cy.get(`#${file}`).click();
      });
    cy.get("#filesTitle").click();
    cy.get("#sidebar")
      .find("a")
      .then((data) => expect(data.length).to.equal(1));
  });
});

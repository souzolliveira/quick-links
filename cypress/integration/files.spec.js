/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */
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
    cy.url().should("eq", `${baseUrl}/`);
  });

  it("Verify if when you click on a file, the application redirects to the file", () => {
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        const index = Math.floor(Math.random() * data.length);
        const file = data[index].innerHTML;
        cy.get(`#${file}`)
          .click()
          .then(() => {
            cy.url().should("eq", `${baseUrl}/${file}`);
            cy.get(`#content-${file}`).should("exist");
          });
      });
  });
});

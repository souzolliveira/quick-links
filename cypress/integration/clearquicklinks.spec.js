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

  it("Verify if clear button works", () => {
    let file01, file02;
    let index01, index02;
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        index01 = Math.floor(Math.random() * data.length);
        file01 = data[index01].innerHTML;
        do {
          index02 = Math.floor(Math.random() * data.length);
        } while (index02 === index01);
        file02 = data[index02].innerHTML;
        cy.get(`#${file01}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file02}`).click();
      });
    cy.get("#clearButton")
      .click()
      .then(() => {
        cy.get("#sidebar").find("a").should("not.exist");
      });
  });
});

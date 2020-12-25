/* eslint-disable jest/valid-expect */
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

  it("Verify if enable checkbox works", () => {
    cy.get("#enableCheckbox").uncheck();
    let file01, file02;
    let index01, index02;
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        index01 = Math.floor(Math.random() * data.length);
        file01 = data[index01].innerHTML;
        cy.get(`#${file01}`).click();
        cy.get("#filesTitle").click();
      });
    cy.get("#sidebar").find("a").should("not.exist");

    cy.get("#enableCheckbox").check();
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        index02 = Math.floor(Math.random() * data.length);
        file02 = data[index02].innerHTML;
        cy.get(`#${file02}`).click();
      });
    cy.get("#sidebar").find("a").should("exist");
  });
});

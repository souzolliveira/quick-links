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

  it("Verify if when click on file, it's added on quick links in first position", () => {
    let file01, file02;
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        const index = Math.floor(Math.random() * data.length);
        file01 = data[index].innerHTML;
        cy.get(`#${file01}`).click();
      });
    cy.get("#filesTitle").click();
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        const index = Math.floor(Math.random() * data.length);
        file02 = data[index].innerHTML;
        if (file02 === file01) {
          if (file01 === data[0].innerHTML) {
            file02 = data[index + 1].innerHTML;
          } else {
            file02 = data[index - 1].innerHTML;
          }
        }
        cy.get(`#${file02}`).click();
      });
    cy.get("#sidebar")
      .find("a")
      .then((data) => expect(data[0].innerHTML).to.equal(file02));
  });
});

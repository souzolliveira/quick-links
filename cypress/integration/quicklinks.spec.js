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

  it("Verify if when click on file, it's added on quick links in first position and it isnt duplicated", () => {
    let file01, file02, file03;
    let index01, index02, index03;
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        index01 = Math.floor(Math.random() * data.length);
        file01 = data[index01].innerHTML;
        cy.get(`#${file01}`).click();
        cy.get("#filesTitle").click();
        do {
          index02 = Math.floor(Math.random() * data.length);
        } while (index02 === index01);
        file02 = data[index02].innerHTML;
        cy.get(`#${file02}`).click();
        cy.get("#filesTitle").click();
        do {
          index03 = Math.floor(Math.random() * data.length);
        } while (index03 === index01 || index03 === index02);
        file03 = data[index03].innerHTML;
        cy.get(`#${file03}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file01}`).click();
        cy.get("#filesTitle").click();
      });
    cy.get("#filesTitle").click();
    cy.get("#sidebar")
      .find("a")
      .then((data) => {
        expect(data[0].innerHTML).to.equal(file01);
        const array = [];
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].innerHTML);
          if (data[i].innerHTML === file01) array.push(data[i].innerHTML);
        }
        expect(array.length).to.equal(1);
      });
  });
});

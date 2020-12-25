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
          if (data[i].innerHTML === file01) array.push(data[i].innerHTML);
        }
        expect(array.length).to.equal(1);
      });
  });

  it("Verify if the quick links list doest exceed 10 links", () => {
    let file01,
      file02,
      file03,
      file04,
      file05,
      file06,
      file07,
      file08,
      file09,
      file10,
      file11;
    let index01,
      index02,
      index03,
      index04,
      index05,
      index06,
      index07,
      index08,
      index09,
      index10,
      index11;
    cy.get("#mainbar")
      .find("a")
      .then((data) => {
        index01 = Math.floor(Math.random() * data.length);
        file01 = data[index01].innerHTML;
        do {
          index02 = Math.floor(Math.random() * data.length);
        } while (index02 === index01);
        file02 = data[index02].innerHTML;
        do {
          index03 = Math.floor(Math.random() * data.length);
        } while (index03 === index01 || index03 === index02);
        file03 = data[index03].innerHTML;
        do {
          index04 = Math.floor(Math.random() * data.length);
        } while (
          index04 === index01 ||
          index04 === index02 ||
          index04 === index03
        );
        file04 = data[index04].innerHTML;
        do {
          index05 = Math.floor(Math.random() * data.length);
        } while (
          index05 === index01 ||
          index05 === index02 ||
          index05 === index03 ||
          index05 === index04
        );
        file05 = data[index05].innerHTML;
        do {
          index06 = Math.floor(Math.random() * data.length);
        } while (
          index06 === index01 ||
          index06 === index02 ||
          index06 === index03 ||
          index06 === index04 ||
          index06 === index05
        );
        file06 = data[index06].innerHTML;
        do {
          index07 = Math.floor(Math.random() * data.length);
        } while (
          index07 === index01 ||
          index07 === index02 ||
          index07 === index03 ||
          index07 === index04 ||
          index07 === index05 ||
          index07 === index06
        );
        file07 = data[index07].innerHTML;
        do {
          index08 = Math.floor(Math.random() * data.length);
        } while (
          index08 === index01 ||
          index08 === index02 ||
          index08 === index03 ||
          index08 === index04 ||
          index08 === index05 ||
          index08 === index06 ||
          index08 === index07
        );
        file08 = data[index08].innerHTML;
        do {
          index09 = Math.floor(Math.random() * data.length);
        } while (
          index09 === index01 ||
          index09 === index02 ||
          index09 === index03 ||
          index09 === index04 ||
          index09 === index05 ||
          index09 === index06 ||
          index09 === index07 ||
          index09 === index08
        );
        file09 = data[index09].innerHTML;
        do {
          index10 = Math.floor(Math.random() * data.length);
        } while (
          index10 === index01 ||
          index10 === index02 ||
          index10 === index03 ||
          index10 === index04 ||
          index10 === index05 ||
          index10 === index06 ||
          index10 === index07 ||
          index10 === index08 ||
          index10 === index09
        );
        file10 = data[index10].innerHTML;
        do {
          index11 = Math.floor(Math.random() * data.length);
        } while (
          index11 === index01 ||
          index11 === index02 ||
          index11 === index03 ||
          index11 === index04 ||
          index11 === index05 ||
          index11 === index06 ||
          index11 === index07 ||
          index11 === index08 ||
          index11 === index09 ||
          index11 === index10
        );
        file11 = data[index11].innerHTML;

        cy.get(`#${file01}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file02}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file03}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file04}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file05}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file06}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file07}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file08}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file09}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file10}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file11}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file05}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file06}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file07}`).click();
        cy.get("#filesTitle").click();
        cy.get(`#${file08}`).click();
      });

    cy.get("#filesTitle").click();

    cy.get("#sidebar")
      .find("a")
      .then((data) => {
        expect(data.length).to.equal(10);
      });
  });
});

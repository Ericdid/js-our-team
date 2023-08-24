// creiamo un array con i membri
const members = [
  {
    name: "Wayne Barnett",
    position: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Carrol",
    position: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    position: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    position: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    position: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    position: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];
const cardsContainer = document.getElementById(`cards-container`);
// creiamo un ciclo "for"

for (member of members) {
  cardsContainer.innerHTML += `
    <div class="card col-4 mt-3 d-flex align-items-center text-center ">
        <div class="card-body">
            <img src="./img/${member.photo}">
            <h5 class ="card-title"> ${member.name}
            <p class "card-text"> ${member.position}
    `;
}

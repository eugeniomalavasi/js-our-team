// MILESTONE 0
const teamData = [
    {
        name: "Aragorn",
        role: "Re di Gondor",
        img: "aragorn.webp"
    },
    {
        name: "Boromir",
        role: "Capitano di Gondor",
        img: "boromir.webp"
    },
    {
        name: "Frodo Baggins",
        role: "Portare dell'anello",
        img: "Frodo_Elijah_Wood.webp"
    },
    {
        name: "Gandalf",
        role: "Ainur",
        img: "Gandalf.jpg"
    },
    {
        name: "Gimli",
        role: "Amico degli Elfi",
        img: "gimli.jpg"
    },
    {
        name: "Legolas",
        role: "Elfo insopportabile",
        img: "legolas.jpeg"
    },
    {
        name: "Peregrino Tuc",
        role: "Guardia bianca",
        img: "Peregrino.webp"
    },
    {
        name: "Samvise Gamgee",
        role: "Sindaco di Hobbyville",
        img: "sam.webp"
    },
    {
        name: "Merryadoc Brandibuck",
        role: "Gozzovigliatore",
        img: "Merry.webp"
    }
]
console.log(teamData);

// MILESTONE 1
for (let i = 0; i < teamData.length; i++)  { //object
    curObj = teamData[i]; 
    for (let key in curObj) {
        console.log(curObj[key]);
    }
    console.log("------------------------------");
    
    // MILESTONE 2
    const printCard = document.querySelector(".row").innerHTML += 
    `<div class="card col-3 p-0">
    <img src="./img/${curObj.img}" class="card-img-top" alt="lotr">
    <div class="card-body">
        <h5 class="card-title fs-3">${curObj.name}</h5>
        <h6 class="role">Role: ${curObj.role}</h6>
    </div>
    </div>`
}

console.log(teamData[5].role);
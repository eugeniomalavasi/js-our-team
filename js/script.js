// MILESTONE 0
const teamData = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
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
    `<div class="card" style="width: 18rem;">
    <img src="./img/${curObj.img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${curObj.name}</h5>
        <h6 class="role">Role: ${curObj.role}</h6>
    </div>
    </div>`
}

console.log(teamData[5].role);
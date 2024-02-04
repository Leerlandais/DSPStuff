let addBut = document.getElementById("addButton");
let sysName = document.getElementById("sysName");
let planetName = document.getElementById("planetName");

addBut.addEventListener("click", addSystem);

function addSystem(){
    var newSysName = prompt("Enter the name of your system");
    var newPlanets = prompt("How many planets?");
    let testEntry = /d/.test(newPlanets);
    if (testEntry === false) {
        newPlanets = prompt("How many planets?");   
    }else {
    }
    console.log(testEntry);

    sysName.textContent = newSysName
    console.log(newSysName, " : ", newPlanets);
}
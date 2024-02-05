let addBut = document.getElementById("addButton");
let tableBody = document.getElementById("innerTable");
const placeTabs = document.createElement("tr");
const placeList = document.createElement("td");
let romNums = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
addBut.addEventListener("click", addSystem);

function addSystem(){
    var newSysName = prompt("Enter the name of your system");
   if (/['a-z']/.test(newSysName)){
       tableBody.appendChild(placeTabs);
       tableBody.appendChild(placeList);
       tableBody.textContent=(newSysName);
       console.log(newSysName);
       planetCount(newSysName);
}else {
    addSystem();
}
}
    function planetCount(newSysName){
        var planetCount = prompt('How many planets in '+newSysName);
        if (isNaN(planetCount || planetCount >=9)){
            alert("Please enter a number from 1 - 8");
            planetCount(newSysName);
        }else {
            console.log(planetCount);
            for (i = 0; i < planetCount; i++){
                tableBody.appendChild(placeList);
                placeList.textContent = (newSysName+romNums[i]);
            }
        }
}
    


/*
    for (i = 1; i <= newPlanets; i++){
        sysPlanets.push(newSysName+" "+romNums[i - 1]);
        const placePlanets = document.createElement("td");
        planetList.appendChild(placePlanets)
        planetList.classList.add("planetList");
        planetList.id = "list"+i; 
        planetList.textContent = sysPlanets[i];
    }
}
var newPlanets = prompt("How many planets?");
    if(isNaN(newPlanets || newPlanets >= 9)){
        alert("Please enter a number from 1 - 8");
        planetCount(newSysName);
        
    }else {
        const placeTabs = document.createElement("tr");
        const placeList = document.createElement("td");
        tableBody.appendChild(placeTabs)
        tableBody.id = "planetTab";
        var planetList = document.getElementById("planetTab");
            for (i = 1; i < newPlanets; i++){
                planetList.appendChild(placeList); 
                planetList.id = "planList"+i;
            }
    

*/
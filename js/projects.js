
const techUsedDescriptions =
 [
    ["b0e1","b0e1", "b0e2", "b0e3", , , ],
    ["b1e0","b1e1", "b1e2", "b1e3", , , ],
    ["b2e0","b2e1", "b2e2", "b2e3", , , ]
  ];

const techUsedContainer = document.querySelectorAll(".tech_used_container"); //belka, jest ich 3
const techUsedDescriptionText = document.querySelectorAll(".tech_used_description_text"); //opis pod belka jest ich 3

for(let i = 0; i < techUsedContainer.length; i++) {   //iterujemy po belce
    //console.log("-----belka nr:" + i);
    for(let j = 0; j < ((techUsedContainer[i].querySelectorAll(".tech_used")).length); j++) { //iterujemy po poszczegolnych elementach belki
        techUsedContainer[i].querySelectorAll(".tech_used")[j].addEventListener("mouseover", function(event) {
            console.log("belka:"+ i + "element w belce:" + j);
            techUsedDescriptionText[i].style.visibility = "visible";
            techUsedDescriptionText[i].textContent = techUsedDescriptions[i][j];

        })
        techUsedContainer[i].querySelectorAll(".tech_used")[j].addEventListener("mouseout", function(event) {
            techUsedDescriptionText[i].style.visibility = "hidden";

        })
  
    }
  
}



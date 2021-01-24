

let tech_used_descriptions =
 [
    ["b0e1","b0e1", "b0e2", "b0e3", , , ],
    ["b1e0","b1e1", "b1e2", "b1e3", , , ],
    ["b2e0","b2e1", "b2e2", "b2e3", , , ]
  ];

let tech_used = document.querySelectorAll(".tech_used"); //pojedyncze elementy jest ich 3 x 3=9
let tech_used_container = document.querySelectorAll(".tech_used_container"); //belka, jest ich 3
let tech_used_description_text = document.querySelectorAll(".tech_used_description_text"); //opis pod belka jest ich 3


var arry = [];

for(let i = 0; i < tech_used_container.length; i++) {   //iterujemy po belce
    //console.log("-----belka nr:" + i);
    for(let j = 0; j < ((tech_used_container[i].querySelectorAll(".tech_used")).length); j++) { //iterujemy po poszczegolnych elementach belki
        tech_used_container[i].querySelectorAll(".tech_used")[j].addEventListener("mouseover", function(event) {
            console.log("belka:"+ i + "element w belce:" + j);
            tech_used_description_text[i].style.visibility = "visible";
            tech_used_description_text[i].textContent = tech_used_descriptions[i][j];

        })
        tech_used_container[i].querySelectorAll(".tech_used")[j].addEventListener("mouseout", function(event) {
            tech_used_description_text[i].style.visibility = "hidden";

        })
  
    }
  
}



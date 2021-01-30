const technologies = document.querySelectorAll(".technology");
const technologiesDescriptionText = document.querySelector(".technologies_description_text");
const technologiesDescription = document.querySelector(".technologies_description");
const descriptions = ["Tu jest opis moich umiejętności w wybranej technologii 1", "Tu jest opis moich umiejętności w wybranej technologii 2", "Tu jest opis moich umiejętności w wybranej technologii 3", "Tu jest opis moich umiejętności w wybranej technologii 4"];
for(let i = 0; i < technologies.length; i++) {
   //h1Elements[i].style.color = "#fff";
   technologies[i].addEventListener("mouseover", function(event) {
    setVisibleTechDescription();
    //event.target.textContent = "aaa";
    technologiesDescriptionText.textContent = descriptions[i];
    //console.log(this.id);
});

    technologies[i].addEventListener("mouseout", function(event) {
        technologiesDescriptionText.textContent = "...";
    setInvisibleTechDescription();
});

}
function setVisibleTechDescription() {
    technologiesDescription.style.display = "flex";
}
function setInvisibleTechDescription() {
    technologiesDescription.style.display = "none";
}

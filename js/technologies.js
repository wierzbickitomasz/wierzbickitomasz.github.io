let technologies = document.querySelectorAll(".technology");
let technologies_description_text = document.querySelector(".technologies_description_text");
let technologies_description = document.querySelector(".technologies_description");
let descriptions = ["Tu jest opis moich umiejętności w wybranej technologii 1", "Tu jest opis moich umiejętności w wybranej technologii 2", "Tu jest opis moich umiejętności w wybranej technologii 3", "Tu jest opis moich umiejętności w wybranej technologii 4"];
for(let i = 0; i < technologies.length; i++) {
   //h1Elements[i].style.color = "#fff";
   technologies[i].addEventListener("mouseover", function(event) {
    setVisibleTechDescription();
    //event.target.textContent = "aaa";
    technologies_description_text.textContent = descriptions[i];
    //console.log(this.id);
});

    technologies[i].addEventListener("mouseout", function(event) {
        technologies_description_text.textContent = "...";
    setInvisibleTechDescription();
});

}
function setVisibleTechDescription() {
    technologies_description.style.display = "flex";
}
function setInvisibleTechDescription() {
    technologies_description.style.display = "none";
}

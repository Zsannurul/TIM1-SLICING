const pilihKelas = document.getElementById("pilihKelas");
const kotakMenu = document.querySelector(".kotak-menu");

pilihKelas.addEventListener("click", function() {
    kotakMenu.style.display = (kotakMenu.style.display === "block") ? "none" : "block";
});

document.addEventListener("click", function(event) {
    if (!kotakMenu.contains(event.target) && event.target !== pilihKelas) {
        kotakMenu.style.display = "none";
    }
});
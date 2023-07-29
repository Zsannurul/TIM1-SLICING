const showOptionsButton = document.getElementById("showOptions");
const jamOptionsSelect = document.getElementById("jamOptions");

showOptionsButton.addEventListener("click", function() {
    if (jamOptionsSelect.style.display === "none") {
        jamOptionsSelect.style.display = "block";
    } else {
        jamOptionsSelect.style.display = "none";
    }
});

jamOptionsSelect.addEventListener("change", function() {
    const selectedJam = jamOptionsSelect.value;
    alert("Anda memilih jam: " + selectedJam);
    // Lakukan tindakan lain sesuai kebutuhan Anda dengan pilihan jam yang dipilih
});

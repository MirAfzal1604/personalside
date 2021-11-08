function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "flex";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
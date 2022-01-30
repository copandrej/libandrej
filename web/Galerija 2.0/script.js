var stevilkaSlike = 0;
var stevka;
document.getElementById("nazaj").addEventListener("click", function(){
    if (stevilkaSlike <= 0) {
        stevka = 16;
        spremembaSlike(stevilkaSlike,stevka);
        stevilkaSlike = 16;
    } else {
        stevka = stevilkaSlike - 1;
        spremembaSlike(stevilkaSlike,stevka);
        stevilkaSlike--;
    }
});
document.getElementById("naprej").addEventListener("click", function(){
    if (stevilkaSlike >= 16) {
        stevka = 0;
        spremembaSlike(stevilkaSlike,stevka)
        stevilkaSlike = 0;
    } else {
        stevka = stevilkaSlike + 1;
        spremembaSlike(stevilkaSlike,stevka);
        stevilkaSlike++;
    }
});
function spremembaSlike(stevilka,seenastevilka) {
    document.getElementById("slikaVGaleriji"+stevilka).style.display = "none";
    document.getElementById("slikaVGaleriji"+seenastevilka).style.display = "block";
}
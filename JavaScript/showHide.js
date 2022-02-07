/**
 * @el element container okoli besedila ki se odpira/zapira 
 * velikosti prilagodi naslovu. Razširjenost se prilagodi sama glede na količino besedila ki je skrito
 * child nodes[i] -> i je index otroka katere velikost je pomembna (npr paragraph z besedilom). Po potrebi tweakaj števila; glede na statične style
 * ta fun je bila namreč narejen za zelo specifični primer. Izrezano iz https://github.com/copandrej/Kino-Bled-21
 */
function showHide(el) {
    (el.clientHeight >= 45) ? el.style.height = "41px": el.style.height = (el.childNodes[3].clientHeight + 41).toString() + "px";
}
/**
 * če se spremeni vsebina asinhrono potem kliči poravnaj()
 */
function poravnaj(el) {
    if (el.clientHeight >= 45) el.style.height = (el.childNodes[3].clientHeight + 41).toString() + "px";
}
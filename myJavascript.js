/* Functios to change model to h2 topic and add maintenance info to list */

function toyotaInfo(){

    // Change h2 topic to car model
    document.getElementsByTagName('h3')[0].innerHTML = "Toyota Camry 2.2 16v 1996-2001.<i> Every 15,000 km/ 12 months";
    
    // Add element to UL
    const node = document.createElement("LI");
    const textNode = document.createTextNode("Moottoriöljy API SG/SH SAE 10w-30 Öljyproppu 30Nm");
    node.appendChild(textNode);
    document.getElementById("ulList").appendChild(node);
}
function peugeotInfo(){
    document.getElementsByTagName('h3')[0].innerHTML = "Peugeot 607 2.2 16v 2005-2011.<i> Every 30,000/ 24 months";
}
/* Empty list if user wants add own content */
function emptyList(){
    document.getElementsByTagName('h3')[0].innerHTML = "Choose car or add items in list";
}
// create close button to list element

var doList = document.getElementsByTagName("LI");

for (var i = 0; i < doList.length; i++) {
    var btn = document.createElement("BTN");
    var txt = document.createTextNode("\u00D7");
    btn.className = "close";
    btn.appendChild(txt);
    doList[i].appendChild(btn);
}
// When close button is pressed hide list element

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "overline" when click on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('overline');
    }
}, false);

// Functions to change model to h2 topic and add maintenance info to list as preset for example

function toyotaInfo() {

    // Change h2 topic to car model
    document.getElementsByTagName('h3')[0].innerHTML = "Toyota Camry 2.2 16v 1996-2001.<i> Every 15,000 km/ 12 months";

    // Remove elements from list
    var ulList = document.getElementById('ulList');
    ulList.innerHTML = '';

    // Add array list
    const tInfo = [
        "Moottoriöljy API SG/SH SAE 10w-30 Tilavuus: 3.6L Öljyproppu 30Nm",
        "Öljysuodatin",
        "Tarkista nesteet Moottori",
        "Tarkista nesteet Jäähdytys",
        "Tarkista vaihteistoöljyn määrä ja vuodot",
        "Tarkista jarrupalojen paksuus",
        "Tarkista jarrulevyjen kunto"
    ];
    // Get items from array
    for (var i = 0; i < tInfo.length; i++) {

        let txtSplit = tInfo[i];
        const node = document.createElement("LI");
        const textNode = document.createTextNode(txtSplit);
        node.appendChild(textNode);
        document.getElementById("ulList").appendChild(node);

    }
}

function peugeotInfo() {

    // Change h2 topic to car model
    document.getElementsByTagName('h3')[0].innerHTML = "Peugeot 607 2.2 16v 2005-2011.<i> Every 30,000/ 24 months";

    // Remove elements from list
    var ulList = document.getElementById('ulList');
    ulList.innerHTML = '';

    // Add array list
    const pInfo = [
        "Moottoriöljy ACEA A3/B3 SAE 10w-40 Tilavuus: 4.25L Öljyproppu 34Nm",
        "Öljysuodatin 15Nm",
        "Tarkista nesteet Moottori",
        "Tarkista nesteet Jäähdytys",
        "Tarkista vaihteistoöljyn määrä ja vuodot",
        "Tarkista jarrupalojen paksuus",
        "Tarkista jarrulevyjen kunto"
    ];
    // Get items from array
    for (var i = 0; i < pInfo.length; i++) {

        let txtSplit = pInfo[i];
        const node = document.createElement("LI");
        const textNode = document.createTextNode(txtSplit);
        node.appendChild(textNode);
        document.getElementById("ulList").appendChild(node);
    }
}

// Empty list if user wants add own content
function emptyList() {

    // Change h2 topic back
    document.getElementsByTagName('h3')[0].innerHTML = "Choose car or add items to list";

    // Remove elements from list
    var ulList = document.getElementById('ulList');
    ulList.innerHTML = '';
}

// Add item to list
function addItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputText").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);

    // if textfield is empty or less than 3 characters, change textfield background to red
    if (inputValue === '' || inputValue.length <= 3) {
        document.getElementById("inputText").style.borderColor = "red";
        document.getElementById("inputText").placeholder = "Invalid input! Add more than 3 characters";
    } else {
        // If more than 3 characters then add to list
        document.getElementById("ulList").appendChild(li);
        document.getElementById("inputText").placeholder = "Add item to list";
        document.getElementById("inputText").style.borderColor = "rgb(65, 65, 65)";
        // document.getElementsByTagName('h3')[0].innerHTML = "Item added!";
    }
    // Empty textfield
    document.getElementById("inputText").value = "";

    // add close button to list item
    var btn = document.createElement("BTN");
    var txt = document.createTextNode("\u00D7");
    btn.className = "close";
    btn.appendChild(txt);
    li.appendChild(btn);

    // Hide added item from list by clicking close button
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            document.getElementsByTagName('h3')[0].innerHTML = "Item removed!";
        }
    }
}
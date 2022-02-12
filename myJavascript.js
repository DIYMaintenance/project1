var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

/* Functions to change model to h2 topic and add maintenance info to list */

function toyotaInfo() {

    // Change h2 topic to car model
    document.getElementsByTagName('h3')[0].innerHTML = "Toyota Camry 2.2 16v 1996-2001.<i> Every 15,000 km/ 12 months";

    // Remove elements from list
    var ulList = document.getElementById('ulList');
    ulList.innerHTML = '';

    // Add array element to UL
    const tInfo = [
        "Moottoriöljy API SG/SH SAE 10w-30 3.6L Öljyproppu 30Nm",
        "Öljysuodatin",
        "Tarkista nesteet Moottori",
        "Tarkista nesteet Jäähdytys",
        "Tarkista vaihteistoölyn määrä ja vuodot",
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

    // Add array element to UL
    const pInfo = [
        "Moottoriöljy ACEA A3/B3 SAE 10w-40 4.25L Öljyproppu 34Nm",
        "Öljysuodatin 15Nm",
        "Tarkista nesteet Moottori",
        "Tarkista nesteet Jäähdytys",
        "Tarkista vaihteistoölyn määrä ja vuodot",
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
    var li = document.createElement("LI");
    var inputValue = document.getElementById("inputText").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    // if textfield is empty or less than 3 characters, change textfield background to red
    if (inputValue === '' || inputValue.length <= 3) {
        document.getElementById("inputText").style.backgroundColor = "red";
    } else {
        document.getElementById("ulList").appendChild(li);
    }
    document.getElementById("inputText").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


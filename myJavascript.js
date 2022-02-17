//variables for localstorage
var list = document.querySelector('#ulList');
var title = document.querySelector('.carInfo');
var saveCount = document.querySelector('#laskuri');
var compCount = document.querySelector('#completed');


// Item completed variable in function
let comp = 0;

document.getElementById("completed").innerHTML = ("Completed: " + comp);

// Item calculator variable change in function
let counter = 0;
document.getElementById("laskuri").innerHTML = ("Items on list: " + counter);

// add items to list by pushing "enter"
var input = document.getElementById("inputText");
input.addEventListener("keyup", function (ev) {
    if (ev.keyCode === 13) {
        addItem();
    }
});

// Add a "overline" when click on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('overline');
    }
    // call function to calculate completed tasks
    if (ev.target.classList.toggle('overline' === true)) {
        completed();
    } else {
        notCompleted();
    }
    save();
}, false);

// Remove completed when click overline off
function notCompleted() {
    comp--;
    document.getElementById("completed").innerHTML = ("Completed: " + comp);
}

//Counting completed tasks
function completed() {
    comp++;
    document.getElementById("completed").innerHTML = ("Completed: " + comp);
}

//Counting items added to list
function addCounter() {
    counter++;
    document.getElementById("laskuri").innerHTML = ("Items on list: " + counter);
}
// Counting items removed on list
function removeCounter() {
    counter--;
    document.getElementById("laskuri").innerHTML = ("Items on list: " + counter);
}
//Reset counter & reset Completed tasks

function resetCounter() {
    counter = 0;
    comp = 0;
    document.getElementById("laskuri").innerHTML = ("Items on list: " + counter);
    document.getElementById("completed").innerHTML = ("Completed: " + comp);
}

function addDelButton() {

}
// Functions to change model to h2 topic and add maintenance info to list as preset for example

function toyotaInfo() {

    //reseting counter before adding items
    resetCounter();

    // Change h3 topic to car model
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
        addCounter();
        let txtSplit = tInfo[i];
        var node = document.createElement("LI");
        const textNode = document.createTextNode(txtSplit);
        node.appendChild(textNode);
        document.getElementById("ulList").appendChild(node);

        // add close button to list item
        var btn = document.createElement("BTN");
        var txt = document.createTextNode("\u00D7");
        btn.className = "close";
        btn.appendChild(txt);
        node.appendChild(btn);
        //save list to localstorage
        save();
        var close = document.getElementsByClassName("close");
        for (var b = 0; b < close.length; b++) {
            close[b].onclick = function () {
                var div = this.parentElement;
                div.parentNode.removeChild(div);
                // change h3 element when item removed
                document.getElementsByTagName('h3')[0].innerHTML = "<span style='color: red;'>Item removed!";
                removeCounter();
                comp--;
            }
        }
    }

}

function peugeotInfo() {
    //reseting counter before adding items
    resetCounter();
    // Change h3 topic to car model
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
        addCounter();
        let txtSplit = pInfo[i];
        const node = document.createElement("LI");
        const textNode = document.createTextNode(txtSplit);
        node.appendChild(textNode);
        document.getElementById("ulList").appendChild(node);

        // add close button to list item
        var btn = document.createElement("BTN");
        var txt = document.createTextNode("\u00D7");
        btn.className = "close";
        btn.appendChild(txt);
        node.appendChild(btn);
        //save list to localstorage

        save();
        var close = document.getElementsByClassName("close");
        for (var b = 0; b < close.length; b++) {
            close[b].onclick = function () {
                var div = this.parentElement;
                div.parentNode.removeChild(div);
                // change h3 element when item removed
                document.getElementsByTagName('h3')[0].innerHTML = "<span style='color: red;'>Item removed!";
                removeCounter();
                comp--;
            }
        }

    }
}

// Empty list if user wants add own or new content. Also reset localstorage
function emptyList() {

    // Change h3 topic back
    document.getElementsByTagName('h3')[0].innerHTML = "Choose car or add items to list";

    // Remove elements from list
    var ulList = document.getElementById('ulList');
    ulList.innerHTML = '';
    // clear localstorage and reset counter
    localStorage.clear();
    resetCounter();
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
        document.getElementsByTagName('h3')[0].innerHTML = "Item added!";
        // call function to add +1 to counter and save list to localstorage
        addCounter();
        save();
    }
    // Empty textfield
    document.getElementById("inputText").value = "";

    // add close button to list item
    var btn = document.createElement("BTN");
    var txt = document.createTextNode("\u00D7");
    btn.className = "close";
    btn.appendChild(txt);
    li.appendChild(btn);
    save();


    // Delete added item from list by clicking close button

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.parentNode.removeChild(div);
            // change h3 element when item removed
            removeCounter();
            document.getElementsByTagName('h3')[0].innerHTML = "<span style='color: red;'>Item removed!";
            comp--;
        }
    }
}

// saving data
function save() {
    window.localStorage.ulList = list.innerHTML;
    window.localStorage.carInfo = title.innerHTML;
    window.localStorage.laskuri = saveCount.innerHTML;
    window.localStorage.counter2 = counter;
    window.localStorage.valmis = compCount.innerHTML;
    window.localStorage.complete2 = comp;
}
//retrieve data from localstorage
function ret() {
    var data = window.localStorage.ulList;
    var car = window.localStorage.carInfo;
    var count = window.localStorage.laskuri;
    var counter3 = window.localStorage.counter2;
    var complet = window.localStorage.valmis;
    var complete3 = window.localStorage.complete2;

    if (!data) {
        document.getElementsByTagName('h3')[0].innerHTML = "Choose car or add items to list";
    } else {
        list.innerHTML = data;
        title.innerHTML = car;
        saveCount.innerHTML = count;
        counter = counter3;
        compCount.innerHTML = complet;
        comp = complete3;

    }
}
ret();

// When close button is pressed hide list element

var close = document.getElementsByClassName("close");
for (var c = 0; c < close.length; c++) {
    close[c].onclick = function () {
        var div = this.parentElement;
        div.parentNode.removeChild(div);
        // change h3 element when item removed
        document.getElementsByTagName('h3')[0].innerHTML = "<span style='color: red;'>Item removed!";
        comp--;
        removeCounter();
    }
}
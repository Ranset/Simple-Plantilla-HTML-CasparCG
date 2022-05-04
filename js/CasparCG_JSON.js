/* Structure of data sent from CasparCG:
                    {"#idCaspar":"#valCaspar#"}
                */
// Global variable for data from CasparCG
var dataCaspar = {};

// Replace characters that could become a problem if left as is
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "&quot;").replace(/'/g,
        "'");
}

// Main function to insert data
function dataInsert(dataCaspar) {
    for (var idCaspar in dataCaspar) {
        var idTemplate = document.getElementById(idCaspar);
        if (idTemplate != undefined) {
            idTemplate.innerHTML = escapeHtml(dataCaspar[idCaspar]);
        }
    }
}

// Call for a update of data from CasparCG client
function update(str) {
    dataCaspar = JSON.parse(str || "null");
    dataInsert(dataCaspar); // Insert data
}


/************** PREVIEW HTML CONTROLS  ******************/
function PlayAnim() {

    var text = document.getElementById('data').value;
    update(text);
    play();
}

function StopAnim() {

    stop();
}

function UpdtAnim(){
    var text = document.getElementById("data").value;
    console.log(text);
    update(text);
}

function NextAnim(){
    next();
}

document.getElementById('playBtn').addEventListener("click", PlayAnim);
document.getElementById('stopBtn').addEventListener("click", StopAnim);
document.getElementById('updtpBtn').addEventListener("click", UpdtAnim);
document.getElementById('nextBtn').addEventListener("click", NextAnim);

//// Dragable function
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
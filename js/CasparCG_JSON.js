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
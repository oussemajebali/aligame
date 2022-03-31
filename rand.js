const button = document.getElementById("choi");
const csvFile = document.getElementById("csvFileInput");
var table = document.getElementById('csvRoot');
var thead = table.querySelector('thead');
const result = document.getElementById('result');

var data;

function csvToArray(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    return {
        header: headers,
        names: rows
    };
}


csvFile.addEventListener("change", function(e) {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        data = csvToArray(text);
        data.names.forEach(element => {
            var row = table.insertRow(0);
            var cell = row.insertCell(0);
            cell.innerHTML = element;
        });
        var row = thead.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = data.header;
    };

    reader.readAsText(input);
});
button.addEventListener("click", function(e) {
    e.preventDefault();
    result.classList.remove('appear');
    setTimeout(() => {
        const list = data.names;
        const winner = list[Math.floor(Math.random() * list.length)]
        result.innerHTML = winner;
        result.classList.add('appear');
    }, 500);
})
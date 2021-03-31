function addRow() {
    var table = document.getElementById("Tablica");
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("nazivPredmeta").value);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("godina").value);
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("td");
    var cellText = document.createTextNode(document.getElementById("smjer").value);
    cell.appendChild(cellText);
    row.appendChild(cell);
    table.appendChild(row);
    }
    
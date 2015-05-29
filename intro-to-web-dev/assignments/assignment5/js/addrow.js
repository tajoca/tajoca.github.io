/*jslint browser: true,
    devel: true,
    plusplus: true,
    maxerr: 1,
    indent: 4,
    maxlen: 85 */

window.onload = function () {
    "use strict";

    var button = document.getElementsByTagName("button")[0],
        qty,
        description,
        cost;

    function addRow() {
        qty = document.getElementById("qty").value;
        description = document.getElementById("description").value;
        cost = document.getElementById("cost").value;
        /* Add your code below this line. */
        var tbody = document.getElementsByTagName("tbody")[0];
        var tr = document.createElement("tr");
        var qtytextNode = document.createTextNode(qty);
        var td = document.createElement("td");
        td.appendChild(qtytextNode)
        tr.appendChild(td)
        tbody.appendChild(tr)
        var descriptiontextNode = document.createTextNode(description);
        var td = document.createElement("td");
        td.appendChild(descriptiontextNode)
        tr.appendChild(td)
        tbody.appendChild(tr)
        var costtextNode = document.createTextNode(cost);
        var td = document.createElement("td");
        td.appendChild(costtextNode)
        tr.appendChild(td)
        tbody.appendChild(tr)
        /* Add your code above this line. */
    }

    button.addEventListener("click", addRow, false);
};

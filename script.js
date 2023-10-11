//nested dom created in DOM  

var container = document.createElement("div");
container.setAttribute("class","container");
//BY giving the setAttribute method can set the value of element's

var row = document.createElement("div");
row.setAttribute("class","row");

var col = document.createElement("div");
col.setAttribute("class","col");

col.innerHTML ="THIS IS TAG";

row.append(col);
container.append(row);
document.body.append(container);
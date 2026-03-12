const grid = document.getElementById("grid");

// Rows A to Z
const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 15 columns
const totalColumns = 15;

for (let r = 0; r < rows.length; r++) {
  for (let c = 1; c <= totalColumns; c++) {

    const id = rows[r] + c;

    const div = document.createElement("div");
    div.className = "slot";
    div.textContent = id;
    div.id = id;

    grid.appendChild(div);
  }
}

/* READ DATA FROM FIREBASE */

setInterval(() => {

fetch("https://parkingserver-964ae-default-rtdb.asia-southeast1.firebasedatabase.app/parking.json")
.then(res => res.json())
.then(data => {

  const A1 = document.getElementById("A1");
  const A4 = document.getElementById("A4");
  const A5 = document.getElementById("A5");
  const A6 = document.getElementById("A6");

  if(data.A1 == 1) A1.style.background="#dc2626"; else A1.style.background="#16a34a";
  if(data.A4 == 1) A4.style.background="#dc2626"; else A4.style.background="#16a34a";
  if(data.A5 == 1) A5.style.background="#dc2626"; else A5.style.background="#16a34a";
  if(data.A6 == 1) A6.style.background="#dc2626"; else A6.style.background="#16a34a";

});

},1000);

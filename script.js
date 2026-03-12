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

if(!data) return;

["A1","A4","A5","A6"].forEach(id => {

  const slot = document.getElementById(id);
  if(!slot) return;

  if(data[id] == 1)
    slot.style.background = "#dc2626";
  else
    slot.style.background = "#16a34a";

});

});

},1000);

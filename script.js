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

/* READ DATA FROM FIREBASE */

/* READ DATA FROM FIREBASE */

/* READ DATA FROM FIREBASE */

/* READ DATA FROM FIREBASE */

/* GITHUB DEPLOYMENT TEST */

setInterval(() => {

  // We are completely ignoring the database right now to test GitHub
  ["A1","A4","A5","A6"].forEach(id => {
    
    const slot = document.getElementById(id);
    if(!slot) return;

    // Force all 4 slots to turn green no matter what
    slot.style.background = "#16a34a"; 

  });

}, 1000);

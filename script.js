const grid = document.getElementById("grid");

// Rows A to Z
const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 15 columns
const totalColumns = 15;

for (let r = 0; r < rows.length; r++) {
  for (let c = 1; c <= totalColumns; c++) {
    const div = document.createElement("div");
    div.className = "slot";
    div.textContent = rows[r] + c;  // A1, A2 ... Z15
    grid.appendChild(div);
  }
}
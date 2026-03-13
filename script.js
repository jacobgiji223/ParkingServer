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

setInterval(() => {

  fetch("https://parkingserver-964ae-default-rtdb.asia-southeast1.firebasedatabase.app/parking.json")
    .then(res => res.json())
    .then(data => {
      
      // Safety check in case the database is empty
      if (!data) return; 

      // Loop directly through 'data' because Firebase already stripped the "parking" wrapper
      Object.keys(data).forEach(id => {
        const slot = document.getElementById(id);
        if (!slot) return; 

        // Force the background color directly based on the 1 or 0
        if (data[id] == 1) {
          slot.style.background = "#dc2626"; // Occupied = Red
        } else {
          slot.style.background = "#16a34a"; // Available = Green
        }
      });

    })
    .catch(err => console.error("Firebase fetch error:", err));

}, 1000);

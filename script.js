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

setInterval(() => {

  fetch("https://parkingserver-964ae-default-rtdb.asia-southeast1.firebasedatabase.app/parking.json")
    .then(res => res.json())
    .then(data => {
      
      // 1. Target the nested 'parking' object from your JSON
      const parkingData = data.parking;
      if (!parkingData) return; 

      // 2. Loop through every slot Firebase sends back
      Object.keys(parkingData).forEach(id => {
        const slot = document.getElementById(id);
        if (!slot) return; 

        // 3. Add or remove the CSS class based on the 1 or 0
        if (parkingData[id] == 1) {
          slot.classList.add("occupied");
        } else {
          slot.classList.remove("occupied");
        }
      });

    })
    .catch(err => console.error("Firebase fetch error:", err));

}, 1000);

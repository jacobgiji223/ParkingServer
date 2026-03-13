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

/* READ DATA FROM FIREBASE */

setInterval(() => {

fetch("https://parkingserver-964ae-default-rtdb.asia-southeast1.firebasedatabase.app/parking.json")
.then(res => res.json())
.then(data => {

// Safely target the "parking" wrapper from your JSON
const parkingData = data.parking;

// If parkingData doesn't exist yet, stop here to prevent errors
if(!parkingData) return;

// Loop only through the 4 specific slots you are using right now
["A1","A4","A5","A6"].forEach(id => {

  const slot = document.getElementById(id);
  if(!slot) return;

  // Read from parkingData instead of data
  if(parkingData[id] == 1) {
    slot.style.background = "#dc2626"; // 1 = Red
  } else {
    slot.style.background = "#16a34a"; // 0 = Green
  }

});

})
.catch(err => console.error(err));

}, 1000);

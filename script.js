const grid = document.getElementById("grid");

// Rows A to Z, 15 Columns
const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

// INITIALIZE THE PIE CHART
const canvas = document.getElementById('parkingChart');
let parkingChart = null;

if (canvas) {
  const ctx = canvas.getContext('2d');
  parkingChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Occupied', 'Available'],
      datasets: [{
        data: [0, 6], 
        backgroundColor: ['#dc2626', '#16a34a'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false } // Hid the legend to keep the side-by-side view clean
      }
    }
  });
}

/* READ DATA FROM FIREBASE */
setInterval(() => {

  fetch("https://parkingserver-964ae-default-rtdb.asia-southeast1.firebasedatabase.app/parking.json")
  .then(res => res.json())
  .then(data => {

    // Stop if we don't get data back
    if(!data) return;

    let occupiedCount = 0;
    let availableCount = 0;
    
    // STRICTLY limit logic to these 6 demo slots
    const trackedSlots = ["A1", "A2", "A3", "A4", "A5", "A6"];

    trackedSlots.forEach(id => {
      const slot = document.getElementById(id);
      if(!slot) return;

      // Check the data directly (data[id] instead of parkingData[id])
      if(data[id] == 1) {
        slot.style.background = "#dc2626"; // Red (Occupied)
        occupiedCount++;
      } else {
        slot.style.background = "#16a34a"; // Green (Available)
        availableCount++;
      }
    });

    // CALCULATE PERCENTAGE
    let availablePercent = Math.round((availableCount / 6) * 100);

    // UPDATE PIE CHART
    if (parkingChart) {
      parkingChart.data.datasets[0].data = [occupiedCount, availableCount];
      parkingChart.update();
    }

    // UPDATE TEXT
    const percentText = document.getElementById("percent-text");
    const detailsText = document.getElementById("details-text");
    
    if (percentText) percentText.innerText = `${availablePercent}% Free`;
    if (detailsText) detailsText.innerText = `${availableCount} of 6 Open`;

  })
  .catch(err => console.error("Firebase fetch error:", err));

}, 1000);

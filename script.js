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

const kg = document.getElementById("kg");
const lb = document.getElementById("lb");
const oz = document.getElementById("oz");

function fromKg() {
  if (!kg.value || kg.value < 0) {
    lb.value = "";
    oz.value = "";
    return;
  }
  
  let kgVal = parseFloat(kg.value);
  lb.value = (kgVal * 2.20462).toFixed(2);
  oz.value = (kgVal * 35.274).toFixed(2);
}

function fromLb() {
  if (!lb.value || lb.value < 0) {
    kg.value = "";
    oz.value = "";
    return;
  }
  
  let lbVal = parseFloat(lb.value);
  kg.value = (lbVal / 2.20462).toFixed(2);
  oz.value = (lbVal * 16).toFixed(2);
}

function fromOz() {
  if (!oz.value || oz.value < 0) {
    kg.value = "";
    lb.value = "";
    return;
  }
  
  let ozVal = parseFloat(oz.value);
  kg.value = (ozVal / 35.274).toFixed(2);
  lb.value = (ozVal / 16).toFixed(2);
}

kg.addEventListener("input", fromKg);
lb.addEventListener("input", fromLb);
oz.addEventListener("input", fromOz);

// חישוב ראשוני
fromKg();

let count = 0;

let countEl = document.getElementById("count-agu");
document.getElementById("increment-btn").addEventListener("click", increment);
document.getElementById("save-btn").addEventListener("click", save);

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  console.log("Saved: " + count);
}

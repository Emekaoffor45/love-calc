function calculateLove() {
  let name1 = document.getElementById("name1").value.trim();
  let name2 = document.getElementById("name2").value.trim();

  if (name1.length === 0 || name2.length === 0) {
    document.getElementById("result").textContent =
      "⚠️ Please enter both names!";
    return;
  }

  let loveScore = Math.floor(Math.random() * 100) + 1;
  let message = "";

  if (loveScore > 70) {
    message = `${name1} ❤️ ${name2} are ${loveScore}% compatible!`;
  } else if (loveScore > 50) {
    message = `${name1} 💕 ${name2} have a ${loveScore}% chance of being compatible.`;
  } else {
    message = `${name1} 🤔 ${name2} are not very compatible. Their love score is ${loveScore}%.`;
  }

  document.getElementById("result").textContent = message;
}

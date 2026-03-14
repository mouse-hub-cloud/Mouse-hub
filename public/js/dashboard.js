let balance = 0;
const feed = document.getElementById("activity-feed");

function addActivity(text) {
    const div = document.createElement("div");
    div.textContent = text;
    feed.prepend(div);
}

// Simulate activity popups every 2-5 seconds
setInterval(() => {
    const names = ["A. K.", "B. M.", "C. L.", "D. R."];
    const amounts = [100, 500, 1000, 2000];
    const name = names[Math.floor(Math.random() * names.length)];
    const amount = amounts[Math.floor(Math.random() * amounts.length)];
    addActivity(`${name} just deposited KES ${amount}`);
}, 3000);

function deposit() {
    const amt = parseInt(document.getElementById("amount").value);
    if (!amt || amt < 100) {
        alert("Minimum deposit is KES 100");
        return;
    }
    balance += amt;
    document.getElementById("balance").textContent = balance;
    addActivity(`You deposited KES ${amt}`);
}

function withdraw() {
    const amt = parseInt(document.getElementById("amount").value);
    if (!amt || amt > balance) {
        alert("Invalid withdrawal");
        return;
    }
    balance -= amt;
    document.getElementById("balance").textContent = balance;
    addActivity(`You withdrew KES ${amt}`);
}

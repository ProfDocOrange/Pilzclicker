let pilzCount = 0;
let autoClickerCost = 10;
let autoClickerCount = 0;
let euleCost = 50;
let euleClickerCount = 0;
//let ...Cost =...;
//let ...ClickerCount = 0;

const pilzButton = document.getElementById('pilz-button');
const pilzCountDisplay = document.getElementById('pilz-count');
const autoClickerButton = document.getElementById('auto-clicker-upgrade');
const euleClickerButton = document.getElementById('eule-upgrade');
//const ...ClickerButton = document.getElementById('...-upgrade');
const upgradeCountDisplay = document.getElementById('upgrade-count');

// Aktualisiere die Anzeige der Pilze
function updatePilzCount() {
    pilzCountDisplay.textContent = `Pilze: ${pilzCount}`;
}

// Aktualisiere die Anzeige der gekauften Upgrades
function updateUpgradeCount() {
    upgradeCountDisplay.textContent = `Gekaufte Upgrades: ${autoClickerCount}`;
}

// Überprüfe, ob der Auto-Clicker gekauft werden kann
function checkAutoClicker() {
    if (pilzCount >= autoClickerCost) {
        autoClickerButton.disabled = false;
    } else {
        autoClickerButton.disabled = true;
    }
}
function checkEule() {
    if (pilzCount >= euleCost) {
        euleClickerButton.disabled = false;
    } else {
        euleClickerButton.disabled = true;
    }
}
//function check...() {
//    if (pilzCount >= ...Cost) {
//        ...ClickerButton.disabled = false;
//    } else {
//        ...ClickerButton.disabled = true;
//    }
//}

// Starte den Auto-Clicker
function startAutoClicker() {
    setInterval(function() {
        pilzCount += autoClickerCount;
        updatePilzCount();
        checkAutoClicker();
    }, 2000); // 2sec
}
function startEuleClicker() {
    setInterval(function() {
        pilzCount += euleClickerCount;
        updatePilzCount();
        checkEule();
    }, 1500);
}
//function start...Clicker() {
//    setInterval(function() {
//        pilzCount += ...ClickerCount;
//        updatePilzCount();
//        check...();
//    }, 1500); //in 1,5 sec
//}

// Event Listener für das Pilz-Klicken
pilzButton.addEventListener('click', function() {
    pilzCount++;
    updatePilzCount();
    checkAutoClicker();
});

// Event Listener für den Auto-Clicker-Kauf
autoClickerButton.addEventListener('click', function() {
    if (pilzCount >= autoClickerCost) {
        pilzCount -= autoClickerCost;
        autoClickerCount++;
        autoClickerCost = Math.floor(autoClickerCost * 1.5); // Steigerung des Preises
        autoClickerButton.textContent = `Auto Clicker kaufen (Kosten: ${autoClickerCost} Pilze)`;
        updatePilzCount();
        updateUpgradeCount();
        checkAutoClicker();
    }
});
euleClickerButton.addEventListener('click', function() {
    if (pilzCount >= euleCost) {
        pilzCount -= euleCost;
        euleClickerCount++;
        euleCost = Math.floor(euleCost * 1.5); // Steigerung des Preises
        euleClickerButton.textContent = `Eule kaufen (Kosten: ${euleCost} Pilze)`;
        updatePilzCount();
        updateUpgradeCount();
        checkEule();
    }
});
//...ClickerButton.addEventListener('click', function() {
//    if (pilzCount >= ...Cost) {
//        pilzCount -= ...Cost;
//        ...ClickerCount++;
//        ...Cost = Math.floor(...Cost * 1.5); // Steigerung des Preises
//        ...ClickerButton.textContent = `... kaufen (Kosten: ${...Cost} Pilze)`;
//        updatePilzCount();
//        updateUpgradeCount();
//        checkEule();
//    }
//});

// Initialisiere das Spiel
updatePilzCount();
updateUpgradeCount();
checkAutoClicker();
startAutoClicker();
checkEule();
startEuleClicker();
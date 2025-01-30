let pilzCount = 0;
let autoClickerCost = 10;
let autoClickerCount = 0;
let euleCost = 50;
let euleClickerCount = 0;
let schlangeCost =0;
let waldCost =200;
let waldClickerCount = 0;

const pilzButton = document.getElementById('pilz-button');
const pilzCountDisplay = document.getElementById('pilz-count');
const autoClickerButton = document.getElementById('auto-clicker-upgrade');
const euleClickerButton = document.getElementById('eule-upgrade');
const schlangeClickerButton = document.getElementById('schlange-upgrade');
const upgradeCountDisplay = document.getElementById('upgrade-count');
const waldClickerButton = document.getElementById('wald-upgrade');

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
function checkSchlange() {
    if (pilzCount >= schlangeCost) {
        schlangeClickerButton.disabled = false;
    } else {
        schlangeClickerButton.disabled = true;
    }
}
function checkWald() {
    if (pilzCount >= schlangeCost) {
        schlangeClickerButton.disabled = false;
    } else {
        schlangeClickerButton.disabled = true;
    }
}
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
function startSchlangeClicker() {
    setInterval(function() {
        pilzCount += schlangeClickerCount;
        updatePilzCount();
        checkSchlange();
    }, 1500); //in 1,5 sec
}
function startWaldClicker() {
    setInterval(function() {
        pilzCount += WaldClickerCount;
        updatePilzCount();
        checkWald();
    }, 1500); //in 1,5 sec
}
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
schlangeClickerButton.addEventListener('click', function() {
    if (pilzCount >= schlangeCost) {
        pilzCount -= schlangeCost;
        schlangeClickerCount+ 500;
        schlangeCost = Math.floor(schlangeCost * 1.5); // Steigerung des Preises
        schlangeClickerButton.textContent = `Schlange kaufen (Kosten: ${schlangeCost} Pilze)`;
        updatePilzCount();
        updateUpgradeCount();
        checkSchlange();

    }
});
waldClickerButton.addEventListener('click', function() {
    if (pilzCount >= waldCost) {
        pilzCount -= waldCost;
        waldClickerCount++;
        waldCost = Math.floor(waldCost * 1.5); // Steigerung des Preises
        waldClickerButton.textContent = `Wald kaufen (Kosten: ${waldCost} Pilze)`;
        updatePilzCount();
        updateUpgradeCount();
        checkWald();

    }
});

// Initialisiere das Spiel
updatePilzCount();
updateUpgradeCount();
checkAutoClicker();
startAutoClicker();
checkEule();
startEuleClicker();
startSchlangeClicker();
checkSchlange();
startWaldClicker();
checkWald();
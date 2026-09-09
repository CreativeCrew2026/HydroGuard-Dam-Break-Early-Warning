// ================================
// HYDROGUARD FLOOD SIMULATION
// ================================

function runSimulation() {

    const button = document.querySelector(".hero button");

    // Change button while simulation is running
    button.innerHTML = "⏳ SIMULATION RUNNING...";
    button.disabled = true;

    // Show loading message
    alert("🌊 Flood simulation started!\n\nProcessing rainfall, water level and dam-break parameters...");

    setTimeout(function () {

        // Update dashboard values
        document.querySelector(".card:nth-child(1) strong").innerText = "84 mm";

        document.querySelector(".card:nth-child(2) strong").innerText = "19.1 m";

        document.querySelector(".card:nth-child(4) strong").innerText = "36 min";


        // Update simulation results
        const results = document.querySelectorAll(".simulation-results strong");

        results[0].innerText = "5.2 m";
        results[1].innerText = "3.8 m/s";
        results[2].innerText = "14.2 km²";
        results[3].innerText = "36 min";


        // Update warning message
        const warningText = document.querySelector(".warning-box p strong");

        if (warningText) {
            warningText.innerText = "36 minutes.";
        }


        // Reset button
        button.innerHTML = "✓ SIMULATION COMPLETE";
        button.disabled = false;


        // Completion message
        alert(
            "✓ Flood Simulation Complete!\n\n" +
            "Flood Risk: HIGH\n" +
            "Flood Depth: 5.2 m\n" +
            "Velocity: 3.8 m/s\n" +
            "Flood Extent: 14.2 km²\n" +
            "Flood Arrival: 36 min"
        );

    }, 2000);
}


// ================================
// EVACUATION ROUTE
// ================================

function showEvacuationRoute() {

    alert(
        "📍 EVACUATION ROUTE\n\n" +
        "Nearest Safe Zone: Community Relief Center\n" +
        "Distance: 2.4 km\n" +
        "Estimated Time: 12 minutes\n\n" +
        "Follow the recommended evacuation route."
    );
}


// ================================
// SEND ALERT
// ================================

function sendAlert() {

    alert(
        "📱 EMERGENCY ALERT\n\n" +
        "High flood risk alert prepared.\n\n" +
        "Alert will notify residents in affected zones."
    );
}


// ================================
// BUTTON CONNECTION
// ================================

const warningButtons = document.querySelectorAll(".warning-buttons button");

if (warningButtons.length >= 2) {

    warningButtons[0].onclick = showEvacuationRoute;

    warningButtons[1].onclick = sendAlert;

}

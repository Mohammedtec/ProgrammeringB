// Global click-handler funktion
function handleClick() {
    const message = document.getElementById('message');
    message.textContent = 'Du har klikket på knappen!';
}

// Hent knappen fra DOM'en og tilføj event handler
const button = document.getElementById('myButton');
button.addEventListener('click', handleClick);

// Global funktion til håndtering af dobbeltklik
function handleDoubleClick() {
    alert('Du dobbeltklikkede på knappen!');
    
   
}
const button2 = document.getElementById('dblClickButton');
// Tilføjer en dobbeltklik-event til knappen
button2.addEventListener('dblclick', handleDoubleClick);



const box = document.getElementById('box');
const tooltip = document.getElementById('tooltip');
// Global functions
function showTooltip() {
    tooltip.style.display = 'block'; // Show the tooltip
}

function hideTooltip() {
    tooltip.style.display = 'none'; // Hide the tooltip
}

// Add event listeners
box.addEventListener('mouseover', showTooltip);
box.addEventListener('mouseout', hideTooltip);



  // Global funktion
function updateColor() {
    const selectedColor = colorSelect.value; // Få den valgte værdi
    result.textContent = `Den valgte farve er: ${selectedColor}`; // Opdater tekst
    result.style.color = selectedColor; // Skift tekstfarve til den valgte farve
}

// DOM-elementer
const colorSelect = document.getElementById('color');
const result = document.getElementById('result');

// Event-lytter
colorSelect.addEventListener('change', updateColor);


// Global funktion
function updateNameOutput() {
    output.innerHTML = `Du har skrevet: <strong>${nameInput.value}</strong>`; // Opdaterer output med input-værdien, formateret med HTML
}

// DOM-elementer
const nameInput = document.getElementById('nameInput');
const output = document.getElementById('output');

// Event-lytter
nameInput.addEventListener('input', updateNameOutput);

function generateList() {
    const output = document.getElementById('output');

    // Dynamisk HTML-liste
    const listHTML = `
        <ul>
            <li><strong>Item 1:</strong> Æbler</li>
            <li><strong>Item 2:</strong> Bananer</li>
            <li><strong>Item 3:</strong> Appelsiner</li>
        </ul>
    `;

    // Indsæt listen i output-div'en
    output.innerHTML = listHTML;
}

// Event-lytter
document.getElementById('generateList').addEventListener('click', generateList);
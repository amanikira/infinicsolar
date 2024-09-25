// Calculator Script
//calculator
function calculateSavings() {
    // Get values from the input fields
    let monthlyBill = document.getElementById('monthly-bill').value;
    let systemSize = document.getElementById('solar-system-size').value;
    let costPerWatt = document.getElementById('cost-per-watt').value;

    // Check if all fields have values
    if (monthlyBill === '' || systemSize === '' || costPerWatt === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Convert values to numbers
    monthlyBill = parseFloat(monthlyBill);
    systemSize = parseFloat(systemSize);
    costPerWatt = parseFloat(costPerWatt);

    // Calculate the installation cost
    let installationCost = systemSize * 1000 * costPerWatt;

    // Estimate savings based on current monthly bill (rough estimate for demonstration)
    let annualSavings = monthlyBill * 12;
    let paybackPeriod = installationCost / annualSavings;

    // Display result
    document.getElementById('result').innerHTML = `
        Installation Cost: $${installationCost.toFixed(2)}<br>
        Estimated Annual Savings: $${annualSavings.toFixed(2)}<br>
        Payback Period: ${paybackPeriod.toFixed(1)} years
    `;
}

//contact us form

var form = document.getElementById("my-form");
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  } else {
    response.json().then(data => {
    if (Object.hasOwn(data, 'errors')) {
      status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form"
    }
  })
}
}).catch(error => {
  status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)

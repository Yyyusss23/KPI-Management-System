const kpiId = new URLSearchParams(window.location.search).get("id");
const kpis = JSON.parse(localStorage.getItem("kpis")) || [];
const kpi = kpis.find(k => k.id === kpiId);

if (!kpi) {
  alert("KPI not found");
} else {
  document.getElementById("kpi-title").textContent = kpi.title;
  document.getElementById("kpi-description").textContent = kpi.description;
  document.getElementById("kpi-staff").textContent = kpi.staffName;
  document.getElementById("kpi-status").textContent = kpi.status;

  // Evidence
  const evidence = kpi.evidence?.[0];
 document.getElementById("kpi-evidence").textContent = evidence?.file || "N/A";

  // Display GvA (Suppose it's calculated from the evidence)
  const actual = evidence?.actualValue ?? 0;
  const target = parseInt(kpi.targetValue.match(/\d+/)?.[0] || "0", 10);

  document.getElementById("gva-actual").textContent = actual;
  document.getElementById("gva-target").textContent = `/${target}`;
}




document.getElementById("Btn-GvA-Edit").addEventListener("click", function() {
    // Get the current value of GvA
    const gvAValue = document.getElementById("gva-actual").innerText;
    
    // Split the value at '/' to separate the number part (e.g., 21 from 21/20)
    const splitValue = gvAValue.split("/");

    // If the button is in EDIT state
    if (this.innerText === "EDIT") {
        // Create an input element with the current number (e.g., 21) as the value
        const input = document.createElement("input");
        input.type = "number";
        input.value = splitValue[0];  // Set input value to the number part (21)
        
        // Replace the current GvA value with the input field
        document.getElementById("gva-actual").innerHTML = '';  // Clear the existing text
        document.getElementById("gva-actual").appendChild(input);  // Add the input

        // Change the button text to "DONE"
        this.innerText = "DONE";
    } 
    // If the button is in DONE state
    else {
        // Get the value entered in the input
        const newValue = document.querySelector("#gva-actual input").value;

        // Replace the input field with the new value
        document.getElementById("gva-actual").innerHTML = `${newValue}`;

        // Change the button text back to "EDIT"
        this.innerText = "EDIT";
    }
});


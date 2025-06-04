let allKpis = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/kpis') // Replace with your actual backend endpoint
    .then(response => response.json())
    .then(data => {
      allKpis = data;
      renderCards(allKpis);
    })
    .catch(error => {
      console.error("Error fetching KPI data:", error);
      document.getElementById("kpiCardsContainer").innerHTML = `
        <div class="col-12 text-center mt-4">
          <p class="text-danger">Failed to load KPI data. Please try again later.</p>
        </div>`;
    });
});

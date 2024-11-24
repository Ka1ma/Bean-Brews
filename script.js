document.addEventListener("DOMContentLoaded", () => {
    // Example of dynamic data manipulation
    const salesTotal = document.getElementById("salesTotal");
    const inventoryAlerts = document.getElementById("inventoryAlerts");
    const customerEngagement = document.getElementById("customerEngagement");

    // Dummy Data
    salesTotal.textContent = "$1,200.50";
    inventoryAlerts.textContent = "2 Low Stock Items";
    customerEngagement.textContent = "15 Active Customers";

    // Add inventory alert example
    const inventoryTable = document.getElementById("inventoryTable");
    const newRow = inventoryTable.insertRow();
    newRow.innerHTML = `<td>Sugar</td><td>5</td><td>Critical</td>`;
});
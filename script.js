document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const hotelCards = document.querySelectorAll(".hotel-card");
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Toggle Dark Mode";
    darkModeToggle.classList.add("dark-mode-btn");
    document.body.appendChild(darkModeToggle);

    // Search Hotels
    function searchHotels() {
        const searchValue = searchInput.value.toLowerCase();
        hotelCards.forEach(card => {
            const hotelName = card.getAttribute("data-name").toLowerCase();
            card.style.display = hotelName.includes(searchValue) ? "block" : "none";
        });
    }

    // Attach search event
    searchInput.addEventListener("input", searchHotels);

    // Booking Alert
    document.querySelectorAll(".hotel-card button").forEach(button => {
        button.addEventListener("click", function () {
            const hotelName = this.parentElement.getAttribute("data-name");
            alert(`You have selected ${hotelName}. Proceeding to booking...`);
        });
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Price Filter
    const priceFilter = document.createElement("select");
    priceFilter.innerHTML = `
        <option value="all">All Prices</option>
        <option value="150">Below $150</option>
        <option value="250">Below $250</option>
        <option value="400">Below $400</option>
    `;
    priceFilter.classList.add("price-filter");
    document.querySelector("main").insertBefore(priceFilter, document.querySelector(".hotel-cards"));

    priceFilter.addEventListener("change", function () {
        const maxPrice = parseInt(this.value);
        hotelCards.forEach(card => {
            const price = parseInt(card.querySelector("p").innerText.replace("$", "").replace("/night", ""));
            card.style.display = maxPrice === "all" || price <= maxPrice ? "block" : "none";
        });
    });
});

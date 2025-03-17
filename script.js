document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const hotelCards = document.querySelectorAll(".hotel-card");

    // Dark Mode Toggle Button
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Toggle Dark Mode";
    darkModeToggle.classList.add("dark-mode-btn");
    document.body.appendChild(darkModeToggle);

    // Load Dark Mode Preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });

    // Search Hotels
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();
        hotelCards.forEach(card => {
            const hotelName = card.getAttribute("data-name").toLowerCase();
            card.style.display = hotelName.includes(searchValue) ? "block" : "none";
        });
    });

    // Booking Alert
    document.querySelectorAll(".hotel-card button").forEach(button => {
        button.addEventListener("click", function () {
            const hotelName = this.closest(".hotel-card").getAttribute("data-name");
            alert(`You have selected ${hotelName}. Proceeding to booking...`);
        });
    });

    // Price Filter
    document.getElementById("price-filter").addEventListener("change", function () {
        const maxPrice = this.value === "all" ? Infinity : parseInt(this.value);
        hotelCards.forEach(card => {
            const price = parseInt(card.getAttribute("data-price"));
            card.style.display = price <= maxPrice ? "block" : "none";
        });
    });
});

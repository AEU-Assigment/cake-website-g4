// Dynamically generate size buttons
const sizeButtons = document.getElementById("sizeButtons");
if (productFind.sizes.length > 0) {
    sizeButtons.innerHTML = productFind.sizes
        .map(size => `<button class="size-btn rounded-xl px-4 py-1 border hover:bg-gray-400" data-size="${size}">${size}</button>`)
        .join("");

    // Add click event to size buttons
    document.querySelectorAll(".size-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            // Remove 'selected' class from all buttons
            document.querySelectorAll(".size-btn").forEach(btn => btn.classList.remove("selected"));

            // Add 'selected' class to the clicked button
            e.target.classList.add("selected");

            // Store the selected size in the product's data attribute
            product.setAttribute("data-size", e.target.dataset.size);
        });
    });
} else {
    sizeButtons.innerHTML = "<p class='no-sizes'>No sizes available</p>";
}
    
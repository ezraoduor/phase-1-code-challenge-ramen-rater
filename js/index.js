document.addEventListener("DOMContentLoaded", main);

function main() {
    displayRamens();
    addSubmitListener();
}

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "assets/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "assets/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "assets/tonkotsu.jpg", ratinig: 6, comment: "very good!" },
    { id: 4 , name: "Naruto Ramen", restaurant: "Meko", image: "assets/naruto.jpg", rating: 8, comment: "best in the city!" },
 ];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
    if(ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

function handleClick(ramen) {
    document.getElementById("ramen-detail-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating} / 10`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;

}

function addSubmitListener() {
    const form = document.getElementById("ramen-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const image = document.getElementById("image").value;
        const rating = parseInt(document.getElementById("rating").value, 10);
        const comment = document.getElementById("comment").value;

        if (!name || !restaurant || !image || isNaN(rating) || !comment) {
            return alert("Please fill in all fields correctly.");
            
        }
        if (rating < 1 || rating > 10) {
            return  alert("Rating must be between 1 and 10.");
            
        }

        const newRamen = { name, restaurant, image, rating, comment };

        const img = document.createElement("img");
        img.src = image;
        img.alt = name;
        img.addEventListener("click", () => handleClick(newRamen));

        document.getElementById("ramen-menu").appendChild(img);

        form.reset();
    });
}

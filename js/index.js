document.addEventListener("DOMContentLoaded", main);

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "assets/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "assets/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "assets/tonkotsu.jpg", ratinig: 6, comment: "very good!" },
    { id: 4 , name: "Naruto Ramen", restaurant: "Meko", image: "assets/naruto.jpg", rating: 8, comment: "best in the city!" },
 ];


function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");

   
    ramenMenu.innerHTML = "";

    
    ramens.forEach(addRamenToMenu);

    
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}


function addRamenToMenu(ramen) {
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");

    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen)); // Attach event listener

    ramenMenu.appendChild(img);
}


function handleClick(ramen) {
    document.getElementById("ramen-detail-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = `Rating: ${ramen.rating} / 10`;
    document.getElementById("ramen-comment").textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const ramenForm = document.getElementById("new-ramen-form");

    ramenForm.addEventListener("submit", (event) => {
        event.preventDefault();

        
        const newRamen = {
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.image.value,
            rating: parseInt(event.target.rating.value, 10),
            comment: event.target.comment.value,
        };

        
       
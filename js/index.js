document.addEventListener("DOMContentLoaded", () => {
    const ramenOptions = document.getElementById("ramen-options");
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetailImage = document.getElementById("ramen-detail-image");
    const ramenName = document.getElementById("ramen-name");
    const ramenRestaurant = document.getElementById("ramen-restaurant");
    const ramenRating = document.getElementById("ramen-rating");
    const ramenComment = document.getElementById("ramen-comment");
    const ramenForm = document.getElementById("new-ramen-form");
     
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
     ];
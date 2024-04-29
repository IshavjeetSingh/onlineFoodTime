// showing navbar when click menu on moblie view
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

// close menu when click
mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth  <= 768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

// move the meno to right amd left when click back and next
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});
$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    })
})

// when click back and next on menu filters
$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});
$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    })
})

//  Images Change when click on detail-card
document.getElementById("changeImgAllMenu").addEventListener("click", function() {
    var newImageSrcs = ["image/Shrinp Soup.jpg", "image/Pizza.jpg", "image/Wine.jpg", "image/Big burger.jpg", "image/Hot Cafe Latte.jpg","image/Fresh Salad.jpg"]; // Change these paths to the new images
    var newNames = ["Shrinp Soup", "Pizza", "Wine", "Big Burger", "Hot Cafe Latte", "Fresh Salad"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor sit amet consectetur"];// Additional info for the third <p> tags
    var price = ["₹152.00", "₹199.00", "₹479.00", "₹99.00", "₹60.00", "₹60.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgBurger").addEventListener("click", function() {
    var newImageSrcs = ["Images/Burger/image1.jpg", "Images/Burger/image2.jpg", "Images/Burger/image3.jpg", "Images/Burger/image4.jpg", "Images/Burger/image5.jpg","Images/Burger/image6.jpg",]; // Change these paths to the new images
    var newNames = ["BK Veggie Burger + Veg Taco.", "1Crispy Veg Double Patty + 1Med Fries.", "Veg Makhani Burst Burger+ Medium Peri Peri Fries.", "Double Crispy Veg + Double Crispy Veg.", "BK Veggie Burger + Crispy Veg Burger.", "BK Veggie Burger + Veg Taco."]; // Names for the first <p> tags
    var additionalInfo = ["Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries"];// Additional info for the third <p> tags
    var price = ["₹479.00", "₹214.00", "₹224.00", "₹190.00", "₹209.00", "₹479.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgPizza").addEventListener("click", function() {
    var newImageSrcs = ["Images/Pizza/image1.jpg", "Images/Pizza/image2.jpg", "Images/Pizza/image3.jpg", "Images/Pizza/image4.jpg", "Images/Pizza/image5.jpg","Images/Pizza/image6.jpg",]; // Change these paths to the new images
    var newNames = ["The Cream Way", "The Pisa Pizza", "Pizza Bite House", "Burning Bun", "Poornima Chinese Food", "Backyard Pizza"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹199.00", "₹200.00", "₹207.00", "₹109.00", "₹100.00", "₹150.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgWine").addEventListener("click", function() {
    var newImageSrcs = ["Images/Wine/image1.jpg", "Images/Wine/image2.jpg", "Images/Wine/image3.jpg", "Images/Wine/image4.jpg", "Images/Wine/image5.jpg","Images/Wine/image6.jpg",]; // Change these paths to the new images
    var newNames = ["Corona Extra", "Old Monk", "Kingfisher", "Sula", "Cabernet Sauvignon", "Merlot"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹299.00", "₹1,250.00", "₹219.00", "₹995.00", "₹1,695.00", "₹1,495.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgIceCream").addEventListener("click", function() {
    var newImageSrcs = ["Images/IceCream/image1.jpg", "Images/IceCream/image2.jpg", "Images/IceCream/image3.jpg", "Images/IceCream/image4.jpg", "Images/IceCream/image5.jpg","Images/IceCream/image6.jpg",]; // Change these paths to the new images
    var newNames = ["Coco Top Coco Caramel ", "Coco Curnch", "Dark Chocolate", "Bilgin Chocolate", "Forstik", "Pralinen"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹60.00", "₹45.00", "₹60.00", "₹50.00", "₹70.00", "₹60.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgCoffee").addEventListener("click", function() {
    var newImageSrcs = ["Images/Coffee/image1.jpg", "Images/Coffee/image2.jpg", "Images/Coffee/image3.jpg", "Images/Coffee/image4.jpg", "Images/Coffee/image5.jpg","Images/Coffee/image6.jpg",]; // Change these paths to the new images
    var newNames = ["Cocolate Coffee", "Rose Milk", "Elaichi Tea", "Hot coffee", "Creamy Coffee", "Corner Coffeet"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹60.00", "₹45.00", "₹20.00", "₹25.00", "₹45.00", "₹99.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgSeaFood").addEventListener("click", function() {
    var newImageSrcs = ["Images/SeaFood/image1.jpg", "Images/SeaFood/image2.jpg", "Images/SeaFood/image3.jpg", "Images/SeaFood/image4.jpg", "Images/SeaFood/image5.jpg","Images/SeaFood/image6.jpg",]; // Change these paths to the new images
    var newNames = ["John Dory", "Trout Fish", "Ginger Garlic Swordfish", "Sea Bass", "Baked Halibut", "Dog Fish"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹60.00", "₹45.00", "₹20.00", "₹25.00", "₹45.00", "₹99.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgHealthy").addEventListener("click", function() {
    var newImageSrcs = ["Images/Healthy/image1.jpg", "Images/Healthy/image2.jpg", "Images/Healthy/image3.jpg", "Images/Healthy/image4.jpg", "Images/Healthy/image5.jpg","Images/Healthy/image6.jpg",]; // Change these paths to the new images
    var newNames = ["Raw Vegetable", "Mix Apple & Orange", "Papaya Salad", "Mix Fruit", "Salad", "Bread Mix Fruits"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹60.00", "₹90.00", "₹60.00", "₹55.00", "₹70.00", "₹120.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

//  -Recommendation - Images Change when click on detail-card

document.getElementById("changeImgHealthy-Recommendation").addEventListener("click", function() {
    var newImageSrcs = ["Images/Healthy/image1.jpg", "Images/Healthy/image2.jpg", "Images/Healthy/image3.jpg", "Images/Healthy/image4.jpg", "Images/Healthy/image5.jpg","Images/Healthy/image6.jpg",]; // Change these paths to the new images
    var newNames = ["Raw Vegetable", "Mix Apple & Orange", "Papaya Salad", "Mix Fruit", "Salad", "Bread Mix Fruits"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹60.00", "₹90.00", "₹60.00", "₹55.00", "₹70.00", "₹120.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgCoffee-Recommendation").addEventListener("click", function() {
    var newImageSrcs = ["Images/Coffee/image1.jpg", "Images/Coffee/image2.jpg", "Images/Coffee/image3.jpg", "Images/Coffee/image4.jpg", "Images/Coffee/image5.jpg","Images/Coffee/image6.jpg",]; // Change these paths to the new images
    var newNames = ["Cocolate Coffee", "Rose Milk", "Elaichi Tea", "Hot coffee", "Creamy Coffee", "Corner Coffeet"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹60.00", "₹45.00", "₹20.00", "₹25.00", "₹45.00", "₹99.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgSeaFood-Recommendation").addEventListener("click", function() {
    var newImageSrcs = ["Images/SeaFood/image1.jpg", "Images/SeaFood/image2.jpg", "Images/SeaFood/image3.jpg", "Images/SeaFood/image4.jpg", "Images/SeaFood/image5.jpg","Images/SeaFood/image6.jpg",]; // Change these paths to the new images
    var newNames = ["John Dory", "Trout Fish", "Ginger Garlic Swordfish", "Sea Bass", "Baked Halibut", "Dog Fish"]; // Names for the first <p> tags
    var additionalInfo = ["Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit", "Lorem ipsum dolor sit amet consectetur adipisicing elit"];// Additional info for the third <p> tags
    var price = ["₹60.00", "₹45.00", "₹20.00", "₹25.00", "₹45.00", "₹99.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});

document.getElementById("changeImgBurger-Recommendation").addEventListener("click", function() {
    var newImageSrcs = ["Images/Burger/image1.jpg", "Images/Burger/image2.jpg", "Images/Burger/image3.jpg", "Images/Burger/image4.jpg", "Images/Burger/image5.jpg","Images/Burger/image6.jpg",]; // Change these paths to the new images
    var newNames = ["BK Veggie Burger + Veg Taco.", "1Crispy Veg Double Patty + 1Med Fries.", "Veg Makhani Burst Burger+ Medium Peri Peri Fries.", "Double Crispy Veg + Double Crispy Veg.", "BK Veggie Burger + Crispy Veg Burger.", "BK Veggie Burger + Veg Taco."]; // Names for the first <p> tags
    var additionalInfo = ["Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries", "Veg Makhani Burst Burger+ Medium Peri Peri Fries"];// Additional info for the third <p> tags
    var price = ["₹479.00", "₹214.00", "₹224.00", "₹190.00", "₹209.00", "₹479.00"];// Price for the second <p> tags
    var containers = document.getElementsByClassName("detail-card");
    for (var i = 0; i < containers.length; i++) {
        containers[i].querySelector("img").src = newImageSrcs[i];
        containers[i].querySelectorAll("h4")[0].textContent = newNames[i];
        containers[i].querySelectorAll("p")[0].textContent = additionalInfo[i];
        containers[i].querySelectorAll("p")[1].textContent = price[i];
    }
});


/////////////////////// JavaScript for changing colors of detail-card /////////////////////
// JavaScript for changing colors of detail-card

var originalColors = {};

// Storing original colors
const divIds = ['changeImgBurger', 'changeImgPizza', 'changeImgWine', 'changeImgIceCream', 'changeImgCoffee',
    'changeImgSeaFood', 'changeImgHealthy', 'changeImgAllMenu'
];

divIds.forEach(id => {
    originalColors[id] = document.getElementById(id).style.backgroundColor;
});

function changeColor(divId) {
    var div = document.getElementById(divId);
    var otherDivIds = divIds.filter(id => id !== divId);

    // Reverting other divs to original colors
    otherDivIds.forEach(id => {
        document.getElementById(id).style.backgroundColor = originalColors[id];
    });

    // Changing color of clicked div based on its ID
    switch (divId) {
        case 'changeImgBurger':
            div.style.backgroundColor = '#2c7865';
            break;
        case 'changeImgPizza':
            div.style.backgroundColor = '#2c7865';
            break;
        case 'changeImgWine':
            div.style.backgroundColor = '#2c7865';
            break;
        case 'changeImgIceCream':
            div.style.backgroundColor = '#2c7865';
            break;
        case 'changeImgCoffee':
            div.style.backgroundColor = '#2c7865';
            break;
        case 'changeImgSeaFood':
            div.style.backgroundColor = '#2c7865';
            break;
        case 'changeImgHealthy':
            div.style.backgroundColor = '#2c7865';
            break;
        case 'changeImgAllMenu':
            div.style.backgroundColor = '#2c7865';
            break;
        default:
            break;
    }
}
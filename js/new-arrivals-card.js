
// cards
function createCardItem(productData) {
  // Create the card item container
  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");

  // Create the image element
  const image = document.createElement("img");
  image.src = productData.imageUrl;
  image.alt = "Product Image";
  image.classList.add("card-image");

  // Create the card content container
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  // Create the title element
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = productData.title;

  // Create the card star container
  const cardStar = document.createElement("div");
  cardStar.classList.add("card-star");

  // Create the star icons
  const fullStarIcon = productData.fullStarIcon;
  const halfStarIcon = productData.halfStarIcon;
  const fullStars = Math.floor(productData.rating);
  const hasHalfStar = productData.rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    const starIcon = document.createElement("img");
    starIcon.src = fullStarIcon;
    starIcon.alt = "image star";
    starIcon.classList.add("star-icon");
    cardStar.appendChild(starIcon);
  }

  if (hasHalfStar) {
    const halfStarIcon = document.createElement("img");
    halfStarIcon.src = productData.halfStarIcon;
    halfStarIcon.alt = "image star";
    halfStarIcon.classList.add("star-midle");
    cardStar.appendChild(halfStarIcon);
  }

  // Create the rating value element
  const ratingValue = document.createElement("span");
  ratingValue.classList.add("rating-value");
  ratingValue.textContent = `${productData.rating.toFixed(1)}/5`;
  cardStar.appendChild(ratingValue);

  // Create the price element
  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = `$${productData.price.toFixed(2)}`;

  // Append elements to the card item
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardStar);
  cardContent.appendChild(cardPrice);
  cardItem.appendChild(image);
  cardItem.appendChild(cardContent);

  return cardItem;
}

// Define the product data objects
const productData1 = {
  imageUrl: "src/assets/images/shirt-black.png",
  title: "T-SHIRT WITH TAPE DETAILS",
  rating: 4.5,
  price: 120,
  fullStarIcon: "src/assets/icons/yelow-star.png",
  halfStarIcon: "src/assets/icons/yelow-star-midle.png",
};

const productData2 = {
  imageUrl: "src/assets/images/jeans.png",
  title: "SKINNY FIT JEANS",
  rating: 3.5,
  price: 240,
  fullStarIcon: "src/assets/icons/yelow-star.png",
  halfStarIcon: "src/assets/icons/yelow-star-midle.png",
};

const productData3 = {
  imageUrl: "src/assets/images/plaid-shirt.png",
  title: "CHECKERED SHIRT",
  rating: 4.5,
  price: 180,
  fullStarIcon: "src/assets/icons/yelow-star.png",
  halfStarIcon: "src/assets/icons/yelow-star-midle.png",
};
const productData4 = {
  imageUrl: "src/assets/images/orange-shirt.png",
  title: "SLEEVE STRIPED T-SHIRT",
  rating: 4.5,
  price: 130,
  fullStarIcon: "src/assets/icons/yelow-star.png",
  halfStarIcon: "src/assets/icons/yelow-star-midle.png",
};
// Get a reference to the new-arrivals-card container
const newArrivalsCard = document.getElementById("new-arrivals-card");

// Create and append the card-item elements
const cardItem1 = createCardItem(productData1);
const cardItem2 = createCardItem(productData2);
const cardItem3 = createCardItem(productData3);
const cardItem4 = createCardItem(productData4);
newArrivalsCard.appendChild(cardItem1);
newArrivalsCard.appendChild(cardItem2);
newArrivalsCard.appendChild(cardItem3);
newArrivalsCard.appendChild(cardItem4);

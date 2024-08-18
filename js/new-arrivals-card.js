// cards
function createCardItem(productData) {
  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");

  const image = document.createElement("img");
  image.src = productData.imageUrl;
  image.alt = "Product Image";
  image.classList.add("card-image");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = productData.title;

  const cardStar = document.createElement("div");
  cardStar.classList.add("card-star");

  const icon = document.createElement("img");
  icon.src = productData.iconUrl;
  icon.alt = "image star";
  icon.classList.add("icon-star");

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = `$${productData.price}`;

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(icon);
  cardContent.appendChild(cardPrice);
  cardItem.appendChild(image);
  cardItem.appendChild(cardContent);

  return cardItem;
}

// Define the product data objects
const productData1 = {
  imageUrl: "src/assets/images/shirt-black.svg",
  title: "T-SHIRT WITH TAPE DETAILS",
  iconUrl: "src/assets/icons/yelow-star-4-5.svg",
  price: 120,
};

const productData2 = {
  imageUrl: "src/assets/images/jeans.svg",
  title: "SKINNY FIT JEANS",
  iconUrl: "src/assets/icons/yelow-star-3-5.svg",
  price: 240,
};

const productData3 = {
  imageUrl: "src/assets/images/plaid-shirt.svg",
  title: "CHECKERED SHIRT",
  iconUrl: "src/assets/icons/yelow-star-4-5.svg",
  price: 180,
};
const productData4 = {
  imageUrl: "src/assets/images/orange-shirt.svg",
  title: "SLEEVE STRIPED T-SHIRT",
  iconUrl: "src/assets/icons/yelow-star-4-5.svg",
  price: 130,
};
// const productData5 = {
//   imageUrl: "src/assets/images/orange-shirt.svg",
//   title: "SLEEVE STRIPED T-SHIRT",
//   iconUrl: "src/assets/icons/yelow-star.svg",
//
//   price: 130,
// };

const newArrivalsCard = document.getElementById("new-arrivals-card");

const cardItem1 = createCardItem(productData1);
const cardItem2 = createCardItem(productData2);
const cardItem3 = createCardItem(productData3);
const cardItem4 = createCardItem(productData4);

newArrivalsCard.appendChild(cardItem1);
newArrivalsCard.appendChild(cardItem2);
newArrivalsCard.appendChild(cardItem3);
newArrivalsCard.appendChild(cardItem4);

const topSellingData1 = {
  imageUrl: "src/assets/images/image.svg",
  title: "DENIM JACKET",
  iconUrl: "src/assets/icons/yelow-star-5-0.svg",
  price: 212,
};

const topSellingData2 = {
  imageUrl: "src/assets/images/frame33.svg",
  title: "FLORAL DRESS",
  iconUrl: "src/assets/icons/yelow-star-4-0.svg",
  price: 145,
};
const topSellingData3 = {
  imageUrl: "src/assets/images/frame34.svg",
  title: "SKINNY FIT JEANS",
  iconUrl: "src/assets/icons/yelow-star-3-0.svg",
  price: 80,
};
const topSellingData4 = {
  imageUrl: "src/assets/images/frame38.svg",
  title: "SLEEVE STRIPED T-SHIRT",
  iconUrl: "src/assets/icons/yelow-star-4-5.svg",
  price: 210,
};

const topSellingCard = document.getElementById("top-selling-card");

const topSellingCardItem1 = createCardItem(topSellingData1);
const topSellingCardItem2 = createCardItem(topSellingData2);
const topSellingCardItem3 = createCardItem(topSellingData3);
const topSellingCardItem4 = createCardItem(topSellingData4);
topSellingCard.appendChild(topSellingCardItem1);
topSellingCard.appendChild(topSellingCardItem2);
topSellingCard.appendChild(topSellingCardItem3);
topSellingCard.appendChild(topSellingCardItem4);

// cards
function createCardItem(productData) {
  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");

  const image = document.createElement("img");
  image.src = productData.imageUrl;
  image.alt = "Product Image";
  image.classList.add("card-image");
  cardItem.appendChild(image);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  cardItem.appendChild(cardContent);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = productData.title;
  cardContent.appendChild(cardTitle);

  const cardStar = document.createElement("div");
  cardStar.classList.add("card-star");

  const icon = document.createElement("img");
  icon.src = productData.iconUrl;
  icon.alt = "image star";
  icon.classList.add("icon-star");
  cardContent.appendChild(icon);

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = `$${productData.price}`;
  cardContent.appendChild(cardPrice);

  return cardItem;
}
const productsData = [
  {
    imageUrl: "./src/assets/images/shirt-black.svg",
    title: "T-SHIRT WITH TAPE DETAILS",
    iconUrl: "./src/assets/icons/yelow-star-4-5.svg",
    price: 120,
  },
  {
    imageUrl: "./src/assets/images/jeans.svg",
    title: "SKINNY FIT JEANS",
    iconUrl: "./src/assets/icons/yelow-star-3-5.svg",
    price: 240,
  },
  {
    imageUrl: "./src/assets/images/plaid-shirt.svg",
    title: "CHECKERED SHIRT",
    iconUrl: "./src/assets/icons/yelow-star-4-5.svg",
    price: 180,
  },
  {
    imageUrl: "./src/assets/images/orange-shirt.svg",
    title: "SLEEVE STRIPED T-SHIRT",
    iconUrl: "./src/assets/icons/yelow-star-4-5.svg",
    price: 130,
  },
];

const newArrivalsCard = document.getElementById("new-arrivals-card");

productsData.forEach((productData) => {
  const cardItem = createCardItem(productData);
  newArrivalsCard.appendChild(cardItem);
});
// const productData1 = {
//   imageUrl: "src/assets/images/shirt-black.svg",
//   title: "T-SHIRT WITH TAPE DETAILS",
//   iconUrl: "src/assets/icons/yelow-star-4-5.svg",
//   price: 120,
// };

// const newArrivalsCard = document.getElementById("new-arrivals-card");

// const cardItem1 = createCardItem(productData1);
// const cardItem2 = createCardItem(productData2);
// const cardItem3 = createCardItem(productData3);
// const cardItem4 = createCardItem(productData4);

// newArrivalsCard.appendChild(cardItem1);
// newArrivalsCard.appendChild(cardItem2);
// newArrivalsCard.appendChild(cardItem3);
// newArrivalsCard.appendChild(cardItem4);

const productsDataSelling = [
  {
    imageUrl: "./src/assets/images/Frame32.svg",
    title: "DENIM JACKET",
    iconUrl: "./src/assets/icons/yelow-star-5-0.svg",
    price: 212,
  },
  {
    imageUrl: "./src/assets/images/Frame33.svg",
    title: "FLORAL DRESS",
    iconUrl: "./src/assets/icons/yelow-star-4-0.svg",
    price: 145,
  },
  {
    imageUrl: "./src/assets/images/Frame34.svg",
    title: "SKINNY FIT JEANS",
    iconUrl: "./src/assets/icons/yelow-star-3-0.svg",
    price: 80,
  },
  {
    imageUrl: "./src/assets/images/Frame38.svg",
    title: "SLEEVE STRIPED T-SHIRT",
    iconUrl: "./src/assets/icons/yelow-star-4-5.svg",
    price: 210,
  },
];
const topSellingCard = document.getElementById("top-selling-card");
productsDataSelling.forEach((productData) => {
  const cardItem = createCardItem(productData);
  topSellingCard.appendChild(cardItem);
});


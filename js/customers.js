function createCustomerCard(customerData) {
  const customerCard = document.createElement("div");
  customerCard.classList.add("customers-card");

  const image = document.createElement("img");
  image.src = customerData.imageUrl;
  image.alt = "Customer Image";
  image.classList.add("customer-image");
  customerCard.appendChild(image);

  const customer = document.createElement("div");
  customer.classList.add("customer-content");

  const customerName = document.createElement("h2");
  customerName.classList.add("customer-name");
  customerName.textContent = customerData.title;
    customer.appendChild(customerName);

  const okIcon = document.createElement("img");
  okIcon.src = "src/assets/icons/ok.svg";
  okIcon.alt = "Ok Icon";
  okIcon.classList.add("ok-icon");
  customerName.appendChild(okIcon);

  const customerQuote = document.createElement("p");
  customerQuote.classList.add("customer-quote");
  customerQuote.textContent = customerData.paragraph;
  customer.appendChild(customerQuote);



  customerCard.appendChild(customer);
  // customer.appendChild(customer);

  return customerCard;
}

const customersData = [
  {
    imageUrl: "src/assets/icons/five-star.svg",
    title: "Sarah M. ",
    paragraph:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },

  {
    imageUrl: "src/assets/icons/five-star.svg",
    title: "Alex K.",
    paragraph:
      "The service at Shop.co is outstanding. Fast delivery, high-quality products, and they always exceed my expectations.",
  },
  {
    imageUrl: "src/assets/icons/five-star.svg",
    title: "James L.",
    paragraph:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    imageUrl: "src/assets/icons/five-star.svg",
    title: "Mooen",
    paragraph:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    imageUrl: "src/assets/icons/five-star.svg",
    title: "Leblon James",
    paragraph:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    imageUrl: "src/assets/icons/five-star.svg",
    title: "Rita",
    paragraph:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
];

const customersContainer = document.getElementById("customers-all");

customersData.forEach((data) => {
  const customerCard = createCustomerCard(data);
  customersContainer.appendChild(customerCard);
});

// function dor arrow
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-rigth");
const customersAll = document.querySelector(".customers-all");

arrowLeft.addEventListener("click", () => {
  customersAll.scrollLeft -= 390;
});

arrowRight.addEventListener("click", () => {
  customersAll.scrollLeft += 390;
});

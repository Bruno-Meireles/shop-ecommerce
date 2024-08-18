function createCusroemerCard(customerData) {
  const customerAll = document.createElement("div");
  customerAll.classList.add("customer-all");

  const customersCard = document.createElement("div");
  customersCard.classList.add("customers-card");

  const image = document.createElement("img");
  image.src = customerData.imageUrl;
  image.alt = "customer image";
  customersCard.appendChild(image);

  const customerName = document.createElement("h2");
  customerName.innerText = customerData.title;
  customersCard.appendChild(customerName);

  const customerP = document.createElement("p");
  customerP.classList.add("customer-p");
  customerP.textContent = customerData.paragraph;
  customersCard.appendChild(customerP);
}

const customersData1 = {
  imageUrl: "src/assets/icons/five-star.svg",
  title: "Sarah M.",
  paragraph:
    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.” ",
};
const customersData2 = {
  imageUrl: "src/assets/icons/five-star.svg",
  title: "Sarah M.",
  paragraph:
    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.” ",
};

const container = document.querySelector(".customers-all");
container.appendChild(customersData1);

const customerAll = createCusroemerCard(customersData1);
const customerAll2 = createCusroemerCard(customersData2);

const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-rigth");
const customersAll = document.querySelector(".customers-all");

arrowLeft.addEventListener("click", () => {
  customersAll.scrollLeft -= 600;
});
arrowRight.addEventListener("click", () => {
  customersAll.scrollLeft += 600;
});

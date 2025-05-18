var categories = [];
var products = [];

const getAllCategories = async () => {
  fetch("http://localhost/FT/ADET/A04/categories.php")
    .then((response) => response.json())
    .then((data) => {
      categories = data;
      loadCategories();
    });
};

const getAllProducts = async (categoryID) => {
  const categoryData = {
    categoryID: categoryID,
  };

  fetch("http://localhost/FT/ADET/A04/products.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryData),
  })
    .then((response) => response.json())
    .then((data) => {
      products = data;
      loadProducts();
    });
};

getAllCategories();

let subTotal = 0;
let total = 0;
let valueAddedTax = 1.12;
let receiptItems = [];

function loadCategories() {
  const categoryCards = document.getElementById("categoryCards");

  categories.forEach((category) => {
    categoryCards.innerHTML +=
      `<div onclick="getAllProducts(` +
      category.categoryID +
      `)" indexOfCategories="` +
      category.categoryID +
      `" class="option-label">
                    <div class="option-name">` +
      category.name +
      `</div>
                    <div class="option-quantity">
                      <span class="circle">` +
      category.quantity +
      `</span>
                    </div>
                  </div>
`;
  });

  addHighlightsToActive();
}

function addHighlightsToActive() {
  var allCategoryCards = document.querySelectorAll(
    ".option-card .option-label"
  );

  allCategoryCards.forEach((category) => {
    category.addEventListener("click", function () {
      document
        .querySelector(".option-label.active")
        ?.classList.remove("active");
      category.classList.add("active");

      var index = category.getAttribute("indexOfCategories");
      getAllProducts(index);
    });
  });
}

function loadProducts(categoryID) {
  var productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    var isProductAvailable = product.isAvailable == "true";
    productContainer.innerHTML +=
      `<div class="product` +
      (isProductAvailable ? `` : ` unavailable`) +
      `" ` +
      (isProductAvailable
        ? `onclick="addToSideOrder('` +
          product.name +
          `', '` +
          product.size +
          `', '` +
          product.price +
          `', '` +
          product.code +
          `', '` +
          product.image +
          `')"`
        : ``) +
      `>` +
      product.name +
      `<img src='asset/img/` +
      product.image +
      `'/></div>`;
  });
}

function calculateAllValues(price) {
  price = parseFloat(price);
  subTotal += price;
  total = subTotal * valueAddedTax;

  var subTotalElement = document.getElementById("subTotalValue");
  if (subTotalElement) {
    subTotalElement.innerHTML = Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(subTotal); //INtl.NumberFormat converts total into currency. (from developer.mozilla).
  }

  var totalValueElement = document.getElementById("totalValue");
  totalValueElement.innerHTML = Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(total);
}

function addToSideOrder(name, size, price, code, image) {
  var sideOrder = document.getElementById("sideOrder");

  receiptItems.push({ name, size, price, code });

  calculateAllValues(price);

  sideOrder.innerHTML +=
    `<div class="order-box">
              <div class="details-wrapper">
                <div class="img-card"><img src="asset/img/` +
    image +
    `"/></div>
                <div class="span-holder">
                  <span product-name>` +
    name +
    `</span>
                  <span class="product-size">` +
    size +
    `</span>
                  <span class="product-price">₱ ` +
    price +
    `.00</span>
                </div>
              </div>
              <div class="product-code">` +
    code +
    `</div>
            </div>`;
}

function placeOrderOnReceipt() {
  var receiptArea = document.getElementById("receiptArea");
  receiptArea.innerHTML = "";

  receiptItems.forEach((item) => {
    receiptArea.innerHTML +=
      `<div class="item-details-wrapper">
        <div class="name">` +
      item.name +
      `</div>
        <div class="code">` +
      item.code +
      `</div>
        <div class="size">` +
      item.size +
      `</div>
        <div class="price">` +
      Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(item.price) +
      `
      </div>
      </div>
      <div class="line"></div>`;
  });

  receiptArea.innerHTML +=
    `<div class="receipt-total">AMOUNT: ` +
    Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(total) +
    `</div>`;
}

function clearSideOrder() {
  document.getElementById("sideOrder").innerHTML = "";
  document.getElementById("totalValue").innerHTML = "₱ 0.00";
  document.getElementById("receiptArea").innerHTML = "";
  document.getElementById("subTotalValue").innerHTML = "₱ 0.00";
  receiptItems = [];
  total = 0;
  subTotal = 0;
}

//code from ibarondo.github.io
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const isAmOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12; //convert to 12 hour format
  displayHours = hours ? hours : 12; // if hours is 0. hours is then set to 12

  return (
    displayHours +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0") +
    " " +
    isAmOrPm
  );
}

function formatDate(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    `` +
    days[date.getDay()] +
    `, ` +
    months[date.getMonth()] +
    ` ` +
    date.getDate() +
    ` `
  );
}

function updateDateTime() {
  const dateTimeNow = new Date();
  timeElement.textContent = formatTime(dateTimeNow);
  dateElement.textContent = formatDate(dateTimeNow);
}

setInterval(updateDateTime, 1000);

updateDateTime();
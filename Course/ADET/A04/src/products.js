const products = [
  {
    category: "Hot Coffee",
    quantity: "5",
    items: [
      {
        isAvailable: "true",
        name: "Small Espresso",
        code: "BC-SME",
        size: "6oz",
        price: 75,
        image: "espresso.png",
      },
      {
        isAvailable: "true",
        name: "Medium Espresso",
        code: "BC-MDE",
        size: "8oz",
        price: 149,
        image: "espresso.png",
      },
      {
        isAvailable: "true",
        name: "Large Espresso",
        code: "BC-LE",
        size: "6oz",
        price: 189,
        image: "espresso.png",
      },
      {
        isAvailable: "true",
        name: "Small Americano",
        code: "BC-SMA",
        size: "6oz",
        price: 75,
        image: "americano.png",
      },
      {
        isAvailable: "true",
        name: "Medium Americano",
        code: "BC-MDA",
        size: "8oz",
        price: 149,
        image: "americano.png",
      },
      {
        isAvailable: "true",
        name: "Large Americano",
        code: "BC-LA",
        size: "6oz",
        price: 189,
        image: "americano.png",
      },
      {
        isAvailable: "true",
        name: "Small Cappucino",
        code: "BC-SMC",
        size: "6oz",
        price: 89,
        image: "cappucino.png",
      },
      {
        isAvailable: "true",
        name: "Medium Cappucino",
        code: "BC-MDC",
        size: "6oz",
        price: 179,
        image: "cappucino.png",
      },
      {
        isAvailable: "true",
        name: "Large Cappucino",
        code: "BC-LC",
        size: "6oz",
        price: 209,
        image: "cappucino.png",
      },
      {
        isAvailable: "true",
        name: "Small Latte",
        code: "C-SML",
        size: "6oz",
        price: 89,
        image: "latte.png",
      },
      {
        isAvailable: "true",
        name: "Medium Latte",
        code: "BC-MDL",
        size: "6oz",
        price: 179,
        image: "latte.png",
      },
      {
        isAvailable: "true",
        name: "Large Latte",
        code: "BC-LL",
        size: "6oz",
        price: 209,
        image: "latte.png",
      },
      {
        isAvailable: "true",
        name: "Small Drip",
        code: "BC-SMD",
        size: "6oz",
        price: 69,
        image: "drip.png",
      },
      {
        isAvailable: "true",
        name: "Medium Drip",
        code: "BC-MDD",
        size: "6oz",
        price: 89,
        image: "drip.png",
      },
      {
        isAvailable: "true",
        name: "Large Drip",
        code: "BC-LD",
        size: "6oz",
        price: 159,
        image: "drip.png",
      },
    ],
  },
  {
    category: "Cold Coffee",
    quantity: "5",
    items: [
      {
        isAvailable: "true",
        name: "Small Iced Coffee",
        price: 79,
        code: "BC-SMIC",
        size: "8oz",
        image: "ice_coffee.png",
      },
      {
        isAvailable: "true",
        name: "Medium Iced Coffee",
        price: 159,
        code: "BC-MDIC",
        size: "12oz",
        image: "ice_coffee.png",
      },
      {
        isAvailable: "true",
        name: "Large Iced Coffee",
        price: 209,
        code: "BC-LIC",
        size: "22oz",
        image: "ice_coffee.png",
      },
      {
        isAvailable: "true",
        name: "Small Cold Brew",
        price: 69,
        code: "BC-SMCB",
        size: "8oz",
        image: "cold_brew.png",
      },
      {
        isAvailable: "true",
        name: "Medium Cold Brew",
        price: 139,
        code: "BC-MDCB",
        size: "12oz",
        image: "cold_brew.png",
      },
      {
        isAvailable: "true",
        name: "Large Cold Brew",
        price: 179,
        code: "BC-LCB",
        size: "22oz",
        image: "cold_brew.png",
      },
      {
        isAvailable: "true",
        name: "Small Iced Espresso",
        price: 89,
        code: "BC-SMIE",
        size: "8oz",
        image: "ice_espresso.png",
      },
      {
        isAvailable: "true",
        name: "Medium Iced Espresso",
        price: 179,
        code: "BC-MDIE",
        size: "12oz",
        image: "ice_espresso.png",
      },
      {
        isAvailable: "true",
        name: "Large Iced Espresso",
        price: 209,
        code: "BC-LIE",
        size: "22oz",
        image: "ice_espresso.png",
      },
      {
        isAvailable: "true",
        name: "Small Iced Caffè Americano",
        price: 89,
        code: "BC-SMICA",
        size: "8oz",
        image: "ice_caffe_americano.png",
      },
      {
        isAvailable: "true",
        name: "Medium Iced Caffè Americano",
        price: 159,
        code: "BC-MDICA",
        size: "12oz",
        image: "ice_caffe_americano.png",
      },
      {
        isAvailable: "true",
        name: "Large Iced Caffè Americano",
        price: 209,
        code: "BC-LICA",
        size: "22oz",
        image: "ice_caffe_americano.png",
      },
      {
        isAvailable: "true",
        name: "Small Iced Latte",
        price: 89,
        code: "BC-SMIL",
        size: "8oz",
        image: "ice_latte.png",
      },
      {
        isAvailable: "true",
        name: "Medium Iced Latte",
        price: 159,
        code: "BC-MDIL",
        size: "12oz",
        image: "ice_latte.png",
      },
      {
        isAvailable: "true",
        name: "Large Iced Latte",
        price: 209,
        code: "BC-LIL",
        size: "22oz",
        image: "ice_latte.png",
      },
    ],
  },
  {
    category: "Milktea",
    quantity: "5",
    items: [
      {
        isAvailable: "true",
        name: "Small Wintermelon",
        code: "BC-BC-BC-SMWM",
        price: 29,
        size: "12oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Medium Wintermelon",
        code: "BC-BC-BC-MDWM",
        price: 39,
        size: "16oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Large Wintermelon",
        code: "BC-BC-BC-LWM",
        price: 59,
        size: "22oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Small Okinawa",
        code: "BC-BC-BC-SMO",
        price: 29,
        size: "12oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Medium Okinawa",
        code: "BC-BC-BC-MDO",
        price: 39,
        size: "16oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Large Okinawa",
        code: "BC-BC-LO",
        price: 59,
        size: "22oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Small Hokkaido",
        code: "BC-BC-SMH",
        price: 29,
        size: "12oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Medium Hokkaido",
        code: "BC-BC-MDH",
        price: 39,
        size: "16oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Large Hokkaido",
        code: "BC-BC-LH",
        price: 59,
        size: "22oz",
        image: "milktea.png",
      },
      {
        isAvailable: "true",
        name: "Small Matcha",
        code: "BC-BC-SMM",
        price: 29,
        size: "12oz",
        image: "matcha.png",
      },
      {
        isAvailable: "true",
        name: "Medium Matcha",
        code: "BC-MDM",
        price: 39,
        size: "16oz",
        image: "matcha.png",
      },
      {
        isAvailable: "true",
        name: "Large Matcha",
        code: "BC-LM",
        price: 59,
        size: "22oz",
        image: "matcha.png",
      },
      {
        isAvailable: "false",
        name: "Small Strawberry",
        code: "BC-SMS",
        price: 29,
        size: "12oz",
        image: "strawberry.png",
      },
      {
        isAvailable: "false",
        name: "Medium Strawberry",
        code: "BC-MDS",
        price: 39,
        size: "16oz",
        image: "strawberry.png",
      },
      {
        isAvailable: "false",
        name: "Large Strawberry",
        code: "BC-LS",
        price: 59,
        size: "22oz",
        image: "strawberry.png",
      },
      {
        isAvailable: "true",
        name: "Small Taro",
        code: "BC-SMT",
        price: 29,
        size: "12oz",
        image: "taro.png",
      },
      {
        isAvailable: "true",
        name: "Medium Taro",
        code: "BC-MDT",
        price: 39,
        size: "16oz",
        image: "taro.png",
      },
      {
        isAvailable: "true",
        name: "Large Taro",
        code: "BC-LT",
        price: 59,
        size: "22oz",
        image: "taro.png",
      },
      {
        isAvailable: "false",
        name: "Small Honeydew",
        code: "BC-SMHD",
        price: 29,
        size: "12oz",
        image: "honeydew.png",
      },
      {
        isAvailable: "false",
        name: "Medium Honeydew",
        code: "BC-MDHD",
        price: 39,
        size: "16oz",
        image: "honeydew.png",
      },
      {
        isAvailable: "false",
        name: "Large Honeydew",
        code: "BC-LHD",
        price: 59,
        size: "22oz",
        image: "honeydew.png",
      },
    ],
  },

  {
    category: "Tea",
    quantity: "2",
    items: [
      {
        isAvailable: "true",
        name: "Green Tea",
        code: "BC-GT",
        size: "6oz",
        price: 75,
        image: "green_tea.png",
      },
      {
        isAvailable: "true",
        name: "Matcha Tea",
        code: "BC-MT",
        size: "6oz",
        price: 75,
        image: "matcha_tea.png",
      },
      {
        isAvailable: "false",
        name: "Black Tea",
        code: "BC-BT",
        size: "6oz",
        price: 75,
        image: "black_tea.png",
      },
      {
        isAvailable: "false",
        name: "White Tea",
        code: "BC-WT",
        size: "6oz",
        price: 75,
        image: "white_tea.png",
      },
    ],
  },
  {
    category: "Shakes",
    quantity: "2",
    items: [
      {
        isAvailable: "false",
        name: "Vanilla Shake",
        code: "BC-VS",
        size: "16oz",
        price: 75,
        image: "vanilla_shake.png",
      },
      {
        isAvailable: "true",
        name: "Chocolate Shake",
        code: "BC-CS",
        size: "16oz",
        price: 75,
        image: "chocolate_shake.png",
      },
      {
        isAvailable: "true",
        name: "Strawberry Shake",
        code: "BC-SS",
        size: "16oz",
        price: 75,
        image: "strawberry_shake.png",
      },
    ],
  },
  {
    category: "Pastry",
    quantity: "2",
    items: [
      {
        isAvailable: "true",
        name: "Chocolate Cake",
        size: "Medium",
        code: "BC-CC",
        price: 300,
        image: "chocolate_cake.png",
      },
      {
        isAvailable: "true",
        name: "Chocolate Chip Cookie",
        size: "Small",
        code: "BC-CCC",
        price: 55,
        image: "cookie_chip.png",
      },
    ],
  },
  {
    category: "Snacks",
    quantity: "2",
    items: [
      {
        isAvailable: "true",
        name: "Nachos",
        price: 300,
        code: "BC-N",
        size: "medium",
        image: "fries.png",
      },
      {
        isAvailable: "true",
        name: "Fries",
        price: 55,
        code: "BC-F",
        size: "medium",
        image: "nachos.png",
      },
    ],
  },
  {
    category: "Add-Ons",
    quantity: "1",
    items: [
      {
        isAvailable: "true",
        name: "Pearl",
        size: "none",
        code: "BC-P",
        price: 15,
        image: "pearl.png",
      },
    ],
  },
  {
    category: "Merchandise",
    quantity: "1",
    items: [
      {
        isAvailable: "true",
        name: "Box Coffee White Shirt",
        size: "Large",
        code: "BC-MWS",
        price: 499,
        image: "merch.png",
      },
    ],
  },
];

let subTotal = 0;
let total = 0;
let valueAddedTax = 1.12;
let receiptItems = [];

function loadOptions() {
  const optionCards = document.getElementById("optionCards");

  products.forEach((products, index) => {
    optionCards.innerHTML +=
      `<div onclick="loadProducts(` +
      index +
      `)" indexOfOptions="` +
      index +
      `" class="option-label">
                    <div class="option-name">` +
      products.category +
      `</div>
                    <div class="option-quantity">
                      <span class="circle">` +
      products.quantity +
      `</span>
                    </div>
                  </div>
`;
  });

  addHighlightsToActive();
}

function addHighlightsToActive() {
  var allOptions = document.querySelectorAll(".option-card .option-label");

  allOptions.forEach((option) => {
    option.addEventListener("click", function () {
      document
        .querySelector(".option-label.active")
        ?.classList.remove("active");
      option.classList.add("active");

      var index = option.getAttribute("indexOfOptions");
      loadProducts(index);
    });
  });
}

function loadProducts(optionIndex) {
  var productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  products[optionIndex].items.forEach((item) => {
    var isProductAvailable = item.isAvailable == "true";
    productContainer.innerHTML +=
      `<div class="product` +
      (isProductAvailable ? `` : ` unavailable`) +
      `" ` +
      (isProductAvailable
        ? `onclick="addToSideOrder('` +
          item.name +
          `', '` +
          item.size +
          `', '` +
          item.price +
          `', '` +
          item.code +
          `', '` +
          item.image +
          `')"`
        : ``) +
      `>` +
      item.name +
      `<img src='asset/img/` +
      item.image +
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
loadOptions();

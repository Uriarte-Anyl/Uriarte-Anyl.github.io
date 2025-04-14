<?php
$products = [
  "Grey Chair",
  "Standard Chair",
  "Beige Chair",
  "Couch",
  "Ergonomic Chair",
  "Lamp",
  "Study Table",
  "Slant Chair",
  "Retro Chair",
  "Mid Shelf",
  "Organic Chair",
  "Orange",
];

foreach ($products as $product) {
  echo '
    <div class="box-col col-sm-12 col-md-12 col-xl-3">
      <div class="box">
        <img class="product-img" src="resources/images/' . $product . '.png" alt="">
        <p class="product-title">' . $product . '</p>
      </div>
    </div>
  ';
}
?>
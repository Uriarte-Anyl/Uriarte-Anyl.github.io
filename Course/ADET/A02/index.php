<?php
$section = "home";

if (isset($_GET['section'])) {

  $section = $_GET['section'];

  switch ($section) {
    case "home":
      $section = "home";
      break;
    case "product":
      $section = "product";
      break;
    case "about":
      $section = "about";
      break;
    default:
      header("Location: ?section=home");
  }
} else {
  header("Location: ?section=home");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="resources/images/New_logo.png" />
  <title>Clean Yet Materialistic - Norm Walterson Furniture Company</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous" />
</head>

<style>
  @font-face {
    font-family: "Satoshi";
    src: url("resources/font/Satoshi-Bold.woff2") format("woff2"),
      url("resources/font/Satoshi-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Satoshi";
    src: url("resources/font/Satoshi-Regular.woff2") format("woff2"),
      url("resources/font/Satoshi-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;

  }

  @font-face {
    font-family: "Satoshi";
    src: url("resources/font/Satoshi-Black.woff2") format("woff2"),
      url("resources/font/Satoshi-Black.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f0f0f3;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #E5E5E5;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #DEDEDE;
  }



  body {
    overflow-x: hidden;
    background-color: #f0f0f3;
    padding-left: 24px;
    padding-right: 24px;
  }

  .navbar {
    height: 64px;
    border-radius: 5px;
    background-color: #f0f0f3;
    border-radius: 12px;
    box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
    margin-bottom: 40px;
  }

  .container-product {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 88vh;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .box-col {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .navbar-nav {

    width: 800px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #f0f0f3;
    border-radius: 16px;
    box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  }

  .nav-link {
    font-family: "Satoshi" sans-serif;
    font-weight: bold;
    color: #333a55;
  }

  .nav-link {
    background: linear-gradient(currentColor 0 0) bottom center/ var(--underline-width, 0%) 0.1em no-repeat;
    color: #333a55;
    display: inline-block;
    padding: 0 0.5em 0.2em;
    text-decoration: none;
    transition: background-size 0.5s;
  }

  .nav-link:hover {
    --underline-width: 100%;
  }

  .box {
    width: 400px;
    height: 320px;
    background: #f0f0f3;
    border-radius: 16px;
    box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  }

  .product-img {
    display: block;
    margin: auto;
  }


  .product-title {
    font-family: "Satoshi" sans-serif;
    font-weight: 600;
    color: #333a55;
    text-align: center;
  }

  .header {
    font-family: "Satoshi" sans-serif;
    font-weight: bolder;
    color: #333a55;
    font-size: clamp(16px, 5.4vw, 44px);
    padding-left: 64px;
  }

  .subheader {
    font-family: "Satoshi" sans-serif;
    font-weight: normal;
    color: rgba(51, 58, 85, 0.75);
    font-size: clamp(16px, 3.4vw, 28px);
    padding-left: 64px;
    margin-top: 4px;
  }

  .details {
    font-family: "Satoshi" sans-serif;
    font-weight: normal;
    color: #333a55;
    font-size: clamp(12px, 4vw, 16px);
    padding-left: 64px;
    margin-bottom: 40px;
    max-width: 76ch;
    margin-top: 2px;
  }

  .hero {
    width: clamp(240px, 50vw, 560px);
    height: auto;
    margin-bottom: 16px;
    background: #f0f0f3;
    border-radius: 32px;
    box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  }

  .hero-img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: auto;
  }

  .carousel-holder {
    width: 1024px;
    height: auto;
    margin-bottom: 16px;
    background: #f0f0f3;
    border-radius: 32px;
    box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  }

  .d-block {
    max-width: 100%;
    display: block;
    margin: auto;
  }


  .link a {
  font-family: "Satoshi", sans-serif;
  color: #333a55;
  font-weight: bold;
  font-size: clamp(16px, 3.4vw, 24px);
  background: linear-gradient(currentColor 0 0) bottom center / var(--underline-width, 0%) 0.1em no-repeat;
  display: inline-block;
  padding-left: 16px; 
  text-decoration: none;
  transition: background-size 0.5s;
}

.link a:hover {
  --underline-width: 100%;
}




  /* media */

  @media (max-width: 575.98px) {
    .navbar-nav {
      width: auto;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: start;
      padding-top: 24px;
      gap: 32px;
      background: #f0f0f3;
      border-radius: 16px;
      box-shadow: -10px -10px 30px #ffffff,
        10px 10px 30px rgba(174, 174, 192, 0.4);
    }

    .box {
      width: 240px;
      height: 280px;
      background: #f0f0f3;
      border-radius: 16px;
      box-shadow: -10px -10px 30px #ffffff,
        10px 10px 30px rgba(174, 174, 192, 0.4);
    }

    .product-img {
      display: block;
      margin: auto;
      width: auto;
      height: 230px;
    }

    .header {
      font-family: "Satoshi" sans-serif;
      font-weight: bolder;
      color: #333a55;
      font-size: clamp(13px, 5.2vw, 44px);
      padding-left: 32px;
    }

    .subheader {
      font-family: "Satoshi" sans-serif;
      font-weight: normal;
      color: rgba(51, 58, 85, 0.75);
      font-size: clamp(14px, 3.2vw, 28px);
      margin-top: 4px;
      padding-left: 32px;
    }

    .details {
      font-family: "Satoshi" sans-serif;
      font-weight: normal;
      color: #333a55;
      font-size: clamp(13.33px, 3.2vw, 16px);
      margin-bottom: 40px;
      max-width: 46ch;
      line-height: 19.5px;
      padding-left: 32px;
    }

    .carousel-holder {
      width: 800px;
      height: auto;
      margin-bottom: 16px;
      background: #f0f0f3;
      border-radius: 32px;
      box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
    }

    .container-product {
      overflow-y: visible;
      height: auto;
      max-height: none;
    }



  }
</style>

<body>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand fs-4" href=""><img src="resources/images/New_logo.png" alt=""></a>
      <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header" style="background-color: #f0f0f3">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body justify-content-center" style="background-color: #f0f0f3">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="?section=home" type="button">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="?section=product" type="button">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="?section=about">About</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="">Personal</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">About</a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-product">
    <div class="row">
      <?php
      include("shared/" . $section . ".php");
      ?>
    </div>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.min.js"
    integrity="sha384-VQqxDN0EQCkWoxt/0vsQvZswzTHUVOImccYmSyhJTp7kGtPed0Qcx8rK9h9YEgx+"
    crossorigin="anonymous"></script>

  <script defer src="script.js"></script>
</body>

</html>
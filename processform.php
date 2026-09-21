<?php 
$nameErr = $priceErr = $descErr = $stockErr = "";
$name = $price = $desc = $stock = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    echo "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }

   if (empty($_POST["price"])) {
    echo "Price is required";
  } else {
    $price = test_input($_POST["price"]);
  }

   if (empty($_POST["desc"])) {
    echo "Description is required";
  } else {
    $desc = test_input($_POST["desc"]);
  }

   if (empty($_POST["stock"])) {
    echo"Stock is required";
  } else {
    $stock = test_input($_POST["stock"]);
  }
}

?>

<html>
<body>

Name of product: <?php echo $name; ?><br>
Price of product: <?php echo $price; ?><br>
Description of product: <?php echo $desc; ?><br>
Stock of product: <?php echo $stock; ?>

</body>
</html>
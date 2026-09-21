<!DOCTYPE html>
<head>
  <title>Add product form</title>  
</head>
<body>
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

  function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

 <div style="display: grid;  grid-column: 1 / span 2;">
  <form method="post" id="myForm" 
  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  <label>Name of product:</label>
  <input type="text" id="name" name="name"> <span><?php echo $nameErr;?></span>
  <label>Price of product: </label>
  <input type="text" id="price" name="price"> <span><?php echo $priceErr;?></span>
  <label>Description of product: </label>
  <input type="text" id="desc" name="desc"> <span><?php echo $descErr;?></span>
  <label>Stock of product: </label>
  <input type="text" id="stock" name="stock"> <span><?php echo $stockErr;?></span>
  <br><br>
  <input type="submit" value="Submit" onclick="">
</form>
</div>
</body>
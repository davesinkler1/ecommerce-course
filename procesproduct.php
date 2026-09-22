<!DOCTYPE html>
<head>
  <title>Add product form</title>  
  <link rel="stylesheet" href="style.css">
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

 <div id="formContainer">
  <form method="post" id="myForm" 
  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  <label>Name of product:</label>
  <input type="text" id="name" name="name" class="form-input"> <br> <p class="form-warning"><?php echo $nameErr;?></p> <br>
  <label>Price of product: </label>
  <input type="text" id="price" name="price" class="form-input"> <br> <p class="form-warning"><?php echo $priceErr;?></p> <br>
  <label>Description of product: </label>
  <input type="text" id="desc" name="desc" class="form-input"> <br> <p class="form-warning"><?php echo $descErr;?></p> <br>
  <label>Stock of product: </label>
  <input type="text" id="stock" name="stock" class="form-input"> <br> <p class="form-warning"><?php echo $stockErr;?></p> <br>
  <br><br>
  <input type="submit" value="Submit" onclick="EmptyAlert()">
</form>
</div>
<script>
  function EmptyAlert() {
    console.log("called")
    if (document.getElementById("name").value.trim() === "") {
        alert(<?php echo $nameErr; ?>);
    } else {
        console.log("not empty");
    }


    if (document.getElementById("price").value.trim() === "") {
        alert(<?php echo $priceErr; ?>);
    } else {
      console.log("not empty");
    }

    if (document.getElementById("desc").value.trim() === "") {
        alert(<?php echo $descErr; ?>);
    } else {
      console.log("not empty");
    }

    if (document.getElementById("stock").value.trim() === "") {
        alert(<?php echo $stockErr; ?>);
    } else {
      console.log("not empty");
    }
  }
</script>
</body>
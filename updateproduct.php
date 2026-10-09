<!DOCTYPE html>
<head>
  <title>Add product form</title>  
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php 
  require 'C:\xampp\htdocs\database_conn.php'

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $id = $_POST['id'];
    $price = $_POST['price'];
    $description = $_POST['desc'];
    $stock = $_POST['stock'];
    $image = $_POST['image'];
  }

  $sql = "UPDATE products SET name = :name, price = :price, desc = :desc, stock = :stock, image = :image WHERE id = :id";
  $stmt = $pdo->prepare($sql);
  if (!empty($image)) {
      $stmt->execute([$id, $name, $price, $description, $stock, $image, $id]);
  } elseif (empty($image)) {
       $stmt->execute([$name, $price, $description, $stock, $id]);
  }
?>
 <label>Edit product</label>
 <div id="formContainer">
  <form method="post" id="myForm" 
  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  <label>ID of product:</label>
  <input type="text" id="id" name="id" class="form-input"> <br> <p class="form-warning"><?php echo $nameErr;?></p> <br>
  <label>Name of product:</label>
  <input type="text" id="name" name="name" class="form-input"> <br> <p class="form-warning"><?php echo $nameErr;?></p> <br>
  <label>Price of product: </label>
  <input type="text" id="price" name="price" class="form-input"> <br> <p class="form-warning"><?php echo $priceErr;?></p> <br>
  <label>Description of product: </label>
  <input type="text" id="desc" name="desc" class="form-input"> <br> <p class="form-warning"><?php echo $descErr;?></p> <br>
  <label>Stock of product: </label>
  <input type="text" id="stock" name="stock" class="form-input"> <br> <p class="form-warning"><?php echo $stockErr;?></p> <br>
  <label>Image linkt: </label>
  <input type="text" id="image" name="image" class="form-input"> <br> <p class="form-warning"><?php echo $stockErr;?></p> <br>
  <br><br>
  <input type="submit" value="Submit" onclick="EmptyAlert()">
</form>
</div>
</body>
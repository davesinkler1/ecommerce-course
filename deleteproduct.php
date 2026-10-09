<!DOCTYPE html>
<head>
  <title>Delete product form</title>  
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php 
  require 'C:\xampp\htdocs\database_conn.php'

  $nameErr = $priceErr = $descErr = $stockErr = "";
  $name = $price = $desc = $stock = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);

    if (empty($_POST["name"])) {
      echo "Name is required";
    } else {
      $name = test_input($_POST["name"]);
    }
  }

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  if (!empty($name)) {

    $sql = "DELETE FROM products WHERE name = :name";
    $stmt = $pdo->prepare($sql);
    if ($stmt->execute(['name' => $name])) {
    } else {
         $message = "Failed to delete the record.";
     }
  }

    $conn->close();
?>
 <label>Delete product</label>
 <div id="formContainer">
  <form method="post" id="myForm" 
  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  <label>Name of product:</label>
  <input type="text" id="name" name="name" class="form-input"> <br> <p class="form-warning"><?php echo $nameErr;?></p> <br>
  <input type="submit" value="Submit" onclick="EmptyAlert()">
</form>
</div>
<script>
  function EmptyAlert() {
    console.log("called")
    if (document.getElementById("name").value.trim() === "") {
        alert(<?php echo $nameErr ?>);
    } else {
        console.log("not empty");
    }
  }
</script>
</body>
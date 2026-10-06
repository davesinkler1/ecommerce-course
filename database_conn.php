<?php 
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "ecommerce";
    $charset = 'utf8mb4';

    $dsn = "mysql:host=$host;dbname=$database;charset=$charset";

    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    try {
        $pdo = new PDO($dsn, $username, $password, $options);
    } catch (PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }

    $conn = mysqli_connect($host, $username, $password, $database);

    if (!$conn) {
        die("Failed to connect" . mysqli_connect_error());
    }

    echo "Succesful";

    /*function SelectValues() {
        $sql = "SELECT name, product, price, description, stock FROM products";
        $result = mysqli_query($conn, $sql);
        return $result;
    }*/

?>

// add category and rating row to database
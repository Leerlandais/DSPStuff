<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DSP Spreadsheet</title>
    <link rel="stylesheet" href="/public/styles/style.css">
</head>
<body>
    <?php
    require_once "../config.php";

    try {
        $db = new PDO(
            MY_DB_TYPE.':host='.MY_DB_HOST.';port='.MY_DB_PORT.';dbname='.MY_DB_NAME.';charset='.MY_DB_CHARSET,
            MY_DB_LOGIN,
            MY_DB_PWD
        );
            $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);   // default method for FETCH
    }catch(Exception $e){
        die($e->getMessage());
    }
    $showSys = "SELECT * from systemnames";
    $query = $db->query($showSys);
    $allSys = $query->fetchAll();
    $planCount = "SELECT planetCount from systemnames";
    $planQuery = $db->query($planCount);
    foreach ($allSys as $systems):
    ?>
<section id = "header">
<h1>DSP Spreadsheet Maker</h1>
</section>

<hr>
<section id = "buttons">
    <button class="button" id="addButton">Add System</button>
    <button class="button" id="remButton"></button>
    <button class="button"></button>
    <button class="button"></button>
    <button class="button"></button>
    <button class="button"></button>
</section>
<hr>
<section id = "mainBody">
    <table id="mainTable">
        <tr>
            <th>System Name</th>
            <th>Planets</th>
        </tr>
        <tr id="innerTable">
        </tr>
</table>
</section>
<section id = "footer">
<hr>
<h4 id="copyright">&copy; Lee Brennan
</h4>
<hr>  
</section>
<?php endforeach;?>
    <script src="/public/scripts/script.js"></script>
</body>
</html>
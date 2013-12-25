<!DOCTYPE html>
<html lang="en">
<head>

    <title>VCrudGui Title</title>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="generator" content="Bootply"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">


    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
    <link href="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet"/>
    <link href="../lib/datepicker/css/datepicker.css"

    <link href="../css/vcrudCustom.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="shortcut icon" href="/bootstrap/img/favicon.ico">
    <link rel="apple-touch-icon" href="/bootstrap/img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/bootstrap/img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/bootstrap/img/apple-touch-icon-114x114.png">
</head>
<body>

<!-- importing header -->
<?php
include "../component/fixedHeader.php";
?>

<!-- content -->
<!-- Main -->
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <!-- importing menu -->
            <?php
            include "../component/expandibleSideMenu.php";
            ?>
        </div>
        <div class="col-md-9">
            <?php
            include "../component/dataTable.php";
            ?>

            <?php
            include "../component/codeEditor.php";
            ?>

            <?php
            include "../component/search/searchContainer.php";
            ?>
        </div>
    </div>
</div>

<!-- importing footer -->
<?php
include "../component/footer.php";
?>


<!-- JavaScript Imports -->
<script type='text/javascript' src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
<script type='text/javascript' src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
<script type='text/javascript' src="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/js/bootstrap-editable.min.js"></script>
<script type='text/javascript' src="../lib/datepicker/js/bootstrap-datepicker.js"></script>
<script type='text/javascript' src="../js/vcrudCustom.js"></script>

</body>
</html>
<?php

error_reporting(0);
if (isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST") {

    $path = "Midia/Logotipos/"; //set your folder path
    //set the valid file extensions 
    $valid_formats = array("jpg", "png", "gif", "bmp", "jpeg", "GIF", "JPG", "PNG"); //add the formats you want to upload

    $name = $_FILES['myfile']['name']; //get the name of the file
    
    $size = $_FILES['myfile']['size']; //get the size of the file

    if (strlen($name)) { //check if the file is selected or cancelled after pressing the browse button.
        list($txt, $ext) = explode(".", $name); //extract the name and extension of the file
        if (in_array($ext, $valid_formats)) { //if the file is valid go on.
            //if ($size < 2098888) { // check if the file size is more than 2 mb
                $file_name = $_POST['filename']; //get the file name
                $tmp = $_FILES['myfile']['tmp_name'];
                if (move_uploaded_file($tmp, $path . $file_name.'.'.$ext)) { //check if it the file move successfully.
                    echo "Upload realizado com sucesso!!";
                } else {
                    echo "Falha no Upload!";
                }
            //} else {
            //    echo "O tamanho do arquivo excede 2mb!";
           // }
        } else {
            echo "Tipo de arquivo inválido!";
        }
    } else {
        echo "Por favor selecione um arquivo!";
    }
    exit;
}
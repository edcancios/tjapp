<?php
//DEFININDO FUNCTION EXTERNA
function teste(){
 $array = array(
    "foo" => "bar",
    "bares" => "foo",
);
 return $array;
}

//FUNÇÃO DE ERRO NA CHAMADA
function func_error(){
	$array = array(
		"message" => "error"
	);
	return $array;
}

?>
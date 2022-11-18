	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

//atualizar os nomes em seus elementos html utilizando id
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

//atualiza o placar  utilizando o id
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

//atualiza os elementos html utilizando o id 
document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;


function send() {
	//obtem a palavra inserida na caixa de texto usando o id
	get_word = document.getElementById("word").value;

	//converte todas as entradas de palavras para minusculas
	word = get_word.toLowerCase();

	//mostra a informação no console
	console.log("palavra em letras minúsculas = " + word);

	//usado para obter as letras
    charAt1 = word.charAt(1);

	console.log(charAt1);

	//divide a palavra em por 2 
	lenght_divide_2 = Math.floor(word.length/2);

	//passa o valor de lenght_divide_2 para charAt
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

	//seleciona a terceira letra a ser substituida na palavra
    lenght_minus_1 = word.length - 1; 


	//Passa length_minus_1 para charAt()
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

	//logica para remover a primeira letra
    remove_charAt1 = word.replace(charAt1, "_");

	//logica para remover a segunda letra
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");

	//logica para remover a terceira letra
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";

    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";

	//adiciona a variavel do botão verificar e da caixa de entrada em uma unica variavel
    row =  question_word + input_box + check_button ; 

    document.getElementById("output").innerHTML = row;
	document.getElementById("word").value = "";
}

/*variáveis utilizadas para armazenar quem está fazendo a
pergunta e quem está respondendo.*/
question_turn = "player1";
answer_turn = "player2";


function check()
{
	//obtem a palavra inserida pelo jogador responsável pelo turno de respostas através do id
	get_answer = document.getElementById("input_check_box").value;

	//converte essa palavra para letras minúsculas
	answer = get_answer.toLowerCase();
	

	//usar um if para comparar as duas palavras entre si
	if(answer == word)	
	{
		//verifica seo valor de answer(resposta) é player1
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
		//verifica se o turno de pergunta é do player1
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Turno de Perguntas - " + player1_name ;
	}

	//verifica se o player1 respondeu e trocar de turno de resposta
	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno de Respostas - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno de Respostas - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}
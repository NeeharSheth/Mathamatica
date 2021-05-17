player1_name= localStorage.getItem("player1");
player2_name= localStorage.getItem("player2");

player1_score= 0;
player2_score= 0;

document.getElementById("player1").innerHTML= player1_name+":";
document.getElementById("player2").innerHTML= player2_name + ":";
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;
document.getElementById("playerQ").innerHTML= "Question Turn-"+player1_name;
document.getElementById("playerA").innerHTML= "Answer Turn-"+ player2_name;

function send(){
    number1= document.getElementById("num1").value;
    number2= document.getElementById("num2").value;
    answer= number1*number2;
    question= number1+" X "+number2;
question_word= "<h4 id='word_display'> Q. "+question+"</h4>";
input_box="<br> Answer: <input type='text' id='input_checkbox'>";
check_buton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row= question_word+ input_box+ check_buton;
document.getElementById("output").innerHTML=row;
document.getElementById("word_input").value="";
}
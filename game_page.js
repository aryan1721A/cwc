player1_number=localStorage.getItem("player1_number");
player2_munber=localStorage.getItem("player2_number");

player1_score=0;
player2_score=0;

document.getElementById("player1_number").innerHTML=player1_number+" : ";
document.getElementById("player2_number").innerHTML=player2_number+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn- "+player1_number;
document.getElementById("player_answer").innerHTML="Answer turn- "+player2_number;
  
function send(){
    
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;

    acual_ans=parseInt(number1)*parseInt(number2);
    console.log(acual_ans);

    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer :<input id='input_check_box' type='text'>";
    check_button="<br><br><button class='btn btn-info' onclick=check()>Check</button>";
    row=question_word+input_box+check_button;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
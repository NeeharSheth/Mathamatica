function add_user(){
  player1= document.getElementById("player1_input").value;
  console.log(player1);
    localStorage.setItem("player1",player1);
    player2= document.getElementById("player2_input").value;
    localStorage.setItem("player2",player2);
    window.location= "game_page.html"
}
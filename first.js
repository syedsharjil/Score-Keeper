alert("connected");

var player1=document.getElementById("p1");
var player2= document.getElementById("p2");
var h1=document.querySelector("h1");
var s1=document.getElementById("score1");
var s2=document.getElementById("score2");
var reset=document.getElementById("res");
var playingto=document.getElementById("playingto");
var slimit=document.getElementById("scorelimit");
var winningscore;
console.log(slimit);
console.log(player1);
console.log(player2);
console.log(s1);
console.log(s2);
console.log(reset);
p1score=0;
p2score=0;
slimit.addEventListener("change",function()
{
    playingto.textContent=slimit.value;
    winningscore=Number(slimit.value);

})
player1.addEventListener("click",function(){
if(p1score<winningscore)
{
    p1score++;
s1.textContent=p1score;
console.log(scorelimit);
} 
else
{

    p1score=0;
    p2score=0;
    s1.textContent=p1score;
    s2.textContent=p2score;
    alert("Player 1 wins");
    
}
});
player2.addEventListener("click",function(){
    if(p2score<winningscore)
    {
        p2score++;
    s2.textContent=p2score;
    }
    else
    {
        p1score=0;
        p2score=0;
        s1.textContent=p1score;
        s2.textContent=p2score;
        alert("Player 2 wins");
        
    }
    });
reset.addEventListener("click",function(){
    s1.textContent="0";
    s2.textContent="0";
});
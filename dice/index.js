var randomNumber1=Math.random();
randomNumber1*=6;
randomNumber1=Math.floor(randomNumber1)+1;
var sum1=0;
var sum2=0;

document.querySelector(".img1").setAttribute("src","/dice/images/dice"+randomNumber1+".png");
var randomNumber2=Math.random();
randomNumber2*=6;
randomNumber2=Math.floor(randomNumber2)+1;
sum1+=randomNumber1;
sum2+=randomNumber2;
document.querySelector(".img2").setAttribute("src","/dice/images/dice"+randomNumber2+".png");
document.querySelector("h1").style.fontSize="5rem";
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Refresh me<br> Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
document.querySelector(".total1").innerHTML="Player1: "+sum1;
document.querySelector(".total2").innerHTML="Player2: "+sum2;
document.querySelector(".total1").style.fontSize="2rem";
document.querySelector(".total2").style.fontSize="2rem";
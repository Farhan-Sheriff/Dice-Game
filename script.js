function validate(){
	var x = document.querySelector(".Player1").innerHTML = prompt("enter player 1 name")
	var y = document.querySelector(".Player2").innerHTML = prompt("enter player 2 name")


	var letters = /^[a-zA-Z]+$/;
	if(x.match(letters) && y.match(letters))
	{
		alert('Click Start to Play')
		c = x.slice(0,1)
		d = c.toUpperCase()
		e = x.slice(1,x.length)
		f = e.toLowerCase()
		g = d + f
		document.querySelector(".Player1").innerHTML = g

		h = y.slice(0,1)
		i = h.toUpperCase()
		j = y.slice(1,y.length)
		k = j.toLowerCase()
		l = i + k
		document.querySelector(".Player2").innerHTML = l

	}else
	{
		alert('invalid input, enter name');
		z = validate();
	}
   
} validate();



document.querySelector(".button").addEventListener("click",run)
document.querySelector(".button1").addEventListener("click",run)

function run() {
var randomNumber1 = Math.floor((Math.random()*6)+1)
var randomNumber2 = Math.floor((Math.random()*6)+1)
//var dice1 =document.querySelector(".img1").setAttribute("src","images/dice1.png")

var dice1 =document.querySelector(".img1")
var dice2 =document.querySelector(".img2")

dice1.setAttribute("src","dice" + randomNumber1 + ".png")
dice2.setAttribute("src","dice" + randomNumber2 + ".png")

if(randomNumber1>randomNumber2){
		document.querySelector("h1").textContent = g + " Wins"
}else if(randomNumber2>randomNumber1){
	    document.querySelector("h1").textContent = l + " Wins"
}else{
		document.querySelector("h1").textContent = "It\'s a draw"
}

}

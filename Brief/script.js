document.getElementById('themeToggle').addEventListener('click', function() {
     document.body.style.backgroundColor = "black" ;
     document.body.style.display= 'none';
});


let Spent = 10;
document.getElementById("Spent").innerHTML = Spent + '$' ;

let Income = 15;
document.getElementById("Income").innerHTML = Income + '$' ;

let Balance = 10;
document.getElementById("Balance").innerHTML = Balance + '$' ;
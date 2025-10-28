let Spent = 2;
document.getElementById("Spent").innerHTML = Spent + '$' ;

let Income = 2;
document.getElementById("Income").innerHTML = Income + '$' ;

let Balance = 2;
document.getElementById("Balance").innerHTML = Balance + '$' ;

/* first line */

document.getElementById('themeToggle').addEventListener('click', function() {
     document.body.style.backgroundColor = "black" ;
     document.body.style.display= 'none';
});

document.getElementById("submitBtn").addEventListener('click', function() {
     
     let input1 = document.getElementById("input1").value;
     let input2 = document.getElementById("input2").value;
     let input3 = document.getElementById("input3").value;
     console.log(input3);
     console.log(input1);
     console.log(input2);

});

/*   i'll work on this later
document.getElementById("btn").addEventListener("click", function(){

      document.querySelector(".popup").style.display = "block";

});

const myDiv = document.getElementById('Card');

const newDiv = document.createElement('div');
newDiv.className = 'card-2 rounded-xl bg-red-200';
newDiv.innerHTML = `
  <section class="popup">
    <ul>
      <li>
        <a href="#">Edit</a>
        <a href="#">Remove</a>
        <a href="#">Edit</a>
      </li>
    </ul>
  </section>
  <button class="btn2" type="submit">...</button>
`;
document.getElementById("btn2").addEventListener("click", function(){

      document.querySelector(".popup").style.display = "block";

});

myDiv.appendChild(newDiv); // adds it without deleting existing content
*/
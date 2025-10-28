let Spent = 0;
document.getElementById("Spent").innerHTML = Spent + 'DH' ;

let Income = 0;
document.getElementById("Income").innerHTML = Income + 'DH' ;

let Balance = 0;
document.getElementById("Balance").innerHTML = Balance + 'DH' ;

/* first line dyal total income / expenses o balance */



document.getElementById("btn").addEventListener("click", function(){

      document.querySelector(".popup").style.display = "block";

});

/* dyal dark mode */
document.getElementById('themeToggle').addEventListener('click', function() {
     document.body.style.backgroundColor = "#000000" ;
     document.querySelector("header").style.backgroundColor = "#113045";
     document.querySelector("section").style.backgroundColor = "#0d63a5";
});


/* Add/remove Button */ 
document.getElementById("btn-positive").addEventListener('click', function() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
     
    let number = parseInt(input2);

    Income = Income + number ;
    document.getElementById("Income").innerHTML = '+' + Income + 'DH' ;
    Balance = Income - Spent ;
    document.getElementById("Balance").innerHTML = Balance + 'DH' ;

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
    <button class="btn2" type="submit">...</button>`;
});

document.getElementById("btn-negative").addEventListener('click', function() {
     let input1 = document.getElementById("input1").value;
     let input2 = document.getElementById("input2").value;
     
     let number = parseInt(input2);

     Spent = Spent + number ;
     document.getElementById("Spent").innerHTML = '-' + Spent + 'DH' ;
     Balance = Income - Spent ;
     document.getElementById("Balance").innerHTML = Balance + 'DH' ;
});


/*   i'll work on this later

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
let Spent = 0;
document.getElementById("Spent").innerHTML = Spent + 'DH' ;

let Income = 0;
document.getElementById("Income").innerHTML = Income + 'DH' ;

let Balance = 0;
document.getElementById("Balance").innerHTML = Balance + 'DH' ;

/* first line dyal total income / expenses o balance */



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
    
    if (input1.trim() === '' || input2.trim() === '') {
        alert("You Can't Submit it Empty");
        return;
    }

    console.log(input1)
    let number = parseInt(input2);

    Income = Income + number ;
    document.getElementById("Income").innerHTML = '+' + Income + 'DH' ;
    Balance = Income - Spent ;
    document.getElementById("Balance").innerHTML = Balance + 'DH' ;
    
    const myDiv = document.getElementById('Card');
    const newDiv = document.createElement('div');
    newDiv.className = 'h-40 shadow rounded-xl bg-green-200 hover:scale-105 transition-all';
    newDiv.innerHTML = `
    <div class="flex justify-around gap-2">
      <div class="Card-menu hidden justify-center items-center bg-green-500 rounded-xl h-5 w-30">
        <ul>
          <li class="flex gap-4 text-xs m-2">
            <a class="hover:text-red-700 hover:scale-105 transition-all" href="#">Edit</a>
            <a class="hover:text-red-700 hover:scale-105 transition-all" href="#">Remove</a>
          </li>
        </ul>
      </div>
      <button id="btn" class=" text-lg hover:text-red-700 hover:scale-150 transition-all" type="submit">
        <img class="w-6" src="./img/menu.png" alt="3 dots for menu">
      </button>
    </div>
    <div class="flex flex-col items-c gap-1 text-center h-32">
      <h3 class="text-lg">+${number}DH</h3>
      <p class="text-xs">${input1}</p>
    </div>`;

    myDiv.appendChild(newDiv);

    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';

    document.getElementById("btn").addEventListener("click", function(){

         document.querySelector(".Card-menu").style.display = "flex";
  });

});

document.getElementById("btn-negative").addEventListener('click', function() {
     let input1 = document.getElementById("input1").value;
     let input2 = document.getElementById("input2").value;
     
     if (input1.trim() === '' || input2.trim() === '') {
        alert("You Can't Submit it Empty");
        return;
    }

     let number = parseInt(input2);

     Spent = Spent + number ;
     document.getElementById("Spent").innerHTML = '-' + Spent + 'DH' ;
     Balance = Income - Spent ;
     document.getElementById("Balance").innerHTML = Balance + 'DH' ;

     const myDiv = document.getElementById('Card');
    const newDiv = document.createElement('div');
    newDiv.className = 'h-40 shadow rounded-xl bg-red-200 hover:scale-105 transition-all';
    newDiv.innerHTML = `
    <div class="flex justify-around gap-2">
      <div class="Card-menu hidden justify-center items-center bg-green-500 rounded-xl h-5 w-30">
        <ul>
          <li class="flex gap-4 text-xs m-2">
            <a class="hover:text-red-700 hover:scale-105 transition-all" href="#">Edit</a>
            <a class="hover:text-red-700 hover:scale-105 transition-all" href="#">Remove</a>
          </li>
        </ul>
      </div>
      <button id="btn" class=" text-lg hover:text-red-700 hover:scale-150 transition-all" type="submit">
        <img class="w-6" src="./img/menu.png" alt="3 dots for menu">
      </button>
    </div>
    <div class="flex flex-col items-c gap-1 text-center h-32">
      <h3 class="text-lg">-${number}DH</h3>
      <p class="text-xs">${input1}</p>
    </div>`;

    myDiv.appendChild(newDiv);

    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';

    document.getElementById("btn").addEventListener("click", function(){

         document.querySelector(".Card-menu").style.display = "flex";
  });
});

let a = '10'
let b = a + 2 * 2

result = a * b
console.log(b)

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
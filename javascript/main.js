let Spent = 0;
document.getElementById("Spent").innerHTML = Spent + 'DH' ;

let Income = 0;
document.getElementById("Income").innerHTML = Income + 'DH' ;

let Balance = 0;
document.getElementById("Balance").innerHTML = Balance + 'DH' ;

/* first line dyal total income / expenses o balance */



/* dyal dark mode */
document.getElementById('themeToggle').addEventListener('click', function() {
    document.querySelector(".sun").style.display = "flex";
    document.querySelector(".moon").style.display = "none";
    document.body.style.backgroundColor = "#000000" ;
    document.querySelector("header").style.backgroundColor = "#113045";
    document.querySelector(".Gridd").style.backgroundColor = "#000000";
    document.querySelector(".Tran-text").style.color = "white";

}); 

/* Dyal Light Mode */
document.getElementById('themeToggle-light').addEventListener('click', function() {
    document.querySelector(".sun").style.display = "none";
    document.querySelector(".moon").style.display = "flex";
    document.body.style.backgroundColor = "white" ;
    document.querySelector("header").style.backgroundColor = "";
    document.querySelector("section").style.backgroundColor = "white";
    document.querySelector(".Tran-text").style.color = "#000000";
}); 

let btnidnumber = 0 ;
let btnidnumber1 = 0 ;

/* Add/remove Button */ 

// --- dyal Income ---
document.getElementById("btn-positive").addEventListener('click', function () {
  let input1 = document.getElementById("input1").value.trim();
  let input2 = document.getElementById("input2").value.trim();
  let currentTime = new Date();

  if (input1 === '' || input2 === '') {
    alert("You can't submit it empty");
    return;
  }

  let number = parseInt(input2);
  Income += number;
  document.getElementById("Income").innerHTML = '+' + Income + 'DH';
  Balance = Income - Spent;
  document.getElementById("Balance").innerHTML = Balance + 'DH';
  btnidnumber++;

  const myDiv = document.getElementById('Card');
  const newDiv = document.createElement('div');
  newDiv.className = 'h-40 shadow rounded-xl bg-green-100 hover:scale-105 transition-all';
  newDiv.innerHTML = `
    <div class="flex justify-around gap-2">
      <div class="Card-menu-${btnidnumber} hidden justify-center items-center rounded-xl h-5 w-30">
        <ul>
          <li class="flex gap-4 text-xs m-2">
            <button id="editbtn-${btnidnumber}" class="hover:text-red-400">Edit</button>
            <button id="removebn" class="hover:text-red-400">Remove</button>
          </li>
        </ul>
      </div>
      <button id="btn--${btnidnumber}" class="text-lg hover:text-red-700 hover:scale-150 transition-all" type="submit">
        <img class="w-6" src="./img/menu.png" alt="3 dots for menu">
      </button>
      <button id="btn-${btnidnumber}" class="hidden text-lg hover:text-red-700 hover:scale-150 transition-all" type="submit">
        <img class="w-6" src="./img/menu.png" alt="3 dots for menu">
      </button>
    </div>
    <div class="flex flex-col items-center gap-5 text-center justify-between h-32">
      <h3 id="valuu" class="text-lg text-green-700">+${number}DH</h3>
      <p id="valuu1" class="text-xs">${input1}</p>
      <p class="text-xs">${currentTime.toLocaleString()}</p>
    </div>`;

  myDiv.appendChild(newDiv);

  document.getElementById("input1").value = '';
  document.getElementById("input2").value = '';

  // Open/Close menu
  const btnOpen = document.getElementById("btn--" + btnidnumber);
  const btnClose = document.getElementById("btn-" + btnidnumber);
  const cardMenu = document.querySelector(".Card-menu-" + btnidnumber);

  btnOpen.addEventListener("click", () => {
    btnOpen.style.display = "none";
    btnClose.style.display = "flex";
    cardMenu.style.display = "flex";
  });

  btnClose.addEventListener("click", () => {
    btnClose.style.display = "none";
    btnOpen.style.display = "flex";
    cardMenu.style.display = "none";
  });

  // Edit window
  const editbtn = document.getElementById(`editbtn-${btnidnumber}`);
  const editcontainer = document.getElementById("editcontainer");

  editbtn.addEventListener("click", function () {
    cardMenu.style.display = 'none';

    editcontainer.innerHTML = '';

    const newdiv = document.createElement('div');
    newdiv.className = 'relative bg-blue-50 w-64 h-60 text-center rounded-xl flex items-center justify-around flex-col gap-5';
    newdiv.innerHTML = `
      <h1>Edit Your Transaction</h1>
      <input id="newvalu1" type="text" value="${input1}" placeholder="Description" class="p-2 border rounded" required>
      <input id="newvalu2" type="number" value="${number}" placeholder="Amount (DH)" class="p-2 border rounded" required>
      <button id="editbttn" class="hover:text-red-700 bg-green-300 w-16 rounded-xl">Edit</button>
      <button id="editclose" class="absolute hover:text-red-700 right-3 bg-red-200 w-6 rounded-full top-1">X</button>
    `;
    editcontainer.appendChild(newdiv);

    editcontainer.style.display = "flex";

    const editclose = document.getElementById('editclose');
    editclose.addEventListener('click', function () {
      editcontainer.style.display = "none";
    });

    document.getElementById("editbttn").addEventListener('click', function(){
       let nextvalu = document.getElementById("newvalu1").value;
       let newdescripting = document.getElementById("newvalu2").value;

       const editclose = document.getElementById('editclose');

       editcontainer.style.display = 'none'

       input1 = nextvalu ;
       number = newdescripting ;

       document.getElementById("valuu1").innerHTML = nextvalu;
       document.getElementById("valuu").innerHTML = '+' + newdescripting +'DH';

    });
  });

  // remove btn
  
    let removebtn = document.getElementById('removebn')

    removebtn.addEventListener('click', function(){
       
      let removecontainer = document.getElementById('removecontainer')

      removecontainer.style.display = 'flex'

      
    })

    let removeclose = document.getElementById('removeclose')

    removeclose.addEventListener('click', function(){

      let removecontainer = document.getElementById('removecontainer')

      removecontainer.style.display = 'none'

    })

    let yesbttn = document.getElementById('yesbttn').addEventListener('click', function(){
   
   
       })

    let nobttn = document.getElementById('nobttn').addEventListener('click', function(){

          let removecontainer = document.getElementById('removecontainer')

                     removecontainer.style.display = 'none'
       })
});




// dyal Expence 
document.getElementById("btn-negative").addEventListener('click', function() {
  let input1 = document.getElementById("input1").value.trim();
  let input2 = document.getElementById("input2").value.trim();
  let currentTime = new Date();

  if (input1 === '' || input2 === '') {
    alert("You Can't Submit it Empty");
    return;
  }

  let number = parseInt(input2);

  Spent += number;
  document.getElementById("Spent").innerHTML = '-' + Spent + 'DH';
  Balance = Income - Spent;
  document.getElementById("Balance").innerHTML = Balance + 'DH';

  btnidnumber1++;

  const myDiv = document.getElementById('Card');
  const newDiv = document.createElement('div');
  newDiv.className = 'h-40 shadow rounded-xl bg-red-100 hover:scale-105 transition-all';
  newDiv.innerHTML = `
    <div class="flex justify-around gap-2">
      <div class="Card-menu-${btnidnumber1} hidden justify-center items-center bg-green-500 rounded-xl h-5 w-30">
        <ul>
          <li class="flex gap-4 text-xs m-2">
            <button> Edit </button>
            <button> Remove </button>
          </li>
        </ul>
      </div>
      <button id="btn--${btnidnumber1}" class="text-lg hover:text-red-700 hover:scale-150 transition-all" type="submit">
        <img class="w-6" src="./img/menu.png" alt="3 dots for menu">
      </button>
      <button id="btn-${btnidnumber1}" class="hidden text-lg hover:text-red-700 hover:scale-150 transition-all" type="submit">
        <img class="w-6" src="./img/menu.png" alt="3 dots for menu">
      </button>
    </div>
    <div class="flex flex-col items-center gap-1 text-center h-32">
      <h3 class="text-lg text-red-700">-${number}DH</h3>
      <p class="text-xs">${input1}</p>
      <p class="text-xs">${currentTime.toLocaleString()}</p>
    </div>`;

  myDiv.appendChild(newDiv);
  document.getElementById("input1").value = '';
  document.getElementById("input2").value = '';

  const btnOpen = document.getElementById("btn--" + btnidnumber1);
  const btnClose = document.getElementById("btn-" + btnidnumber1);
  const cardMenu = document.querySelector(".Card-menu-" + btnidnumber1);

  btnOpen.addEventListener("click", function() {
    btnOpen.style.display = "none";
    btnClose.style.display = "flex";
    cardMenu.style.display = "flex";
  });

  btnClose.addEventListener("click", function() {
    btnClose.style.display = "none";
    btnOpen.style.display = "flex";
    cardMenu.style.display = "none";
  });

  
});

// edit o delete Button




// for the add button info expense

document.getElementById('btn-negative').addEventListener('mouseover', function(){

         document.querySelector('#expe').style.display = 'flex'
})

document.getElementById('btn-negative').addEventListener('mouseout', function(){

         document.querySelector('#expe').style.display = 'none'
})


// for add button info 2 income

document.getElementById('btn-positive').addEventListener('mouseover', function(){

         document.querySelector('#inco').style.display = 'flex'
})

document.getElementById('btn-positive').addEventListener('mouseout', function(){

         document.querySelector('#inco').style.display = 'none'
})

// Edit function 

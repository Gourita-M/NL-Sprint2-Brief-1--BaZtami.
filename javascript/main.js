let Spent = 0;
let Income = 0;
let Balance = 0;

document.getElementById("Spent").innerHTML = Spent + 'DH';
document.getElementById("Income").innerHTML = Income + 'DH';
document.getElementById("Balance").innerHTML = Balance + 'DH';

// Dyal Dark Mode
document.getElementById('themeToggle').addEventListener('click', function () {
  document.querySelector(".sun").style.display = "flex";
  document.querySelector(".moon").style.display = "none";
  document.body.style.backgroundColor = "#000000";
  document.querySelector("header").style.backgroundColor = "#113045";
  document.querySelector(".Gridd").style.backgroundColor = "#000000";
  document.querySelector(".Tran-text").style.color = "white";
});

document.getElementById('themeToggle-light').addEventListener('click', function () {
  document.querySelector(".sun").style.display = "none";
  document.querySelector(".moon").style.display = "flex";
  document.body.style.backgroundColor = "white";
  document.querySelector("header").style.backgroundColor = "";
  document.querySelector(".Gridd").style.backgroundColor = "";
  document.querySelector(".Tran-text").style.color = "#000000";
});


let incomeId = 0;
let expenseId = 0;

// income

document.getElementById("btn-positive").addEventListener('click', function () {
  const input1 = document.getElementById("input1").value.trim();
  const input2 = document.getElementById("input2").value.trim();
  const currentTime = new Date();

  if (input1 === '' || input2 === '') {
    alert("You can't submit it empty");
    return;
  }

  const number = parseInt(input2);
  Income += number;
  Balance = Income - Spent;
  document.getElementById("Income").innerHTML = '+' + Income + 'DH';
  document.getElementById("Balance").innerHTML = Balance + 'DH';

  incomeId++;
  const myDiv = document.getElementById('Card');
  const newDiv = document.createElement('div');
  newDiv.className = 'h-40 shadow rounded-xl bg-green-100 hover:scale-105 transition-all p-2 flex flex-col justify-between';
  newDiv.setAttribute('data-type', 'income');
  newDiv.setAttribute('data-amount', number);

  newDiv.innerHTML = `
    <div class="flex justify-between items-center">
      <button id="menu-open-${incomeId}" class="hover:scale-125"><img src="./img/menu.png" class="w-6"></button>
      <div id="menu-${incomeId}" class="hidden gap-2 text-xs">
        <button id="edit-${incomeId}" class="text-blue-500 hover:underline">Edit</button>
        <button id="remove-${incomeId}" class="text-red-500 hover:underline">Remove</button>
      </div>
    </div>
    <div class="text-center">
      <h3 id="amount-${incomeId}" class="text-green-700 font-bold text-lg">+${number}DH</h3>
      <p id="desc-${incomeId}" class="text-xs">${input1}</p>
      <p class="text-xs text-gray-500">${currentTime.toLocaleString()}</p>
    </div>
  `;

  myDiv.appendChild(newDiv);

  // Reset
  document.getElementById("input1").value = '';
  document.getElementById("input2").value = '';

  
  const menuOpen = document.getElementById(`menu-open-${incomeId}`);
  const menu = document.getElementById(`menu-${incomeId}`);
  menuOpen.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // edit
  document.getElementById(`edit-${incomeId}`).addEventListener("click", function () {
    openEditModal(newDiv, input1, number, "income");
    menu.classList.add("hidden");
  });

  // remove
  document.getElementById(`remove-${incomeId}`).addEventListener("click", function () {
    openRemoveModal(newDiv, "income");
    menu.classList.add("hidden");
  });
});

// add dyal expans
document.getElementById("btn-negative").addEventListener('click', function () {
  const input1 = document.getElementById("input1").value.trim();
  const input2 = document.getElementById("input2").value.trim();
  const currentTime = new Date();

  if (input1 === '' || input2 === '') {
    alert("You can't submit it empty");
    return;
  }

  const number = parseInt(input2);
  Spent += number;
  Balance = Income - Spent;
  document.getElementById("Spent").innerHTML = '-' + Spent + 'DH';
  document.getElementById("Balance").innerHTML = Balance + 'DH';

  expenseId++;
  const myDiv = document.getElementById('Card');
  const newDiv = document.createElement('div');
  newDiv.className = 'h-40 shadow rounded-xl bg-red-100 hover:scale-105 transition-all p-2 flex flex-col justify-between';
  newDiv.setAttribute('data-type', 'expense');
  newDiv.setAttribute('data-amount', number);

  newDiv.innerHTML = `
    <div class="flex justify-between items-center">
      <button id="menu-open-exp-${expenseId}" class="hover:scale-125"><img src="./img/menu.png" class="w-6"></button>
      <div id="menu-exp-${expenseId}" class="hidden gap-2 text-xs">
        <button id="edit-exp-${expenseId}" class="text-blue-500 hover:underline">Edit</button>
        <button id="remove-exp-${expenseId}" class="text-red-500 hover:underline">Remove</button>
      </div>
    </div>
    <div class="text-center flex flex-colm">
      <h3 id="amount-exp-${expenseId}" class="text-red-700 font-bold text-lg">-${number}DH</h3>
      <p id="desc-exp-${expenseId}" class="text-xs">${input1}</p>
      <p class="text-xs text-gray-500">${currentTime.toLocaleString()}</p>
    </div>
  `;

  myDiv.appendChild(newDiv);

  // reset l inputs
  document.getElementById("input1").value = '';
  document.getElementById("input2").value = '';

  // menu
  const menuOpen = document.getElementById(`menu-open-exp-${expenseId}`);
  const menu = document.getElementById(`menu-exp-${expenseId}`);
  menuOpen.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // editt +
  document.getElementById(`edit-exp-${expenseId}`).addEventListener("click", function () {
    openEditModal(newDiv, input1, number, "expense");
    menu.classList.add("hidden");
  });

  // remove -
  document.getElementById(`remove-exp-${expenseId}`).addEventListener("click", function () {
    openRemoveModal(newDiv, "expense");
    menu.classList.add("hidden");
  });
});

// edit -
function openEditModal(card, oldDesc, oldAmount, type) {
  const editcontainer = document.getElementById("editcontainer");
  editcontainer.innerHTML = `
    <div class="relative bg-blue-200 w-64 h-60 text-center rounded-xl flex items-center justify-around flex-col gap-5">
      <h1>Edit Your Transaction</h1>
      <input id="newvalu1" type="text" value="${oldDesc}" placeholder="Description" class="p-2 border rounded">
      <input id="newvalu2" type="number" value="${oldAmount}" placeholder="Amount (DH)" class="p-2 border rounded">
      <button id="editbttn" class="hover:scale-105 hover:text-red-700 bg-green-100 w-16 rounded-xl">Save</button>
      <button id="editclose" class="absolute hover:text-red-700 right-3 bg-red-200 w-6 rounded-full top-1">X</button>
    </div>
  `;
  editcontainer.style.display = "flex";

  document.getElementById('editclose').addEventListener('click', () => {
    editcontainer.style.display = "none";
  });

  document.getElementById('editbttn').addEventListener('click', () => {
    const newDesc = document.getElementById("newvalu1").value;
    const newAmount = parseInt(document.getElementById("newvalu2").value);
    const oldAmountNum = parseInt(card.getAttribute('data-amount'));

    if (type === "income") {
      Income -= oldAmountNum;
      Income += newAmount;
      document.getElementById("Income").innerHTML = '+' + Income + 'DH';
    } else {
      Spent -= oldAmountNum;
      Spent += newAmount;
      document.getElementById("Spent").innerHTML = '-' + Spent + 'DH';
    }

    Balance = Income - Spent;
    document.getElementById("Balance").innerHTML = Balance + 'DH';

    card.setAttribute('data-amount', newAmount);
    card.querySelector('p').innerText = newDesc;
    card.querySelector('h3').innerText = (type === "income" ? '+' : '-') + newAmount + 'DH';

    editcontainer.style.display = "none";
  });
}

// remove -
function openRemoveModal(card, type) {
  const removecontainer = document.getElementById('removecontainer');
  removecontainer.style.display = 'flex';

  document.getElementById('removeclose').onclick = () => removecontainer.style.display = 'none';
  document.getElementById('nobttn').onclick = () => removecontainer.style.display = 'none';

  document.getElementById('yesbttn').onclick = function () {
    const amount = parseInt(card.getAttribute('data-amount'));

    if (type === "income") {
      Income -= amount;
      document.getElementById("Income").innerHTML = '+' + Income + 'DH';
    } else {
      Spent -= amount;
      document.getElementById("Spent").innerHTML = '-' + Spent + 'DH';
    }

    Balance = Income - Spent;
    document.getElementById("Balance").innerHTML = Balance + 'DH';

    card.remove();
    removecontainer.style.display = 'none';
  };
}

// button
document.getElementById('btn-negative').addEventListener('mouseover', function () {
  document.querySelector('#expe').style.display = 'flex';
});
document.getElementById('btn-negative').addEventListener('mouseout', function () {
  document.querySelector('#expe').style.display = 'none';
});
document.getElementById('btn-positive').addEventListener('mouseover', function () {
  document.querySelector('#inco').style.display = 'flex';
});
document.getElementById('btn-positive').addEventListener('mouseout', function () {
  document.querySelector('#inco').style.display = 'none';
});

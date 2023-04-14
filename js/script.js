const eleGrid = document.querySelector('.grid');

for (let i= 1; i <= 100; i= i + 1) {
    if (i % 15 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell" style="background-color: #F0466F;">FizzBuzz</div>`;
    }
    else if (i % 3 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell" style="background-color: #0CD6A1;">Fizz</div>`;
    }
    else if (i % 5 == 0) {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell" style="background-color: #FFD166;">Buzz</div>`;
    }
    else {
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
    }
};
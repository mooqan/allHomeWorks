// 1) NAITI KORNEVOI ELEMENT
const $root = document.getElementById('root');

// 2) SOZDAT 3 TEGA DIV
const $first = document.createElement('div');
const $second = document.createElement('div');
const $third = document.createElement('div');


// 3) ZADAT RAZMERY
const WIDTH = 150;
const HEIGHT = 150;

const $nodeElements = [$first, $second, $third];

$nodeElements.forEach(function($div) {
    $div.style.width = WIDTH + 'px';
    $div.style.height = HEIGHT + 'px';
    $div.style.border = '1px solid black';
});




// $first.innerHTML = `
// <p>First div</p>

// `;

// $second.innerHTML = `
// <p>Second div</p>

// `;

// $third.innerHTML = `
// <p>Third div</p>

// `;

$root.append($first);
$root.append($second);
$root.append($third);


$first.classList.add('bordered');
$first.classList.add('colored');

function getRandomColor() { 
const COLORS = ['red', 'green', 'blue', 'orange', 'white'];
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function getRandomColor() { 
    const COLORS = ['red', 'green', 'blue', 'orange', 'white'];
        return COLORS[Math.floor(Math.random() * COLORS.length)];
    }

setTimeout(function() {
    console.log('settimeout callback');
}, 1000);

setInterval(function() {
    $first.classList.toggle('powered');
    $nodeElements.forEach(function($div) {
        $div.style.backgroundColor = getRandomColor();
    })
    console.log('setInterval callback');
}, 2000);

setInterval(function() {
    $nodeElements.forEach(function($div) {
        $div.style.backgroundColor = getRandomColor();
    })
    console.log('setInterval callback');
}, 2000);

setInterval(function() {
    $nodeElements.forEach(function($div) {
        $div.style.backgroundColor = getRandomColor();
    })
    console.log('setInterval callback');
}, 2000);
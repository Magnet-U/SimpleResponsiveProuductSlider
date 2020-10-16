const controlls = document.querySelector('.controlls');
const container = document.querySelector('.thumb-container');
const allBoxes = container.children;
const containerWith = container.offsetWidth;
const margin = 20;
let items = 0;
let totalItems = 0;
let jumpSlideWidth = 0;

responsive = [{
        breakPoint: {
            width: 0,
            item: 1
        }
    }, //if grater than 0 (1 item will show)
    {
        breakPoint: {
            width: 600,
            item: 2
        }
    }, //if grater than 600 (2 item will show)
    {
        breakPoint: {
            width: 1000,
            item: 4
        }
    } //if grater than 1000 (4 item will show)
]

function load() {
    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakPoint.width) {
            items = responsive[i].breakPoint.item;
        }
    }
    start();
}

function start() {
    let totalItemWidth = 0;
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.width = (containerWith / items) - margin + "px";
        allBoxes[i].style.margin = (margin / 2) + "px";
        totalItemWidth += containerWith / items;
        totalItems++;
    }
    container.style.width = totalItemWidth + "px";

    let allSlides = Math.ceil(totalItems / items);
    let ul = document.createElement("ul");
    for (let k = 1; k <= allSlides; k++) {
        let li = document.createElement("li");
        li.id = k;
        li.innerHTML = k;
        li.setAttribute("onclick", "controlSlides(this)");
        if (k === 1) {
            li.classList.add("active");
        }
        ul.appendChild(li);
    }
    controlls.appendChild(ul);
}

function controlSlides(ele) {
    const ul = controlls.children;

    const li = ul[0].children;

    let active;

    for (let i = 0; i < li.length; i++) {
        if (li[i].className === "active") {
            active = i;
            li[i].classList.remove("active");
        }
    }
    ele.classList.add("active");


    let num = (ele.id - 1) - active;
    jumpSlideWidth = jumpSlideWidth + (containerWith * num);
    container.style.marginLeft = -jumpSlideWidth + "px";
}
window.onload = load();
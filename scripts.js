let navind = document.getElementById('navind');
setInterval(() => {
    let scrollvalue = window.scrollY;
    console.log(scrollvalue);
    let x = document.getElementById('navbar');
    if (scrollvalue >= 50.8) {
        x.style.position = 'fixed';
    } else {
        x.style.position = 'relative';
    }
}, 10);

setInterval(() => {
    let x = document.getElementById('navbar');
    let y = window.innerWidth;
    let d1 = document.getElementById('d1');
    let d2 = document.getElementById('d2');
    let d3 = document.getElementById('d3');
    let d4 = document.getElementById('d4');
    x.style.width = (0.8789*y) + 'px';
    x.style.left = (0.0586*y)+'px';

    if (y > 500) {
        d1.style.left = (0.2279*y) + 'px';
        d2.style.left = (0.3385*y) + 'px';
        d3.style.left = (0.4492*y) + 'px';
        d4.style.left = (0.5599*y) + 'px';
    }
}, 10);

setInterval(() => {
    let scrollvalue1 = window.scrollY;
    let d1 = document.getElementById('d1');
    let x = parseFloat(getComputedStyle(d1).left);
    let d2 = document.getElementById('d2');
    let y = parseFloat(getComputedStyle(d2).left);
    let d3 = document.getElementById('d3');
    let p = parseFloat(getComputedStyle(d3).left);
    let d4 = document.getElementById('d4');
    let q = parseFloat(getComputedStyle(d4).left);

    if (scrollvalue1 <= 1080) {
        navind.style.width = 0;
        navind.style.height = 0;
        navind.style.border = 'none';
    }
    if (scrollvalue1 >= 1080 && scrollvalue1 < 2160) {
        navind.style.width = '80px';
        navind.style.height = '7px';
        navind.style.border = '1px solid white';
        navind.style.left = (x-4) + 'px';
    }
    if (scrollvalue1 >= 2160 && scrollvalue1 < 3240) {
        navind.style.left = (y-4) + 'px';
    }
    if (scrollvalue1 >= 3240 && scrollvalue1 < 4320) {
        navind.style.left = (p-4) + 'px';
    }
    if (scrollvalue1 >= 4320) {
        navind.style.left = (q-4) + 'px';
    }
}, 100);


function dum1() {
    window.scrollTo({top: 1080, behavior: "smooth"});
    let d1 = document.getElementById('d1');
    let x = d1.getAttribute(style, left);
    navind.style.left = (x-4) + 'px';
}

function dum2() {
    window.scrollTo({top: 2160, behavior: "smooth"});
    let d2 = document.getElementById('d2');
    let y = d2.getAttribute(style, left);
    navind.style.left = (y-4) + 'px';
}

function dum3() {
    window.scrollTo({top: 3240, behavior: "smooth"});
    let d3 = document.getElementById('d3');
    let p = d3.getAttribute(style, left);
    navind.style.left = (p-4) + 'px';
}

function dum4() {
    window.scrollTo({top: 4320, behavior: "smooth"});
    let d4 = document.getElementById('d4');
    let q = d4.getAttribute(style, left);
    navind.style.left = (q-4) + 'px';
}
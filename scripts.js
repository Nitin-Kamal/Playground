let navind = document.getElementById("navind");
setInterval(() => {
  let scrollvalue = window.scrollY;
  let x = document.getElementById("navbar");
  if (scrollvalue >= 50.8) {
    x.style.position = "fixed";
  } else {
    x.style.position = "relative";
  }
}, 10);

function on_load() {
  let x = document.getElementById('navbar');
  let y = window.innerWidth;
  x.style.width = (0.8789*y) + 'px';
  x.style.left = (0.0586*y) + 'px';
  let z = window.innerHeight;
  let menu_cont = document.getElementById('menu-container');
  menu_cont.style.height = (z-4) + 'px';

  let fake_body = document.getElementById('fake-body');
  fake_body.style.width = y + 'px';
  fake_body.style.height = z + 'px';
}

setInterval(() => {
  let x = document.getElementById("navbar");
  let y = window.innerWidth;
  let d1 = document.getElementById("d1");
  let d2 = document.getElementById("d2");
  let d3 = document.getElementById("d3");
  let d4 = document.getElementById("d4");
  let menu_button = document.getElementById('menu-button');
  let logo = document.getElementById('logo');
  let navind = document.getElementById('navind');
  let body = document.getElementById('body');
  let body1 = document.getElementById('body1');
  x.style.width = 0.8789 * y + "px";
  x.style.left = 0.0586 * y + "px";

  if (y > 630) {
    d1.style.display = 'initial';
    d2.style.display = 'initial';
    d3.style.display = 'initial';
    d4.style.display = 'initial';
    d1.style.left = 0.2279 * y + "px";
    d2.style.left = 0.3385 * y + "px";
    d3.style.left = 0.4492 * y + "px";
    d4.style.left = 0.5599 * y + "px";
    menu_button.style.display = 'none';
    logo.style.left = '10px';
    navind.style.display = 'initial';
  } else {
    menu_button.style.display = 'initial';
    logo.style.left = '60px';
    d1.style.display = 'none';
    d2.style.display = 'none';
    d3.style.display = 'none';
    d4.style.display = 'none';
    navind.style.display = 'none';
  }
}, 0);

setInterval(() => {
  let scrollvalue1 = window.scrollY;
  let d1 = document.getElementById("d1");
  let x = parseFloat(getComputedStyle(d1).left);
  let d2 = document.getElementById("d2");
  let y = parseFloat(getComputedStyle(d2).left);
  let d3 = document.getElementById("d3");
  let p = parseFloat(getComputedStyle(d3).left);
  let d4 = document.getElementById("d4");
  let q = parseFloat(getComputedStyle(d4).left);

  if (scrollvalue1 <= 1080) {
    navind.style.width = 0;
    navind.style.height = 0;
    navind.style.border = "none";
  }
  if (scrollvalue1 >= 1080 && scrollvalue1 < 2160) {
    navind.style.width = "80px";
    navind.style.height = "7px";
    navind.style.border = "1px solid white";
    navind.style.left = x - 4 + "px";
  }
  if (scrollvalue1 >= 2160 && scrollvalue1 < 3240) {
    navind.style.left = y - 4 + "px";
  }
  if (scrollvalue1 >= 3240 && scrollvalue1 < 4320) {
    navind.style.left = p - 4 + "px";
  }
  if (scrollvalue1 >= 4320) {
    navind.style.left = q - 4 + "px";
  }
}, 100);

function dum1() {
  window.scrollTo({ top: 1080, behavior: "smooth" });
  let d1 = document.getElementById("d1");
  let x = d1.getAttribute(style, left);
  navind.style.left = x - 4 + "px";
}

function dum2() {
  window.scrollTo({ top: 2160, behavior: "smooth" });
  let d2 = document.getElementById("d2");
  let y = d2.getAttribute(style, left);
  navind.style.left = y - 4 + "px";
}

function dum3() {
  window.scrollTo({ top: 3240, behavior: "smooth" });
  let d3 = document.getElementById("d3");
  let p = d3.getAttribute(style, left);
  navind.style.left = p - 4 + "px";
}

function dum4() {
  window.scrollTo({ top: 4320, behavior: "smooth" });
  let d4 = document.getElementById("d4");
  let q = d4.getAttribute(style, left);
  navind.style.left = q - 4 + "px";
}


function anim_switch_dark() {
  let y = document.getElementById('anim-switch');
  let z = document.getElementById('anim-switch-container');
  y.style.left = '37px';
  y.style.background = 'green';
  z.setAttribute('onclick', 'anim_switch_1()');
  VANTA.FOG({
      el: document.getElementById("fake-body"),
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x6700ff,
      midtoneColor: 0x0,
      lowlightColor: 0x0,
      baseColor: 0x0,
      blurFactor: 0.6,
      speed: 2,
    });
  let fake_body = document.getElementById('fake-body');
  fake_body.style.display = 'initial'
}

function anim_switch_light() {
  let y = document.getElementById('anim-switch');
  let z = document.getElementById('anim-switch-container');
  y.style.left = '37px';
  y.style.background = 'green';
  z.setAttribute('onclick', 'anim_switch_1()');
  VANTA.CLOUDS({
      el: document.getElementById('fake-body'),
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
  });
  let fake_body = document.getElementById('fake-body');
  fake_body.style.display = 'initial'
}

function anim_switch_1() {
  let fake_body = document.getElementById('fake-body');
  fake_body.style.display = 'none';
  let anim_switch = document.getElementById('anim-switch');
  anim_switch.style.left = '13px';
  anim_switch.style.background = 'red';
  let anim_switch_container = document.getElementById('anim-switch-container');
  let logo = document.getElementById('logo');
  let logo_left = parseFloat(getComputedStyle(logo).left);
  if (logo_left == 11) {
    anim_switch_container.setAttribute('onclick', 'anim_switch_light()');
  } else {
    anim_switch_container.setAttribute('onclick', 'anim_switch_dark()');
  }
}

function menu_open() {
  let x = document.getElementById('menu-container');
  let inner_width = window.innerWidth;
  let inner_height =  window.innerHeight;
  x.style.height = (inner_height-4) + 'px';
  let fake_body = document.getElementById('fake-body');

  if (inner_width >= 355) {
    x.style.left = 0;
  } else {
    x.style.width = (inner_width-2) + 'px';
    x.style.left = 0;
  }

  fake_body.setAttribute('onclick', 'menu_close()');
}

function menu_close() {
  let x = document.getElementById('menu-container');
  x.style.left = '-360px';
  let fake_body = document.getElementById('fake-body');

  fake_body.setAttribute('onclick', 'none');
}

function dum1m() {
  window.scrollTo({ top: 1080, behavior: "smooth" });
  let x = document.getElementById('menu-container');
  x.style.left = '-360px';
}
function dum2m() {
  window.scrollTo({ top: 2160, behavior: "smooth" });
  let x = document.getElementById('menu-container');
  x.style.left = '-360px';
}
function dum3m() {
  window.scrollTo({ top: 3240, behavior: "smooth" });
  let x = document.getElementById('menu-container');
  x.style.left = '-360px';
}
function dum4m() {
  window.scrollTo({ top: 4320, behavior: "smooth" });
  let x = document.getElementById('menu-container');
  x.style.left = '-360px';
}

function acc_open() {
  let acc_center = document.getElementById('acc-center');
  let a1 = document.getElementById('a1');
  let a2 = document.getElementById('a2');
  let a3 = document.getElementById('a3');
  let a4 = document.getElementById('a4');
  let anim_switch_cont = document.getElementById('anim-switch-container');
  let account = document.getElementById('account');
  let acc_hint = document.getElementById('acc-hint');
  let fake_body = document.getElementById('fake-body');

  acc_center.style.height = '285px';
  acc_center.style.display = 'initial'
  a1.style.display = 'initial';
  a2.style.display = 'initial';
  a3.style.display = 'initial';
  a4.style.display = 'initial';
  anim_switch_cont.style.display = 'initial';
  acc_hint.style.display = 'none';

  account.setAttribute('onclick', 'acc_close()');
  fake_body.setAttribute('onclick', 'acc_close()')
}
function acc_close() {
  let acc_center = document.getElementById('acc-center');
  let a1 = document.getElementById('a1');
  let a2 = document.getElementById('a2');
  let a3 = document.getElementById('a3');
  let a4 = document.getElementById('a4');
  let anim_switch_cont = document.getElementById('anim-switch-container');
  let account = document.getElementById('account');
  let acc_hint = document.getElementById('acc-hint');
  let fake_body = document.getElementById('fake-body');

  acc_center.style.height = 0;
  acc_center.style.display = 'none';
  a1.style.display = 'none';
  a2.style.display = 'none';
  a3.style.display = 'none';
  a4.style.display = 'none';
  anim_switch_cont.style.display = 'none';
  acc_hint.style.display = 'initial';

  account.setAttribute('onclick', 'acc_open()');
  fake_body.setAttribute('onclick', 'none');
}
function acc_hover() {
  let acc_hint = document.getElementById('acc-hint');
  acc_hint.style.border = '1px solid white';
}
function acc_leave() {
  let acc_hint = document.getElementById('acc-hint');
  acc_hint.style.border = '1px solid grey';
}

function mode_switch() {
  let acc_center = document.getElementById('acc-center');
  acc_center.style.border = '2px solid white';
  let a1 = document.getElementById('a1');
  a1.style.border = '1px solid grey';
  let a2 = document.getElementById('a2');
  a2.style.border = '1px solid grey';
  let a3 = document.getElementById('a3');
  a3.style.border = '1px solid grey';
  let a4 = document.getElementById('a4');
  a4.style.border = '1px solid grey';

  let mode_switch_container = document.getElementById('mode-switch-container');
  mode_switch_container.style.border = '1px solid grey';
  mode_switch_container.setAttribute('onclick', 'mode_switch1()');
  let mode_switch = document.getElementById('mode-switch');
  mode_switch.style.left = '93px';

  let anim_switch_container = document.getElementById('anim-switch-container');
  anim_switch_container.style.border = '1px solid grey';

  let anim_switch = document.getElementById('anim-switch');
  let anim_switch_left = parseFloat(getComputedStyle(anim_switch).left);
  if (anim_switch_left == 37) {
    let fake_body = document.getElementById('fake-body');
    fake_body.style.display = 'initial'
    VANTA.CLOUDS({
      el: document.getElementById('fake-body'),
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
    });
    body = document.getElementById('body');
    body.style.background = 'rgb(126, 204, 230)';
    anim_switch_container.setAttribute('onclick', 'anim_switch_1()');
  } else {
    body = document.getElementById('body');
    body.style.background = 'rgb(126, 204, 230)';
    anim_switch_container.setAttribute('onclick', 'anim_switch_light()');
  }

  let logo = document.getElementById('logo');
  logo.style.left = '11px';
}

function mode_switch1() {
  let acc_center = document.getElementById('acc-center');
  acc_center.style.border = '2px solid grey';
  let a1 = document.getElementById('a1');
  a1.style.border = '1px solid white';
  let a2 = document.getElementById('a2');
  a2.style.border = '1px solid white';
  let a3 = document.getElementById('a3');
  a3.style.border = '1px solid white';
  let a4 = document.getElementById('a4');
  a4.style.border = '1px solid white';

  let mode_switch_container = document.getElementById('mode-switch-container');
  mode_switch_container.style.border = '1px solid white';
  mode_switch_container.setAttribute('onclick', 'mode_switch()');
  let mode_switch = document.getElementById('mode-switch');
  mode_switch.style.left = '118px';

  let anim_switch_container = document.getElementById('anim-switch-container');
  anim_switch_container.style.border = '1px solid white';

  let anim_switch = document.getElementById('anim-switch');
  let anim_switch_left = parseFloat(getComputedStyle(anim_switch).left);
  if (anim_switch_left == 37) {
    let fake_body = document.getElementById('fake-body');
    fake_body.style.display = 'initial'
    VANTA.FOG({
      el: document.getElementById("fake-body"),
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x6700ff,
      midtoneColor: 0x0,
      lowlightColor: 0x0,
      baseColor: 0x0,
      blurFactor: 0.6,
      speed: 2,
    });
    body = document.getElementById('body');
    body.style.background = 'rgb(36, 0, 88)';
    anim_switch_container.setAttribute('onclick', 'anim_switch_1()');
  } else {
    body = document.getElementById('body');
    body.style.background = 'rgb(36, 0, 88)';
    anim_switch_container.setAttribute('onclick', 'anim_switch_dark()');
  }

  let logo = document.getElementById('logo');
  logo.style.left = '10px';
}
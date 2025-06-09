function loadup() {
  document.getElementById("body").style.marginLeft = "0px";
  document.getElementById("body").style.filter = "blur(0px)";
}

let d = document.getElementById('indicator');
function homeind() {
  d.style.marginLeft = '58px';
  document.getElementById('homem').style.color = 'brown';
  document.getElementById('dm1m').style.color = 'black';
  document.getElementById('dm2m').style.color = 'black';
  document.getElementById('dm3m').style.color = 'black';
  document.getElementById('dm4m').style.color = 'black';
}
function dm1ind() {
  d.style.marginLeft = '161px';
  document.getElementById('dm1m').style.color = 'brown';
  document.getElementById('homem').style.color = 'black';
  document.getElementById('dm2m').style.color = 'black';
  document.getElementById('dm3m').style.color = 'black';
  document.getElementById('dm4m').style.color = 'black';
} 
function dm2ind() {
  d.style.marginLeft = '275px';
  document.getElementById('dm2m').style.color = 'brown';
  document.getElementById('dm1m').style.color = 'black';
  document.getElementById('homem').style.color = 'black';
  document.getElementById('dm3m').style.color = 'black';
  document.getElementById('dm4m').style.color = 'black';
}
function dm3ind() {
  d.style.marginLeft = '390px';
  document.getElementById('dm3m').style.color = 'brown';
  document.getElementById('dm1m').style.color = 'black';
  document.getElementById('dm2m').style.color = 'black';
  document.getElementById('homem').style.color = 'black';
  document.getElementById('dm4m').style.color = 'black';
}
function dm4ind() {
  d.style.marginLeft = '505px';
  document.getElementById('dm4m').style.color = 'brown';
  document.getElementById('dm1m').style.color = 'black';
  document.getElementById('dm2m').style.color = 'black';
  document.getElementById('dm3m').style.color = 'black';
  document.getElementById('homem').style.color = 'black';
}

function mobmenu() {
  document.getElementById('navdivmob').style.width = '100%';
  document.getElementById('homem').style.display = 'grid';
  document.getElementById('dm1m').style.display = 'grid';
  document.getElementById('dm2m').style.display = 'grid';
  document.getElementById('dm3m').style.display = 'grid';
  document.getElementById('dm4m').style.display = 'grid';
  document.getElementById('mobmenu').setAttribute('onclick', 'mobmenuc()');
  document.getElementById('mobmenu').setAttribute('src', 'close.svg');
  document.getElementById('mobmenu').style.background = 'red';
  document.getElementById('mobmenu').style.marginLeft = '91%';
}

function mobmenuc() {
  document.getElementById('navdivmob').style.width = '0px';
  document.getElementById('homem').style.display = 'none';
  document.getElementById('dm1m').style.display = 'none';
  document.getElementById('dm2m').style.display = 'none';
  document.getElementById('dm3m').style.display = 'none';
  document.getElementById('dm4m').style.display = 'none';
  document.getElementById('mobmenu').setAttribute('onclick', 'mobmenu()');
  document.getElementById('mobmenu').setAttribute('src', 'menu.svg');
  document.getElementById('mobmenu').style.background = 'white';
  document.getElementById('mobmenu').style.marginLeft = '10px';
}

setInterval(() => {
  console.log(innerWidth);
  if (innerWidth < 600) {
    document.getElementById('mobmenu').style.display = 'grid';
    document.getElementById('indicator').style.display = 'none';
    document.getElementById('navcon').style.display = 'none';
    document.getElementById('dm4').style.display = 'none';
  } else {
    document.getElementById('mobmenu').style.display = 'none';
    document.getElementById('mobmenu').setAttribute('src', 'menu.svg');
    document.getElementById('navdivmob').style.width = '0px';
    document.getElementById('indicator').style.display = 'flex';
    document.getElementById('navcon').style.display = 'grid';
    document.getElementById('dm4').style.display = 'initial';
    document.getElementById('homem').style.display = 'none';
    document.getElementById('dm1m').style.display = 'none';
    document.getElementById('dm2m').style.display = 'none';
    document.getElementById('dm3m').style.display = 'none';
    document.getElementById('dm4m').style.display = 'none';
    document.getElementById('mobmenu').style.marginLeft = '10px';
    document.getElementById('mobmenu').style.background = 'white';
    document.getElementById('mobmenu').setAttribute('onclick', 'mobmenu()');
  }
}, 100);
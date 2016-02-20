var getDragonA =  document.getElementById("dragonA");
var dragonAstatus = false;
getDragonA.style.border="10px solid #F0E68C";

var changeSelectionStatus = function() {
  dragonAstatus = !dragonAstatus;
  console.log(dragonAstatus);
  	if(dragonAstatus) getDragonA.style.border="10px solid #F0E68C";
		else getDragonA.style.border = "none";
}

getDragonA.addEventListener('click', changeSelectionStatus);


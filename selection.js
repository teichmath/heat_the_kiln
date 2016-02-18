$(document).ready(function(){
	$('#dragonA').click($.proxy(selectionApp.changeSelectionStatus));
});


var selectionApp = (function (){
	//private variables and functions (hidden props)
 	var dragonAstatus = false;

	return {
		//public props
	
		changeSelectionStatus: function(){
		  dragonAstatus = !dragonAstatus;
  		  var imgTag=document.getElementsByTagName('dragonA');
		  if(dragonAstatus) imgTag.style.border='2px solid #F0E68C';
		  else imgTag.style.border = 'none';
		}
	};

})();

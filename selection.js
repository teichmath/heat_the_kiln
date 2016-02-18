$(document).ready(function(){
	$('#dragon1').click($.proxy(selectionApp.changeSelectionStatus));
});


var selectionApp = (function (){
	//private variables and functions (hidden props)
 	var dragon1status = false;

	return {
		//public props
	
		changeSelectionStatus: function(){
		  dragon1status = !dragon1status;
  		  var imgTag=document.getElementsByTagName('dragon1');
		  if(dragon1status) imgTag.style.border='2px solid #F0E68C';
		  else imgTag.style.border = 'none';
		}
	};

})();

$(document).ready(function(){

var url=document.location.href; $.each($(".subnav a"),function(){
  if(this.href==url){$(this).addClass('active');};
  });

/*==============login select================*/
  $("#_go").click(function(e){
		e.preventDefault();
		var link = $("#_lender").val();
		if(link != "");
		location.href = link;
	})
});
 
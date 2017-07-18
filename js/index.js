$(function(){
	Head();
	$(window).on('resize',function(){
		Head();
	})
	Ajax();
});

function Head(){
	var box = document.querySelector('.content_top');
	var pic = document.querySelector('.content_top img');
	var width = $(window).width();
//	console.log(width)
	if(width<767){
		box.style.display = 'none';
	}else if(width<900){
		pic.src = '';
		box.style.display = 'block';
	} else{
		box.style.display = 'block';
		pic.src = 'images/084008-63729.jpg';
		box.style.height = pic.height + "px";
	}	
}

function Ajax(){
	var row = document.querySelector('.items');
	var xhr = new XMLHttpRequest();
	xhr.open('get','data.json');
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			var str;
			var data = JSON.parse(xhr.responseText);
			for(var i=0;i<data.length;i++){
				str += "<div class='item_box'><div class='item col-lg-3 col-md-4 col-sm-6 col-xs-12'><div class='item_pic'>";
				str += "<img src="+data[i].pic+" /></div>";
				str += "<h4>"+data[i].title+"</h4><div class='item_author'>";
				if(data[i].head==""){
					str +="<img src='images/093901-17534.png' />"
				}else{
				str += "<img src="+data[i].head+" />";
				}
				str += "<span>"+data[i].name+"</span>";
				str += "<div class='item_time'>"+data[i].time+"</div></div></div></div>";					
			}
			row.innerHTML = str;
		}
	}
}

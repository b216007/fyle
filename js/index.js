var pageSize=100,temp=[],initial=0,myFavourite=null

function onload() {

	pageSize=parseInt($("#page-size").val())
	$('#bank-list-select').on('change',function(){
		searchItem(this.value)
	})

	$("#page-size").on('change',function(){
		pageSize=parseInt(this.value)
	})

	myFavourite=JSON.parse(localStorage.getItem('myFavourite'))
	if (!myFavourite) {
		myFavourite={}
	}
	searchItem($('#bank-list-select').val())
}

function searchItem(value) {

	$.ajax({
		type:'get',
		url:'https://vast-shore-74260.herokuapp.com/banks',
		data:{city:value},
		beforeSend:function() {
			$("footer").html("Fetching data Please wait..")
		},
		success:function(data) {
			$("footer").html("Note:- Click on <b>Yes/Add me</b> to <b>remove/add</b> bank from Favourite list")
			temp=data
			plotData(data)
		}
	})

}


function plotData(data,init=0,j=null) {
	console.log(data,init,j)
	var header=$('#bank-list .header').html()
	$('#bank-list').empty().append('<tr class="header">'+header+'</tr>')
	if (!j) {
		j=pageSize
	}

	for (var i=init;i<Math.min(j,data.length);i++) {
		var fav;
		if (myFavourite[data[i].ifsc]) {
			fav='<td onclick="removeFav('+i+')" class="fav-color">Yes</td>'
		}
		else {
			fav='<td onclick="addFav('+i+')">Add me</td>'
		}
		$('#bank-list').append(
			'<tr>'+
			fav+
			'<td>'+data[i].bank_name+'</td>'+
			'<td>'+data[i].ifsc+'</td>'+
			'<td>'+data[i].branch+'</td>'+
			'<td>'+data[i].address+'</td>'+
			'<td>'+data[i].city+'</td>'+
			'<td>'+data[i].district+'</td>'+
			'<td>'+data[i].state+'</td>'+
			'</tr>'
		)
		initial=i+1
	}
}
function searchByName(value) {
	if (value.length>2) {
		searchItem(value)
	}
}

function nextPage() {
	plotData(temp,initial,initial+pageSize)
}

function addFav(i) {
	var list=JSON.parse(localStorage.getItem('myFavourite'))
	if(!list) {
		list={}
		list[temp[i].ifsc]=temp[i]
	} else {
		list[temp[i].ifsc]=temp[i]
	}
	myFavourite=list
	localStorage.setItem('myFavourite',JSON.stringify(list))
	alert(temp[i].ifsc+' is added in favourite list')
}

function removeFav(i) {
	var list=JSON.parse(localStorage.getItem('myFavourite'))
	delete list[temp[i].ifsc]
	console.log(list)
	myFavourite=list
	localStorage.setItem('myFavourite',JSON.stringify(list))
	alert(temp[i].ifsc+' is removed from favourite list')
}

function viewFavourite() {
	var list=JSON.parse(localStorage.getItem('myFavourite'))
	var banks=[]
	for (var key in list) {
		banks.push(list[key])
	}
	temp=banks
	plotData(banks,0,pageSize)
}

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Bank search</title>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">		
</head>
<body onload="onload()">

	<div>
		<select id="bank-list-select" class="box">
			<option selected value="MUMBAI">MUMBAI</option>
			<option value="DELHI">DELHI</option>
			<option value="BANGALORE">BANGALORE</option>
			<option value="HYDERABAD">HYDERABAD</option>
			<option value="CHENNAI">CHENNAI</option>
		</select>

		<input type="text" onkeyup="searchByName(this.value)" class="box" placeholder="Search here..">
		<select id="page-size" class="box">
			<option value="10">10</option>
			<option value="50">50</option>
			<option value="100">100</option>
		</select>
		<button onclick="viewFavourite()">View Favourite</button>
	</div>

	<table id="bank-list">
  		<tr class="header">
  			<th>My Favourite</th>
    		<th>Bank Name</th>
    		<th>IFSC Code</th>
    		<th>Branch</th>
    		<th>Address</th>
    		<th>City</th>
    		<th>District</th>
    		<th>State</th>
  		</tr>
  		
	</table>

	<button onclick="nextPage()" class="next-button">Next</button>
	<footer>Note:- Click on <b>Yes/Add me</b> to <b>remove/add</b> bank from Favourite list</footer>
</body>
</html>

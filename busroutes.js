var routelines = [];
var tracts = [];
var map = null;
var colors = [
	"#00ffff",
    "#f0ffff",
    "#f5f5dc",
    "#000000",
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
	"#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
];
	var routes =  [{line_num: 8, name: "Gus Young/BRCC", t_id: "1dWIImeT5RhF7EFPBOw3JEou99Ti8s6Djb3ecLHr4"},
					{line_num: 10, name: "Scenic Hwy. - Southern Univ.", t_id: "1zr295Sukg580fmUDKTwfYOvjtLc49_xfzt1EdTKM"},
					{line_num: 11, name: "Northside Circulator", t_id: "1WeBIBIcSRjNuFFMqeu733qZ__5MBfothzit7p6Q4"},
					{line_num: 12, name: "Government St. - Jefferson Hwy.", t_id: "1qAfGRzwFfICU6vFDPdU9l2y8iyGa0P3bR4d65MXT"},
					{line_num: 14, name: "Thomas Delpit Dr.", t_id: "1IRMF36ekVs6UuuyZa3P9ZXQ-lWY4UOlhXSO-wTte"},
					{line_num: 15, name: "Garden District Trolley", t_id: "1PyIrBT-sRGWZj6q2WtioCmDLY-sgtsfSM0LCKVQ0"},
					{line_num: 16, name: "Capitol park Shuttle", t_id: "1QwicmyHDVm_bsD61wkm2q2iuXRgHOqPeIKE9JNEj"},
					{line_num: 17, name: "Perkins Rd. - Mall of Louisiana", t_id: "1oxDH1vJfXTBCcJghRSVlVDZpd2brdjRhgxo90UDi"},
					{line_num: 18, name: "LSU - Cortana Mall", t_id: "1ELNXN9zZ2--eIPd_v2VJfZeuc1spgsZ61tjzvLZk"},
					{line_num: 20, name: "North Acadian Thruway", t_id: "19lwWqQBKyR8ZcvzYpoKQHJ9sQsWjvfWw5kUMTccQ"},
					{line_num: 21, name: "Fairfields Ave. - Cortana Mall", t_id: "1MsH7xIwMZgYdE4pIJ6MP9XqadhPnnHfG_UAf6tv4"},
					{line_num: 22, name: "Winbourne Ave. - Cortana Mall", t_id: "1ml24a6JHQ1cz5DChfRdKdx6cnuSNmuQ0vY8rjQ6w"},
					{line_num: 23, name: "Foster Dr.", t_id: "1IhAsVsExLgf4DD4kjlm6CMROLdVCyV8ISDfiaVLT"},
					{line_num: 41, name: "Plank Rd.", t_id: "1UlLgI8y0aB8C4jqD1_79rFoufaDcjGTNAtYj1EJT"},
					{line_num: 44, name: "Florida Blvd. - Cortana Mall", t_id: "1XKoxL5uHfINEEnxLzzTbUSBQqDjZtwVpiC4qsBbB"},
					{line_num: 46, name: "Gardere - OLOL - L'Auberge", t_id: "16dos6JZMXU-0QQcmkZCcydSq_EnzMo6eFF6FRM20"},
					{line_num: 47, name: "Highland Rd.", t_id: "1ahEWbHrfC0oor6hsyYYS501SBljx77yAOsf_6WJu"},
					{line_num: 50, name: "Glen Oaks - Greendale Circulator", t_id: "1CUAdUQUrht__Z2MjFC0DmIoQhhf7BC-0S7bqXa_w"},
					{line_num: 52, name: "Baker Circulator", t_id: "1ZLxHj2Cd0sv2WdDUG8TpCipXT2G30itOajiYzvFz"},
					{line_num: 54, name: "Airline Highway North -  Southern University", t_id: "1SHhLmkM01dOXvt9X7yt5rNx8_2VHXg-uddxGjy6Q"},
					{line_num: 55, name: "East Florida Boulevard", t_id: "1MRdWOPWE2IIS-X58aHrQ6IqkkZ2UGp1rsSzXl52Q"},
					{line_num: 56, name: "Mall-to-Mall via Drusilla Lane", t_id: "1sFs04rjBr20WRXGLi6KH5dLQG0bLUK9_A25sCcb-"},
					{line_num: 57, name: "Sherwood Forest Boulevard", t_id: "1gMYpjRMEqO3fpKD1HZoYzfXW0DyrAG53FtlA6LNU"},
					{line_num: 58, name: "Coursey Boulevard - O'Neal Lane", t_id: "170VXRKnPVLR2H5hHMR1YgWnLr6Xt6-pR3PW5gR6l"},
					{line_num: 59, name: "East Florida Boulevard - O'Neal Lane", t_id: "1TWTSAR-DWwmjmWgiWPDEJFNDBGdetcB27EmYiyxJ"},
					{line_num: 60, name: "Medical Circulator", t_id: "1bmGx33veqXwLLBsZKFNILg5LEkM4q9SJ4WO3eXZo"},
					{line_num: 70, name: "Baker - Southern University - CATS Terminal", t_id: "1JPzXIrGwHzzlHX1PWvRU2LH44BsAoFfzQzOnj9zF"},
					{line_num: 72, name: "Florida Boulevard Limited Stops", t_id: "1w-EjCe-SgTPjxz9YSoRgHXdH7DgemCLtVb4eURSf"},
					{line_num: 80, name: "Southern University Shuttle", t_id: "1r1GnA7RYhn_cNtCKwsz7yIq9iu52HZmhdZg40isC"},
					{line_num: 103, name: "Airport Express to Downtown", t_id: "1p4fyMd_TsANelDLTvcQf0ngsUZjXEUGqAFew5tI_"} 
					];
					

function initMap (){
	google.maps.visualRefresh = true;
    var mapDiv = document.getElementById('googlemap');
    map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(30.455526223382574, -91.14911649999999),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));
	
/* 	var censustractLayer = new google.maps.FusionTablesLayer({
		query: {
			select: 'col2',
			from: '1_1Jss1Za8MvCaAhC2FDIZRL8qisgx12hqs21oq3B'
		}
	});
	censustractLayer.setMap(map);
	 */
	/* var tractslayer = new google.maps.KmlLayer({
		url: 'https://raw.githubusercontent.com/Cadetho/ProviderMapping/master/cb_2015_22_tract_500k.kml',
		map: map
	});
	 console.log(tractslayer); */
	 
	var myParser = new geoXML3.parser({
		map: map,
		afterParse: useTheData
		});
	myParser.parse('https://raw.githubusercontent.com/Cadetho/ProviderMapping/master/cb_2015_22_tract_500k.kml');
	showBusRoutes();
	createControlPanel();
	var csvdata=$.ajax({
		type: 'GET',
		url: 'SubdistrictAnalysis.csv',
		dataType: 'text/csv',
		success: function(result){
			console.log(result);
		}
	});

}
function useTheData(doc){
	for(var i=0;i<doc[0].gpolygons.length;i++){
		tracts.push(doc[0].gpolygons[i]);
	}
}

function getRangeColor(percent){
	var h = percent*0.4; //hue
	var s = 0.9;  //saturation
	var l = 0.9; //lightness
	
	return {hue: h, sat: s, light: l};

}
function createControlPanel(){
	
	var buspanel = $('ul.dropdown-list');
	buspanel.controlgroup( {
		direction: "vertical"
	});
	for(var i=0;i<routes.length;i++){
		buspanel.append("<li><label for='checkbox-"+routes[i].line_num+"'>"+routes[i].name+"<input type='checkbox'  class='toggle is_selected' name='checkbox-"+routes[i].line_num+"' id='checkbox-"+routes[i].line_num+"' value='"+routes[i].line_num+"' checked='true'> </label></li>");
	}
	//$('input').checkboxradio();
	$(".toggle").on("change", handleToggle );
}
$(function () {
	$("div#accordion").on('click', function(){
		$(this).toggleClass("is-active");
	}).children('input').on('click', function (e){
		e.stopPropagation()
	});
	$("div#accordion ul").click(function (e) {
		e.stopPropagation();
	});
	$("#checkbox-buses").on("click", handleBusToggle);
});
function handleBusToggle( e ){
	var box = $("#checkbox-buses");
	if(box.prop('checked')){
		$('.toggle').prop("checked", true);
		$('.toggle').trigger('change');
	}else{
		$('.toggle').prop("checked", false);
		$('.toggle').trigger('change');
	}
}

function handleToggle( e ){
	var target = $(e.target);
	var val = target.val();
	var line = $.grep(routelines, function(e){ return e.routenum == val });
	if(target.prop('checked')){
		line[0].polyline.setVisible(true);
	} else {
		line[0].polyline.setVisible(false);
	}
	
}
function showBusRoutes(){
	for(var i=0; i<routes.length;i++){
		httpGetAsync("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20col2%20FROM%20" + routes[i].t_id + "&key=AIzaSyDIhmSQ0iMHyMwEuBRbJfIsUBcXwpxKI6o", displayroute, routes[i]);
	}
}
function httpGetAsync(url, callback, options){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(JSON.parse(xmlHttp.responseText), options);
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function displayroute(routeresp, routeobj){
	p_route = routeResponseParse(routeresp);
	var pline = new google.maps.Polyline({
		path: p_route,
		strokeColor: colors[routelines.length],
		strokeWeight: 2,
		strokeOpacity: 1
	});
	routelines.push({polyline: pline, routenum: routeobj.line_num, routename: routeobj.name});
	pline.setMap(map);
}

 function routeResponseParse(route){
	var geoindex = 0;
	for(j=0;j<route.rows.length;j++){
		if(route.rows[j][0].geometry != null){
			geoindex = j;
		}
	}
	var result = [];
	var geo = route.rows[geoindex][0].geometry;
	var temp = "";
		for(i=0;i<geo.coordinates.length;i++){
			temp = geo.coordinates[i];
			result.push({lng: temp[0], lat: temp[1]});
		}
	return result;
} 


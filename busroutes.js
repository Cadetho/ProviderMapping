var routelines = [];
var tracts = [];
var provdata = [];
var specialtylist = [];
var map = null;
var accordheight;
var accordheight2;
var datalist = [];
var provdatalist = [];
var csvdata = [];
var openinfo = null;
var healthdistricts = [{tracts: [], pop: 0, datatotals: []},{tracts: [], pop: 0, datatotals: []},{tracts: [], pop: 0, datatotals: []},{tracts: [], pop: 0, datatotals: []},{tracts: [], pop: 0, datatotals: []},{tracts: [], pop: 0, datatotals: []},{tracts: [], pop: 0, datatotals: []}];
var healthdistrictspop = [0,0,0,0,0,0,0];
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

	var myParser = new geoXML3.parser({
		map: map,
		afterParse: useTheData
		});
	myParser.parse('https://raw.githubusercontent.com/Cadetho/ProviderMapping/master/cb_2015_22_tract_500k.kml');
	showBusRoutes();
	createControlPanel();
	

}

function useProvCSVData(data){
	var provdatalist=data[0].split(',');
	data.shift();
	for(i=0;i<data.length;i++){
		data[i]=data[i].split(',');
		var specialtyd = data[i][11].split('/');
		for(j=0;j<specialtyd.length;j++){
			var specfind = specialtylist.findIndex(x => x.specialty === specialtyd[j]);
			if(specfind==-1){
				specialtylist.push({specialty: specialtyd[j], provindexlist: [i]});
			} else {
				specialtylist[specfind].provindexlist.push(i);
			}
		}
		provdata.push({lname: data[i][3], fname: data[i][4], specialty: specialtyd, lat: data[i][25], lng: data[i][26], npi: data[i][0], org: data[i][17], marker: "", infowindow: ""});
	}
	for(i=0;i<provdata.length;i++){
 		for(z=0;z<tracts.length;z++){
			var lngg = provdata[i].lng;
			var latt = provdata[i].lat;
			var pos = new google.maps.LatLng(latt, lngg);
			var bool = google.maps.geometry.poly.containsLocation(pos, tracts[z].tract);
			if(bool){
				tracts[z].providers.push(z);
			}

		} 
		var content = "<div class='info_content'><table><tr><td>Name</td><td>"+provdata[i].fname + " " + provdata[i].lname + "</td></tr><td>Specialty</td><td>"+provdata[i].specialty+"</td></tr><tr><td>NPI</td><td>"+provdata[i].npi+"</td></tr><tr><td>Organization</td><td>"+provdata[i].org+"</td></tr></table></div>";
		
		provdata[i].infowindow = new google.maps.InfoWindow();
		provdata[i].marker = new google.maps.Marker({
			position: {lat: parseFloat(provdata[i].lat), lng: parseFloat(provdata[i].lng)},
			map: map,
			title: provdata[i].fname + " " + provdata[i].lname
		});
		google.maps.event.addListener(provdata[i].marker, 'click', (function(marker, content,infowindow){
			return function(){
				if(openinfo == null){
					openinfo = infowindow;
				} else {
					openinfo.close();
					openinfo = infowindow;
				}
				infowindow.setContent(content);
				infowindow.open(map,marker);
			};
		})(provdata[i].marker, content, provdata[i].infowindow));
		}
		
		console.log(tracts);
}


function useCSVData(data){
	data.pop();
	for(i=0;i<data.length;i++){
		data[i]=data[i].split(',');
	}
	datalist = data[0];
	data.shift();
	for(i=0;i<data.length;i++){
		for(a=2;a<data[i].length;a++){
			data[i][a]=parseInt(data[i][a]);
		}
	}
	csvdata = data;
	for(i=0;i<data.length;i++){
		if(data[i][2]<=7){
			var index = null;
			for(a=0;a<tracts.length;a++){
				if(tracts[a].tract.title === data[i][0]){
					index = a;
				}
			}
			healthdistricts[data[i][2]-1].tracts.push(tracts[index].tract);
			healthdistricts[data[i][2]-1].pop = healthdistricts[data[i][2]-1].pop + parseInt(data[i][3]);
			for(var j=4;j< data[i].length ;j++){
				if(healthdistricts[data[i][2]-1].datatotals[j]==='undefined'){
					if(datalist[j-4].indexOf("%")!=-1){
						healthdistricts[data[i][2]-1].datatotals.push(parseInt(data[i][j]));
					} else {
						healthdistricts[data[i][2]-1].datatotals.push((parseInt(data[i][j])/100)*parseInt(data[i][3]));
					}
				} else {
					if(datalist[j-4].indexOf("%")!=-1){
						healthdistricts[data[i][2]-1].datatotals[j]=healthdistricts[data[i][2]-1].datatotals[j]+parseInt(data[i][j]);
					} else {
						healthdistricts[data[i][2]-1].datatotals[j]=healthdistricts[data[i][2]-1].datatotals[j]+parseInt((parseInt(data[i][j])/100)*parseInt(data[i][3]));
					}
				}
			}
		}
	}
	$("#checkbox-districts").prop("checked", false);
	$("#checkbox-districts").on("click", handleDistrictToggle);
	$('#district-box').show();
	createCSVDataControls();
}
function createCSVDataControls(){
	datalist = datalist.slice(3);
	accordheight2 = $('div#accordion2').height();
	var csvpanel = $('div#accordion2 > ul');
	
	$('div#accordion2').height(accordheight2);
	for(var i=4;i<datalist.length+3;i++){
		csvpanel.append("<label for='radio-"+ i +"'>"+datalist[i-3]+"</label><input type='radio'  class='toggle_csv' name='radiocsv' id='radio-"+i+"' value='"+i+"' > ");
	}
	$("[name='radiocsv']").on("change", handleCSVToggle );
	$('#csv > li > .input').checkboxradio();
	$('div#accordion2').controlgroup( {
		direction: "vertical"
	});
	
	
}
function handleCSVToggle( e ){
	var index = e.target.value;
	var districtbool = $('#checkbox-districts').prop('checked');
	var colorarr = [];
	if(districtbool){
		for(i=0;i<healthdistricts.length;i++){
			colorarr.push(healthdistricts.datatotals[i]/healthdistricts.pop);
		}
		setDistrictFill(colorarr);
	} else {
		if(datalist[index].indexOf("%")==-1){
			for(i=0;i<csvdata.length;i++){
				colorarr.push(csvdata[i][index]/csvdata[i][3]);
			}	
		} else {
			for(i=0;i<csvdata.length;i++){
				colorarr.push((csvdata[i][index]));
			}
		}
	}

	var max = Math.max.apply(null, colorarr);
	for(i=0;i<colorarr.length;i++){
		colorarr[i]=colorarr[i]/max;
		colorarr[i]=getRangeColor(colorarr[i]);
		colorarr[i]="hsl("+colorarr[i].hue + ","+colorarr[i].sat+"%,"+colorarr[i].light+"%)";
	}

	if(districtbool){
		setDistrictFill(colorarr);
	} else {
		setTractFill(colorarr);
	}
	/* for(z=0;z<colorarr.length;z++){
		colorarr[z]=getRangeColor(colorarr[z]);
	} */
	
}
function useTheData(doc){
	for(var i=0;i<doc[0].gpolygons.length;i++){
		tracts.push({tract: doc[0].gpolygons[i], providers: []});
		doc[0].gpolygons[i].setOptions({fillColor: colors[i]});
	}
	var csvdata=$.ajax({
		type: 'GET',
		url: 'https://raw.githubusercontent.com/Cadetho/ProviderMapping/master/SubdistrictAnalysis.csv',
		dataType: 'text',
		success: function(result){
			var result = result.split(/\r?\n|\r/);
			useCSVData(result);
		},
		error: function (xhr, ajaxOptions, thrownError) {
		}
	});
	var provcsvdata=$.ajax({
		type: 'GET',
		url: 'https://raw.githubusercontent.com/Cadetho/ProviderMapping/master/ProviderDataset.csv',
		dataType: 'text',
		success: function(result){
			var result = result.split(/\r?\n|\r/);
			result.pop();
			useProvCSVData(result);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
	});
}
function getRangeColor(percent){
	var h = percent*180; //hue
	var s = 90;  //saturation
	var l = 50; //lightness
	
	return {hue: h, sat: s, light: l};

}
function createControlPanel(){
	accordheight = $('div#accordion').height();
	var buspanel = $('div#accordion > ul.dropdown-list');
	buspanel.controlgroup( {
		direction: "vertical"
	});
	$('div#accordion').height(accordheight);
	for(var i=0;i<routes.length;i++){
		buspanel.append("<li><label for='checkbox-"+routes[i].line_num+"'>"+routes[i].name+"<input type='checkbox'  class='toggle is_selected' name='checkbox-"+routes[i].line_num+"' id='checkbox-"+routes[i].line_num+"' value='"+routes[i].line_num+"' checked='true'> </label></li>");
	}
	//$('input').checkboxradio();
	$(".toggle").on("change", handleToggle );
}
$(function () {
	$("div#accordion").on('click', function(){
		$(this).toggleClass("is-active");
		if($(this).hasClass('is-active')){
			$('#accordion').height($('div#accordion > ul.dropdown-list').height() + $('#accordion').height());
		}else{
			$('#accordion').height(accordheight);
		}
	}).children('input').on('click', function (e){
		e.stopPropagation()
	});
	$("div#accordion ul").click(function (e) {
		e.stopPropagation();
	});
	
	$("div#accordion2").on('click', function(){
		$(this).toggleClass("is-active");
		if($(this).hasClass('is-active')){
			$('#accordion2').height($('div#accordion2 > ul.dropdown-list').height() + $('#accordion2').height());
		}else{
			$('#accordion2').height(accordheight);
		}
	}).children('input').on('click', function (e){
		e.stopPropagation()
	});
	$("div#accordion2 ul").click(function (e) {
		e.stopPropagation();
	});
	$("#checkbox-buses").on("click", handleBusToggle);
	
	
});
function handleDistrictToggle( e ){
	if($('#checkbox-districts').prop('checked')){
		setDistrictFill(colors);
	} else {
		setTractFill(colors);
	}
}
function setTractFill(colorfill){
	for(i=0;i<tracts.length;i++){
		tracts[i].tract.setOptions({fillColor:colorfill[i], strokeWeight:'2'});
	}
}
function setDistrictFill(colorfill){
	for(i=0;i<healthdistricts.length;i++){
		for(a=0;a<healthdistricts[i].tracts.length;a++){
			
			healthdistricts[i].tracts[a].setOptions({fillColor: colorfill[i], strokeWeight: '0'});
		}
	}
}
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


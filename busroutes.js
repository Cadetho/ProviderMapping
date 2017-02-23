var routelines = [];
var tracts = [];
var provdata = [];
var specialtylist = [];
var map = null;
var accordheight;
var accordheight2;
var zips=[];
var datalist = [];
var provdatalist = [];
var csvdata = [];
var schoollist = [];
var parklist = [];
var masterprovlist = [];
var medicaredata = [];
var clickevents = [];
var bcbsdatalegend = "";
var openinfo = null;
var provbool = false;
var medbool = false;
var zipbool = false;
var global_fillOpacity="0.49609375";
var ziplist = [
{zip: 70817, pop: 31192, show: false},
{zip: 70816, pop: 43194, show: false},
{zip: 70802, pop: 27267, show: true},
{zip: 70805, pop: 29909, show: true},
{zip: 70809, pop: 25050, show: false},
{zip: 70811, pop: 13676, show: true},
{zip: 70814, pop: 14514, show: true},
{zip: 70819, pop: 5040, show: true},
{zip: 70820, pop: 17222, show: false},
{zip: 70803, pop: 1335, show: true},
{zip: 70815, pop: 30075, show: true},
{zip: 70808, pop: 32504, show: false},
{zip: 70810, pop: 37980, show: false},
{zip: 70714, pop: 19803, show: true},
{zip: 70801, pop: 13, show: true},
{zip: 70806, pop: 28706, show: true},
{zip: 70807, pop: 20377, show: true},
{zip: 70812, pop: 11206, show: true}
];
var healthdistricts = [{tracts: [], pop: 0, datatotals: 0, tractcoords: []},{tracts: [], pop: 0, datatotals: 0, tractcoords: []},{tracts: [], pop: 0, datatotals: 0, tractcoords: []},{tracts: [], pop: 0, datatotals: 0, tractcoords: []},{tracts: [], pop: 0, datatotals: 0, tractcoords: []},{tracts: [], pop: 0, datatotals: 0, tractcoords: []},{tracts: [], pop: 0, datatotals: 0, tractcoords: []}];
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

colors2 = [
	"#FFFFFF",
	"#000000",
	"#FF0000",
	"#FFFF00",
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
    "#800000"
]
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
		var bodyEl = $('body');
		var content = $( '.content_wrap' );
		var openbtn = $( '#open-button' );
		closebtn = $( '#close-button' );
		var isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.on( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.on( 'click', toggleMenu );
		}
		content.on( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		console.log(isOpen);
		if( isOpen ) {
			bodyEl.removeClass('show-menu');
			$('div.menu-wrap').css("z-index","-1");
		}
		else {
			bodyEl.addClass('show-menu');
			$('div.menu-wrap').css("z-index","999");
			
		}
		isOpen = !isOpen;
	}

	init();

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
	
	var myzipparser = new geoXML3.parser({
		map: map,
		afterParse: useZipData,
		visible: false
	});
	myzipparser.parse('https://raw.githubusercontent.com/Cadetho/ProviderMapping/f11763656d79e2d60da5c1deb860e5c5f8cb4c16/Baton-Rouge-60506.kml');
	
	$.ajax({
		type: 'GET',
		url: 'https://data.brla.gov/resource/4gku-4cqw.json',
		dataType: 'json',
		success: function(results){
			makeSchoolMarkers(results);
		}
	});
	
	$.ajax({
		type: 'GET',
		url: 'https://data.brla.gov/resource/5hk4-9kj5.json',
		dataType: 'json',
		success: function(results){
			makeParkMarkers(results);
		}
	});
	$('#checkbox-fill').checkboxradio();
	$('#checkbox-fill').prop("checked", false);
	$('#checkbox-fill').button("refresh");
	
	$('#checkbox-fill').on('click', handleFillToggle);
}

function handleFillToggle(e){
	var currentselection = "";
	if($('#checkbox-tractradio').prop("checked")){currentselection="tracts";
	}else if($('#checkbox-districts').prop("checked")){currentselection="districts";
	}else if($('#checkbox-zips').prop("checked")){currentselection="zips";}
	var bool = $('#checkbox-fill').prop('checked');
	if(bool){
		if(currentselection==="districts") { setDistrictFill(); }
		else if(currentselection==="tracts") { setTractFill(); }
		else if(currentselection==="zips") { setZipFill(); }
	} else {
		if(currentselection==="districts") {
			for(i=0;i<healthdistricts.length;i++){
				for(a=0;a<healthdistricts[i].tracts.length;a++){
					healthdistricts[i].tracts[a].tract.setOptions({'fillOpacity':'0'});
				}
			}
		}
		else if(currentselection==="tracts") { 
			for(i=0;i<tracts.length;i++){
				tracts[i].tract.setOptions({'fillOpacity':'0'});
			}
		}
		else if(currentselection==="zips") { 
			for(i=0;i<zips.length;i++){
				zips[i].poly.setOptions({'fillOpacity':'0'});
			}
		}
	}
}
function makeParkMarkers(data){
	var infowindow,marker;
	var icon = {
    url: "images/brec_logo.png", 
    scaledSize: new google.maps.Size(20, 20), 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0) 
	};
	
	for(i=0;i<data.length;i++){
		var content = "<div class='geoxml3_infowindow'><h3>"+data[i].park_name+"</h3></div>"
		infowindoww = new google.maps.InfoWindow();
		markerr = new google.maps.Marker({
				position: {lat: parseFloat(data[i].geolocation.latitude), lng: parseFloat(data[i].geolocation.longitude)},
				map: map,
				icon: icon,
				title: data[i].name,
				visible: false
			});
			
		parklist.push({marker: markerr, infowindow: infowindoww, name: data[i].name});
		google.maps.event.addListener(markerr, 'click', (function(marker, content, infowindow){
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
		})(markerr,content, infowindoww));
	}
	$('#checkbox-parkmarker').checkboxradio();
	$('#checkbox-parkmarker').prop("checked", false);
	$('#checkbox-parkmarker').button('refresh');
	
	$('#checkbox-parkmarker').on('change', handleParkToggle);
}

function handleParkToggle(){
	var toggle = $('#checkbox-parkmarker').prop("checked");
	for(i=0;i<parklist.length;i++){
		parklist[i].marker.setVisible(toggle);
	}
}
function makeSchoolMarkers(data){
	var infowindow,marker;
	var icon = {
    url: "images/school_logo.png", 
    scaledSize: new google.maps.Size(20, 20), 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0) 
	};

	for(i=0;i<data.length;i++){
		if(data[i].open_closed==="O"&& !(typeof(data[i].geolocation) === "undefined")){
			var content = "<div class='geoxml3_infowindow'><h3>"+data[i].name+"</h3></div>"
			infowindoww = new google.maps.InfoWindow();
			markerr = new google.maps.Marker({
					position: {lat: parseFloat(data[i].geolocation.coordinates[1]), lng: parseFloat(data[i].geolocation.coordinates[0])},
					map: map,
					icon: icon,
					title: data[i].name,
					visible: false
				});
				
				schoollist.push({marker: markerr, infowindow: infowindoww, name: data[i].name});
				google.maps.event.addListener(markerr, 'click', (function(marker, content, infowindow){
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
				})(markerr,content, infowindoww));
			
		}
	}
	$('#checkbox-schoolmarker').checkboxradio();
	$('#checkbox-schoolmarker').prop("checked", false);
	$('#checkbox-schoolmarker').button('refresh');
	
	$('#checkbox-schoolmarker').on('change', handleSchoolToggle);
}
function handleSchoolToggle(){
	var toggle = $('#checkbox-schoolmarker').prop("checked");
	for(i=0;i<schoollist.length;i++){
		schoollist[i].marker.setVisible(toggle);
	}
}
function useZipData(data){
	for(var i=0;i<data[0].gpolygons.length;i++){
		if(ziplist[i].show){
		content = "<div class=geoxml3_infowindow><h3>"+ziplist[i].zip+"</h3></br><h3>Population: "+ziplist[i].pop+"</h3></br>";
		data[0].gpolygons[i].infoWindow.setContent(content);
		data[0].gpolygons[i].infoWindowOptions.content = content;
		data[0].gpolygons[i].setOptions({"fillOpacity":"0.49609375","strokeWeight":"2", "strokeOpacity":"0.99609375"});
		zips.push({poly: data[0].gpolygons[i], facilities: [], providers: [], pop: ziplist[i].pop});
		} else {
		data[0].gpolygons[i].setVisible(false);
		}
	}
	zipbool = true;
	createMasterProvList();
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
		provdata.push({lname: data[i][3], fname: data[i][4], specialty: specialtyd, lat: data[i][25], lng: data[i][26],zip: data[i][27], npi: data[i][0], org: data[i][17], marker: "", infowindow: ""});
	}
/* 	for(i=0;i<provdata.length;i++){
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
			title: provdata[i].fname + " " + provdata[i].lname,
			visible: false
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
		} */
		provbool = true;
		createMasterProvList();
}
function handleProvMarkerToggle(){
	var bool = $('#checkbox-provmarker').prop('checked')
	
	for(i=0;i<masterprovlist.length;i++){
		masterprovlist[i].marker.setVisible(bool);
	}

	
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
	console.log(datalist);
	for(i=0;i<data.length;i++){
		var distno = data[i][2];
		if(distno<=7){
			var index = null;
			for(a=0;a<tracts.length;a++){
				if(tracts[a].tract.title === data[i][0]){
					index = a;
					tracts[a].pop=data[i][3];
					tracts[a].data = data[i];
				}
			}
			healthdistricts[distno-1].tracts.push(tracts[index]);
			healthdistricts[distno-1].pop = healthdistricts[distno-1].pop + parseInt(data[i][3]);
		}
	}
	for(i=0;i<tracts.length;i++){
		for(a=0;a<tracts[i].data;a++){
			if(datalist[a].indexOf("%")!=-1){
				tracts[i].data[a]=(tracts[i].data[a]/100)*tracts[i].pop;
			}
		}
	}

	$("#checkbox-tractradio").prop("checked", true);

	$("[name='area']").on("change", handleDistrictToggle);
	$("div#district-box > input").checkboxradio();
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
	if($('#checbox-zips').prop('checked')){
		$('#checkbox-tracts').prop('checked', true);
		$('#checbox-zips').prop('checked', false);
	}
	
	

	var colorarr = [];
	if(districtbool){
			for(i=0;i<healthdistricts.length;i++){
				healthdistricts[i].datatotals=0;
				for(a=0;a<healthdistricts[i].tracts.length;a++){
					healthdistricts[i].datatotals = healthdistricts[i].datatotals+healthdistricts[i].tracts[a].data[index];
				}
			}
			console.log(healthdistricts);
			for(i=0;i<healthdistricts.length;i++){
				colorarr.push(healthdistricts[i].datatotals/healthdistricts[i].pop);
			}
			console.log(colorarr);
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
	console.log(tracts);
	for(i=0;i<tracts.length;i++){
		tracts[i].tract.infoWindow.setContent("<div id=geoxml3_infowindow><h3>Tract "+tracts[i].tract.title + "</h3><br/>Total Population: "+tracts[i].pop+"<br/>"+datalist[index]+": "+tracts[i].data[index]+"</div>");
		tracts[i].tract.infoWindowOptions.content="<div id=geoxml3_infowindow><h3>Tract "+tracts[i].tract.title + "</h3><br/>Total Population: "+tracts[i].pop+"<br/>"+datalist[index]+": "+tracts[i].data[index]+"</div>";
	}
	var max = Math.max.apply(null, colorarr);
	var min = Math.min.apply(null, colorarr);
	for(i=0;i<colorarr.length;i++){
		colorarr[i]=(colorarr[i]-min)/max;
		colorarr[i]=getRangeColor(colorarr[i]);
	}

	if(districtbool){
		setCSVDistrictFill(colorarr);
	} else {
		setCSVTractFill(colorarr);
	}
	
}
function setCSVDistrictFill(colorarr){
	for(a=0;a<zips.length;a++){
		zips[a].poly.setVisible(false);
	}
	for(i=0;i<healthdistricts.length;i++){
		for(a=0;a<healthdistricts[i].tracts.length;a++){
			healthdistricts[i].tracts[a].tract.setVisible(true);
			healthdistricts[i].tracts[a].tract.setOptions({fillColor: colorarr[i]});
		}
	}
}
function setCSVTractFill(colorarr){
	for(a=0;a<zips.length;a++){
		zips[a].poly.setVisible(false);
	}
	
	for(i=0;i<tracts.length;i++){
		tracts[i].tract.setVisible(true);
		tracts[i].tract.setOptions({fillColor: colorarr[i]});
	}
}
function useTheData(doc){
	for(var i=0;i<doc[0].gpolygons.length;i++){
		tracts.push({tract: doc[0].gpolygons[i], providers: []});
		doc[0].gpolygons[i].setOptions({fillColor: colors[i]})
		doc[0].gpolygons[i].setVisible(false);
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
	
	var bcbscsvdata=$.ajax({
		type: 'get',
		url: 'https://raw.githubusercontent.com/Cadetho/ProviderMapping/master/nbrBCBSProviders.csv',
		dataType: 'text',
		success: function(result){
			var result = result.split(/\r?\n|\r/);
			usebcbsdata(result);
		}
	});
	var medicarecsvdata=$.ajax({
		type: 'get',
		url: 'https://raw.githubusercontent.com/Cadetho/ProviderMapping/master/Medicare_Physician_and_Other_Supplier_National_Provider_Identifier__NPI__Aggregate_Report__Calendar_Year_2014.csv',
		dataType: 'text',
		success: function(result){
			var result = result.split(/\r?\n|\r/);
			usemedicaredata(result);
		}
	});
}
function usebcbsdata(data){
	for(i=0;i<data.length;i++){
		data[i]=data[i].split(',');
	}
	bcbsdatalegend = data[0];
	data.shift();
	for(i=0;i<data.length;i++){
		
		if(data[i][0]==='Facility'||data[i][0]==='Provider Group'){
			
		}
		
	}
	
}
function usemedicaredata(data){
	for(i=0;i<data.length;i++){
		medicaredata.push(data[i].split(','));
	}
	medicaredata.pop();
	medicaredata.shift();
	medbool = true;
	createMasterProvList();
}
var booleanstr = null;
function createMasterProvList(boolstr){
	if(zipbool && provbool && medbool){
	var pos = 0;
	var meddatatemp = medicaredata;
	var provdatatemp = provdata;

	while(true){
		
		if(pos<meddatatemp.length){
		var tempnpi = meddatatemp[pos][0];
		
		var index = provdatatemp.findIndex(x => x.npi === tempnpi);
		if(index != -1){
			masterprovlist.push(provdatatemp[index]);
			meddatatemp.splice(pos,1);
			provdatatemp.splice(index, 1);
			pos--;
		} 
		pos++;
		} else {
			break;
		}
	}

	masterprovlist.push.apply(masterprovlist, provdatatemp);
	for(i=0;i<meddatatemp.length;i++){
		meddatatemp[i]=({fname: meddatatemp[i][2], lname: meddatatemp[i][1], npi: meddatatemp[i][0], lat: meddatatemp[i][11], lng: meddatatemp[i][12], infowindow: null, marker: null});
	}
	masterprovlist.push.apply(masterprovlist, meddatatemp);
	placeMasterListMarkers();
	}
}
function placeMasterListMarkers(){
	var icon = {
    url: "images/doctor_logo.png", 
    scaledSize: new google.maps.Size(20, 20), 
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0) 
	};
	for(i=0;i<masterprovlist.length;i++){
		var lngg = masterprovlist[i].lng;
		var latt = masterprovlist[i].lat;
		var pos = new google.maps.LatLng(latt, lngg);
		for(z=0;z<tracts.length;z++){
			var bool = google.maps.geometry.poly.containsLocation(pos, tracts[z].tract);
			if(bool){
				tracts[z].providers.push(masterprovlist[i]);
			}
		}
		for(a=0;a<zips.length;a++){
			bool = google.maps.geometry.poly.containsLocation(pos, zips[a].poly);
			if(bool){
				zips[a].providers.push(masterprovlist[i]);
			}
		}
		var content = "<div class='info_content'><table><tr><td>Name</td><td>"+masterprovlist[i].fname + " " + masterprovlist[i].lname + "</td></tr><tr><td>NPI</td><td>"+masterprovlist[i].npi+"</td></tr></table></div>";
		masterprovlist[i].infowindow = new google.maps.InfoWindow();
		masterprovlist[i].marker = new google.maps.Marker({
			position: {lat: parseFloat(latt), lng: parseFloat(lngg)},
			map: map,
			icon: icon,
			title: masterprovlist[i].fname + " " + masterprovlist[i].lname,
			visible: false
		});
		google.maps.event.addListener(masterprovlist[i].marker, 'click', (function(marker, content,infowindow){
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
		})(masterprovlist[i].marker, content, masterprovlist[i].infowindow));
	}
	
	for(i=0;i<tracts.length;i++){
		
		var concatstr = "";
		content = "<div class='geoxml3_infowindow'><table><tr><td>Tract</td><td>"+tracts[i].tract.title+"</td></tr><tr><td>Population</td><td>"+tracts[i].pop+"</td></tr><tr><td>Provider Count</td><td>"+tracts[i].providers.length+"</td></tr><tr>Provider List</tr>"
		for(z=0;z<tracts[i].providers.length;z++){
			content += "<tr><td>"+tracts[i].providers[z].fname+"</td><td>"+tracts[i].providers[z].lname+"</td></tr>";
		}
		content += "</table></div>";
		tracts[i].tract.infoWindow.setContent(content);
		tracts[i].tract.infoWindowOptions.content = content;
	}
	
	var colorarr = [];
	for(i=0;i<tracts.length;i++){
		var ratiopop = tracts[i].pop/1750;
		var ratio = tracts[i].providers.length/ratiopop;
		if(ratio>1){ ratio = 1; }
		colorarr.push(getRangeColor(ratio));
	}
	setTractFill();
	$('#checkbox-provmarker').checkboxradio();
	$('#checkbox-provmarker').prop('checked', false);
	$('#checkbox-provmarker').button("refresh");

	$('#checkbox-provmarker').on('click', handleProvMarkerToggle);
}
function getRangeColor(percent){
	var h = percent*130; //hue
	var s = 90;  //saturation
	var l = 50; //lightness
	
	return "hsl("+h + ","+s+"%,"+l+"%)";

}
function createControlPanel(){
	accordheight = $('div#accordion').height();
	var buspanel = $('div#accordion > ul.dropdown-list');
	buspanel.controlgroup( {
		direction: "vertical"
	});
	$('div#accordion').height(accordheight);
	for(var i=0;i<routes.length;i++){
		buspanel.append("<li><label for='checkbox-"+routes[i].line_num+"'>"+routes[i].name+"<input type='checkbox'  class='toggle is_selected' name='checkbox-"+routes[i].line_num+"' id='checkbox-"+routes[i].line_num+"' value='"+routes[i].line_num+"' checked='false'> </label></li>");
		$('#checkbox'+routes[i].line_num).prop('checked', false);
	}
	//$('input').checkboxradio();
	$(".toggle").checkboxradio();

	$(".toggle").on("change", handleToggle );
}
$(function () {
	function accord(){
		$(this).toggleClass("is-active");
		if($(this).hasClass('is-active')){
			$('#accordion').height($('div#accordion > ul.dropdown-list').height() + $('#accordion').height());
		}else{
			$('#accordion').height(accordheight);
		}
	}


	
	$("div#accordion").on('click', accord).children('input').on('click', function (e){
		e.stopPropagation()
	});
	$("div#accordion ul").click(function (e) {
		e.stopPropagation();
	});
	function accord2(){
		$(this).toggleClass("is-active");
		if($(this).hasClass('is-active')){
			$('#accordion2').height($('div#accordion2 > ul.dropdown-list').height() + $('#accordion2').height());
		}else{
			$('#accordion2').height(accordheight);
		}
	}

	$("div#accordion2").on('click', accord2).children('input').on('click', function (e){
		e.stopPropagation()
	});
	$("div#accordion2 ul").click(function (e) {
		e.stopPropagation();
	});
	$("#checkbox-buses").checkboxradio();
	$("#checkbox-buses").prop('checked', false);
	$("#checkbox-buses").button("refresh");

	$("#checkbox-buses").on("click", handleBusToggle);
	
	
});

$(window).on("load", function(){
	
	
});
function handleDistrictToggle( e ){
	var target = e.target.title;
	if(target === "districts"){
		setDistrictFill();
	} else if(target ==="tracts") {
		setTractFill();
	} else if(target === "zips"){
	
		setZipFill();
	}
}

function setZipFill(){
	var colorfill = [];
	for(i=0;i<zips.length;i++){
		var ratiopop = zips[i].pop/1750;
		var ratio = zips[i].providers.length/ratiopop;
		if(ratio>1){ ratio = 1; }
		colorfill.push(getRangeColor(ratio));
	}
	for(i=0;i<tracts.length;i++){
		tracts[i].tract.setVisible(false);
	}
	for(a=0;a<zips.length;a++){
		zips[a].poly.setVisible(true);
		zips[a].poly.setOptions({fillColor:colorfill[a], opacity: 1, fillOpacity: "0.49609375"});
	}
}
function setTractFill(colorfill){
	var colorfill=[];
	for(i=0;i<tracts.length;i++){
		var ratiopop = tracts[i].pop/1750;
		var ratio = tracts[i].providers.length/ratiopop;
		if(ratio>1){ ratio = 1; }
		colorfill.push(getRangeColor(ratio));
	}
	for(a=0;a<zips.length;a++){
		zips[a].poly.setVisible(false);
	}
	for(i=0;i<tracts.length;i++){
		tracts[i].tract.setVisible(true);
		tracts[i].tract.setOptions({fillColor:colorfill[i], strokeWeight:'2', fillOpacity: "0.49609375"});
	}
}
function setDistrictFill(){
	var colorfill = [];
		for(i=0;i<healthdistricts.length;i++){
			var ratiopop = healthdistricts[i].pop/1750;
			var ratio = 0;
			for(a=0;a<healthdistricts[i].tracts.length;a++){
				ratio += healthdistricts[i].tracts[a].providers.length;
			}
			ratio = ratio/ratiopop;
			if(ratio>1){ratio = 1;}
			colorfill.push(getRangeColor(ratio));
	}
	for(a=0;a<zips.length;a++){
		zips[a].poly.setVisible(false);
	}
	for(i=0;i<healthdistricts.length;i++){
		for(a=0;a<healthdistricts[i].tracts.length;a++){
			healthdistricts[i].tracts[a].tract.setVisible(true);
			healthdistricts[i].tracts[a].tract.setOptions({fillColor: colorfill[i], strokeWeight: '1', fillOpacity: "0.49609375", strokeColor: colors[i+7]});
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
		line[0].polyline.setOptions({strokeWeight: '2'});
	} else {
		line[0].polyline.setOptions({strokeWeight: '0'});
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
		strokeWeight: 0,
		visibility: false
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


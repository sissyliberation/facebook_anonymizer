var people_names = {};

var name_queries = [
	'.UFICommentActorName:not([data-anon])',
	'.fwb:not([data-anon])',
	'.profileLink:not([data-anon])',
	'.fbRemindersTitle:not([data-anon])',
	'.mas.name:not([data-anon])',
	'#fbProfileCover:not([data-anon])',
	'.entity._586o:not([data-anon])',
	'._55lr:not([data-anon])',
	'._2dpb:not([data-anon])'
];

var img_queries = [
	'.fbxWelcomeBoxImg:not([data-anon])',
	'.profilePic:not([data-anon])',
	'.UFIActorImage:not([data-anon])',
	'._rw.img:not([data-anon])',
	'._s0._50c7._54rt.img:not([data-anon])',
	'._s0._ry.img:not([data-anon])',
	'.friendPhoto:not([data-anon])',
	'._s0._54ru.img:not([data-anon])',
	'.scaledImageFitWidth:not([data-anon])',
	'._s0._5xib._5sq7._rw.img:not([data-anon])',
	'img._s0._7lw._rv.img:not([data-anon])',
	'._s0.tickerStoryImage._54ru.img:not([data-anon])',
	'._56p9 img:not([data-anon])',
	'.flyoutNoIndicator:not([data-anon])'
];

function hideAllNames() {
	for(var i =0; i < name_queries.length;++i) {
		$(name_queries[i]).each(function(index){
			var name = $(this).text();
			if (!(name in people_names)) {
				var new_name = chance.name();
				people_names[name] = new_name;
				people_names[new_name] = new_name;
			}
			$(this).html(people_names[name]);
			$(this).data('anon','true');
		});
	}
}

function hideAllImages() {
	for(var i =0; i < img_queries.length;++i) {
		$(img_queries[i]).each(function(index){
			$(this).css('-webkit-filter','blur(5px)');
			$(this).data('anon','true');
		});
	}
}

function hideName() {
	var yourname = document.getElementsByClassName('fbxWelcomeBoxName');
	for(var i =0; i < yourname.length; ++i) {
		yourname[i].innerHTML = "Me";
	}
	yourname = document.getElementsByClassName('headerTinymanName');
	for(var i =0; i < yourname.length; ++i) {
		yourname[i].innerHTML = "Me";
	}

	// do you know this person?
	nameArea = document.getElementById('pagelet_escape_hatch');
	if(nameArea){
		nameArea.getElementsByTagName('span')[0].innerHTML = "Do you know this person?";
	}

	// remove names of people in suggested
	nameArea = document.getElementsByClassName('_a1z fsm fwn fcg');
	if(nameArea){
		for (var i = 0; i < nameArea.length;++i) {
			nameArea[i].parentNode.removeChild(nameArea[i]);
		}
	}
}

function hideGroups() {
	var groupSection = document.getElementById('groupsNav');
	if (groupSection) {
		var groups = groupSection.getElementsByClassName('linkWrap');
		for(var i =0; i < groups.length; ++i) {

			function toTitleCase(str) {
			    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
			}
			var random_name = toTitleCase(chance.sentence({words: 3}));
			groups[i].innerHTML = random_name.substring(0, random_name.length - 1);;
		}
	}
}

function hideLinkedGroup() {
	var linkedGroup = document.getElementsByClassName('fwb fcg');
	for(var i = 0; i < linkedGroup.length; ++i) {
		if (linkedGroup[i].childNodes[3]) {
			linkedGroup[i].childNodes[3].innerHTML = "Some Page";
		}
	}
}

function hidePictures() {

	var imgContainer = document.getElementById('pagelet_timeline_app_collection_report_4');
	if(imgContainer) {
		pics = imgContainer.getElementsByClassName('uiScaledImageContainer');
		for(var i =0; i < pics.length; ++i) {
			// pics[i].childNodes[0].src = imgurl;
			$(pics[i]).css('-webkit-filter','blur(5px)');
		}
	}

	// pics in groups someone is in 
	imgContainer = document.getElementsByClassName('listMemberFacepileLargeCollection listMemberFacepile _8o _8t lfloat _ohe');
	if(imgContainer) {
		for(var i = 0; i < imgContainer.length; ++i) {
			pics = imgContainer[i].getElementsByClassName('img');
			for(var j =0; j < pics.length; ++j) {
				$(pics[j]).css('-webkit-filter','blur(5px)');
			}
		}
	}
	// pics in suggested groups
	imgContainer = document.getElementsByClassName('listMemberFacepileNormal listMemberFacepile');
	if(imgContainer) {
		for(var i = 0; i < imgContainer.length; ++i) {
			pics = imgContainer[i].getElementsByClassName('img');
			for(var j =0; j < pics.length; ++j) {
				$(pics[j]).css('-webkit-filter','blur(5px)');
			}
		}
	}

	// group faces on top of current ppl
	imgContainer = document.getElementsByClassName('groupHugFace groupHugFaceHover');
	if(imgContainer) {
		for(var i = 0; i < imgContainer.length; ++i) {
			pics = imgContainer[i].getElementsByTagName('img');
			for(var j =0; j < pics.length; ++j) {
				$(pics[j]).css('-webkit-filter','blur(5px)');
			}
		}
	}
}


function hideRecommendedPagesPeople() {
	var peopleArea = document.getElementsByClassName('egoProfileTemplate');
	for(var i = 0; i < peopleArea.length;++i) {
		var location = peopleArea[i].getElementsByClassName('_a1z fsm fwn fcg');
		if(location && location[0] && location[0].childNodes[0] ){
			location = location[0].childNodes[0];
			if(location.childNodes[0]) {
				location.childNodes[0] = "Some Person";
			} 
			if(location.childNodes[2]) {
				location.childNodes[2] = "aoeu";
			} 
		}
	}
}

function hideEverything() {

	hideAllNames();
	hideAllImages();

	// these still need fixing
	
	hidePictures();
	hideName();
	hideRecommendedPagesPeople();
}

document.addEventListener("DOMNodeInserted", function(evt) {
    hideEverything();
}, false);


$(document).ready(function(){
	document.title = "Some Facebook Page";
	hideLinkedGroup();
	hideGroups();

	hideEverything();

	document.addEventListener("DOMNodeInserted", function(evt) {
    	hideEverything();
	}, false);
});
var people_names = {};

function hideCommentors() {
	// var ppl = document.getElementsByClassName('UFICommentActorName');
	// for(var i = 0; i < ppl.length; ++i) {
	// 	ppl[i].innerHTML ='hi';
	// }
	$('.UFICommentActorName:not([data-anon])').each(function(index){
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

function hideOP() {
	$('.fwb:visible').each(function(index){
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

function hideWithSomebody() {
	$('.profileLink:visible').each(function(index){
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

function hideLinkedGroup() {
	var linkedGroup = document.getElementsByClassName('fwb fcg');
	for(var i = 0; i < linkedGroup.length; ++i) {
		if (linkedGroup[i].childNodes[3]) {
			linkedGroup[i].childNodes[3].innerHTML = "Some Page";
		}
	}
}

function hideBirthdayPeeps() {
	$('.fbRemindersTitle:visible').each(function(index){
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

function hideGroups() {
	var groupSection = document.getElementById('groupsNav');
	if (groupSection) {
		var groups = groupSection.getElementsByClassName('linkWrap');
		for(var i =0; i < groups.length; ++i) {
			groups[i].innerHTML = "Some Group";
		}
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

	// names under friends
	$('.mas .name:visible').each(function(index){
		var name = $(this).text();
		if (!(name in people_names)) {
			var new_name = chance.name();
			people_names[name] = new_name;
			people_names[new_name] = new_name;	
		}
		$(this).html(people_names[name]);
	});

	// profile name
	$('#fbProfileCover:visible').each(function(index){
		var name = $(this).text();
		if (!(name in people_names)) {
			var new_name = chance.name();
			people_names[name] = new_name;
			people_names[new_name] = new_name;	
		}
		$(this).html(people_names[name]);
	});

	// name on search field
	$('.entity ._586o:visible').each(function(index){
		var name = $(this).text();
		if (!(name in people_names)) {
			var new_name = chance.name();
			people_names[name] = new_name;
			people_names[new_name] = new_name;	
		}
		$(this).html(people_names[name]);
	});

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

function hidePictures() {
	var imgurl = "";
	
	var mypic = document.getElementsByClassName('fbxWelcomeBoxImg');
	if (mypic.length) {
		$(mypic[0]).css('-webkit-filter','blur(5px)');
		// mypic[0].src = imgurl;	
	}

	var profilepic = document.getElementsByClassName('profilePic');
	if (profilepic.length) {
		$(profilepic[0]).css('-webkit-filter','blur(5px)');
		// profilepic[0].src = imgurl;
	}

	var pics = document.getElementsByClassName('UFIActorImage');
	for(var i =0; i < pics.length; ++i) {
		$(pics[i]).css('-webkit-filter','blur(5px)');
		// pics[i].src = imgurl;
	}

	pics = document.getElementsByClassName('_rw img');
	for(var i =0; i < pics.length; ++i) {
		// pics[i].src = imgurl;
		$(pics[i]).css('-webkit-filter','blur(5px)');
	}

	pics = document.getElementsByClassName('_s0 _50c7 _54rt img');
	for(var i =0; i < pics.length; ++i) {
		// pics[i].src = imgurl;
		$(pics[i]).css('-webkit-filter','blur(5px)');
	}	

	// images of people who like a page that's been linked
	pics = document.getElementsByClassName('_s0 _ry img');
	for(var i =0; i < pics.length; ++i) {
		// pics[i].src = imgurl;
		$(pics[i]).css('-webkit-filter','blur(5px)');
	}
	
	// friend pictures
	pics = document.getElementsByClassName('friendPhoto');
	for(var i =0; i < pics.length; ++i) {
		// pics[i].src = imgurl;
		$(pics[i]).css('-webkit-filter','blur(5px)');
	}

	// mutual friends on a non-friend
	pics = document.getElementsByClassName('_s0 _54ru img');
	for(var i =0; i < pics.length; ++i) {
		// pics[i].src = imgurl;
		$(pics[i]).css('-webkit-filter','blur(5px)');
	}

	// your photos on profile

	pics = document.getElementsByClassName('scaledImageFitWidth');
	for(var i =0; i < pics.length; ++i) {
		// pics[i].src = imgurl;
		$(pics[i]).css('-webkit-filter','blur(5px)');
	}

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
				// pics[j].src = imgurl;
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
				// pics[j].src = imgurl;
				$(pics[j]).css('-webkit-filter','blur(5px)');
			}
		}
	}

	// group faces on top of current ppl
	imgContainer = document.getElementsByClassName('groupHugFace groupHugFaceHover')
		if(imgContainer) {
		for(var i = 0; i < imgContainer.length; ++i) {
			pics = imgContainer[i].getElementsByTagName('img');
			for(var j =0; j < pics.length; ++j) {
				// pics[j].src = imgurl;
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
	hideCommentors();
	hideOP();
	hideWithSomebody();
	hideLinkedGroup();
	hideBirthdayPeeps();
	hideGroups();
	hidePictures();
	hideName();
	hideRecommendedPagesPeople();
}

// document.addEventListener("DOMNodeInserted", function(evt) {
//     hideEverything();
// }, false);


$(document).ready(function(){
	document.title = "Some Facebook Page";
	hideEverything();


	// document.addEventListener("DOMNodeInserted", function(evt) {
 //    	hideEverything();
	// }, false);
});
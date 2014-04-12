function hideCommentors() {
	var ppl = document.getElementsByClassName('UFICommentActorName');
	for(var i = 0; i < ppl.length; ++i) {
		ppl[i].innerHTML = "Some Person";
	}
}

function hideOP() {
	var op = document.getElementsByClassName('fwb');
	for(var i = 0; i < op.length; ++i) {
		op[i].childNodes[0].innerHTML = "Original Poster";
	}
}

function hideWithSomebody() {
	var withsomebody = document.getElementsByClassName('profileLink');
	for(var i = 0; i < withsomebody.length; ++i) {
		withsomebody[i].innerHTML = "Some Person"
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

function hideBirthdayPeeps() {
	var birthdaypeeps = document.getElementsByClassName('fbRemindersTitle');
	for(var i =0; i < birthdaypeeps.length; ++i) {
		birthdaypeeps[i].innerHTML = "Some Person";
	}
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

	document.title = "Some Facebook Page";

	var yourname = document.getElementsByClassName('fbxWelcomeBoxName');
	for(var i =0; i < yourname.length; ++i) {
		yourname[i].innerHTML = "Me";
	}
	yourname = document.getElementsByClassName('headerTinymanName');
	for(var i =0; i < yourname.length; ++i) {
		yourname[i].innerHTML = "Me";
	}

	// names under friends
	var name = document.getElementsByClassName('mas name');
	for(var i =0; i < name.length; ++i) {
		name[i].innerHTML = "Somebody";
	}

	// profile name
	var nameArea = document.getElementById('fbProfileCover');
	if(nameArea) {
		if(nameArea.getElementsByClassName('_8_2') && nameArea.getElementsByClassName('_8_2')[0]) {
			nameArea.getElementsByClassName('_8_2')[0].innerHTML = "Some Person";
		} 
	}

	// name on search field
	nameArea = document.getElementsByClassName('entity _586o');
	if(nameArea && nameArea[0]) {
		nameArea[0].innerHTML = "Some Person";
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

function hidePictures() {
	var imgurl = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/v/t1.0-1/c34.0.113.113/s100x100/600249_1002029915098_1903163647_a.jpg?oh=cdfc7a15a40375a7f793bf8ad6950ae2&oe=53C80D31&__gda__=1406471741_42812bf91f1c8bd85df3e9d31876b04c";
	
	var mypic = document.getElementsByClassName('fbxWelcomeBoxImg');
	if (mypic.length) {
		mypic[0].src = imgurl;	
	}

	var profilepic = document.getElementsByClassName('profilePic');
	if (profilepic.length) {
		profilepic[0].src = imgurl;
	}

	var pics = document.getElementsByClassName('UFIActorImage');
	for(var i =0; i < pics.length; ++i) {
		pics[i].src = imgurl;
	}

	pics = document.getElementsByClassName('_rw img');
	for(var i =0; i < pics.length; ++i) {
		pics[i].src = imgurl;
	}

	pics = document.getElementsByClassName('_s0 _50c7 _54rt img');
	for(var i =0; i < pics.length; ++i) {
		pics[i].src = imgurl;
	}	

	// images of people who like a page that's been linked
	pics = document.getElementsByClassName('_s0 _ry img');
	for(var i =0; i < pics.length; ++i) {
		pics[i].src = imgurl;
	}
	
	// friend pictures
	pics = document.getElementsByClassName('friendPhoto');
	for(var i =0; i < pics.length; ++i) {
		pics[i].src = imgurl;
	}

	// mutual friends on a non-friend
	pics = document.getElementsByClassName('_s0 _54ru img');
	for(var i =0; i < pics.length; ++i) {
		pics[i].src = imgurl;
	}

	// your photos on profile

	pics = document.getElementsByClassName('scaledImageFitWidth');
	for(var i =0; i < pics.length; ++i) {
		pics[i].src = imgurl;
	}

	var imgContainer = document.getElementById('pagelet_timeline_app_collection_report_4');
	if(imgContainer) {
		pics = imgContainer.getElementsByClassName('uiScaledImageContainer');
		for(var i =0; i < pics.length; ++i) {
			pics[i].childNodes[0].src = imgurl;
		}
	}

	// pics in groups someone is in 
	imgContainer = document.getElementsByClassName('listMemberFacepileLargeCollection listMemberFacepile _8o _8t lfloat _ohe');
	if(imgContainer) {
		for(var i = 0; i < imgContainer.length; ++i) {
			pics = imgContainer[i].getElementsByClassName('img');
			for(var j =0; j < pics.length; ++j) {
				pics[j].src = imgurl;
			}
		}
	}
	// pics in suggested groups
	imgContainer = document.getElementsByClassName('listMemberFacepileNormal listMemberFacepile');
	if(imgContainer) {
		for(var i = 0; i < imgContainer.length; ++i) {
			pics = imgContainer[i].getElementsByClassName('img');
			for(var j =0; j < pics.length; ++j) {
				pics[j].src = imgurl;
			}
		}
	}

	// group faces on top of current ppl
	imgContainer = document.getElementsByClassName('groupHugFace groupHugFaceHover')
		if(imgContainer) {
		for(var i = 0; i < imgContainer.length; ++i) {
			pics = imgContainer[i].getElementsByTagName('img');
			for(var j =0; j < pics.length; ++j) {
				pics[j].src = imgurl;
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

document.addEventListener("DOMNodeInserted", function(evt) {
    hideEverything();
}, false);


$(document).ready(function(){
	hideEverything();

	document.addEventListener("DOMNodeInserted", function(evt) {
    	hideEverything();
	}, false);
});
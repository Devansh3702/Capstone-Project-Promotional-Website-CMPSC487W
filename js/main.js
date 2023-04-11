let mobileDiv = document.getElementById("mobile_div");
let webDiv = document.getElementById("web_div");
let phase1Div = document.getElementById("phase1_div");
let phase2Div = document.getElementById("phase2_div");

const mobileSources = [
	"img/Mobile/AppStoreListing.jpg",
	"img/Mobile/LoginPage.jpg",
	"img/Mobile/HomePage.jpg",
	"img/Mobile/MyProfile.jpg",
	"img/Mobile/TakeSurvey.jpg",
	"img/Mobile/CompletedSurvey.jpg",
	"img/Mobile/RiskCalc.jpg",
	"img/Mobile/GeneralInfo.jpg",
];

const webSources = [
	"img/Web/1WelcomePage.jpg",
	"img/Web/2SignUpPage.jpg",
	"img/Web/3HomePage.jpg",
	"img/Web/4SeeListings.jpg",
	"img/Web/5ListingPage.jpg",
	"img/Web/6AfterBidPlaced.jpg",
	"img/Web/7AuctionWon.jpg",
];

const phase1Sources = [
	"img/Deliverables/Phase1/1.png",
	"img/Deliverables/Phase1/2.png",
	"img/Deliverables/Phase1/3.png",
	"img/Deliverables/Phase1/4.png",
	"img/Deliverables/Phase1/5.png",
	"img/Deliverables/Phase1/6.png",
	"img/Deliverables/Phase1/7.png",
	"img/Deliverables/Phase1/8.png",
];

const phase2Sources = [
	"img/Deliverables/Phase2/1.png",
	"img/Deliverables/Phase2/2.png"
];



function updateUI() {
    clearAll();
    addAll();
}

function clearAll() {
	clear(mobileDiv);
	clear(webDiv);
}

function clear(div) {
	while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function addAll() {
	add(mobileDiv, mobileSources, false);
	add(webDiv, webSources, true);
	add(phase1Div, phase1Sources, true);
	add(phase2Div, phase2Sources, true);
}

function add(div, sources, isFull) {
	if (isFull) {
	    for (let i = 0; i < sources.length; ++i) {
	        let image = createFullImage(sources[i]);
	        div.appendChild(image);
    	}
	} else {
	    for (let i = 0; i < sources.length; ++i) {
	        let image = createMobileImage(sources[i]);
	        div.appendChild(image);
	    }
	}
}

function createMobileImage(source) {
	let image = document.createElement("img");
	image.src = source;
	image.style.width = "20%";
	image.style.height = "auto";
	image.style.padding = "10px";
	return image;
}

function createFullImage(source) {
	let image = document.createElement("img");
	image.src = source;
	image.style.width = "50%";
	image.style.height = "auto";
	image.style.padding = "10px";
	return image;
}

updateUI();
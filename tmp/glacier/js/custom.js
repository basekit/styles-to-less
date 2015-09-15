// SETTINGS for GLACIAL Under Construction Template
// Available on Themeforest: http://themeforest.net/item/glacial-responsive-under-construction-template/7485528
// By CosmicLabs


// To setup, change the variables below
// Follow instructions in comments, see documentation for more detail


// ==== SLIDESHOW BACKGROUND ====
// Set URLs to background images inside the array
// Each image must be on its own line, inbetween speech marks (" ") and with a comma at the end of the line
// Add / remove images by changing the number of lines below
// Variable slideshowFade = transition speed for fade animation, in milliseconds
// Variable slideshowDuration = time each slide is shown for, in milliseconds

var slideshowBackgroundURLS = [
	"images/background1.jpg",
	"images/background2.jpg",
	"images/background3.jpg",
	"images/background4.jpg",
];

var slideshowFade = 1000;
var slideshowDuration = 4000;

		
// ==== VIDEO BACKGROUND ====
// Enable Video Background - 'on' to enable, 'off' to disable
// Cannot work on mobile devices due to device restrictions, instead shows slideshow
// If disabled slideshow is shown
// Paste YouTube URL into the videoBackgronudURL variable - use YouTube link NOT embed code
// Set videoMuted to 'true' and background videos will be muted with no toggle mute button visible
// Set videoMuted to 'false' and videos will not be muted, and the toggle mute button will be visible on the site so users can turn off audio if they want

var videoBackground = 'off';
var videoBackgroundURL = 'PASTE-YOUTUBE-URL-HERE';
var videoMuted = true;


// ==== COUNTDOWN ====
// Set up the date and time that will be counted down to
// Enter date in the format (24 hr clock): DD Month YYYY HH:MM:SS for example: 01 January 2015 23:04:00

var countdownDate = "01 January 2015 00:00:00";
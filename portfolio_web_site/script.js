// search spacific site rather than the entire web
// replace sample site with mine in the search field
function search() {
    var site = "http://phillipsnellportfolio.com";
    // get the text the user typed into the textbox
    var lookfor = document.getElementById("txtlookfor").value;
    // if the box wasn'tempty do the search
    if (lookfor.length > 0) {
        // look at the dropdown value and make search URL accordingly
        var ddchoice = document.getElementById("dropdown").value;
        // build URL for the search
        if (ddchoice == 1) {
            var query = "http://www.bing.com/search?q=" + encodeURIComponent(lookfor) + " site:" + site;
        } else if (ddchoice == 2) {
            var query = "http://www.google.com/search?q=" + encodeURIComponent(lookfor) + " site:" + site;
        } else {
            var query = "http://www.yahoo.com/search?p=" + encodeURIComponent(lookfor) + " site:" + site;
        }
        // set address bar equal to query
        location.href = query;
    } else {
        // if textbox was empty show an alert
        alert("Please type the word or words for which you want to search.");
    }
}



if (window.HTMLAudioElement) {
    var player = document.createElement('audio');
    if (player.canPlayType('audio/mpeg').length > 0) {
        player.setAttribute('src', 'audio/whatyousee2.mp3');
    }
    player.setAttribute('loop', true);
}
function stopgo(btn) {
    if (btn.value == "Pause") {
        player.pause()
        btn.value = "Play"
    } else {
        player.play()
        btn.value = "Pause"
    }
}
function volume(amt) {
    player.volume = amt
}

// thumbnail elements.


var maximages = 6;
var startpath = "pix/flower"
var extension = ".png"

function calcslide(x) {
    var currentimage = document.getElementById("bigpic").src;
    var dotat = currentimage.indexOf(extension);
    var stringnumber = currentimage.substr(dotat - 2, 2);
    var nextnum = parseInt(stringnumber) + x;
    if (nextnum < 1) {
        nextnum = maximages
    }
    if (nextnum > maximages) {
        nextnum = 1;
    }
    var twodigitnum = ("0" + nextnum).slice(-2);
    var showing = startpath + twodigitnum + extension;
    show(showing);
}


function show(pictures) {
    document.getElementById("bigpic").src = pictures;
}

// slide show code

var subscript = 0;
var pictime = 5;
// var stimer
// var isrunning

var images = new Array()
images[0] = "pix/watercolors.jpg";
images[1] = "pix/avitarsheila.jpg";
images[2] = "pix/birdonshoulder.jpg";
images[3] = "pix/birdonshoulder2.jpg";
images[4] = "pix/buggy1.jpg";
images[5] = "pix/frenchkissin.jpg";
images[6] = "pix/holdingbird.jpg";
images[7] = "pix/buggy2.jpg";
images[8] = "pix/holdingbird2.jpg";
images[9] = "pix/kissing.jpg";
images[10] = "pix/buggy3.jpg";
images[11] = "pix/holdingbird3.jpg";
images[12] = "pix/buggy4.jpg";
images[13] = "pix/buggy5.jpg";
images[14] = "pix/kissingbar.jpg";
images[15] = "pix/mybeautifulwife.jpg";
images[16] = "pix/onlapblackwhite.jpg";
images[17] = "pix/partridge1.jpg";
images[18] = "pix/partridge2.jpg";
images[19] = "pix/philonknee.jpg";
images[20] = "pix/philspelican.jpg";
images[21] = "pix/sheilabuffet.jpg";
images[22] = "pix/sheilaindressonbeach.jpg";
images[23] = "pix/sheilaonbeach.jpg";
images[24] = "pix/sheilaonlap.jpg";
images[25] = "pix/sheilaonlap2.jpg";
images[26] = "pix/sheilaphil.jpg";
images[27] = "pix/sheilaphil2.jpg";
images[28] = "pix/sheilaposing.jpg";
images[29] = "pix/sheilarelaxin.jpg";
images[30] = "pix/sheilashell.jpg";
images[31] = "pix/sheilaswimsuitpose.jpg";
images[32] = "pix/sheilaswimsuitpose2.jpg";
images[33] = "pix/sheilaswimsuitpose3.jpg";
images[34] = "pix/sheilatakingbreak1.jpg";
images[35] = "pix/sheilatakingbreak2.jpg";
images[36] = "pix/sunset1.jpg";
images[37] = "pix/sunset2.jpg";
images[38] = "pix/sunset3.jpg";
images[39] = "pix/sunset4.jpg";
images[40] = "pix/sunset5.jpg";
images[41] = "pix/tribe1.jpg";
images[42] = "pix/tribe2.jpg";
images[43] = "pix/tribe3.jpg";
images[44] = "pix/tribe4.jpg";


function nextimg() {
    var imgtag = document.getElementById("slideimg");
    imgtag.className = "fadeout";
    setTimeout("newimg()", 250);
}

function newimg(){
    subscript = (subscript == images.length - 1) ? 0 : subscript + 1;
    var imagefile = images[subscript];
    var imgtag = document.getElementById("slideimg");
    imgtag.src = imagefile;
    imgtag.className = "fadein";
}

window.onload = function () {
    var stimer = setInterval("nextimg()", pictime * 1000);
    // isrunning = true;
}

// start or stop show via state
// function startstop() {
//     // get id of button to change text
//     var btn = document.getElementById("btnStopGo");
//     // if show is running
//     if (isrunning) {
//         // stop timer
//         clearInterval(stimer);
//         // set isrunning false
//         isrunning = false;
//         // change text to start
//         btn.value = "Start"
//     } else {
//         // else show isnt running next img
//         nextimg()
//         // reset timer
//         stimer = setInterval("nextimg()", pictime * 1000);
//         // set run to true
//         isrunning = true;
//         // change button to stop
//         btn.value = "Stop";
//     }
// }






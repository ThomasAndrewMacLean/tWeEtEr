const MAX_NUMBER = 280;
const GREY = 'rgb(204, 214, 221)';
const ACTIVE = '#55acee'


const form = document.querySelector("form");
const tweetTextArea = document.getElementById("tweet")
const counter = document.querySelector(".counter");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const text = tweetTextArea.value
    let scrambledText = "";
    for (let i = 0; i < text.length; i++) {
        if (i % 2 !== 0) scrambledText += text[i].toUpperCase();
        else scrambledText += text[i].toLowerCase();
    }
    const twitterUrl = `https://twitter.com/intent/tweet?url=""&text=${scrambledText}`;
    window.open(twitterUrl, "twitterwindow",
        "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
});

tweetTextArea.setAttribute("maxlength", MAX_NUMBER)
tweetTextArea.addEventListener("keyup", (e) => {
    const lengthTweet = tweetTextArea.value.length
    const percentageTweet = (lengthTweet/MAX_NUMBER * 100)
    //console.log(percentageTweet, (percentageTweet * 2 * 180 / 100))

    if(percentageTweet<=50){
        counter.style
        .setProperty('--rotate-left', '0deg');
        counter.style
        .setProperty('--colour-left', GREY);
        counter.style
        .setProperty('--rotate-right', (percentageTweet * 2 * 180 / 100) +'deg');
    }
    else{
    counter.style
        .setProperty('--rotate-right', '180deg');
        counter.style
        .setProperty('--rotate-left', (percentageTweet * 2 * 180 / 100) +'deg');
        counter.style
        .setProperty('--colour-left', ACTIVE);
    }

})

/*
 *0-50%  
 * left stays at 0°
 * highter zindex and grey colour
 * right goes from 0 - 180°
 * 
 * 51-100%
 * right stays at 180°
 * left goes from 180-360°
 * left gets active colour
 */


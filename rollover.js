"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;
        // preload rollover image

        //set time rollover images to be displayed one second 
        let timer = null
        const goToRoll = () =>
            image.src = newURL
        timer = setTimeout(goToRoll, 1000);
        //set timer the original images to be displayed again two seconds
        const goOriginal = () =>
            image.src = oldURL
        timer = setTimeout(goOriginal, 2000);

        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });
    }
});
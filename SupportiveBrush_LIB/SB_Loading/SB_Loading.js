/**
 * SB_Loading Javascript document.
 * Last Modified: April 27, 2019
 */

/**
 * Required
 */
"use strict";

/**
 * Variables
 * @var {Function} loadingDone
 */
let SB_LoadingDone;

/* ============================================================= */

/**
 * @name document.ready
 * @summary Initiates the Loading elements.
 * 
 * @description;
 * -    Set variables.
 * -    Fade in text.
 * -    Update loading time.
 * -    Animate the slides.
 * -    End process once called by user.
 */
$(document).ready(function () {

    // Set variables
    let $loading = $('.sb-loading');
    let $loadingText = $('.sb-loading-text');
    let $loadingTime = $('.sb-loading-time');
    let $loadingSlide1 = $('.sb-loading-slide-1');
    let $loadingSlide2 = $('.sb-loading-slide-2');
    let $loadingSlide3 = $('.sb-loading-slide-3');
    let $loadingSlide4 = $('.sb-loading-slide-4');
    let animateSlides = function(position) {
        $loadingSlide1.css('clip-path', `polygon(${position + 25}% 0%, ${position + 40}% 0%, ${position + 25}% 100%, ${position + 10}% 100%)`);
    setTimeout(function () {
        $loadingSlide2.css('clip-path', `polygon(${position + 25}% 0%, ${position + 40}% 0%, ${position + 25}% 100%, ${position + 10}% 100%)`);
    }, 100);
    setTimeout(function () {
        $loadingSlide3.css('clip-path', `polygon(${position + 25}% 0%, ${position + 40}% 0%, ${position + 25}% 100%, ${position + 10}% 100%)`);
    }, 200);
    setTimeout(function () {
        $loadingSlide4.css('clip-path', `polygon(${position + 25}% 0%, ${position + 40}% 0%, ${position + 25}% 100%, ${position + 10}% 100%)`);
    }, 300);
    }

    // Fade in text
    $loadingText.removeClass('sb-loading-text-hidden');

    // Update time
    let time = 0;
    let speed = 0.05;
    let interval1 = setInterval(function () {
        if (Math.random() > (1 - speed)) {
            (time < 99) ? time++ : null;
            (time < 10) ? $loadingTime.text('0' + time): $loadingTime.text(time);
        }
    }, 10);

    // Animate slides
    let interval2 = setInterval(function () {
        animateSlides(map(Math.random() * 100, 0, 100, -10, 60));
    }, 2000);

    // Once page is fully loaded, to be call externally
    SB_LoadingDone = function() {
        speed = 0.6;
        let interval3 = setInterval(function () {
            animateSlides(map(time, 0, 99, -40, 90));
            if (time === 99) {
                $loading.addClass('sb-loading-hidden');
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
            }
        }, 10);
    }

});

/* ============================================================= */

/**
 * @name map
 * @summary Maps a value between a min and a max.
 * 
 * @param {Number} value - The original value
 * @param {Number} valueMin - The minimum input value
 * @param {Number} valueMax - The maximum input value
 * @param {Number} outputMin - The minimum output value
 * @param {Number} outputMax - The maximum output value
 * 
 * @description;
 * -    Return the mapped value.
 */
function map(value, valueMin, valueMax, outputMin, outputMax) {
    let newValue = (value - valueMin) * (outputMax - outputMin) / (valueMax - valueMin) + outputMin;
    (newValue > outputMax) ? newValue = outputMax: newValue = newValue;
    (newValue < outputMin) ? newValue = outputMin: newValue = newValue;
    return newValue;
};

/* ============================================================= */
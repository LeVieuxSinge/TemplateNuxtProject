/**
 * Welcome Component Javascript document.
 * Last Modified: January 27, 2020
 */

/**
 * Required
 */
"use strict";

/* ============================================================= */

class WLC {
    constructor(WLC_JQUERY, Slide_Time, Callback) {
        if (WLC_JQUERY.length) {
            this.$wlc = WLC_JQUERY; // Robe
            this.$wlc_Border = WLC_JQUERY.find('.wlc-border'); // Border
            this.$wlc_Slides = WLC_JQUERY.find('.wlc-slide'); // Slides
            this.$wlc_Slide_Visible = $('<div>', {
                'class': 'wlc-slide-visible'
            }); // Slide Visible
            this.$wlc_Skip = WLC_JQUERY.find('.wlc-skip'); // Skip Button
            this.slide_time = Slide_Time | 6000; // Slide Display Time
            this.callback = Callback | null; // Callback Function
            this.init(); // Init Welcome
        }
    }

    init() {
        const WLC_INSTANCE = this;
        this.start();
        this.$wlc_Skip.on('click', function () {
            WLC_INSTANCE.stop();
        })
    }

    start() {
        const WLC_INSTANCE = this;

        // Border Visible
        this.$wlc_Border.css('height', '100%');

        // Create HTML
        this.$wlc_Border.append(this.$wlc_Slide_Visible);

        // Animate Slides
        for (let i = 0; i < WLC_INSTANCE.$wlc_Slides.length; i++) {
            const e = WLC_INSTANCE.$wlc_Slides[i];
            setTimeout(function () {
                $(WLC_INSTANCE.$wlc_Slide_Visible).text($(WLC_INSTANCE.$wlc_Slides[i]).text());
                $(WLC_INSTANCE.$wlc_Border).css('height', $(WLC_INSTANCE.$wlc_Slide_Visible).outerHeight(true));
                $(WLC_INSTANCE.$wlc_Slide_Visible).toggleClass('wlc-slide-visible-active');
                setTimeout(function () {
                    $(WLC_INSTANCE.$wlc_Slide_Visible).toggleClass('wlc-slide-visible-active');
                }, WLC_INSTANCE.slide_time);
            }, (WLC_INSTANCE.slide_time + 1000) * i);

            // Last Slide
            if (i + 1 === WLC_INSTANCE.$wlc_Slides.length) {
                setTimeout(function () {
                    // Hide Border
                    $(WLC_INSTANCE.$wlc_Border).css('height', '0');
                    setTimeout(function () {
                        WLC_INSTANCE.stop();
                    }, 1000);
                }, (WLC_INSTANCE.slide_time + 1000) * (i + 1));
            }
        }

    }

    stop() {
        const WLC_INSTANCE = this;

        // WLC Visible
        this.$wlc.animate({
            opacity: 0,
        }, 500, function () {
            $(WLC_INSTANCE.$wlc).css('display', 'none');
            // Callback Function
            if (typeof WLC_INSTANCE.callback === 'function') WLC_INSTANCE.callback();
        });
    }
}

$(document).ready(function () {

    let wlc = new WLC($('.wlc'), 6000);

});

module.exports = {
    WLC: WLC,
};
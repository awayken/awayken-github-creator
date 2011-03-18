/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global $: false, window: false */

(function () {
	"use strict";
	
	window.A = {
		init: function () {
			this.timer('#time', $('meta[http-equiv="refresh"]').attr('content').split(';')[0]);
		},
		
	// The countdown timer
		timer: function (sel, time) {
			this.timerLoop($(sel), parseInt(time, 10) - 1);
		},
		timerTimer: 0,
		timerLoop: function (el, number) {
			var that = this;
			this.timerTimer = setTimeout(function () {
				if (number === Math.abs(number)) {
					el.text(number);
					that.timerLoop(el, number - 1);
				}
			}, 1000);
		}
	};
	
	$(document).ready(function () {
		window.A.init();
	});
}());

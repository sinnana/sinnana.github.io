/* http://keith-wood.name/countdown.html
   Korean initialisation for the jQuery countdown extension
   Written by Ryan Yu (ryanyu79@gmail.com). */
(function($) {
	'use strict';
	$.countdown.regionalOptions.ko = {
		labels: ["Years","Months","Weeks","DAYS","HOUR","MIN","SEC"],
		labels1: ["Years","Months","Weeks","DAYS","HOUR","MIN","SEC"],
		compactLabels: ["Years","Months","Weeks","Days"],
		compactLabels1: ["Years","Months","Weeks","Days"],
		whichLabels: null,
		digits: ['0','1','2','3','4','5','6','7','8','9'],
		timeSeparator: ':',
		isRTL: false
	};
	$.countdown.setDefaults($.countdown.regionalOptions.ko);
})(jQuery);

(function($) {
	module("datepicker: options");
	
	test('setAttributes', function() {
		var dayNamesMin = $('#inp').datepicker("option", "dayNamesMin");
		equals(dayNamesMin.join(','), ['S','M','T','W','T','F','S'].join(','), 'Array property');

		var autoSize = $('#inp').datepicker("option", "autoSize");
		equals(autoSize, true, 'Boolean property');

		var buttonText = $('#inp').datepicker("option", "buttonText");
		equals(buttonText, 'Choose', 'String property');

		var stepMonths = $('#inp').datepicker("option", "stepMonths");
		equals(stepMonths, 2, 'Number property');
		
	});
})(jQuery);
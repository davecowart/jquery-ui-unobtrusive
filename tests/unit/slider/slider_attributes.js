(function($) {
	module("slider: options");
	
	test('setAttributes', function() {
		var values = $('#slider').slider("option", "values");
		equals(values.join(','), ['25','50','75'].join(','), 'Array property');

		var disabled = $('#slider').slider("option", "disabled");
		equals(disabled, true, 'Boolean property');

		var step = $('#slider').slider("option", "step");
		equals(step, 25, 'Number property');

		var orientation = $('#slider').slider("option", "orientation");
		equals(orientation, 'vertical', 'String property');
		
	});
})(jQuery);
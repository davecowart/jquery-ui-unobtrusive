(function($) {
	module("progressbar: options");
	
	test('setAttributes', function() {
		var disabled = $('#progressbar').progressbar("option", "disabled");
		equals(disabled, true, 'Boolean property');

		var value = $('#progressbar').progressbar("option", "value");
		equals(value, 25, 'Number property');
	});
})(jQuery);
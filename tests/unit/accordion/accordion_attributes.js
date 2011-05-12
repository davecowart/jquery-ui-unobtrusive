(function($) {
	module("accordion: options");

	test('setAttributes', function() {
		var disabled = $('#accordion').accordion("option", "disabled");
		equals(disabled, true, 'Boolean property');

		var event = $('#accordion').accordion("option", "event");
		equals(event, 'hover', 'String property');
	});

})(jQuery);
(function($) {
	module("button: options");
	
	test('setAttributes', function() {
		var text = $('#button').button("option", "text");
		equals(text, false, 'Boolean property');

		var disabled = $('#button').button("option", "disabled");
		equals(disabled, true, 'Boolean property');

		var label = $('#button').button("option", "label");
		equals(label, 'Click Here', 'String property');
	});
})(jQuery);
(function($) {
	module("dialog: options");

	test('setAttributes', function() {
		var autoOpen = $('#dialog').dialog("option", "autoOpen");
		equals(autoOpen, true, 'Boolean property');

		var closeText = $('#dialog').dialog("option", "closeText");
		equals(closeText, 'Close', 'String property');

		var minHeight = $('#dialog').dialog("option", "minHeight");
		equals(minHeight, 200, 'Number property');
		
		var buttons = $('#dialog').dialog("option", "buttons");
		equals(buttons.join(','), ['Abort','Retry','Ignore'].join(','), 'Array property');
	});
})(jQuery);
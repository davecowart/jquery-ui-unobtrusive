(function($) {
	module("tabs: options");

	test('setAttributes', function() {
		var disabled = $('#tabs').tabs("option", "disabled");
		equals(disabled.join(','), ['0','2'].join(','), 'Array property');

		var cache = $('#tabs').tabs("option", "cache");
		equals(cache, true, 'Boolean property');

		var selected = $('#tabs').tabs("option", "selected");
		equals(selected, 1, 'Number property');

		var event = $('#tabs').tabs("option", "event");
		equals(event, 'hover', 'String property');
		
	});
})(jQuery);
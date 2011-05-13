(function($) {
	module("autocomplete: options");

	test('setAttributes', function() {
		var source = $('#autocomplete').autocomplete("option", "source");
		equals(source.join(','), ['ActionScript','AppleScript','Asp','BASIC','C','C++','Clojure','COBOL','ColdFusion','Erlang','Fortran','Groovy','Haskell','Java','JavaScript','Lisp','Perl','PHP','Python','Ruby','Scala','Scheme'].join(','), 'Array property');

		var autoFocus = $('#autocomplete').autocomplete("option", "autoFocus");
		equals(autoFocus, true, 'Boolean property');

		var appendTo = $('#autocomplete').autocomplete("option", "appendTo");
		equals(appendTo, '#destination', 'String property');

		var minLength = $('#autocomplete').autocomplete("option", "minLength");
		equals(minLength, 2, 'Number property');
		
	});
})(jQuery);
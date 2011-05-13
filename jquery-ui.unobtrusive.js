//TODO: figure out how to implement options of types Options and Function
//possibly use http://www.bennadel.com/blog/1780-Using-Javascript-s-Function-Constructor-To-Deserialize-JSON-Data.htm

(function ($) {
	var $jQui;
	var prefix = 'data-ui-';

	function parseBool(input) {
		switch (input.toLowerCase()) {
			case 'true':
				return true;
			case 'false':
				return false;
			default:
				return undefined;
		}
	}

	function parseAttribute(attribute, parser) {
		if (parser === undefined) {
			var output = parseBool(attribute);
			if (output === undefined) {
				return attribute; //is probably a string
			} else {
				return output; //was a boolean string
			}
		}
		return parser(attribute); //use the specified parser
	}

	function parseNumber(input) {
		var output = parseInt(input, 10);
		if (!isNaN(output)) { return output; }
		return parseFloat(input);
	}

	function parseArray(input) {
		return input.split(',');
	}

	function parseAttributes(element, namespace, attributes, options, parser) {
		var i = 0;
		for (i = 0; i < attributes.length; i++) {
			var attributeName = prefix + namespace + '-' + attributes[i];
			if (element.attr(attributeName)) {
				options[attributes[i]] = parseAttribute(element.attr(attributeName), parser);
			}
		}
	}

	$jQui = {

		parseAccordion: function () {
			var namespace = 'accordion';
			$('[' + prefix + namespace + ']').each(function () {
				var $this = $(this);
				var options = {};

				var properties = ['animated', 'event', 'header'];
				parseAttributes($this, namespace, properties, options);

				var booleanProperties = ['disabled', 'autoHeight', 'clearStyle', 'collapsible', 'fillSpace', 'navigation'];
				parseAttributes($this, namespace, booleanProperties, options, parseBool);

				$this.accordion(options);
			});
		},

		parseAutocomplete: function () {
			var namespace = 'autocomplete';
			$('[' + prefix + namespace + ']').each(function () {
				var $this = $(this);
				var options = {};

				var properties = ['appendTo'];
				parseAttributes($this, namespace, properties, options);

				var booleanProperties = ['disabled', 'autoFocus'];
				parseAttributes($this, namespace, booleanProperties, options, parseBool);

				var numberProperties = ['delay', 'minLength'];
				parseAttributes($this, namespace, numberProperties, options, parseNumber);

				var source = $this.attr(prefix + namespace + '-source');
				var sourceArray = source.split(",");
				if (sourceArray.length > 1) {
					options.source = sourceArray;
				} else {
					options.source = source;
				} //not worrying about parsing callbacks

				$this.autocomplete(options);
			});
		},

		parseButton: function () {
			var namespace = 'button';
			$('[' + prefix + namespace + ']').each(function () {
				var $this = $(this);
				var options = {};

				var booleanProperties = ['disabled', 'text'];
				parseAttributes($this, namespace, booleanProperties, options, parseBool);

				var properties = ['label'];
				parseAttributes($this, namespace, properties, options);

				$this.button(options);
			});
		},

		parseDatepicker: function () {
			var namespace = 'datepicker';
			$('input[' + prefix + namespace + ']').each(function () {
				var $this = $(this);
				var options = {};

				var properties = ['altField', 'altFormat', 'appendText', 'buttonImage', 'buttonText', 'calculateWeek', 'closeText', 'constrainInput', 'currentText', 'dateFormat', 'defaultDate', 'duration', 'maxDate', 'minDate', 'nextText', 'prevText', 'shortYearCutoff', 'showAdmin', 'showOn', 'weekHeader', 'yearRange', 'yearSuffix'];
				parseAttributes($this, namespace, properties, options);

				var arrayProperties = ['dayNames', 'dayNamesMin', 'dayNamesShort', 'monthNames', 'monthNamesShort'];
				parseAttributes($this, namespace, arrayProperties, options, parseArray);

				var numberProperties = ['firstDay', 'numberOfMonths', 'showCurrentAtPos', 'stepMonths'];
				parseAttributes($this, namespace, numberProperties, options, parseNumber);

				var booleanProperties = ['disabled', 'autoSize', 'buttonImageOnly', 'changeMonth', 'changeYear', 'gotoCurrent', 'hideIfNoPrevNext', 'isRTL', 'navigationAsDateFormat', 'selectOtherMonths', 'showButtonPanel', 'showMonthAftrYear', 'showOtherMonths', 'showWeek'];
				parseAttributes($this, namespace, booleanProperties, options, parseBool);

				$this.datepicker(options);
			});
		},

		parseDialog: function () {
			var namespace = 'dialog';
			$('[' + prefix + namespace + ']').each(function () {
				var $this = $(this);
				var options = {};

				var properties = ['closeText', 'dialogClass', 'hide', 'title'];
				parseAttributes($this, namespace, properties, options);

				var arrayProperties = ['buttons'];
				parseAttributes($this, namespace, arrayProperties, options, parseArray);

				var position = $this.attr(prefix + namespace + '-position');
					if (position !== undefined) {
					var positionArray = position.split(",");
					if (positionArray.length > 1) {
						options.position = positionArray;
					} else {
						options.position = position;
					}
				}

				var numberProperties = ['height', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'width', 'zIndex'];
				parseAttributes($this, namespace, numberProperties, options, parseNumber);

				var booleanProperties = ['disabled', 'autoOpen', 'closeOnEscape', 'draggable', 'modal', 'resizable', 'stack'];
				parseAttributes($this, namespace, booleanProperties, options, parseBool);

				$this.dialog(options);
			});
		},

		parseProgressbar: function () {
			var namespace = 'progressbar';
			$('[' + prefix + namespace + ']').each(function () {
				var $this = $(this);
				var options = {};

				var booleanProperties = ['disabled'];
				parseAttributes($this, namespace, booleanProperties, options, parseBool);

				var numberProperties = ['value'];
				parseAttributes($this, namespace, numberProperties, options, parseNumber);

				$this.progressbar(options);
			});
		},

		parseSlider: function () {
			var namespace = 'slider';
			$('[' + prefix + namespace + ']').each(function () {
				var $this = $(this);
				var options = {};

				var properties = ['animate', 'orientation', 'range'];
				parseAttributes($this, namespace, properties, options);

				var booleanProperties = ['disabled'];
				parseAttributes($this, namespace, booleanProperties, options, parseBool);

				var numberProperties = ['max', 'min', 'step', 'value'];
				parseAttributes($this, namespace, numberProperties, options, parseNumber);

				var arrayProperties = ['values'];
				parseAttributes($this, namespace, arrayProperties, options, parseArray);

				$this.slider(options);
			});
		},

		parseTabs: function () {
			var namespace = 'tabs';
			$('[' + prefix + namespace + ']').each(function () {
				var $this = $(this);
				var options = {};

				var properties = ['event', 'idPrefix', 'panelTemplate', 'spinner', 'tabTemplate'];
				parseAttributes($this, namespace, properties, options);

				var booleanProperties = ['cache', 'collapsible', 'deselectable']; //'disabled', 
				parseAttributes($this, namespace, booleanProperties, options, parseBool);

				var numberProperties = ['selected'];
				parseAttributes($this, namespace, numberProperties, options, parseNumber);

				// possibly problematic due to being the same name as the boolean property
				// var arrayproperties = ['disabled'];
				// parseattributes($this, namespace, arrayproperties, options, parseArray);

				var disabled = $this.attr(prefix + namespace + '-disabled');
				var bDisabled = parseBool(disabled);
				if (bDisabled === undefined) {
					var arrayproperties = ['disabled'];
					parseAttributes($this, namespace, arrayproperties, options, parseArray);
				} else {
					options.disabled = bDisabled
				}

				$this.tabs(options);
			});
		},

		parse: function () {
			$jQui.parseAccordion();
			$jQui.parseAutocomplete();
			$jQui.parseButton();
			$jQui.parseDatepicker();
			$jQui.parseDialog();
			$jQui.parseProgressbar();
			$jQui.parseSlider();
			$jQui.parseTabs();
		}
	};

	$(function () {
		$jQui.parse();
	});
} (jQuery));
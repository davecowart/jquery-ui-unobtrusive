# Unobtrusive jQuery UI
Unobtrusive jQuery UI allows you to use attributes on your HTML elements to activate and configure jQuery UI widgets.

To add a widget to an element, just add an attribute in the following format: data-ui-[widgetname]. For example, to add the Datepicker widget to a text field, do it like this:

	<input data-ui-datepicker />

To pass values that would typically be passed in an options object, use attributes in the following format: data-ui-[widgetname]-[propertyname]. For example, to add a Datepicker widget to a text field and set the dayNamesMin (array), autoSize (boolean), buttonText (string) and stepMonths (number) properties, do it like this:

	<input data-ui-datepicker 
		data-ui-datepicker-dayNamesMin="S,M,T,W,T,F,S" 
		data-ui-datepicker-autoSize="true" 
		data-ui-datepicker-buttonText=" 
		data-ui-datepicker-stepMonths="2" />

Passing function and option objects in attributes is not yet supported. There are also still plenty of unhandled edge cases.
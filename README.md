#PSD to HTML with Form Validation

This project is a simple PSD to HTML conversion with form validation.

##HTML Validation
HTML5 actually has a lot of form validation you can use.
In this project `type`, `required`, `disabled`, `pattern` and `title` attributes are used. 

### Type
The `type` attribute describes the different input types.
The input type affects the type of keyboard that pops up on mobile.

### Required
The `required` attribute checks if this input is empty or not.

### Disabled
The `disabled` attribute disables the input/button. 

### Pattern and Title
The `pattern` attribute validates the input to a regular expression.
The `title` attribute is used to describe the pattern to help the user. In most browsers, the title attribute is displayed when the user tries to submit the form with the incorrect pattern.  


##JavaScript Validation

Because HTML validation is in place, my custom JavaScript(JS) error messages will not show up.
To actually view JS version of form validation, please remove the `required` attribute in HTML. 
I do realize that  HTML validation doesn't give the best looking error messages but this would be more optimal for accessibility reasons and in case the user disables JS. 

##Other Notes
- Postal codes are being validated with Canadian postal code structure 
- Form values are being logged on the console.

Author: [Julia Kim](http://byjuliakim.com)
mediaQuery
==========

Plug-in for jQuery that adds a class to each selected element equal to the key of any matching media query. 
Also acts as a polyfill for media queries, _matchMedia_ and _addEventListener_ javascript functions.



***Usage:***

```javascript
$(document).ready(function(){
	
	$('body').mediaQuery({
		w320: 'only screen and (min-width: 320px)',
		w480: 'only screen and (min-width: 480px) ',
		w768: 'only screen and (min-width: 768px)',
		w1024: 'only screen and (min-width: 1024px)'
	});
})
```

***Example:***

http://jameswestgate.github.com/mediaQuery/examples/

mediaQuery
==========

Media query plug-in for jQuery. Responsive design made easy. Adds a class to each selected element equal to the key of any matching media query. 


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

If using < IE10 then include the polyfill for matchMedia here:

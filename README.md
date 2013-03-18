mediaQuery
==========

Media query plug-in for jQuery - responsive made easy. If using < IE10 then include the polyfill for matchMedia here:



***Usage:***

```javascript

  //Set up media query classes
  $('body').mediaQuery({queries: {
  	w320: 'only screen and (min-width: 320px)',
  	w480: 'only screen and (min-width: 480px) ',
  	w768: 'only screen and (min-width: 768px)',
  	w1024: 'only screen and (min-width: 1024px)'
  }});
      
```

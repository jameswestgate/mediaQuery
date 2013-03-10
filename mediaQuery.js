  	//Set up media query classes
		if (window.matchMedia) {
			
			var queries = {
				w320: 'only screen and (min-width: 320px)',
				w480: 'only screen and (min-width: 480px) ',
				w768: 'only screen and (min-width: 768px)',
				w1024: 'only screen and (min-width: 1024px)'
			}

			var keys = '';

			for (var key in queries) {

				var mq = window.matchMedia(queries[key]);
				mq.addListener(mediaChange);
				//mediaChange();

				keys += key + ' ';

				(function(key) {
					function mediaChange(mql) {
						console.log('removing ' + keys)
						$('body').removeClass(keys);

						console.log('adding ' + key)
						$('body').addClass(key);
					}
				})(key);
			}
		}

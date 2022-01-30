/**
 * Bespoke conditional wizard/guide setup.
 *
 * @package rt-wizard
 * @author soup-bowl <code@soupbowl.io>
 * @license MIT
 */

let rtw_config = {
	"changer": [
		"rtwiz1",
		"rtwiz2"
	],
	"involves" : [
		"SF1",
		"p2kc",
		"SF2",
		"SF2s",
		"SF3",
		"SFG",
		"SFE"
	],
	"action": {
		"1": "SF1",
		"2": "p2kc",
		"o1": "SF2",
		"o2": "SF2s",
		"3": "SF3",
		"G": "SFG",
		"E": "SFE"
	},
	"selection": {
		"rtwiz1": {
			"name": "Select your Model",
			"options": {
				"0": "Select...",
				"1": "PSP 1000",
				"2": "PSP 2000",
				"3": "PSP 3000",
				"G": "PSP Go!",
				"E": "PSP Street"
			}
		},
		"rtwiz2": {
			"name": "Does your date code end in 8C?",
			"class": "p2kc",
			"options": {
				"o0": "Select...",
				"o1": "Yes",
				"o2": "No"
			}
		}
	}
}

if ( typeof rtw_config !== 'undefined' ) {
	settings = rtw_config;
	rtwizz_changer();
	settings.changer.forEach(
		function(entry) {
			document.getElementById( entry ).addEventListener( "change", rtwizz_changer );
		}
	);
}

function rtwizz_changer() {
	settings = rtw_config;
	settings.involves.forEach(
		function(entry) {
			document.getElementsByClassName( entry )[0].style.display = 'none';
		}
	);

	settings.changer.forEach(
		function(entry) {
			opt = document.getElementById( entry );
			if ( opt.parentElement.style.display !== 'none' ) {
				visible_part = settings.action[ opt.options[ opt.selectedIndex ].value ];
				visibles     = document.getElementsByClassName( visible_part )[0];
				if ( typeof visibles !== 'undefined' ) {
					visibles.style.display = '';
				}
			}
		}
	);
}

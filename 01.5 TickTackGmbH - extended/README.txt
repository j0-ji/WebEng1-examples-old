This example is an extended version of the first Project.
The focus is on the experimental features based on variables and
some JS-code. It is a quite unoptimized version, but it works
(except a smal bug).

It has a few functionalities, including:

	- THEMES
		- 3 themes available (as editable classes in CSS)
		- can be switched with 1st button in [BETA]-Menu
		- button displays theme-name (small bug with switch from last to first theme)
		- themes are used in sub-page too
		- last used theme gets saved in local storage, so when revisiting the page
		  the last theme gets applied
	- DESIGNS
		- 2 designs available
		- can be switched with 2nd button in [BETA]-Menu
		- button displays design-name
		- designs are used in sub-page too
		- available:
			- round design smotthes out the edges
			- sharp design (default, without border radius)
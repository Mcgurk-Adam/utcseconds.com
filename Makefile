up:
	@tsc -w -p ts &
	@sass --watch scss/style.scss:css/style.css --style compressed &
	@php -S localhost:6000 &

up:
	@tsc -w -p ts &
	@sass --watch scss/styles.scss:css/style.css --style compressed &
	@php -S localhost:6500 &

build:
	./node_modules/.bin/webpack --mode=development

deps:
	npm install

dev:
	python -m SimpleHTTPServer 8080&
	./node_modules/.bin/livereload&
	./node_modules/.bin/webpack --mode=development --watch

.PHONY: deps

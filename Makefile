.PHONY: install build start test clean

install:
	npm install

build:
	npm run build

start:
	npm start

test:
	npm test

clean:
	rm -rf node_modules coverage

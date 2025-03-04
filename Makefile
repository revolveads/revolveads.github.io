.PHONY: run
run:
	npm run dev

.PHONY: build
build:
	npm run build
	echo "revolveads.com" > dist/CNAME

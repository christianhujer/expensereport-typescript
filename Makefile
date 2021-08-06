.PHONY: all
all: test

.PHONY: test
test: ExpenseReport.js
	node $^

%.js: %.ts
	tsc $^

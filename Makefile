.PHONY: check generate-registry-index validate-registry review

check:
	node --check scripts/validate-registry.mjs
	node --check scripts/generate-registry-index.mjs

generate-registry-index:
	node scripts/generate-registry-index.mjs

validate-registry:
	node scripts/validate-registry.mjs

review: check generate-registry-index validate-registry

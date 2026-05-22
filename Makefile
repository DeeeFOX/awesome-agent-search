.PHONY: check validate-registry review

check:
	node --check scripts/validate-registry.mjs

validate-registry:
	node scripts/validate-registry.mjs

review: check validate-registry

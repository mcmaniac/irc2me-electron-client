#
# Targets
#

PAGES = connect main

TESTS = tests

#
# Compiler options
#

SRC_DIR   = src
BUILD_DIR = build

TSC 	  = tsc
TSC_FLAGS = -m commonjs --noImplicitAny --outDir $(BUILD_DIR) --sourceMap

ELECTRON  = electron
#
# Main definition
#

.PHONY: all watch clean run

all: main

main:
	@echo "Building files: $(SOURCES)"
	@$(TSC) $(TSC_FLAGS) $(SOURCES)

watch:
	@echo "Watching files: $(SOURCES)"
	@$(TSC) $(TSC_FLAGS) -w $(SOURCES)

clean:
	@echo "Cleaning up"
	@-rm -r $(BUILD_DIR)

run: main
	@echo "Starting electron..."
	@$(ELECTRON) .

# Build dependencies

SOURCES	= $(SRC_DIR)/main.ts

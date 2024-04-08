import {defineConfig} from 'vitest/config';

const vitestConfig = defineConfig({
    test: {
        coverage: {
            all: false,
            provider: 'istanbul',
            reportsDirectory: ".nyc_output",
            reporter: [
                ["json", { file: "coverage.json" }]
            ],
            clean: false,
        },
        include: ['**/test/unit/**/*.test.*'],
        globals: true,
        watch: false
    }
})

export default vitestConfig;
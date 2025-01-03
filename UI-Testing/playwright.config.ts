import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
    },
    timeout: 30000,
    reporter: 'html'
});
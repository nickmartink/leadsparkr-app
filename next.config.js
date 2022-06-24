const path = require('path');
const Restapify = require('restapify').default;

const apiFolderPath = path.resolve(__dirname, './mock-api');

const rpfy = new Restapify({
    rootDir: apiFolderPath,
    openDashboard: true
});
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        rpfy.on('error', ({ error, message }) => {
            console.log(error + ' ' + message)
        });

        rpfy.run();
    }
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        images: {
            domains: []
        },

        env: {
            API_URL: process.env.API_URL,
        }
    }
    return nextConfig
}

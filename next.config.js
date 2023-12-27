/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config, { isServer }) {
        if (!isServer) {
            config.module.rules.push({
                test: /\.stories\.(tsx|mdx)$/,
                loader: 'ignore-loader',
            });
            config.module.rules.push({
                test: /\/src\/stories\//,
                loader: 'ignore-loader',
            });
        }
        return config;
    },
};

module.exports = nextConfig;

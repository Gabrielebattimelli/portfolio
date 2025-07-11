/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'video.gabrielebattimelli.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    reactStrictMode: false, // Important for React Three Fiber
    webpack: (config, { isServer }) => {
        // Handle GLB files
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/models/',
                    outputPath: 'static/models/',
                    esModule: false,
                },
            },
        });

        return config;
    },
}

module.exports = nextConfig;

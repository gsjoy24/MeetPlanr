/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**'
			}
		]
	},
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
	// Allow builds to complete with static page generation timeouts
	staticPageGenerationTimeout: 60,
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(mp4|webm)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '/_next/static/videos', // Adjust this path as needed
					outputPath: 'static/videos' // Adjust this path as needed
				}
			}
		});

		return config;
	}
};

module.exports = nextConfig;

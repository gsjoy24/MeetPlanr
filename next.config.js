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
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
	// Allow the build to succeed even with prerendering errors
	staticPageGenerationTimeout: 60,
	onDemandEntries: {
		maxInactiveAge: 60 * 1000,
	},
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

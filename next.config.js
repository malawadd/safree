/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
};

module.exports ={
	 nextConfig,
	 env :{
		 NEXT_LENS_PUBLIC_API_URL: process.env.NEXT_LENS_PUBLIC_API_URL,
		 NEXT_PUBLIC_LIVEPEER_TOKEN: process.env.NEXT_PUBLIC_LIVEPEER_TOKEN,
		 NEXT_STEPZEN_API_URL: process.env.NEXT_STEPZEN_API_URL,
		 NEXT_STEPZEN_API_KEY: process.env.NEXT_STEPZEN_API_KEY,
		 NFT_STORAGE_API_KEY: process.env.NFT_STORAGE_API_KEY,

	 },
	}

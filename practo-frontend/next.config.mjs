/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imagesx.practo.com',
                port: '', 
                pathname: '/**', 
            },

            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '', 
                pathname: '/**', 
            },

            {
                protocol: 'https',
                hostname: 'images1-fabric.practo.com',
                port: '', 
                pathname: '/**', 
            },
        ],
    },
};

export default nextConfig;

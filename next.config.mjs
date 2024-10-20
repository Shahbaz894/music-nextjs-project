/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Use 'http' if applicable
        hostname: 'images.unsplash.com', // Hostname of the image source
        port: '', // Leave empty for default
        pathname: '/**', // Accept all paths
      },
    ],
  },
};

export default nextConfig;

  
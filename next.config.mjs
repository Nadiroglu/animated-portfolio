const nextConfig = {
    output: 'export',
    images: {
      remotePatterns: [
        {
          loader: 'custom',
          loaderFile: './loader.js',
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  };
  
  export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "www.daedelow-parkett.de",
      "www.parkettkaiser.de",
      "www.holz-kunz.de",
    ],
  },
};

module.exports = nextConfig;

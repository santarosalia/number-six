/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (isServer) {
          import('./cron.js'); // 서버 사이드에서만 cron.js를 실행합니다.
        }
        return config;
      },
};

export default nextConfig;

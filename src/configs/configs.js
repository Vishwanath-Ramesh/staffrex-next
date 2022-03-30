const isProd = String(process.env.NODE_ENV).toLowerCase() === 'production';

function getServerConfiguration() {
  if (isProd)
    return {
      baseURL: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    };

  return {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  };
}
const serverConfig = getServerConfiguration();

export default serverConfig;


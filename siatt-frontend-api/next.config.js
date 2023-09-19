/** @type {import('next').NextConfig} */
const nextConfig = {}

// Definindo rota inicial sendo a login
module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login', // Rota para a página de login
                permanent: true,
            },
        ];
    },

    async headers() {
        return [
            {
                source: '/favicon.ico',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};




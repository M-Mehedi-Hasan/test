/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fcgp17-1.fna.fbcdn.net',
        port: '',
        pathname: '/v/t39.30808-6/290973701_2585545474910282_6405711557418366482_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHd0QCkRZaJVUOlZV93J-gjP8Vrp_Nyhgw_xWun83KGDMjgj53lvVxhFURlKTpRv9lA3nLXbGoNIwDql3EintVr&_nc_ohc=c4I3Ml-SrW0AX8eypOj&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfAkBsMvFQyex-uU_8zZMpPUeN-WQwAi-RNYJrGbjkJauw&oe=63DA089C',
      },
    ],
  },
}


module.exports = nextConfig

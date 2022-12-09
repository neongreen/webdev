import dynamic from 'next/dynamic'

// @ts-ignore
export const TelegramPost = dynamic(async () => import('react-telegram-embed'), {
  ssr: false,
})

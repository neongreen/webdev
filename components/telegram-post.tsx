import dynamic from 'next/dynamic'

// @ts-ignore
export const TelegramPost = dynamic(() => import('react-telegram-embed'), {
  ssr: false,
})

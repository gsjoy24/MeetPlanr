import { Poppins, Bebas_Neue } from 'next/font/google'
 
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500','600','700']
})
 
export const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})
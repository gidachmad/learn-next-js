'use client'

import { useRouter } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div className='w-3/5 mx-auto'>
      <main>{children}</main>
      <footer className='fixed bottom-0 flex flex-col items-center mx-auto w-3/5 py-4 border-t-2'>
        <p>Learn by watching Web Dev Simplified on <a className='text-blue-300' target='_blank' href="https://youtu.be/NgayZAuTgwM?si=-k0oHhrFiVleUo2j">this YouTube Video</a></p>
        <p>By Regid @ 2/2/2024</p>
      </footer>
    </div>
  )
}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between items-center mt-2'>
        <div className='flex items-center space-x-5'>
            <Image className='w-24' src="/logo_handlabs.png" alt="Logo Handlabs" width={128} height={128}/>
            <h1 className='font-bold text-4xl'>Handlabs</h1>
        </div>
        <nav>
            <ul className='flex space-x-[50px]'>
                <li><Link href={"/"}>Produit</Link></li>
                <li><Link href={"/"}><span className="uppercase">à</span> propos</Link></li>
                <li><Link href={"/"}>Notre équipe</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
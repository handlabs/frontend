import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'


const page = () => {
  return (
    <div className=''>
        
        <header className='flex justify-between items-center bg-white w-full px-[120px] py-4'>
            <div className='flex items-center space-x-5'>
                <div className='p-2 bg-main rounded-lg'>
                    <Image className='w-8' src="/logo_svg.svg" alt="Logo Handlabs" width={128} height={128}/>
                </div>
                <h1 className='font-bold text-2xl text-title'>Handlabs</h1>
            </div>
            <nav>
                <ul className='flex space-x-[50px] text-subtitle'>
                    <li><Link href={"/"}>Produit</Link></li>
                    <li><Link href={"/"}>Fonctionnalités</Link></li>
                    <li><Link href={"/"}><span className="uppercase">é</span>quipe</Link></li>
                    <li><Link href={"/"}>Témoignages</Link></li>
                </ul>
            </nav>
            <div className='font-semibold space-x-10'>
                <Link className='text-title' href={""}>Connexion</Link>
                <Link className='bg-main shadow-[0px_4px_6px_rgba(207,175,110,0.2),0px_10px_15px_rgba(207,175,110,0.2)] text-white py-3 px-6 rounded-lg' href={""}>Démarrer</Link>
            </div>
        </header>

        <section className='my-10'>
            <div className='bg-[#cfaf6e20] text-main font-semibold w-fit py-2 px-5 rounded-full mx-auto'>
                <p>Solution de gestion commerciale nouvelle génération</p>
            </div>
            <h1 className='text-title text-6xl leading-[75px] font-bold text-center'>
                Transformez votre gestion<br />commerciale avec <span className='text-main'>Handlabs</span>
            </h1>
            <p className='text-center text-subtitle text-lg my-5 leading-[30px]'>
                Pilotez votre TPE/PME avec une solution complète : gestion des stocks, Business Intelligence <br />et données centralisées en temps réel.
            </p>
            <div className='flex justify-center text-lg space-x-4 my-10'>
                <Link className='bg-main shadow-[0px_4px_6px_rgba(207,175,110,0.2),0px_10px_15px_rgba(207,175,110,0.2)] text-white font-semibold py-4 px-6 rounded-lg' href={""}>Essai gratuit 14 jours</Link>
                <Link className='bg-white border border-title text-title font-semibold py-4 px-6 rounded-lg' href={""}>Voir la démo</Link>
            </div>
        </section>
        <Image className='w-[90%] mx-auto' src={"/presentation_dashboard.svg"} alt='' width={1920} height={1280}/>


        <section className='px-[125px] my-20'>
            <div className='text-center space-y-6'>
                <h2 className='text-5xl text-title font-bold'>Une solution complète pour <br />votre entreprise</h2>
                <p className='text-subtitle text-lg'>Handlabs centralise tous vos besoins de gestion commerciale dans une interface <br />intuitive et puissante.</p>
            </div>

            <div className='flex space-x-20 my-20'>
                <div className='w-2/4 flex flex-col justify-center'>
                    <div className='bg-bg-main text-title font-semibold w-fit py-1 px-5 rounded-full mb-5'>
                        <p>Gestion Commerciale</p>
                    </div>
                    <div>
                        <h2 className='text-4xl font-bold text-title'>Pilotez votre activité en temps réel</h2>
                        <p className='text-subtitle my-5 text-lg'>Gérez vos ventes, achats, clients et fournisseurs depuis une plateforme unique. Automatisez vos processus et gagnez un temps précieux.</p>
                    </div>
                    <div className='text-lg space-y-3'>
                        <div className='flex space-x-2'>
                            <Check className='p-1 text-main bg-main/20 rounded-full w-fit'/>
                            <p>Facturation et devis automatisés</p>
                        </div>
                        <div className='flex space-x-2'>
                            <Check className='p-1 text-main bg-main/20 rounded-full w-fit'/>
                            <p>Suivi des paiements et relances</p>
                        </div>
                        <div className='flex space-x-2'>
                            <Check className='p-1 text-main bg-main/20 rounded-full w-fit'/>
                            <p>Gestion multi-devises et multi-entités</p>
                        </div>
                    </div>
                </div>
                <Image className='w-2/4' src={"/section2.svg"} alt='' width={1920} height={1280}/>
            </div>

        </section>

    </div>
  )
}

export default page
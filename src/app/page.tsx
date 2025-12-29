import Button from "@/components/Button";
import Header from "@/components/Header";
import { ArrowDown, Construction, Wrench } from "lucide-react";
import Image from "next/image";

export default function Home() {

    return (
    // <div className="w-fit mx-auto mt-40">
    //     <div className="flex items-center space-x-6">
    //         <Image src={"/logo_handlabs.png"} alt="" width={57} height={73}/>
    //         <h1 className="font-bold text-6xl text-center">Handlabs</h1>
    //     </div>
    //     <p className="text-center">En cours de développement.</p>
    // </div>


    <div>
        <Header />

        <main className="w-2/3 mx-auto my-[125px]">
            <div className="flex items-center space-x-4 bg-[#0E2440] w-fit mx-auto text-[#CFAF6E] px-5 py-1 rounded-full border shadow-[0_0_25px_rgba(207,175,110,0.8)] mb-10">
                <Construction />
                <p className="font-medium">En développement</p>
                <Wrench />
            </div>

            <div className="text-center">
                <h2 className="text-6xl font-bold leading-[120%]">Solution de gestion commerciale pour TPE et PME</h2>
                <p className="leading-[130%] mt-5 text-lg">Découvrez notre logiciel de gestion commerciale pour les petites entreprises <br />Optimisez au mieux vos stocks, développez la Business Intelligence de votre entreprise <br />et retrouvez toutes vos données à un seul endroit.</p>
            </div>

            <Button className="font-semibold mx-auto my-10">
                Nous soutenir
                <ArrowDown className="ml-2" />
            </Button>

        </main>
    </div>



  );
}

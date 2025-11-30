import Image from "next/image";

export default function Home() {
  return (
    <div className="w-fit mx-auto mt-40">
        <div className="flex items-center space-x-6">
            <Image src={"/logo_handlabs.png"} alt="" width={57} height={73}/>
            <h1 className="font-bold text-6xl text-center">Handlabs</h1>
        </div>
        <p className="text-scenter">En cours de développement.</p>
    </div>
  );
}

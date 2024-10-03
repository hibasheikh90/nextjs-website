import Image from "next/image"

export default function Hero(){
    return(
        <div className="flex">
            <Image className="relative" src="/hero.jpeg" alt="hero" width={2200} height={10}/>
        </div>
    );
}
import Link from "next/link";
import Image from "next/image";


export default function Header() {
    return (
        <header className="flex justify-between text-2xl bg-yellow-400">
        <Image className="m-2" src="/logo.png" alt="logo" width={100} height={200}/>
        <h1 className="p-8 font-bold text-4xl text-center">Hunger Hustle</h1>
        <nav>
            <ul className="hidden md:flex gap-x-4 p-9 font-bold">
                <li>
                    <Link href="/">Home</Link>
                    </li>
                <li>
                    <Link href="./manu">Manu</Link>
                    </li>
                <li>
                    <Link href="./about">About</Link>
                </li>
                    <li>
                    <Link href="./contact">Contact</Link>
                </li>
            </ul>
        </nav>
       </header>
    );
  }
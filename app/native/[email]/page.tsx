import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div style={{ height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image src="/../public/good.png" alt="successful" width={100} height={100} className="" />
            </div>
        </div>
    );
}

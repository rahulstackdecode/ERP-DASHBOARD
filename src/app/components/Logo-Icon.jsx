import Image from "next/image";
import Link from "next/link";

export default function LogoIcon({ className }) {
    return (
        <div className={`logo-wrapper flex items-center ${className}`}>
            <Link href="/">
                <Image
                    src="/icon-logo.png"
                    alt="Icon Logo"
                    width={30} height={30}
                    priority
                />
            </Link>
        </div>
    );
}

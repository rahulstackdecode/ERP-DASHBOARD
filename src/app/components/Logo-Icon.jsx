import Link from "next/link";

export default function LogoIcon({ className }) {
    return (
        <div className={`logo-wrapper flex items-center ${className}`}>
            <Link href="/">
               <img src="/icon-logo.png" alt="Icon Logo" width={30} height={30} />

            </Link>
        </div>
    );
}

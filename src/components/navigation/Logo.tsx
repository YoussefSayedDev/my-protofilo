import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer" title="Home">
      <Image src="/logo.svg" width="40" height="40" alt="logo" />
    </Link>
  )
}

export default Logo;
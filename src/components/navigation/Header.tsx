import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 py-2 w-full bg-background/60 backdrop-blur-md z-50">
      <div className="container py-4 flex items-center justify-between m-auto px-5">
        <Logo />
        <Navbar />
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header;
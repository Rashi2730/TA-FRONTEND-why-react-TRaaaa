function Header() {
  return (
    <header className="container flex justify-space-between align-item-center  padding">
      <div>
        <a href="index.html" className="logo flex align-item-center ">
          <img src="/images/logo.jpg" alt="logo"></img>
        </a>
      </div>
      <nav className="nav">
        <a href="##">Home</a>
        <a href="##">Contact</a>
        <a href="##">About</a>
      </nav>
    </header>
  );
}

export default Header;

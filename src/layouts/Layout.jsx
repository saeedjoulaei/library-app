function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Book App</h1>
        <p>
          <a href="https://www.google.com/">Sj-Developer</a> | Front-End
        </p>
      </header>
      {children}
      <footer>Developed by Saeid with Love ❤️</footer>
    </>
  );
}

export default Layout;

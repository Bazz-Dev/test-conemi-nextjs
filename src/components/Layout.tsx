import Nav from './Nav'; // Assuming Nav is in components directory
import Footer from './Footer'
function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="layout">
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
}

export default Layout;
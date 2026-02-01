import logo from "./assets/images/logo.svg"
import hero from "./assets/images/image-web-3-desktop.jpg";
function App() {

  return (
    <div className="container">
      <header className="header">
        <div>
            <img src={logo} alt="logo_img" />
        </div>

        <div>
            <nav>
              <ul className="nav-items">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
              </ul>
            </nav>
        </div>
      </header>

      <section className="hero-container">
        <div className="hero_container_left">
            <div className="hero-img">
              <img src={hero} alt="hero_img" />
            </div>

            <div>
              <div className="main-text">
  

              </div>
              <div>


              </div>
            </div>

        </div>

        <div>


        </div>

      </section>
    </div>
  )
}

export default App

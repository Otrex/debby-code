import "./style.css";
import bg1 from "../assets/bg-1.png";

import ico1 from "../assets/ico1.png";
import ico2 from "../assets/ico2.png";
import ico3 from "../assets/ico3.png";
import ico4 from "../assets/ico4.png";

export default function LandingPage() {
  return (
    <div className="c-wrapper">
      <nav>
        <div className="logo">
          <span> narco. </span>
        </div>
        <div className="menu-wrapper"> 
          <div className="menu">
            <ul> 
              <li>sales</li>
              <li>favorite</li>
              <li>lookbook</li>
              <li>about</li>
            </ul>
          </div>
          <div className="action">
            <div className="cart-btn">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                <path d="M220 976q-24 0-42-18t-18-42V396q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480 
                176q63 0 106.5 43.5T630 326v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 
                18H220Zm0-60h520V396H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 
                0-21.325-8.625T570 486v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 
                0-21.325-8.625T330 486v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 
                64v10ZM220 916V396v520Z"/>
              </svg>
              <span>Cart</span>
            </div>
            <div className="account">
              <div> O </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section> 
          <div>
            <h1>Get a perfect & luxurious looks with us</h1>
            <div className="flex action-b">
              <div>
                <div> 
                  <button className="explore-btn"> Explore More </button>
                </div>
              </div>
              <div> 
                We have a lot of top collects from various top brands and experienced fashion designers around the world.
              </div>
            </div>
          </div>
          <div>
            <div className="bg-1"> 
              <img src={bg1} />
            </div>
          </div>
        </section>
        <section className="ico"> 
          <div>
            <img src={ico1} />
          </div>
          <div>
            <img src={ico2} />
          </div>
          <div>
            <img src={ico3} />
          </div>
          <div>
            <img src={ico4} />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  )
}

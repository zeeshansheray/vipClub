
import {images} from '../images/images'
import Icoon from "../Components/Svgs"

function LandingPage() {
    return <>
     <div class="Main">
    <div class="firstChild">
      <div>
        <img className="logoImg" src={images.logo} alt="logo" />
      </div>
      <h1 class="large-heading">
        Why Be A Guest.<br/> When You Can Be A <span class="large-heading">Member?</span>
      </h1>
      <p className="againpara">
        For $9.99/Month you can enjoy FREE items and amazing discounts everyday!
      </p>
      <p className="para">
        Receive a <span class="B-color">FREE PIZZA</span> every month, plus daily specials & other discounts that are
        only available to members. See our all the benefits below.
      </p>
      <button className="join-button">Join Now</button>
    </div>

    <div className="secondChild">
      <img className="banner-image" src={images.image6} alt="banner" />
    </div>

    <div className="thirdChild">
      <div className="subthirdchild">
        <div className="lastImage">
          <img src={images.pangaa} alt="image" />
        </div>
        <div className="lastDatils">
          <h1 className="large-heading-spe ">
            Member Reward <span class="B-color">
              Benifits</span>
          </h1>
          <ul>
            <li>
              <Icoon/>
              <p className="ListW">1 Free Large Pizza Every Month</p>
            </li>
            <li>
            <Icoon/>
              <p className="ListW">10% Off All Orders Friday And Saturday</p>
            </li>
            <li>
            <Icoon/>
              <p className="ListW">BOGO 1/2 OFF Mondays</p>
            </li>
            <li>
            <Icoon/>
              <p className="ListW">Tuesday 89 Cent Wings</p>
            </li>
            <li>
              <Icoon/>
              <p className="ListW">$10 Pizzas Wednesday</p>
            </li>
            <li>
            <Icoon/>
              <p className="ListW">BOGO Pasta Thursday</p>
            </li>
            <li>
            <Icoon/>
              <p className="ListW">Sundays Free Combo Upgrades</p>
            </li>
          </ul>
          <button className="join-button-spe">Join Now</button>
        </div>
      </div>

    </div>
  </div>

    </>
    
}
export default LandingPage ;
import  "./Header.scss";
//imagens
import ShieldCheck from "../../Assets/ShieldCheck.png";
import Truck from "../../Assets/Truck.png";
import CreditCard from "../../Assets/CreditCard.png";
import vtex from "../../Assets/vtex.png";
import Vector9 from "../../Assets/Vector9.png";
import Heart from "../../Assets/Heart.png";
import UserCircle from "../../Assets/UserCircle.png";
import ShoppingCart from "../../Assets/ShoppingCart.png";
import { FaSistrix } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="containertopo">
        <div>
          <img src={ShieldCheck} alt="" />
        </div>
        <p>
          Compra <span>100% segura</span>
        </p>
        <div>
          <img src={Truck} alt="" />
        </div>
        <p>
          <span>Frete gratis</span> acima de R$200
        </p>
        <div>
          <img src={CreditCard} alt="" />
        </div>
        <p>
          <span>Parcele</span> suas compras
        </p>
      </div>

      <div className="containerinput">
        <div>
          {" "}
          <img src={vtex} alt="logovtex" />
        </div>

        <div>
          <input type="text" placeholder="O que você esta buscando ?" />
          <button className="busca">
            <FaSistrix />
          </button>{" "}
        </div>
        <div className="icons">
          <div>
            <img src={Vector9} />
          </div>
          <div>
            <img src={Heart} />
          </div>
          <div>
            <img src={UserCircle} />
          </div>
          <div>
            <img src={ShoppingCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

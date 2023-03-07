import "./Produtos.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Produtos = () => {
  const url = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setProducts(json.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="containerProduct">
      <Slider {...settings2}>
        {products &&
          products.map((item, index) => (
            <div className="containeriphone" key={index}>
              <img src={item.photo} alt="" />

              <p className="plorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="oldvalue">R$ 30,90</p>
              <p className="newvalue">R$ 28,90</p>
              <p className="valueparcel">ou 2x de R$ 49,95 sem juros</p>
              <p className="freight">Frete grátis</p>

              <button onClick={() => setOpenModal(item)}>Adicionar</button>
            </div>
          ))}
      </Slider>

      {openModal ? (
        <Modal onClose={() => setOpenModal(null)}>
          {
            <div>
              <img src={openModal.photo} alt="" />
              <div className="modalinfo">
                <h1>{openModal.productName}</h1>
                <p className="modalprice">R$ {openModal.price}</p>
                <p className="modaldescription">
                  {" "}
                  {openModal.descriptionShort}{" "}
                </p>
                <Link to={""}>Veja mais detalhes do produto</Link>
              </div>
            </div>
          }
        </Modal>
      ) : null}
    </div>
  );
};

export default Produtos;

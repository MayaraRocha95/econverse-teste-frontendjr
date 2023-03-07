import { NavLink } from "react-router-dom";
import  "./NavBar.scss";
import { TbCrown } from "react-icons/tb";



const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink to={""}>Todas as categorias</NavLink>
        <NavLink to={""}>Supermercado</NavLink>
        <NavLink to={""}>Livros</NavLink>
        <NavLink to={""}>Moda</NavLink>
        <NavLink to={""}>Lançamentos</NavLink>
        <NavLink to={""}>
          <span>Ofertas do dias</span>
        </NavLink>
        <div>
          <TbCrown />
        </div>
        <NavLink to={""}>Assinatura</NavLink>
      </div>
    </div>
  );
};

export default NavBar;

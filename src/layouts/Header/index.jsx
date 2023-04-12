import * as S from "./styles";
import "./header.css";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

function Header() {
  return (
    <S.Headerwrapper>
      <div className="header-left">
        <img
          src="https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png"
          alt="image-logo"
        ></img>
        <h2>Logo</h2>
      </div>
      <div className="header-center">
        <ul className="header-lists">
          <li>
            <h5>Products</h5>
            <div className="dropdown">
              <h6>product 1</h6>
              <h6>product 2</h6>
              <h6>product 3</h6>
            </div>
          </li>
          <li>
            <h5>Clothes</h5>
            <div className="dropdown">
              <h6>Clothes 1</h6>
              <h6>product 2</h6>
              <h6>product 3</h6>
            </div>
          </li>
          <li>project</li>
          <li>project</li>
          <li>project</li>
        </ul>
      </div>
      <div className="header-right">
        <h5>
          <SearchOutlined />
          Search
        </h5>
        <h5>
          <UserOutlined />
        </h5>
        <h5>
          <ShoppingCartOutlined />
        </h5>
      </div>
    </S.Headerwrapper>
  );
}

export default Header;

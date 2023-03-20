import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CarryOutOutlined,
  TeamOutlined, ReadOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu;

const BotFooter = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (

    <footer className="footer">
      <div className="bannerAlign">
        <div className="splashHeader"></div>
        <div className="inverseHeader"></div>
      </div>
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <img className="footerLogoPic" src="https://res.cloudinary.com/dqbkfteqj/image/upload/v1678191434/dojoLogoTransparent_px22hx.png" alt="Dojo Plug LLC" />
        </picture>
      </div>
      <div className="row footerRow">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">Company</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Contact us</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Carrers</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Privacy policy</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by
            <a href="https://brandongreene.net" className="footer__link"
              >Brandon Greene</a
            >
            to empower athletes and everyone around the world. This software as a service application
            intention is for aiding every individual in self promotion, ecommerce services, intructional lessons and more.
            <br /><br />Developed by Copyright &copy; by <a href="https://brandongreene.net" className="footer__link"
              > Brandon Greene</a
            >. If interested in
            owning your own personalized website please contact my
            <a href="https://brandongreene.net" className="footer__link"
              >platform.</a
            >
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BotFooter;

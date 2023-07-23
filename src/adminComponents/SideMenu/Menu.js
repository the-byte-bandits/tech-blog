import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../../img/logo.png";
import { AiOutlineStar } from "react-icons/ai";
import { BiSolidCategoryAlt, BiCommentDetail } from "react-icons/bi";
import { FaWallet, FaCog, FaSignOutAlt, FaBloggerB } from "react-icons/fa";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={logo} alt="" />

      <ul id="mainMenu">
        <Icon icon={<FaBloggerB />} />
        <Icon icon={<BiSolidCategoryAlt />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<BiCommentDetail />} />
        <Icon icon={<AiOutlineStar />} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;

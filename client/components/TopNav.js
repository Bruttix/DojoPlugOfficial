import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined, SketchCircleFilled ,
  CarryOutOutlined,
  TeamOutlined, ReadOutlined, SketchOutlined 
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
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
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[current]}
      className="mb-2 topNavHeaderUpdate"
    >
      <Item
        key="/"
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link href="/">
          <a>DOJO PLUG</a>
        </Link>
      </Item>

      {user && user.role && user.role.includes("Instructor") ? (
        <>
          <Item
            key="/instructor/course/create"
            onClick={(e) => setCurrent(e.key)}
            icon={<CarryOutOutlined />}
          >
            <Link href="/instructor/course/create">
              <a>Create Course</a>
            </Link>
          </Item>
        </>
      ) : (
        <>
        </>
      )}

      {!user  ? (
        <>
          <Item
              key="/subscribe"
              onClick={(e) => setCurrent(e.key)}
              icon={<SketchOutlined />}
          >
              <Link href="/subscribe">
                  <a>Subscribe</a>
              </Link>
          </Item>
        </>
      ) : (
        <>
        </>
      )}
          {/*placeholder
           
          <Item
            key="/instructor/become-instructor"
            onClick={(e) => setCurrent(e.key)}
            icon={<TeamOutlined />}
           >
           <Link href="/instructor/become-instructor">
             <a>Become Instructor</a>
           </Link>
          </Item>

           */}

       {user && user.role && user.role.includes("Subscriber") ? (
        <>
          <Item
            key="/subscribe/become-bronze"
            onClick={(e) => setCurrent(e.key)}
            icon={<SketchOutlined />}
          >
            <Link href="/subscribe">
              <a>Upgrade</a>
            </Link>
          </Item>
          <Item
            key="/user/become-instructor"
            onClick={(e) => setCurrent(e.key)}
            icon={<TeamOutlined />}
           >
           <Link href="/user/become-instructor">
             <a>Become Instructor</a>
           </Link>
          </Item>
        </>
      ) : (
        <>
          
        </>
      )} 

      {user === null && (
        <>
          <Item
            className="float-right"
            key="/register"
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
          >
            <Link href="/register">
              <a>Register</a>
            </Link>
          </Item>

          <Item
            className="float-right"
            key="/login"
            onClick={(e) => setCurrent(e.key)}
            icon={<LoginOutlined />}
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Item>
        </>
      )}

      {user !== null && (
        <SubMenu
          icon={<CoffeeOutlined />}
          title={user && user.name}
          className="float-right"
        >
          <ItemGroup>
            <Item key="/user">
              <Link href="/user">
                <a>Dashboard</a>
              </Link>
            </Item>
            <Item onClick={logout}>Logout</Item>
          </ItemGroup>
        </SubMenu>
      )}

      {user && user.role && user.role.includes("Instructor") && (
        <Item
          key="/instructor"
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
          className="float-right"
        >
          <Link href="/instructor">
            <a>Instructor</a>
          </Link>
        </Item>

      )}
      {user && user.role && user.role.includes("Instructor") && (
          <Item
              key="/instructor/heropage"
              onClick={(e) => setCurrent(e.key)}
              icon={<ReadOutlined />}
          >
              <Link href="/instructor/heropage">
                  <a> Lessons</a>
              </Link>
          </Item>
      )}

      {user && user.role && user.subscriptions.includes("Bronze") ? (
        <>
          <Item
            key="/user/course/bronze"
            onClick={(e) => setCurrent(e.key)}
            icon={<SketchCircleFilled />}
            className="bronzeTierTopNav"
          >
            <Link href="/user/course/bronze">
              <a>Bronze Tier</a>
            </Link>
          </Item>
        </>
      ) : (
        <>
          
        </>
      )} 

      {user && user.role && user.subscriptions.includes("Silver") ? (
        <>
          <Item
            key="/user/course/silver"
            onClick={(e) => setCurrent(e.key)}
            icon={<SketchCircleFilled />}
            className="silverTierTopNav"
          >
            <Link href="/user/course/silver">
              <a>Silver Tier</a>
            </Link>
          </Item>
        </>
      ) : (
        <>
          
        </>
      )} 
          
      {user && user.role && user.subscriptions.includes("Gold") ? (
        <>
          <Item
            key="/user/course/gold"
            onClick={(e) => setCurrent(e.key)}
            icon={<SketchCircleFilled />}
            className="goldTierTopNav"
          >
            <Link href="/user/course/gold">
              <a>Gold Tier</a>
            </Link>
          </Item>
        </>
      ) : (
        <>
          
        </>
      )} 

      {user && user.role && user.subscriptions.includes("Platinum") ? (
        <>
          <Item
            key="/user/course/platinum"
            onClick={(e) => setCurrent(e.key)}
            icon={<SketchCircleFilled />}
            className="platinumTierTopNav"
          >
            <Link href="/user/course/platinum">
              <a>Platinum Tier</a>
            </Link>
          </Item>
        </>
      ) : (
        <>
          
        </>
      )} 
      
      {user && user.role && user.subscriptions.includes("Diamond") ? (
        <>
          <Item
            key="/user/course/diamond"
            onClick={(e) => setCurrent(e.key)}
            icon={<SketchCircleFilled />}
            className="diamondTierTopNav"
          >
            <Link href="/user/course/diamond">
              <a>Diamond Tier</a>
            </Link>
          </Item>
        </>
      ) : (
        <>
          
        </>
      )} 

      {user && user.role && user.subscriptions.includes("Stargem") ? (
        <>
          <Item
            key="/user/course/stargem"
            onClick={(e) => setCurrent(e.key)}
            icon={<SketchCircleFilled />}
            className="stargemTierTopNav"
          >
            <Link href="/user/course/stargem">
              <a>Stargem Tier</a>
            </Link>
          </Item>
        </>
      ) : (
        <>
          
        </>
      )} 


    </Menu>
  );
};

export default TopNav;

import React, { useContext, useState, } from "react";
import logo from "../images/bike2.jpg";
import { Link } from "react-router-dom";
import { auth } from "../Config/Config";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
import { useHistory } from "react-router-dom";
import { CartContext } from "../Global/CartContext";
import Web3 from "web3";

export const Navbar = ({ user }) => {
  const history = useHistory();
  const { totalQty } = useContext(CartContext);

  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        ethBalance = ethBalance / 1000000000000000000;
        setEthBalance(ethBalance);
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  // handle logout
  const handleLogout = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="navbox">
      <div className="leftside">
        <img src={logo} alt="" />
      </div>
      {!user && (
        <div className="rightside">
          <span>
            <Link to="signup" className="navlink">
              Sign Up
            </Link>
          </span>
          <span>
            <Link to="login" className="navlink">
              Login
            </Link>
          </span>
        </div>
      )}
      {user && (
        <div className="rightside">
          <div className="app-wrapper">

          <span>
            <Link to="/" className="navlink">
              {user}
            </Link>
          </span>
          <span>
            <Link to="cartproducts" className="navlink">
              <Icon ClassName="icon" icon={cart} />
            </Link>
          </span>
          <span className="no-of-products">{totalQty}</span>
          <span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </span>

            {!isConnected && (
              <div>
                <button className="app-button__login" onClick={onConnect}>
                  Connect Metamask
                </button>
              </div>
            )}
            {isConnected && (
              <div className="app-wrapper">
                <div className="app-details">
                  <h4 className="connected">Successfully connected to metamask.</h4>
                  <div className="app-balance">
                    <span>Balance: </span>
                    {ethBalance}
                  </div>
                </div>
                <div>
                  <button
                    className="app-buttons__logout btn btn-warning"
                    onClick={onDisconnect}
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

import React from "react";
import logo from "../../images/icons/logo-sm.png";

// import search from "../../images/icons/search-icon.png";
import search from "../../images/icons/search-icon-sm.png"
// import cart from "../../images/icons/cart.png"
import cart from "../../images/icons/cart-sm.png"
import Head2 from "./Head2";

function Header() {
  return <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse" />
            <a className="navbar-brand mx-auto" href="/">
              <img src={logo} alt="" />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mac/">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/">
                    iphone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/">
                    ipad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/">
                    watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/">
                    tv
                  </a>
                </li>
                {/* <Head2 linkName="Mac" linkUrl="/mac" />;
                <Head2 linkName="iphone" linkUrl="/iphone" />;
                <Head2 linkName="ipad" linkUrl="/ipad" />;
                <Head2 linkName="watch" linkUrl="/applewatch" />;
                <Head2 linkName="tv" linkUrl="/#" />; */}
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} alt="" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>;
}

export default Header;
 
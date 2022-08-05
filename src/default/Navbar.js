import React, { useState, useRef } from 'react'
import { LoginPopup } from './LoginPopup';

const Navbar = () => {
  const [isActive, setIsActive] = useState({});
  const categoryMenu = [
    {
      'id': 1, 'name': 'Teile', 'subCategory': [
        {
          'id': 101, 'name': 'Federung', 'image': '/assets/images/subMenu1.jpeg', 'subCategory': [
            { 'id': 10101, 'name': 'Federgabeln', 'subCategory': '' },
            {
              'id': 10102, 'name': 'Dämpfer', 'subCategory': [
                { 'id': 1010201, 'name': 'Luftdämpfer', 'subCategory': '' },
                { 'id': 1010202, 'name': 'Stahldämpfer', 'subCategory': '' },
              ]
            },
            { 'id': 10103, 'name': 'Federungszubehör & Ersatzteile', 'subCategory': '' },
          ]
        },
        { 'id': 102, 'name': 'Antrieb', 'image': '/assets/images/subMenu2.jpeg', 'subCategory': '' },
        {
          'id': 103, 'name': 'Bremsen', 'image': '/assets/images/subMenu1.jpeg', 'subCategory': [
            { 'id': 10301, 'name': 'Disc Bremsbeläge', 'subCategory': '' },
            { 'id': 10302, 'name': 'Scheibenbremsen', 'subCategory': '' },
            { 'id': 10303, 'name': 'Bremsscheiben', 'subCategory': '' },
            { 'id': 10304, 'name': 'Bremsadapter', 'subCategory': '' },
            { 'id': 10305, 'name': 'Disc Bremsbeläge ALT', 'subCategory': '' },
            { 'id': 10306, 'name': 'Bremszubehör & Ersatzteile', 'subCategory': '' },
          ]
        },
        { 'id': 104, 'name': 'Radbereich', 'image': '/assets/images/subMenu2.jpeg', 'subCategory': '' },
        { 'id': 105, 'name': 'Sitzbereich', 'image': '/assets/images/subMenu1.jpeg', 'subCategory': '' },
        { 'id': 106, 'name': 'Steuerbereich', 'image': '/assets/images/subMenu2.jpeg', 'subCategory': '' },
        { 'id': 107, 'name': 'Rahmen', 'image': '/assets/images/subMenu1.jpeg', 'subCategory': '' },
        { 'id': 108, 'name': 'Mountainbikes', 'image': '/assets/images/subMenu2.jpeg', 'subCategory': '' },
      ]
    },
    { 'id': 2, 'name': 'Zubehör', 'subCategory': '' },
    { 'id': 3, 'name': 'Werkstatt', 'subCategory': '' },
    { 'id': 4, 'name': 'Bekleidung', 'subCategory': '' },
    { 'id': 5, 'name': 'Bikes', 'subCategory': '' },
  ]

  const manuBrandLogo = [
    { 'id': 1, 'name': 'a', 'image': '/assets/images/menuBrans1.png' },
    { 'id': 2, 'name': 'b', 'image': '/assets/images/menuBrans2.png' },
    { 'id': 3, 'name': 'c', 'image': '/assets/images/menuBrans3.png' },
    { 'id': 4, 'name': 'd', 'image': '/assets/images/menuBrans4.png' },
    { 'id': 5, 'name': 'e', 'image': '/assets/images/menuBrans5.jpeg' },
    { 'id': 6, 'name': 'f', 'image': '/assets/images/menuBrans6.png' },
  ]

  const activeManufacturers = [
    { 'id': 1, 'name': '76 Projects', 'link': '#' },
    { 'id': 2, 'name': '7iDP', 'link': '#' },
    { 'id': 3, 'name': 'Acros', 'link': '#' },
    { 'id': 4, 'name': 'Bikeshield', 'link': '#' },
    { 'id': 5, 'name': 'F100', 'link': '#' },
    { 'id': 6, 'name': 'Garbaruk', 'link': '#' },
    { 'id': 7, 'name': 'Kool Stop', 'link': '#' },
    { 'id': 8, 'name': 'Magura', 'link': '#' },
    { 'id': 9, 'name': 'NEWMEN', 'link': '#' },
    { 'id': 10, 'name': 'Shimano', 'link': '#' },
    { 'id': 11, 'name': 'SRAM', 'link': '#' },
    { 'id': 12, 'name': 'WD-40', 'link': '#' },
    { 'id': 13, 'name': 'Yamaha', 'link': '#' },
  ]
  const inactiveManufacturers = [
    { 'id': 11, 'name': '3T', 'link': '#' },
    { 'id': 12, 'name': 'ABUS', 'link': '#' },
    { 'id': 13, 'name': 'airbone', 'link': '#' },
    { 'id': 14, 'name': 'Alpinestars', 'link': '#' },
    { 'id': 15, 'name': 'Argon 18', 'link': '#' },
    { 'id': 16, 'name': 'Atlas', 'link': '#' },
    { 'id': 17, 'name': 'AZE', 'link': '#' },
    { 'id': 18, 'name': 'Barbieri', 'link': '#' },
    { 'id': 19, 'name': 'bikecloud', 'link': '#' },
    { 'id': 110, 'name': 'ClearProtect', 'link': '#' },
    { 'id': 111, 'name': 'Duracell', 'link': '#' },
    { 'id': 112, 'name': 'Fuse Protection', 'link': '#' },
    { 'id': 113, 'name': 'Giant', 'link': '#' },
  ]

  const searchProducts = [
    { 'id': 1, 'name': 'Shimano 11-fach Kettennietstifte - 3 Stück', 'image': 'https://www.mountainbike-parts.ch/cache/6/f/5/0/9/6f5095043fc9d2ffd68a1987841a50fa8fbeda92.png', 'price': '8.20', 'link': '#' },
    { 'id': 2, 'name': 'Shimano XT CN-M8100 Quicklink Kette', 'image': 'https://www.mountainbike-parts.ch/cache/e/d/2/9/8/ed298d49b50e8a4c239311483421ead68d3fd532.jpeg', 'price': '12.30', 'link': '#' },
    { 'id': 3, 'name': 'Crankbrothers Premium Cleats Pedalplatte', 'image': 'https://www.mountainbike-parts.ch/cache/f/b/0/9/2/fb0925828b86305051f3be24514c474f1682d731.jpeg', 'price': '13.00', 'link': '#' },
    { 'id': 4, 'name': 'SRAM Rival XPLR XG-1251 Kassette', 'image': 'https://www.mountainbike-parts.ch/cache/5/6/0/f/2/560f20994c7af4d951d27a4396970e3a27fa6a76.png', 'price': '450.58', 'link': '#' },
    { 'id': 5, 'name': 'Shimano N03A Resin XTR Ice-Tech Bremsbeläge', 'image': 'https://www.mountainbike-parts.ch/cache/a/1/9/d/0/a19d095ab08b04c723b52e5a5dbe5489fd067189.jpeg', 'price': '289.45', 'link': '#' },
    { 'id': 6, 'name': 'Wolf Tooth Precision Premium Steuersatz Unterteil', 'image': 'https://www.mountainbike-parts.ch/cache/9/e/2/f/1/9e2f1b027730bd90a2d42c00e916c2c3adf6e749.jpeg', 'price': '789.10', 'link': '#' },
    { 'id': 7, 'name': 'Squirt Seal BeadBlock Dichtmittel 1000ml', 'image': 'https://www.mountainbike-parts.ch/cache/a/a/1/8/7/aa1876f7c4b549eb2eff0e606345190773e75015.jpeg', 'price': '23.54', 'link': '#' },
    { 'id': 8, 'name': 'Acros IS41 Oberteil Steuersatz', 'image': 'https://www.mountainbike-parts.ch/cache/e/9/1/b/1/e91b1e4cbf5adbd91ed02c9c79c2ffd422c3064a.jpeg', 'price': '56.65', 'link': '#' },
    { 'id': 9, 'name': 'Race Face OE-Belt Gürtel', 'image': 'https://www.mountainbike-parts.ch/cache/c/6/3/6/b/c636bd31baa32c5482a8902d0242bea9c318978a.png', 'price': '99.25', 'link': '#' },
    { 'id': 10, 'name': 'Kool Stop SRAM Guide/G2 D293S Bremsbeläge', 'image': 'https://www.mountainbike-parts.ch/cache/9/9/9/d/e/999de240c451367175fd60de8667c9536f2a6bf0.jpeg', 'price': '79.25', 'link': '#' },
  ]

  function openSubCategory(subkey1) {
    setIsActive({ [subkey1]: true });
  }

  /* Brand Filter Aria */
  const [activeBrand, setActiveBrand] = useState('');
  const [activeBrandFilter, setActiveBrandFilter] = useState(activeManufacturers);

  const activeFilter = (e) => {
    const filterTxt = e.target.value;
    if (filterTxt != '') {
      const result = activeManufacturers.filter((brand) => {
        return brand.name.toLowerCase().startsWith(filterTxt.toLowerCase());
      });
      setActiveBrandFilter(result);
    } else {
      setActiveBrandFilter(activeManufacturers);
    }
    setActiveBrand(filterTxt);
  }

  const [isActiveBrandActive, setisActiveBrandActive] = useState(false);
  const [inactiveBrand, setinActiveBrand] = useState('');
  const [inactiveBrandFilter, setinActiveBrandFilter] = useState(inactiveManufacturers);

  function inActiveBrandHandal(e) {
    setisActiveBrandActive(!isActiveBrandActive);
    if (isActiveBrandActive == false) {
      setinActiveBrand('');
      setinActiveBrandFilter(inactiveManufacturers);
    }
  }

  const inactiveFilter = (e) => {
    const filterTxt = e.target.value;
    if (filterTxt != '') {
      const result = inactiveManufacturers.filter((brand) => {
        return brand.name.toLowerCase().startsWith(filterTxt.toLowerCase());
      });
      setinActiveBrandFilter(result);
    } else {
      setinActiveBrandFilter(inactiveManufacturers);
    }
    setinActiveBrand(filterTxt);
  }

  /* Brand Filter Aria */

  /* website search */
  const setFocus = useRef(null);
  const [isActiveSearch, setisActiveSearch] = useState(false);
  const [isSearchText, setisSearchText] = useState(false);
  function searchHandaler() {
    setisActiveSearch(true);
    setFocus.current.focus();
  }
  const [liveSearch, setliveSearch] = useState('');
  const [liveSearchFilter, setliveSearchFilter] = useState(searchProducts);

  const webliveSearchFilter = (e) => {
    const filterTxt = e.target.value;
    if (filterTxt != '') {
      const result = searchProducts.filter((search) => {
        return search.name.toLowerCase().startsWith(filterTxt.toLowerCase());
      });
      setliveSearchFilter(result);
      setisSearchText(true)
    } else {
      setliveSearchFilter(searchProducts);
      setisSearchText(false);
    }
    setliveSearch(filterTxt);
  }

  function checkSearchHandaler() {
    if (isSearchText == false) {
      setisActiveSearch(false)
    }
  }
  /* website search */

  /* Login Popup */
  const [isloginShow, setisloginShow] = useState('false');
  /* Login Popup */

  return (
    <div id="header-sticky-wrapper" className="sticky-wrapper" style={{ height: '80px' }}>
      <div id="header-sticky-wrapper" className="sticky-wrapper" style={{ height: '80px' }}>
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="navi">
                  <nav className="navbar navbar-default">
                    <div className="navbar-header text-center">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                        <span className="icon-bar"></span>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="menu_nav_text">Menu</span>
                      </button>
                      <a className="logo" href="#">
                        <img src="/assets/images/mountain_bike_logo.svg" alt="Willkommen bei mountainbike-parts.ch" title="Willkommen bei mountainbike-parts.ch" height="52" />
                      </a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse padding-null-x">
                      <ul className="nav navbar-nav desktop_menu">
                        {
                          categoryMenu.map((items, key) => (
                            <li key={key} className="megamenu main_category">
                              <a href="#" title={items.name} className="sub_cat">{items.name}</a>
                              {/* sub category 1 */}
                              {(items.subCategory != '') ?
                                <div role="menu" className="dropdown-megamenu fullwidth menu_height">
                                  <div className="row">
                                    <div className="megamenu-widget megamenu_title col-sm-4" id={'megamenu_title__' + items.id}>
                                      <div className="head_menu_banner">
                                        <div className="call_popular_cat_area">
                                          {/* sub category 1 loop */}
                                          {items.subCategory.map((subitems1, subkey1) => (
                                            <div key={subkey1} className="call_head_menu_banner" onMouseOver={e => openSubCategory(subkey1)} onClick={e => openSubCategory(subkey1)}>
                                              <a id={'second_lvl_category__' + subitems1.id} className="pop_cate_h second_lvl_category" href="#">
                                                <div className={isActive[subkey1] ? 'call_popular_cats child_categories activeImg active' : 'call_popular_cats child_categories'}>
                                                  <img alt="Federung" src={subitems1.image} />
                                                  <h3>{subitems1.name}</h3>
                                                </div>
                                              </a>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="megamenu-widget megamenu_area col-sm-8" id={'megamenu_area__' + items.id}>
                                      <div className="row">
                                        {/* sub category 2 loop */}
                                        {items.subCategory.map((subitems1, subkey1) => (
                                          <div key={subkey1} id={'child_category__' + subitems1.id} className="second_level_cat_area" style={{ display: isActive[subkey1] ? "block" : "none" }}>
                                            {(subitems1.subCategory != '') ?
                                              <>
                                                <div className="third_level_category">
                                                  {subitems1.subCategory.map((subitems2, subkey2) => (
                                                    <div key={subkey2} className="col-sm-4">
                                                      <div className="top_nav_float">
                                                        <ul className="navlinks">
                                                          {(subitems2.subCategory == '') ?
                                                            <a href="#"><h4>{subitems2.name}</h4></a>
                                                            :
                                                            <>
                                                              <h4 className="fourth_level_cat">{subitems2.name}</h4>
                                                              {/* sub category 3 loop */}
                                                              {subitems2.subCategory.map((subitems3, subkey3) => (
                                                                <li key={subkey3}><a href="#">{subitems3.name}</a></li>
                                                              ))}
                                                            </>
                                                          }
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  ))}
                                                </div>
                                                <div className="clearfix"></div>
                                                {/* Menu Brand Logos at end of menu */}
                                                <div className="menu_brand_logo">
                                                  {/* menu brand logo loop */}
                                                  {manuBrandLogo.map((items, key) => (
                                                    <div key={key} className="col-sm-2">
                                                      <div className="menu_brand_logo_img">
                                                        <a href="#" title={items.name}>
                                                          <img src={items.image} alt={items.name} title={items.name} />
                                                        </a>
                                                      </div>
                                                    </div>
                                                  ))}
                                                </div>
                                              </>
                                              : null}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                : null
                              }
                            </li>
                          ))
                        }
                      </ul>
                      <ul className="nav navbar-nav new_menu">
                        <li className="megamenu">
                          <a href="" data-toggle="dropdown" className="dropdown-toggle brands">
                            Marken
                          </a>
                          <div role="menu" className="dropdown-megamenu fullwidth">
                            <div className="row">
                              <div className="slimScrollDiv">
                                <div className="megamenu-widget col-sm-12 manufacturer_tab_menu">
                                  <h4 className="col-lg-3 width20per ma-b-30px">Unsere Top Brands</h4>
                                  <div id="search_text_div" className="input-group width20per">
                                    <input type="text" className="form-control search_brand_text" placeholder="Marke suchen" value={activeBrand} onChange={activeFilter} autoFocus="" />
                                    <span className="input-group-addon search_this_brand">
                                      <span className="fa fa-search"></span>
                                    </span>
                                  </div>
                                  <div className="clearfix"></div>
                                  <ul className="navlinks fivecol" id="load_all_manufacturers">
                                    {activeBrandFilter.map((items, key) => (
                                      <li key={key}><a href={items.link}>{items.name}</a></li>
                                    ))}
                                  </ul>
                                  <div className="clearfix"></div>
                                  <a href="#" className="show_all_inactive_brands ma-x-30px col-lg-3 width20per" onClick={inActiveBrandHandal} style={{ color: '#000', fontWeight: 'bold', paddingLeft: '0px', paddingRight: '0px' }}><i className={(isActiveBrandActive) ? 'fa fa-minus' : 'fa fa-plus'}></i> weitere Marken</a>
                                  <div id="search_inactive_text_div" className="input-group all_inactive_brands_div ma-x-20px width20per" style={{ display: (isActiveBrandActive) ? "" : "none" }}>
                                    <input type="text" className="col-lg-10 form-control search_inactive_brand_text" placeholder="Marke suchen" value={inactiveBrand} onChange={inactiveFilter} />
                                    <span className="input-group-addon search_inactive_this_brand"><span className="fa fa-search"></span></span>
                                  </div>
                                  <div className="clearfix"></div>
                                  <div className="all_inactive_brands_div" style={{ display: (isActiveBrandActive) ? "block" : "none" }}>
                                    <ul className="navlinks fivecol" id="load_all_inactive_manufacturers">
                                      {inactiveBrandFilter.map((items, key) => (
                                        <li key={key}><a href={items.link}>{items.name}</a></li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="clearfix"></div>
                              <div className="menu_brand_logo">
                                <div className="col-sm-12">
                                  {manuBrandLogo.map((items, key) => (
                                    <div key={key} className="col-sm-2">
                                      <div className="menu_brand_logo_img">
                                        <a href="#" title={items.name}>
                                          <img src={items.image} alt={items.name} title={items.name} />
                                        </a>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <ul className="nav navbar-nav mob_navi head_icons_main">
                    <li className="search">
                      <a href="#" className="show_head_search dropdown-toggle pad_rightset" data-toggle="dropdown" onClick={searchHandaler} role="button" aria-expanded="false" title="Search"><img src="/assets/images/icons/icon_search.svg" alt="search" height="23" /></a>
                      <div className="head_inp_search hide_head_search" style={{ display: (isActiveSearch) ? '' : "none" }}>
                        <div className="form-group has-success has-feedback">
                          <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-search"></i></span>
                            <input type="text" name="advanceSearch" id="search" autoComplete="off" className="form-control" ref={setFocus} placeholder="Suchbegriffe eingeben" value={liveSearch} onChange={webliveSearchFilter} onBlur={checkSearchHandaler} />
                          </div>
                          <a href="#" className="clear_search" onClick={() => { setisActiveSearch(false); setliveSearch(''); setisSearchText(false); }}>
                            <img src="/assets/images/icons/icon_search_close.png" alt="Close" title="Close" className="form-control-feedback" />
                          </a>
                          <a href="" id="search_loading" style={{ display: "none" }}>
                            <img src="/assets/images/icons/loading.gif" alt="Laden..." title="Close" className="form-control-feedback" />
                          </a>
                        </div>
                        <div className="live_search_main_box" style={{ display: (isSearchText) ? '' : "none" }}>
                          <div className="live_search_heading">
                            <h3>Suchergebnisse</h3>
                          </div>
                          <div className="live_search_cont_inline_main_area">
                            <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '295px' }}>
                              <div id="searchProductList" style={{ overflow: 'hidden', width: 'auto', height: '295px' }}>
                                {liveSearchFilter.map((items, key) => (
                                  <a key={key} href={items.link} title={items.name} className="live_sr_hover">
                                    <div className="live_search_cont_inline">
                                      <h4>
                                        <img src={items.image} alt={items.name} title={items.name} />
                                        <span>{items.name}</span>
                                        <span className="call_new_product_box_title">
                                          <span className="price_txt right">
                                            <small className="main-price"><sup>CHF</sup></small>{items.price}
                                            <input type="hidden" value={items.price} id={'getSearchProdPrice__' + items.id} />
                                          </span>
                                        </span>
                                      </h4>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown hide_desktop_menu login_register open_drp ">
                      <a href="#" onClick={() => { setisloginShow(true) }} className="dropdown-toggle pad_rightset modal_login" title="Deine Adresse">
                        <img src="/assets/images/icons/icon_user.svg" alt="Deine Adresse" height="23" />
                      </a>
                    </li>
                    <li className="dropdown hide_desktop_menu login_register">
                      <a href="#" onClick={() => { setisloginShow(true) }} data-toggle="headerLoginRegisterModal" className="dropdown-toggle pad_rightset modal_login" title="Wunschliste">
                        <img src="/assets/images/icons/icon_wishlist.svg" alt="Wunschliste" height="23" />
                      </a>
                    </li>
                    <li className="dropdown open_drp">
                      <a href="#" id="cart_dropdown" className="dropdown-toggle pad_rightset" data-toggle="dropdown" role="button" aria-expanded="false" title="Warenkorb">
                        <img src="/assets/images/icons/icon_cart.svg" alt="Warenkorb" />
                      </a>
                      <span id="total_cart_products" className="cart_count_round orange" style={{ display: "none" }}>
                        0
                      </span>
                      <ul className="dropdown-menu dropdown-cart" role="menu">
                        <div className="drp_cart_heading">
                          <h4>
                            0 Artikel im Warenkorb
                            <a href="#" id="close_cart_popup"><img src="/assets/images/icons/icon_close_sm.png" alt="close" /></a>
                          </h4>
                        </div>
                        <li>
                          <span className="item">Warenkorb ist leer. </span>
                        </li>
                        <li>
                          <span className="item"><div className="drp_btn"><div className=""><a href="#" className="btn btn-success btn-block">Warenkorb</a></div></div></span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {isloginShow === true ? <LoginPopup isloginShow={isloginShow} hidePopup={() => setisloginShow(false)} /> : ''}
    </div>
  )
}

export default Navbar
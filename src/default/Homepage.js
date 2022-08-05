import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick';
import { ItemBox } from './ItemBox';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider1.css';

//https://react-slick.neostack.com/docs/example/custom-paging

const Homepage = () => {

  const settings = {
    customPaging: function (i) {
      return (
        <a></a>
      );
    },
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const sliders = [
    { 'id': 1, 'image': '/assets/images/slider1.png', 'link': 'https://www.mountainbike-parts.ch/pnw-m-393.html' },
    { 'id': 2, 'image': '/assets/images/slider2.png', 'link': 'https://www.mountainbike-parts.ch/alugear-m-400.html' },
    { 'id': 3, 'image': '/assets/images/slider3.png', 'link': 'https://www.mountainbike-parts.ch/burgtec-m-397.html' },
  ];

  const productBannerInfo = [
    { 'id': 1, 'name': 'Federung', 'subTxt': 'shoppen', 'image': '/assets/images/pro_ban_1.jpeg', 'link': 'https://www.mountainbike-parts.ch/teile-federung-c-180_183.html' },
    { 'id': 2, 'name': 'Antrieb', 'subTxt': 'shoppen', 'image': '/assets/images/pro_ban_2.jpeg', 'link': 'https://www.mountainbike-parts.ch/teile-antrieb-c-180_61.html' },
    { 'id': 3, 'name': 'Bremsen', 'subTxt': 'shoppen', 'image': '/assets/images/pro_ban_3.jpeg', 'link': 'https://www.mountainbike-parts.ch/teile-bremsen-c-180_6.html' },
    { 'id': 4, 'name': 'Radbereich', 'subTxt': 'shoppen', 'image': '/assets/images/pro_ban_4.jpeg', 'link': 'https://www.mountainbike-parts.ch/teile-radbereich-c-180_3.html' },
    { 'id': 5, 'name': 'Sitzbereich', 'subTxt': 'shoppen', 'image': '/assets/images/pro_ban_5.jpeg', 'link': 'https://www.mountainbike-parts.ch/teile-sitzbereich-c-180_146.html' },
    { 'id': 6, 'name': 'Steuerbereich', 'subTxt': 'shoppen', 'image': '/assets/images/pro_ban_6.jpeg', 'link': 'https://www.mountainbike-parts.ch/teile-steuerbereich-c-180_145.html' },
  ];

  const homeBannerArea = [
    { 'id': 1, 'name': 'Federung', 'subTxt': 'shoppen', 'image': '/assets/images/home_ban_1.jpeg', 'link': 'http://mountainbike-parts.ch/bekleidung-c-143.html' },
    { 'id': 2, 'name': 'Antrieb', 'subTxt': 'shoppen', 'image': '/assets/images/home_ban_2.jpeg', 'link': 'http://mountainbike-parts.ch/zubeh%C3%B6r-c-188.html' },
  ];

  const newProductAndPopulerSettings = {
    className: 'product-slider slick-dotted',
    customPaging: function (i) {
      return (
        <a></a>
      );
    },
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: false,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  };

  const newProducts = [
    {
      'id': 1, 'brandName': 'Lezyne', 'brandImage': 'https://www.mountainbike-parts.ch/cache/2/8/6/6/2/28662325ac495ea1c4952fe75bab48aefbd1bb87.jpeg', 'itemsName': 'Femto Drive hinten Sicherheitsleuchte', 'itemImage': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg', 'images': [
        { 'id': 1, 'image': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg' },
        { 'id': 2, 'image': 'https://www.mountainbike-parts.ch/cache/5/b/6/e/1/5b6e1af8590acab0b68fe93664da0bb1222881ae.jpeg' },
        { 'id': 3, 'image': 'https://www.mountainbike-parts.ch/cache/8/7/8/3/0/87830ac66f742e043c1e2f870e2c78ac4a8741a5.jpeg' },
      ], 'price': '13.90', 'stockIndicator': 'morgen geliefert', 'isChild': '1', 'comanAttributes': 'Rückleuchte, schwarz', 'link': '#', 'isInWhish': '0'
    }, {
      'id': 2, 'brandName': 'Lezyne', 'brandImage': 'https://www.mountainbike-parts.ch/cache/2/8/6/6/2/28662325ac495ea1c4952fe75bab48aefbd1bb87.jpeg', 'itemsName': 'Femto Drive hinten Sicherheitsleuchte', 'itemImage': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg', 'images': [
        { 'id': 1, 'image': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg' },
        { 'id': 2, 'image': 'https://www.mountainbike-parts.ch/cache/5/b/6/e/1/5b6e1af8590acab0b68fe93664da0bb1222881ae.jpeg' },
        { 'id': 3, 'image': 'https://www.mountainbike-parts.ch/cache/8/7/8/3/0/87830ac66f742e043c1e2f870e2c78ac4a8741a5.jpeg' },
      ], 'price': '13.90', 'stockIndicator': 'morgen geliefert', 'isChild': '1', 'comanAttributes': 'Rückleuchte, schwarz', 'link': '#', 'isInWhish': '0'
    }, {
      'id': 3, 'brandName': 'Lezyne', 'brandImage': 'https://www.mountainbike-parts.ch/cache/2/8/6/6/2/28662325ac495ea1c4952fe75bab48aefbd1bb87.jpeg', 'itemsName': 'Femto Drive hinten Sicherheitsleuchte', 'itemImage': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg', 'images': [
        { 'id': 1, 'image': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg' },
        { 'id': 2, 'image': 'https://www.mountainbike-parts.ch/cache/5/b/6/e/1/5b6e1af8590acab0b68fe93664da0bb1222881ae.jpeg' },
        { 'id': 3, 'image': 'https://www.mountainbike-parts.ch/cache/8/7/8/3/0/87830ac66f742e043c1e2f870e2c78ac4a8741a5.jpeg' },
      ], 'price': '13.90', 'stockIndicator': 'morgen geliefert', 'isChild': '1', 'comanAttributes': 'Rückleuchte, schwarz', 'link': '#', 'isInWhish': '0'
    }, {
      'id': 4, 'brandName': 'Lezyne', 'brandImage': 'https://www.mountainbike-parts.ch/cache/2/8/6/6/2/28662325ac495ea1c4952fe75bab48aefbd1bb87.jpeg', 'itemsName': 'Femto Drive hinten Sicherheitsleuchte', 'itemImage': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg', 'images': [
        { 'id': 1, 'image': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg' },
        { 'id': 2, 'image': 'https://www.mountainbike-parts.ch/cache/5/b/6/e/1/5b6e1af8590acab0b68fe93664da0bb1222881ae.jpeg' },
        { 'id': 3, 'image': 'https://www.mountainbike-parts.ch/cache/8/7/8/3/0/87830ac66f742e043c1e2f870e2c78ac4a8741a5.jpeg' },
      ], 'price': '13.90', 'stockIndicator': 'morgen geliefert', 'isChild': '1', 'comanAttributes': 'Rückleuchte, schwarz', 'link': '#', 'isInWhish': '0'
    }, {
      'id': 5, 'brandName': 'Lezyne', 'brandImage': 'https://www.mountainbike-parts.ch/cache/2/8/6/6/2/28662325ac495ea1c4952fe75bab48aefbd1bb87.jpeg', 'itemsName': 'Femto Drive hinten Sicherheitsleuchte', 'itemImage': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg', 'images': [
        { 'id': 1, 'image': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg' },
        { 'id': 2, 'image': 'https://www.mountainbike-parts.ch/cache/5/b/6/e/1/5b6e1af8590acab0b68fe93664da0bb1222881ae.jpeg' },
        { 'id': 3, 'image': 'https://www.mountainbike-parts.ch/cache/8/7/8/3/0/87830ac66f742e043c1e2f870e2c78ac4a8741a5.jpeg' },
      ], 'price': '13.90', 'stockIndicator': 'morgen geliefert', 'isChild': '1', 'comanAttributes': 'Rückleuchte, schwarz', 'link': '#', 'isInWhish': '0'
    }, {
      'id': 6, 'brandName': 'Lezyne', 'brandImage': 'https://www.mountainbike-parts.ch/cache/2/8/6/6/2/28662325ac495ea1c4952fe75bab48aefbd1bb87.jpeg', 'itemsName': 'Femto Drive hinten Sicherheitsleuchte', 'itemImage': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg', 'images': [
        { 'id': 1, 'image': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg' },
        { 'id': 2, 'image': 'https://www.mountainbike-parts.ch/cache/5/b/6/e/1/5b6e1af8590acab0b68fe93664da0bb1222881ae.jpeg' },
        { 'id': 3, 'image': 'https://www.mountainbike-parts.ch/cache/8/7/8/3/0/87830ac66f742e043c1e2f870e2c78ac4a8741a5.jpeg' },
      ], 'price': '13.90', 'stockIndicator': 'morgen geliefert', 'isChild': '1', 'comanAttributes': 'Rückleuchte, schwarz', 'link': '#', 'isInWhish': '0'
    }, {
      'id': 7, 'brandName': 'Lezyne', 'brandImage': 'https://www.mountainbike-parts.ch/cache/2/8/6/6/2/28662325ac495ea1c4952fe75bab48aefbd1bb87.jpeg', 'itemsName': 'Femto Drive hinten Sicherheitsleuchte', 'itemImage': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg', 'images': [
        { 'id': 1, 'image': 'https://www.mountainbike-parts.ch/cache/e/a/d/7/0/ead70639d7e20c1773161574731f76c60ee3d51a.jpeg' },
        { 'id': 2, 'image': 'https://www.mountainbike-parts.ch/cache/5/b/6/e/1/5b6e1af8590acab0b68fe93664da0bb1222881ae.jpeg' },
        { 'id': 3, 'image': 'https://www.mountainbike-parts.ch/cache/8/7/8/3/0/87830ac66f742e043c1e2f870e2c78ac4a8741a5.jpeg' },
      ], 'price': '13.90', 'stockIndicator': 'morgen geliefert', 'isChild': '1', 'comanAttributes': 'Rückleuchte, schwarz', 'link': '#', 'isInWhish': '0'
    },
  ];

  return (
    <>
      <div id="loadingimg" lazyclass="loading_center" style={{ display: 'none', position: 'absolute', left: '50%', top: '50%', textAlign: 'center', zIndex: '9999' }}>
        <img src="/assets/images/loading_1.gif" alt="Laden..." style={{ maxWidth: '50px', maxHeight: '50px' }} />
      </div>
      <div className="clearfix"></div>
      <div className="slider_area wow fadeInUp animated animated animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
        <div className="container-fluid">
          <div className="h_btn">
            <ul className="slides">
              <Slider {...settings}>
                {sliders.map((items, key) => (
                  <li key={key} className="">
                    <div className="slide-container"><img draggable="false" src={items.image} alt="slide0" />
                      <div className="carousel-caption">
                        <div className="button">
                          <a href={items.link} className="btn btn-warning_reverse">jetzt kaufen <i className="fa fa-angle-right padd_left5"></i></a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="product_banner_info">
        <div className="container">
          <div className="row">
            {productBannerInfo.map((items, key) => (
              <div key={key} className="col-sm-4">
                <a href={items.link} className="banner_sm_hover">
                  <div className="product_banner_info_img">
                    <img src={items.image} alt="Federung" title="Federung" />
                    <div className="product_banner_info_cont">
                      <h2>{items.name}</h2>
                      <h4>{items.subTxt}</h4>
                    </div>
                    <div className="banner_bg"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="container">
        <div className="home_banner_area">
          <div className="row gutter_10">
            {homeBannerArea.map((items, key) => (
              <div key={key} className="col-sm-6">
                <div className="row gutter_10">
                  <div className="col-sm-12">
                    <div className="home_pro_banner">
                      <a href={items.link} className="home_banner_lg_effect">
                        <div className="home_pro_banner_img">
                          <img src={items.image} style={{ maxHeight: '164px', maxWidth: '465px' }} alt={items.name} title={items.name} />
                          <div className="home_pro_banner_img_cont cont_set">
                            <h2>{items.name}</h2>
                            <h4>{items.subTxt}</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="new_product_area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="head_title">
                <h2>Neue Artikel </h2>
              </div>
            </div>
            <div className="clearfix"></div>
            <Slider {...newProductAndPopulerSettings}>
              {newProducts.map((items, key) => (
                <div key={key} className="item">
                  <div className="col-sm-12">
                    <ItemBox data={items} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hr"></div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="new_product_area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="head_title">
                <h2>Beliebte Artikel </h2>
              </div>
            </div>
            <div className="clearfix"></div>
            <Slider {...newProductAndPopulerSettings}>
              {newProducts.map((items, key) => (
                <div key={key} className="item">
                  <div className="col-sm-12">
                    <ItemBox data={items} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hr"></div>
        </div>
      </div>

    </>
  )
}

export default Homepage
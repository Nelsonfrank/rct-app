import React from 'react';

// Styles
import './Footer.less';
// export interface FooterProps {}

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="about">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae earum sequi vero blanditiis aliquid impedit eos aut vel
              reprehenderit velit sunt natus voluptates iure, facere neque nemo
              non culpa.
            </p>
          </div>

          <div className="categories">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Tender request</a>
              </li>
              <li>
                <a href="#">Tender Bid</a>
              </li>
              <li>
                <a href="#">Sellers</a>
              </li>
              <li>
                <a href="#">Buyer</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>

          <div className="QuickLink">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="about/">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="copyright">
              <p className="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div className="social-media">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

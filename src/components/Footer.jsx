import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
  
      <footer>
        <div className="mainFooter">
        <div className="DozeeFooter">
          <div className="footerLogo">
            <img
              src={`${process.env.PUBLIC_URL}/images/Group.png`}
                          
              alt="logo"
            ></img>
          </div>

          <div className="footerLink">
            <ul className="QuickLinks border-bottoms">
              <h3 className="font-28">Quick Links</h3>
              <li className="footerLinks font-20">
                <Link to="aboutUs">About Us</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">News & Media</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Career</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Contact</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="aboutUs" id="blog">
                  Blog
                </Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Publication</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">FAQs</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Terms of Use </Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="linkNews ">
            <ul className="solutions border-bottoms">
              <h3 className="font-28">Solutions</h3>
              <li className="footerLinks font-20">Dozee For Hospital</li>
              <li className="footerLinks font-20">Dozee for Home</li>
            </ul>
          </div>
          <div className="newLetter border-bottoms">
            <label htmlFor="email" className="font-28">
              Subscribe to Newsletter:
            </label>
            <div className="newsletter">
              <form action="/action_page.php" id="emailSubmit">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  multiple
                />
                <button type="submit" className="mailImg">
                  <svg
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    className ="envolepIcon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.641.208C1.071.3.583.83.478 1.474c-.02.115-.03.407-.025.65l.009.439 4.344 3.861c4.02 3.573 4.35 3.858 4.414 3.814.038-.027 2-1.764 4.36-3.86l4.292-3.813-.012-.613c-.01-.602-.013-.62-.117-.865-.202-.472-.615-.808-1.087-.884C16.39.16 1.906.165 1.64.208ZM.445 9.049c0 2.923.013 5.315.027 5.315.021 0 2.989-3.906 4.651-6.12l.173-.23-2.41-2.14A250.202 250.202 0 0 0 .461 3.735c-.009 0-.016 2.391-.016 5.314Zm15.007-3.185c-1.32 1.17-2.393 2.144-2.386 2.167.007.022 1.09 1.465 2.406 3.207l2.394 3.167V9.07c0-2.934-.004-5.335-.008-5.334-.005 0-1.088.958-2.406 2.128ZM4.746 10.08l-2.522 3.335L.82 15.274l8.328.01c4.58.005 8.334.002 8.342-.007.017-.018-5.008-6.674-5.038-6.674-.01 0-.754.653-1.65 1.451L9.17 11.505l-1.637-1.45c-.9-.799-1.645-1.452-1.653-1.452-.01 0-.52.665-1.134 1.478Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <div className="followUs">
              <h3 className="socialLink font-28">Follow Us</h3>
              <div className="socialIcons">
                <div className="twitter Icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/5296515_bird_tweet_twitter_twitter logo_icon.png`}
                    alt="twitter"
                  />
                </div>
                <div className="linkdin Icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/381380_linkedin_logo_icon.png`}
                    alt="linkdin"
                  />
                </div>
                <div className="youtube Icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/3057689_media_network_social_youtube_icon.png`}
                    alt="youtube"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <div className="DozeeFooter desktop">
          <div className="footerLogo">
            <img
              src={`${process.env.PUBLIC_URL}/images/Group.png`}
              width="170"
              height="140"
              alt="logo"
            ></img>
          </div>
          <div className="newLetter border-bottoms">
            <label htmlFor="email" className="font-28">
              Subscribe to Newsletter:
            </label>
            <div className="newsletter d-flex">
              <form action="/action_page.php" id="emailSubmit">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  multiple
                />
                <button type="submit" className="mailImg">
                  <svg
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    className="envolepIcon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.641.208C1.071.3.583.83.478 1.474c-.02.115-.03.407-.025.65l.009.439 4.344 3.861c4.02 3.573 4.35 3.858 4.414 3.814.038-.027 2-1.764 4.36-3.86l4.292-3.813-.012-.613c-.01-.602-.013-.62-.117-.865-.202-.472-.615-.808-1.087-.884C16.39.16 1.906.165 1.64.208ZM.445 9.049c0 2.923.013 5.315.027 5.315.021 0 2.989-3.906 4.651-6.12l.173-.23-2.41-2.14A250.202 250.202 0 0 0 .461 3.735c-.009 0-.016 2.391-.016 5.314Zm15.007-3.185c-1.32 1.17-2.393 2.144-2.386 2.167.007.022 1.09 1.465 2.406 3.207l2.394 3.167V9.07c0-2.934-.004-5.335-.008-5.334-.005 0-1.088.958-2.406 2.128ZM4.746 10.08l-2.522 3.335L.82 15.274l8.328.01c4.58.005 8.334.002 8.342-.007.017-.018-5.008-6.674-5.038-6.674-.01 0-.754.653-1.65 1.451L9.17 11.505l-1.637-1.45c-.9-.799-1.645-1.452-1.653-1.452-.01 0-.52.665-1.134 1.478Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <div className="followUs">
              <h3 className="socialLink font-28">Follow Us</h3>
              <div className="socialIcons">
                <div className="twitter Icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/5296515_bird_tweet_twitter_twitter logo_icon.png`}
                    alt="twitter"
                  ></img>
                </div>
                <div className="linkdin Icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/381380_linkedin_logo_icon.png`}
                    alt="linkdin"
                  ></img>
                </div>
                <div className="youtube Icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/3057689_media_network_social_youtube_icon.png`}
                    alt="youtube"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="footerLink">
            <ul className="QuickLinks border-bottoms">
              <h3 className="font-28">Quick Links</h3>
              <li className="footerLinks font-20">
                <Link to="aboutUs">About Us</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">News & Media</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Career</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Contact</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="aboutUs" id="blog">
                  Blog
                </Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Publication</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">FAQs</Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Terms of Use </Link>
              </li>
              <li className="footerLinks font-20">
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="linkNews ">
            <ul className="solutions border-bottoms">
              <h3 className="font-28">Solutions</h3>
              <li className="footerLinks font-20">Dozee For Hospital</li>
              <li className="footerLinks font-20">Dozee for Home</li>
            </ul>
          </div>
        </div> */}
         <div className="belowFooter">
          <p className="belowFooterHeading">@Turtle Shell Technologies Pvt Ltd 2022-2023</p>
          <p className="belowFootertext">
            Dozee requires trained medical professionals to interpret reports
            and act on alerts. Both healthcare providers and patients are bound
            by the Terms and Conditions and Privacy Policy of Dozee.
          </p>
        </div> 
        </footer>
          );
        }
        export default Footer;
     
      
  


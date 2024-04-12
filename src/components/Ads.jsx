import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import voucher from "../assets/voucher.png";
import exchange from "../assets/exchange.png";
import whatsapp from "../assets/whatsapp.png";
import delivery from "../assets/delivery.png";

const Ads = () => {
  return (
    <>
      <section>
        <div className="ads-container">
          <div className="ads-chaild">
            <div class="ads-card">
              <div class="ads-icon">
                <div className="ads-delivery">
                  <img src={delivery} className="add-img" />
                </div>
              </div>
              <p class="ads-title">FREE 24 HOURS DELIVERY</p>
              <p class="ads-text">Mumbai | Thane | Navi Mumbai</p>
            </div>
          </div>
          <div className="ads-chaild">
            {/* <div className="ads-delivery">
              <img src={whatsapp} alt="" className="add-img" />
            </div>
            <div></div> */}
            <div class="ads-card">
              <div class="ads-icon">
                <div className="ads-delivery">
                  <img src={whatsapp} className="add-img" />
                </div>
              </div>
              <p class="ads-title">24X7 SUPPORT ASSISTANCE</p>
              <p class="ads-text">
                <a href="#">Call</a> | <a href="#">WhatsApp</a> |{" "}
                <a href="#">Messenger</a>
              </p>
            </div>
          </div>
          <div className="ads-chaild">
            {/* <div className="ads-delivery">
              <img src={voucher} alt="" className="add-img" />
            </div>
            <div></div> */}
            <div class="ads-card">
              <div class="ads-icon">
                <div className="ads-delivery">
                  <img src={voucher} className="add-img" />
                </div>
              </div>
              <p class="ads-title">FREE GIFT VOUCHER</p>
              <p class="ads-text">Valid on next purchase</p>
            </div>
          </div>
          <div className="ads-chaild">
            {/* <div className="ads-delivery">
              <img src={exchange} alt="" className="add-img" />
            </div>
            <div></div> */}
            <div class="ads-card">
              <div class="ads-icon">
                <div className="ads-delivery">
                  <img src={exchange} className="add-img" />
                </div>
              </div>
              <p class="ads-title">GUARANTEED EXCHANGE</p>
              <p class="ads-text">Exchange within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ads;

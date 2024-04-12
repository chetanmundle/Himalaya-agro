import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import voucher from "../assets/voucher.png"
import exchange from "../assets/exchange.png"
import whatsapp from "../assets/whatsapp.png"
import delivery from "../assets/delivery.png"

const Ads = () => {
  return (
    <>
      <section>
        <div className="ads-container">
          <div className="ads-chaild">
            <div className="ads-delivery">
              <img src={delivery} className="add-img"/>
            </div>
            <div></div>
          </div>
          <div className="ads-chaild">
            <div className="ads-delivery">
                <img src={whatsapp} alt="" className="add-img"/>
            </div>
            <div></div>
          </div>
          <div className="ads-chaild">
            <div className="ads-delivery">
                <img src={voucher} alt="" className="add-img" />
            </div>
            <div></div>
          </div>
          <div className="ads-chaild">
            <div className="ads-delivery">
                <img src={exchange} alt="" className="add-img"/>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ads;

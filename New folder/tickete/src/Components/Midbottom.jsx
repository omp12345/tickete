import React from 'react'
import radio from "../assets/radio.png"
import circle from "../assets/circle.png";
import visa from "../assets/visa.png";
import master from "../assets/mastercard.png";
import diner from "../assets/diners-club.png";
// import vector from "../assets/Vector.png";
import price from "../assets/price.png";
import lock from "../assets/Lock.png";
import input from "../assets/input.png";
import gola from "../assets/gola.png";
function Midbottom() {
  return (
    <>
      <div className="mid-box">
        <div className="form-box">
          <div>
            <h4>Select the mode of the payment</h4>
            <p className="txt-p">
              payment are tickete will be secured and encrypted
            </p>
          </div>
          {/* ........... */}
          <div className="input-border-box">
            <div className="circle-radio-box">
              <div className="radio-txt">
                <span>
                  <img src={radio} alt="" />
                </span>
                <p>Credit & debit card</p>
              </div>
              <div>
                <img src={circle} alt="" />
              </div>
            </div>
            {/* ......... */}
            <div className="card">
              <span>
                <img src={visa} alt="" />
              </span>
              <span>
                <img src={master} alt="" />
              </span>
              <span>
                <img src={diner} alt="" />
              </span>
            </div>

            <div className="form-card">
              <form className="form1-container input-form">
                <input type="text" placeholder=" Name on card*" />
                <input type="text" placeholder=" Card Number*" />
                <input type="text" placeholder=" Expiry date*" />
                <input type="text" placeholder=" &lt;CVV&gt;&lt;CVC&gt;*" />
              </form>
            </div>
            <div>
              <div className="total-vecor-box">
                <p>Total patable: $xxx</p>
                <div className="kk">
                  <p>You will be charged in AED</p>

                  <div className="price-box">
                    <img src={price} alt="" />
                  </div>
                </div>
              </div>
              {/* .......... */}

              <div className="txt-agree confirm-btn-box">
                <p>
                  By clicking "confirm button" you are agree to tickete general
                  team and condition and cancellation policy
                </p>
              </div>
              <div className="btn-txt">
                <button>
                  <span>
                    <img src={lock} alt="" />
                  </span>
                  <p>Confirm & pay</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ........................ */}
        <div className="input-gola-box">
          <div className="input-soon-box">
            <img src={input} alt="" />
            <p>Comming Soon</p>
          </div>
          <div>
            <img src={gola} alt="" />
          </div>
        </div>
        {/* ............... */}
        <div className="input-gola-box">
          <div className="input-soon-box">
            <img src={input} alt="" />
            <p>Comming Soon</p>
          </div>
          <div>
            <img src={gola} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Midbottom
import React from 'react'
import vector from "../assets/Vector.png"
import blur from "../assets/blur.png"
import upsell from "../assets/Upsell.png"
import rating from "../assets/Rating.png"
import ticket from "../assets/Ticket.png";
import cal from "../assets/CalendarBlank.png";
import guest from "../assets/guest.png";
import watch from "../assets/watch.png";
import plus from "../assets/plus.png";
import badge from "../assets/Badge.png";
import lock from "../assets/Lock.png";
function Midsection() {
  return (
    <>
      <div className="mid-container">
        <div>
          <div className="txt-confirm">Confirm & pay</div>
          <div className="txt-free-box ">
            <div className="txt-child">
              <p>
                <strong>FREE CANCELLED</strong>
              </p>
              <p>Ticket can be cancelled by 13th December,2022</p>
            </div>
            <div className="img-vector">
              <img src={vector} alt="" />
            </div>
          </div>
          {/* ...... */}
          <div className="form-box">
            <div>
              <h4>Enter your Details</h4>
              <p className="txt-p">
                we'll be sending you ticket to the detail below. Booking for the
                friend? Add the other details
              </p>
            </div>
            {/* ........... */}
            <div className="">
              <div className="input-div">
                <input type="text" placeholder=" Enter Name" />
              </div>

              <form className="form1-container input-form">
                <input type="text" placeholder=" Country code*" />
                <input type="text" placeholder=" Phone Number*" />
                <input type="text" placeholder=" Email*" />
                <input type="text" placeholder=" Confirm Email*" />
              </form>
            </div>
          </div>
          {/* ............. */}
          <div className="form-box">
            <div>
              <h4>Addtinoal Information</h4>
              <p className="txt-p">
                we need few more details to complete your reservation.
              </p>
            </div>
            {/* ........... */}
            <div className="">
              <form className="form1-container input-form input-space">
                <input type="text" placeholder=" Input Label*" />
                <input type="text" placeholder=" Select*" />
              </form>
              <div className="input-div">
                <input type="text" placeholder=" Multiselect" />
              </div>
            </div>
          </div>
          {/* ............ */}
        </div>
        {/* ............... */}
        <div className="flex-box">
          <div>
            <div>
              <img className="img-width" src={blur} alt="" />
              <span className="position-img">
                <img src={upsell} alt="" />
              </span>
            </div>
            <div className="txt-div-rating">
              <div className="rating-child">
                <div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                </div>
                <div>
                  <p>(4.5k) * &lt;category&gt;</p>
                  <div className="txt-set">
                    <p>
                      Amerstemr open boat canel curie -live guire -from uncle
                      house
                    </p>
                  </div>
                </div>
              </div>
              <div className="rating-child">
                <span>
                  <img src={ticket} alt="" />
                </span>
                <p>&lt;ticket type-varient&gt;</p>
              </div>
              <div className="rating-child">
                <span>
                  <img src={cal} alt="" />
                </span>
                <p>&lt; day&gt; , &lt;month&gt; &lt;date&gt;</p>
              </div>
              <div className="rating-child">
                <span>
                  <img src={watch} alt="" />
                </span>
                <p>&lt; time&gt;</p>
              </div>
              <div className="rating-child">
                <span>
                  <img src={guest} alt="" />
                </span>
                <p> 5 guests</p>
              </div>
              <div className="view-payment">
                <p>View payment summary</p>
                <p>
                  <img src={plus} alt="" />
                </p>
              </div>
              {/* .................. */}
              <div>
                <div>
                  <div className="total-txt">
                    <p>Total payable</p>
                    <p>$xxx</p>
                  </div>
                  <div className="img-badge ">
                    <img src={badge} alt="" />
                    <div className="txt-img">
                      <p>You will be charged in AED</p>
                      <p>
                        <img src={vector} alt="" />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="txt-agree">
                  <p>
                    By clicking "confirm button" you are agree to tickete
                    general team and condition and cancellation policy
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
        </div>
      </div>
      
    </>
  );
}

export default Midsection
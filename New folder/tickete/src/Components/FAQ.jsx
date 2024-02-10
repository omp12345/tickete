import React from "react";
import "./FAQ.css";
import group11 from "../assets/Group 11.png"
import plus from "../assets/plus.png"
import cross from "../assets/cross.png"
function FAQ() {
  return (
    <>
      <div className="FAQ_container">
        <div className="faq_1">
          <div className="heading_line">
            <div className="heading_content">
              <h3 className="h3">Frequently asked questions</h3>
              <p className="p">Here are some of our most asked questions. </p>
            </div>
            <div className="heading_frame">
              <div className="pic">
                <div className="content">
                  Still need help?  We’re here for you.
                </div>

                <button className="button">Chat with us</button>
              </div>
              <div className="about">
                <div className="image">
                  <img src={group11} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame">
            <div className="q1_container">
              <div className="q1">
                <div className="data">
                  <div className="plus_sign">
                    <img src={plus} alt="" />
                  </div>
                  <div className="text">
                    What should I do on my first trip to Rome?
                  </div>
                </div>
              </div>
            </div>
            <div className="ans1">
              <div className="ans_one">
                <div className="question1">
                  <div className="cross_sign">
                    <img src={cross} alt="" />
                  </div>
                  <div className="q1_text">
                    What are some hidden gems to see in Rome?
                  </div>
                </div>
                <div className="ans_3">
                  <p className="result_1">
                    Rome is packed with hidden gems. If you love art, don't miss
                    the Galleria Doria Pamphilj or Palazzo Barberini. The Museo
                    Barracco is a free museum and well worth a quick visit. If
                    you love the ancient stuff, don't miss the Domus Romana at
                    Palazzo Valentini, the Domus Aurea, and the Baths of
                    Caracalla. For even more hidden gems, take a tour of
                    Trastevere, a fascinating neighborhood full of history and
                    ambiance.
                  </p>
                </div>
              </div>
            </div>
            <div className="q_2">
                <div className="frame_1">
                    <div className="plus">
                        <div className="img">
                            <img src={plus} alt="" />
                        </div>
                    </div>
                    <div className="q1_text">
                    How much time should I spend in Rome?
                    </div>
                </div>
            </div>
            <div className="q_2">
                <div className="frame_1">
                    <div className="plus">
                        <div className="img">
                            <img src={plus} alt="" />
                        </div>
                    </div>
                    <div className="q1_text">
                    What food is Rome known for?
                    </div>
                </div>
            </div>
            <div className="q_2">
                <div className="frame_1">
                    <div className="plus">
                        <div className="img">
                            <img src={plus} alt="" />
                        </div>
                    </div>
                    <div className="q1_text">
                    What is the best way to get around Rome?
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;

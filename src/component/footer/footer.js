import PropTypes from "prop-types";
import React from "react";
import { Socials } from "../footer/social/social";
import "./footer.css";

export const PropertyFooterWrapper = ({ property1, star = "image.svg" }) => {
    return (
        <>
        <div className={`property-footer-wrapper property-1-0-${property1}`}>
            {property1 === "footer" && (
                <div className="frame">
                    <div className="rectangle" />
                    <div className="div">
                        <img className="img" alt="Rectangle" src="rectangle-29.svg" />
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="text-wrapper">Become a Partner</div>
                                <p className="p">
                                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                                    aliquet odio mattis.
                                </p>
                            </div>
                            <div className="button-secondary-wrapper">
                                <div className="button-secondary">
                                    <div className="ORDER-NOW">BECOME A PARTNER</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="frame-4">
                <div className="frame-5">
                    <div className="text-wrapper-2">IMURS</div>
                    <p className="text-wrapper-3">REIMAGINING THE MAGAZINES WITH A SWEET TOUCH</p>
                </div>
               
                <div className="frame-6">
                    <div className="frame-7">
                    <div className="social-container">
    <div className="social-column">
        <Socials className="socials-instance text-wrapper-imp" property1="default" text="LINKEDIN" />
        <Socials className="instance-node text-wrapper-imp down-column" property1="default" text="INSTAGRAM" />
    </div>
    <div className="social-column ">
        <Socials className="instance-node text-wrapper-imp" property1="default" text="FACEBOOK" />
        <Socials className="frame-8 text-wrapper-imp down-column" property1="default" text="TWITTER" />
    </div>
</div>

                    </div>
                    <div className="frame-9">
                    <div className="socials-column-1" style={{display:"flex" , gap:"10rem"}}>
                        <div>PRIVACY POLICY</div>
                        <div className="down-column">CANCELLATION &amp; REFUND POLICY</div>
                        </div>
                        <div className="socials-column-1" style={{display:"flex" , gap:"10rem"}} >
                        <div>TERMS &amp; CONDITIONS</div>
                        <div className="down-column">CONTACT US</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="star" alt="Star" src={property1 === "variant-2" ? star : "star-5.png"} />
        </div>
               
                    </>
    );
};

PropertyFooterWrapper.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "footer"]),
    star: PropTypes.string,
};

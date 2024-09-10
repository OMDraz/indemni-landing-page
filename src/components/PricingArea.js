import React from "react";
import "../App.css";

function PricingArea() {
  return (
    <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="150"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Pricing</span>
              </h4>
              <h2 className="title w-600 mb--40">Pricing plans for everyone</h2>
            </div>
          </div>
        </div>
        <div
          className="tab-content p-0 bg-transparent border-0 border bg-light"
          id="nav-tabContent"
        >

          <div
            className="tab-pane fade active show"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="row row--15 mt_dec--40">
              <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                <div className="rainbow-pricing style-aiwave">
                  <div className="pricing-table-inner">
                    <div className="pricing-top">
                      <div className="pricing-header">
                        <div className="icon">
                        <img
                                src="/images/pricing/icon-shape-one.png"
                                alt="Chat example Image"
                              />
                        </div>
                        <h4 className="title color-var-one">Basic</h4>
                        <p className="subtitle">
                          For Companies Shipping less than 25 loads a month
                        </p>
                        <div className="pricing">
                          <span className="price-text">Free</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <div className="features-section">
                          <h6>Features</h6>
                          <ul className="list-style--1">
                            <li>Load Photo Verification Flow</li>
                            <li>Document OCR Verification</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-footer">
                      <a className="btn-default btn-border" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                <div className="rainbow-pricing style-aiwave active">
                  <div className="pricing-table-inner">
                    <div className="pricing-top">
                      <div className="pricing-header">
                      <div className="icon">
                        <img
                                src="/images/pricing/icon-shape-two.png"
                                alt="Chat example Image"
                              />
                        </div>
                        <h4 className="title color-var-two">Premium</h4>
                        <p className="subtitle">
                          For companies shipping more than 25 loads a month
                        </p>
                        <div className="pricing">
                          <span className="price-text">$1250.00</span>
                          <span className="text">/Per Month</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <div className="features-section has-show-more">
                          <h6>Features</h6>
                          <ul className="list-style--1 has-show-more-inner-content">
                            <li>Photo Cloud Storage</li>
                            <li>Document Cloud Storage</li>
                            <li>Driver Verification Flow</li>
                            <li>Shipment Tracking Database</li>
                            <li>Business Flow Editor</li>
                            <li>Load Photo Verification Flow</li>
                            <li>Document OCR Verification</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-footer">
                      <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--40">
                <div className="rainbow-pricing style-aiwave">
                  <div className="pricing-table-inner">
                    <div className="pricing-top">
                      <div className="pricing-header">
                      <div className="icon">
                        <img
                                src="/images/pricing/icon-shape-three.png"
                                alt="Chat example Image"
                              />
                        </div>
                        <h4 className="title color-var-three">Enterprise</h4>
                        <p className="subtitle">
                          For companies shipping more than 100 loads a month
                        </p>
                        <div className="pricing">
                          <span className="price-text">Contact Us</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <div className="features-section has-show-more">
                          <h6>Features</h6>
                          <ul className="list-style--1 has-show-more-inner-content">
                            <li>Driver Verification Flow</li>
                            <li>Load Photo Verification Flow</li>
                            <li>Document OCR Verification</li>
                            <li>Photo Cloud Storage</li>
                            <li>Document Cloud Storage</li>
                            <li>Shipment Tracking Database</li>
                            <li>Business Flow Editor</li>
                            <li>Custom TMS & WMS Integration</li>
                            <li>Custom API Integrations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-footer">
                      <a className="btn-default btn-border" href="#">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingArea;

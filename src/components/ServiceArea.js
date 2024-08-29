import React, { useState } from "react";
import "../App.css";

function ServiceArea() {
  const [activeTab, setActiveTab] = useState("identity-verification"); // Default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center pb--60"
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="100"
            >
              <h4 className="subtitle">
                <span className="theme-gradient">
                  Unlock Security for your Shipments
                </span>
              </h4>
              <h2 className="title mb--0">AI Powered Risk Engine.</h2>
            </div>
          </div>
        </div>

        <div className="row row--42 align-items-center">
          <div className="col-lg-16">
            <div className="rainbow-default-tab style-three generator-tab-defalt">
              <ul className="nav nav-tabs tab-button" role="tablist">
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className={`nav-link rainbow-gradient-btn without-shape-circle ${
                      activeTab === "identity-verification" ? "active" : ""
                    }`}
                    id="identity-verification-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#identity-verification"
                    type="button"
                    role="tab"
                    aria-controls="identity-verification"
                    aria-selected={activeTab === "identity-verification"}
                    onClick={() => handleTabClick("identity-verification")}
                  >
                    <span className="generator-icon">
                      <img
                        src="/images/icons/video-g.png"
                        alt="Identity Verification Icon"
                      />
                      Identity Verification
                    </span>
                    <span className="border-bottom-style"></span>
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className={`nav-link rainbow-gradient-btn without-shape-circle ${
                      activeTab === "document-verification" ? "active" : ""
                    }`}
                    id="document-verification-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#document-verification"
                    type="button"
                    role="tab"
                    aria-controls="document-verification"
                    aria-selected={activeTab === "document-verification"}
                    onClick={() => handleTabClick("document-verification")}
                  >
                    <span className="generator-icon">
                      <img
                        src="/images/icons/audio-g.png"
                        alt="Document Verification Icon"
                      />
                      Document Verification
                    </span>
                    <span className="border-bottom-style"></span>
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className={`nav-link rainbow-gradient-btn without-shape-circle ${
                      activeTab === "photo-proof" ? "active" : ""
                    }`}
                    id="photo-proof-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#photo-proof"
                    type="button"
                    role="tab"
                    aria-controls="photo-proof"
                    aria-selected={activeTab === "photo-proof"}
                    onClick={() => handleTabClick("photo-proof")}
                  >
                    <span className="generator-icon">
                      <img
                        src="/images/icons/photo-g.png"
                        alt="Photo Proof Icon"
                      />
                      Shipment Photo Proof
                    </span>
                    <span className="border-bottom-style"></span>
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className={`nav-link rainbow-gradient-btn without-shape-circle ${
                      activeTab === "carrier-risk" ? "active" : ""
                    }`}
                    id="carrier-risk-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#carrier-risk"
                    type="button"
                    role="tab"
                    aria-controls="carrier-risk"
                    aria-selected={activeTab === "carrier-risk"}
                    onClick={() => handleTabClick("carrier-risk")}
                  >
                    <span className="generator-icon">
                      <img
                        src="/images/icons/text-g.png"
                        alt="Carrier Risk Icon"
                      />
                      Carrier Risk Assessment
                    </span>
                    <span className="border-bottom-style"></span>
                  </button>
                </li>
                <li className="nav-item tabs__tab" role="presentation">
                  <button
                    className={`nav-link rainbow-gradient-btn without-shape-circle ${
                      activeTab === "shipment-visibility" ? "active" : ""
                    }`}
                    id="shipment-visibility-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#shipment-visibility"
                    type="button"
                    role="tab"
                    aria-controls="shipment-visibility"
                    aria-selected={activeTab === "shipment-visibility"}
                    onClick={() => handleTabClick("shipment-visibility")}
                  >
                    <span className="generator-icon">
                      <img
                        src="/images/icons/code-g.png"
                        alt="Code Generator Icon"
                      />
                      In-Transit Visibility
                    </span>
                    <span className="border-bottom-style"></span>
                  </button>
                </li>
              </ul>

              <div className="rainbow-tab-content tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "identity-verification" ? "show active" : ""
                  }`}
                  id="identity-verification"
                  role="tabpanel"
                  aria-labelledby="identity-verification-tab"
                >
                  <div className="inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="section-title">
                          <h2 className="title">
                            Cargo Safety starts with Identity.
                          </h2>
                          <div className="features-section">
                            <ul className="list-style--1">
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                KYD - Know Your Driver
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Liveness Checks
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Comprehensive Anti-Forgery Technology
                              </li>
                            </ul>
                          </div>
                          <div className="read-more">
                            <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                              Start Exploring Now{" "}
                              <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 mt_md--30 mt_sm--30">
                        <div className="export-img">
                          <div className="inner-without-padding">
                            <div className="export-img img-bg-shape">
                              <img
                                src="/images/generator-img/biometric-security.png"
                                alt="Chat example Image"
                              />
                              <div className="image-shape"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "document-verification" ? "show active" : ""
                  }`}
                  id="document-verification"
                  role="tabpanel"
                  aria-labelledby="document-verification-tab"
                >
                  <div className="inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="section-title">
                          <h2 className="title">No More Forged Documents.</h2>
                          <div className="features-section">
                            <ul className="list-style--1">
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                OCR Technology
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Document Forgery Analysis
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Comprehensive Anti-Forgery Technology
                              </li>
                            </ul>
                          </div>
                          <div className="read-more">
                            <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                              Start Exploring Now
                              <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 mt_md--30 mt_sm--30">
                        <div className="export-img">
                          <div className="inner-without-padding">
                            <div className="export-img img-bg-shape">
                              <img
                                src="/images/generator-img/security-folder.png"
                                alt="Chat example Image"
                              />
                              <div className="image-shape"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "photo-proof" ? "show active" : ""
                  }`}
                  id="photo-proof"
                  role="tabpanel"
                  aria-labelledby="photo-proof-tab"
                >
                  <div className="inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="section-title">
                          <h2 className="title">
                            Reduce Chargebacks
                          </h2>
                          <div className="features-section">
                            <ul className="list-style--1">
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Step by Step Photo Proof 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Automated Organization and Sharing 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Quickly Access and Share Photos
                              </li>
                            </ul>
                          </div>
                          <div className="read-more">
                            <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                              Start Exploring Now{" "}
                              <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 mt_md--30 mt_sm--30">
                        <div className="export-img">
                          <div className="inner-without-padding">
                            <div className="export-img img-bg-shape">
                              <img
                                src="/images/generator-img/server-security.png"
                                alt="Chat example Image"
                              />
                              <div className="image-shape"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "carrier-risk" ? "show active" : ""
                  }`}
                  id="carrier-risk"
                  role="tabpanel"
                  aria-labelledby="carrier-risk-tab"
                >
                  <div className="inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="section-title">
                          <h2 className="title">
                            Carrier Risk and Reputation Assessments 
                          </h2>
                          <div className="features-section">
                            <ul className="list-style--1">
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Review the Reptuation of your Carrier
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Surface Risk and Fraud Flags 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Avoid Double Brokering 
                              </li>
                            </ul>
                          </div>
                          <div className="read-more">
                            <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                              Start Exploring Now{" "}
                              <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 mt_md--30 mt_sm--30">
                        <div className="export-img">
                          <div className="inner-without-padding">
                            <div className="export-img img-bg-shape">
                              <img
                                src="/images/generator-img/security-bugs.png"
                                alt="Chat example Image"
                              />
                              <div className="image-shape"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "shipment-visibility" ? "show active" : ""
                  }`}
                  id="shipment-visibility"
                  role="tabpanel"
                  aria-labelledby="shipment-visibility-tab"
                >
                  <div className="inner">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="section-title">
                          <h2 className="title">
                            Keep an eye on your Shipment at all times 
                          </h2>
                          <div className="features-section">
                            <ul className="list-style--1">
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Input your IOT device info  
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Build custom alerting based 
                              </li>
                              <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Take quick action on risky scenarios
                              </li>
    
                            </ul>
                          </div>
                          <div className="read-more">
                            <a className="btn-default color-blacked" href="https://calendly.com/meet-indemni/30min?background_color=000000&text_color=FFFFFF&primary_color=119DA4">
                              Start Exploring Now{" "}
                              <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 mt_md--30 mt_sm--30">
                        <div className="export-img">
                          <div className="inner-without-padding">
                            <div className="export-img img-bg-shape">
                              <img
                                src="/images/generator-img/in-transit-visibility.png"
                                alt="Chat example Image"
                              />
                              <div className="image-shape"></div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ServiceArea;

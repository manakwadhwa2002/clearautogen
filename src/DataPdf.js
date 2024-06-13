import "./style.css";
import React from "react";
import html2pdf from "html2pdf.js";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import QRCode from "qrcode.react";

export default function DataPdf(props) {
  const { qrData, companyname, coupon, source, partnerpagelink, ctpocemail, ctpocphone } = props;
  //   const qrCode = `<img src="${document.querySelector("canvas").toDataURL()}"/>`;
  const generatePDF = () => {
    const element = document.getElementById("contentToConvert");
    const opt = {
      margin: 0,
      filename: "relaxation_day.pdf",
      image: { type: "jpeg", quality: 1 }, // Adjust image quality
      html2canvas: { scale: 1.5 }, // Adjust scale to fit content onto one page
      jsPDF: { unit: "px", format: [1648, 2405], orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <div id="contentToConvert">
        <body>
          <table align="center" border="{0}" cellPadding="{0}" cellSpacing="{0}" className="table-sm" style={{ background: "#ffffff", border: "solid 1px #eaeaea" }}>
            <tbody>
              <tr>
                <td>
                  <table align="center" bgcolor="#FFFFFF" cellPadding={0} cellSpacing={0} width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <table bgcolor="#ffffff" cellPadding={0} cellSpacing={0} className="inner-table" width="100%">
                            <tbody>
                              <tr>
                                <td align="center" style={{ padding: "0px 0% 0px 0%" }}>
                                  <a href={`${props.partnerpagelink}?utm_source=${props.source}&utm_medium=email&utm_campaign=itr_2024_corp_partnership_campaign`}>
                                    <img src={img1} style={{ width: "100%" }} />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ fontFamily: '"Gilroy", Verdana, sans-serif', color: "#202124", fontSize: "16px", lineHeight: "23px", padding: "10px 8% 0px 8%" }}>
                                  <div style={{ textAlign: "center" }}>
                                    <strong>
                                      Let ClearTax take care of your tax woes
                                      <br />
                                      <br />
                                      Say hi to stress-free tax filing &amp; enjoy exclusive&nbsp;discount
                                    </strong>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" style={{ padding: "20px 5% 10px 5%", fontFamily: "Helvetica, Verdana,  sans-serif" }}>
                                  <a href={`${props.partnerpagelink}?utm_source=${props.source}&utm_medium=email&utm_campaign=itr_2024_corp_partnership_campaign`}>
                                    <img alt="" src="https://cleartax-media.s3.amazonaws.com/finfo/wg-utils/emailers/284bc87a-d397-4059-82c9-03b3accd7be8.PNG" style={{ width: "410px", height: "72px" }} />
                                  </a>
                                  <br />
                                  <br />
                                  &nbsp;
                                  <table border={0} cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                      <tr>
                                        <td align="center" bgcolor="#1b368f" style={{ WebkitBorderRadius: "6px", MozBorderRadius: "6px", borderRadius: "6px" }}>
                                          <a
                                            href={`${props.partnerpagelink}?utm_source=${props.source}&utm_medium=email&utm_campaign=itr_2024_corp_partnership_campaign`}
                                            style={{
                                              fontSize: "14px",
                                              fontFamily: "Helvetica, Verdana, sans-serif",
                                              backgroundColor: "#1478fa",
                                              color: "#ffffff",
                                              textDecoration: "none",
                                              WebkitBorderRadius: "3px",
                                              MozBorderRadius: "3px",
                                              borderRadius: "3px",
                                              padding: "12px 30px",
                                              display: "inline-block",
                                              fontWeight: 600,
                                            }}
                                          >
                                            File Now
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  &nbsp;
                                  <div style={{ textAlign: "justify" }}>&nbsp;</div>
                                  <div style={{ textAlign: "justify" }}>
                                    <span style={{ fontSize: "14px" }}>
                                      <span style={{ fontFamily: "Verdana,Geneva,sans-serif" }}>This tax season, let ClearTax take taxes off your list. So that, while your taxes are being filed, you can enjoy better things in life!</span>
                                    </span>
                                    <br />
                                    &nbsp;
                                  </div>
                                  <div style={{ textAlign: "justify" }}>
                                    <span style={{ fontSize: "14px" }}>
                                      <span style={{ fontFamily: "Verdana,Geneva,sans-serif" }}>ClearTax is so much more than just a tax-filing platform.</span>
                                    </span>
                                    <br />
                                    &nbsp;
                                  </div>
                                  <div style={{ textAlign: "justify" }}>
                                    <span style={{ fontSize: "14px" }}>
                                      <span style={{ fontFamily: "Verdana,Geneva,sans-serif" }}>
                                        It is like that friend who's got your back, especially when it comes to the boring stuff like paperwork and calculations for taxes. They handle it all, so you end up with the biggest savings and zero headaches. Pretty cool, huh?
                                      </span>
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" style={{ padding: "20px 5% 10px 5%", fontFamily: "Helvetica, Verdana,  sans-serif" }}>
                                  <div style={{ textAlign: "left" }}>
                                    &nbsp;Over
                                    <span style={{ color: "#3498db" }}>
                                      <strong>6 million</strong>
                                    </span>
                                    taxpayers trust ClearTax already!
                                  </div>
                                  <br />
                                  <br />
                                  <img src={img2} style={{ width: "100%" }} />
                                  <br />
                                  &nbsp;
                                  <div style={{ textAlign: "left" }}>
                                    &nbsp;
                                    <p>
                                      <span style={{ fontSize: "12px" }}>
                                        <strong>Get instant acknowledgment from ITD.&nbsp;</strong>
                                      </span>
                                      <br />
                                      <br />
                                      &nbsp;
                                    </p>
                                    <p>
                                      <span style={{ fontSize: "12px" }}>
                                        <strong>So why wait? File your taxes with ClearTax as early as possible to get faster refunds and avoid penalties.</strong>
                                      </span>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" style={{ padding: "20px 5% 10px 5%", fontFamily: "Helvetica, Verdana,  sans-serif" }}>
                                  <img src={img3} style={{ width: "100%" }} />
                                  <br />
                                  &nbsp;
                                  <p style={{ marginLeft: "80px", textAlign: "left" }}>
                                    <strong>
                                      Use coupon code:&nbsp;
                                      <span style={{ color: "#3498db" }}>{props.coupon} </span>
                                      to get exclusive discounts
                                    </strong>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" style={{ padding: "20px 5% 10px 5%", fontFamily: "Helvetica, Verdana,  sans-serif" }}>
                                  <a href={`${props.partnerpagelink}?utm_source=${props.source}&utm_medium=email&utm_campaign=itr_2024_corp_partnership_campaign`}>
                                    <img alt="" src="https://cleartax-media.s3.amazonaws.com/finfo/wg-utils/emailers/785746a1-79f6-40d1-9606-8caca5301f13.PNG" style={{ width: "136px", height: "34px" }} />
                                  </a>
                                  <br />
                                  <br />
                                  &nbsp;
                                  <p>
                                    <strong>Scan here to claim your reward :</strong>
                                    <br />
                                    <br />
                                    <QRCode value={qrData} />
                                    <br />
                                    &nbsp;
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" style={{ padding: "20px 5% 10px 5%", fontFamily: "Helvetica, Verdana,  sans-serif" }}>
                                  <p>
                                    <strong>Feel free to reach out to us for any ITR related query:</strong>
                                    <br />
                                    &nbsp;
                                  </p>
                                  <p style={{ textAlign: "center" }}>
                                    <br />
                                    {props.ctpocemail}: +91-{props.ctpocphone}
                                    <br />
                                    corpsupport1@clear.in&nbsp;
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <table align="center" border={0} cellPadding={0} cellSpacing={0} className="table-sm" style={{ background: "#fff", border: "solid 1px #eaeaea" }}>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <table align="center" bgcolor="#FFFFFF" cellPadding={0} cellSpacing={0} width="100%">
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <table bgcolor="#ffffff" cellPadding={0} cellSpacing={0} className="inner-table" width="100%">
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <table border={0} cellPadding={0} cellSpacing={0} className="footer-bg-new" style={{ backgroundColor: "#f4f4f6" }} width="100%">
                                                            <tbody>
                                                              <tr>
                                                                <td>
                                                                  <div className="footer-logo-new" style={{ textAlign: "center", padding: "15px 0px" }}>
                                                                    <a href={`${props.partnerpagelink}?utm_source=${props.source}&utm_medium=email&utm_campaign=itr_2024_corp_partnership_campaign`}>
                                                                      <img alt="Hurray! We are now LIVE with tax-filing" src="https://assets.clear.in/cleartax/images/1689695675_logocleartax.png" style={{ width: "130px" }} />
                                                                    </a>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <table style={{ width: "100%" }}>
                                                                    <tbody>
                                                                      <tr style={{ textAlign: "center" }}>
                                                                        <td className="footer-matrix-data">
                                                                          <table style={{ width: "100%" }}>
                                                                            <tbody>
                                                                              <tr>
                                                                                <td className="footer-matrix-wrapper">
                                                                                  <div className="footer-matrix-data-box">
                                                                                    <p>6M+</p>
                                                                                    <span style={{ fontWeight: 400, lineHeight: "17px", fontSize: "10px", whiteSpace: "nowrap" }}>users trust Cleartax</span>
                                                                                  </div>
                                                                                  <div className="footer-matrix-data-box">
                                                                                    <p>1.8M+</p>
                                                                                    <span style={{ fontWeight: 400, lineHeight: "17px", fontSize: "10px", whiteSpace: "nowrap" }}>hours saved</span>
                                                                                  </div>
                                                                                </td>
                                                                                <td className="footer-matrix-wrapper">
                                                                                  <div className="footer-matrix-data-box">
                                                                                    <p>₹800 Cr+</p>
                                                                                    <span style={{ fontWeight: 400, lineHeight: "17px", fontSize: "10px", whiteSpace: "nowrap" }}>worth taxes filed</span>
                                                                                  </div>
                                                                                  <div className="footer-matrix-data-box">
                                                                                    <p>40Cr+</p>
                                                                                    <span style={{ fontWeight: 400, lineHeight: "17px", fontSize: "10px", whiteSpace: "nowrap" }}>worth taxes saved</span>
                                                                                  </div>
                                                                                </td>
                                                                              </tr>
                                                                            </tbody>
                                                                          </table>
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <div className="footer-social-icon" style={{ textAlign: "center" }}>
                                                                    <a href="https://clr.tax/YyNNk">
                                                                      <img alt="facebook" src="https://assets1.cleartax-cdn.com/cleartax/images/1684317181_vector3.png" style={{ display: "inline-block", width: "16px", height: "28px" }} />
                                                                    </a>
                                                                    <a href="https://clr.tax/suwbf">
                                                                      <img alt="instagram" src="https://assets1.cleartax-cdn.com/cleartax/images/1684316510_group.png" style={{ display: "inline-block", width: "26px", height: "26px" }} />
                                                                    </a>

                                                                    <a href="https://clr.tax/PdhRZ">
                                                                      <img alt="twitter" src="https://assets1.cleartax-cdn.com/cleartax/images/1684316978_vector1.png" style={{ display: "inline-block", width: "23px", height: "20px" }} />
                                                                    </a>

                                                                    <a href="https://www.linkedin.com/company/clearofficial/mycompany/">
                                                                      <img alt="linkedIn" src="https://assets1.cleartax-cdn.com/cleartax/images/1684317048_group1.png" style={{ display: "inline-block", width: "22px", height: "22px" }} />
                                                                    </a>

                                                                    <a href="https://clr.tax/HipAc">
                                                                      <img alt="youtube" src="https://assets1.cleartax-cdn.com/cleartax/images/1684317127_group2.png" style={{ display: "inline-block", width: "29px", height: "18px" }} />
                                                                    </a>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td>
                                                                  <div style={{ color: "#555555", textAlign: "center" }}>
                                                                    <div style={{ display: "inline-block", padding: "0 7px", borderRight: "1px solid #555555" }}>
                                                                      <img alt="minutes" src="https://assets1.cleartax-cdn.com/cleartax/images/1684321329_vector4.png" style={{ width: "14px", height: "14px", verticalAlign: "middle" }} />

                                                                      <span style={{ paddingLeft: "6px" }}>3 minutes</span>
                                                                    </div>
                                                                    <div style={{ display: "inline-block", padding: "0 7px", borderRight: "1px solid #555555" }}>
                                                                      <img alt="steps" src="https://assets1.cleartax-cdn.com/cleartax/images/1684325261_group1000004057.png" style={{ width: "14px", height: "14px", verticalAlign: "middle" }} />

                                                                      <span style={{ paddingLeft: "6px" }}>3 steps</span>
                                                                    </div>
                                                                    <div style={{ display: "inline-block", padding: "5px 7px 0" }}>
                                                                      <img alt="zero stress" src="https://assets1.cleartax-cdn.com/cleartax/images/1684325310_vector5.png" style={{ width: "14px", height: "14px", verticalAlign: "middle" }} />

                                                                      <span style={{ paddingLeft: "6px" }}>Zero stress</span>
                                                                    </div>
                                                                  </div>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td className="footer-keyword">Built for all kinds of income &lt;3- Salaried Employees | Mutual Funds &amp; Stocks Investors | Crypto Investors | NRIs | Foreign Income | Freelancers | Business owners | ESOPs | RSUs</td>
                                                              </tr>
                                                              <tr>
                                                                <td style={{ textAlign: "center", color: "#555555", fontSize: "14px", fontWeight: 400, lineHeight: "19px", padding: "0 20px 50px" }}>
                                                                  Need assistance? Write to us at
                                                                  <a className="no-link-style" href="mailto:support@cleartax.in" style={{ color: "#555555" }}>
                                                                    support@cleartax.in
                                                                  </a>
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </div>
      <button onClick={generatePDF}>Download as PDF</button>
    </div>
  );
}

import "./castyle.css";
import React from "react";
import html2pdf from "html2pdf.js";
import img5 from "./assets/img5.png";

export default function CaPlans(props) {
  const { qrData, companyname, coupon, source, partnerpagelink, ctpocemail, ctpocphone, ctsuppemail } = props;
  //   const qrCode = `<img src="${document.querySelector("canvas").toDataURL()}"/>`;
  const generateCAPDF = () => {
    const element = document.getElementById("contentToCA");
    const opt = {
      margin: 0,
      filename: `${companyname}_CA_Plan.pdf`,
      image: { type: "jpeg", quality: 1 }, // Adjust image quality
      html2canvas: { scale: 1.5 }, // Adjust scale to fit content onto one page
      jsPDF: { unit: "px", format: [795, 1042], orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <button onClick={generateCAPDF}>Download CA Plans</button>
      <body id="contentToCA">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={img5} />
        <br />
        <br />
        <p>CLICK on the link given below for any CA assisted plans and Apply the coupon code to get an exclusive discount on CA Plans for {companyname} employees.</p>
        <br />
        <p>
          Feel free to reach out to us on Ph no. +91-{ctpocphone} &amp; Email Id : {ctpocemail}
        </p>
        <br />
        <div className="table-container">
          <table classname="wd-100" className="catable">
            <tbody>
              <tr>
                <th classname="wd-10">Plan</th>
                <th classname="wd-5">Link</th>
                <th classname="wd-5">Coupon Code</th>
                <th classname="wd-5">Self Filing Plans</th>
              </tr>
              <tr>
                <td>Basic Plan</td>
                <td>
                  <a href={`https://cleartax.in/checkout/prod_itr_af_basic?coupon=${coupon}&utm_source=${source}&utm_medium=email&utm_campaign=itr_2025_corp_partnership_campaign`} target="_blank">
                    Link
                  </a>
                </td>
                <td rowSpan={11} style={{ fontsize: 40 }}>
                  <b>{coupon}</b>
                </td>
                <td rowSpan={11}>
                  <a href={`${partnerpagelink}?utm_source=${source}&utm_medium=email&utm_campaign=itr_2025_corp_partnership_campaign`}>
                    <button type="button" className="selfButton">
                      Click Here for Self Filing!
                    </button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>Premium Plan</td>
                <td>
                  <a href={`https://cleartax.in/checkout/prod_itr_af_premium?coupon=${coupon}&utm_source=${source}&utm_medium=email&utm_campaign=itr_2025_corp_partnership_campaign`} target="_blank">
                    Link
                  </a>
                </td>
              </tr>
              <tr>
                <td>Elite Plan</td>
                <td>
                  <a href={`https://cleartax.in/checkout/prod_itr_af_black?coupon=${coupon}&utm_source=${source}&utm_medium=email&utm_campaign=itr_2025_corp_partnership_campaign`} target="_blank">
                    Link
                  </a>
                </td>
              </tr>
              <tr>
                <td>Luxury Plan</td>
                <td>
                  <a href={`https://cleartax.in/checkout/prod_itr_af_luxury?coupon=${coupon}&utm_source=${source}&utm_medium=email&utm_campaign=itr_2025_corp_partnership_campaign`} target="_blank">
                    Link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </div>
  );
}

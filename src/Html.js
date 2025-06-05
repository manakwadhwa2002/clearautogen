import React, { useState } from "react";
import QRCode from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DataPdf from "./DataPdf";

const QRTableGenerator = () => {
  const [qrData, setQRData] = useState("");
  const [companyname, setCompany] = useState("");
  const [coupon, setCoupon] = useState("");
  const [source, setSource] = useState("");
  const [partnerpagelink, setPpl] = useState("");
  const [ctpocemail, setMyEmail] = useState("");
  const [ctpocphone, setMyPhone] = useState("");
  const myProps = {
    qrData: qrData,
    companyname: companyname,
    coupon: coupon,
    source: source,
    partnerpagelink: partnerpagelink,
    ctpocemail: ctpocemail,
    ctpocphone: ctpocphone,
  };

  const handleCNChange = (event) => {
    setCompany(event.target.value);
  };
  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
  };
  const handleSourceChange = (event) => {
    setSource(event.target.value);
    setQRData(`${event.target.value}?utm_source=${event.target.value}&amp;utm_medium=email&amp;utm_campaign=itr_2024_corp_partnership_campaign`);
  };
  const handlePplChange = (event) => {
    setPpl(event.target.value);
    setQRData(`${event.target.value}?utm_source=${source}&amp;utm_medium=email&amp;utm_campaign=itr_2024_corp_partnership_campaign`);
  };
  const handleEmailChange = (event) => {
    setMyEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setMyPhone(event.target.value);
  };
  // Function to generate HTML table
  const generateHTML = () => {
    const qrCode = `<img src="${document.querySelector("canvas").toDataURL()}"/>`;
    const htmlContent = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    	<title></title>
      <meta charset="UTF-8" />
    	<meta content="width=device-width, initial-scale=1" name="viewport" /><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" />
    	<style type="text/css">@font-face {
            font-family: 'Gilroy';
            font-weight: normal;
            src: url('https://assets1.cleartax-cdn.com/cleartax-frontend/font/1606117730_gilroy_regular.otf')
              format('opentype');
            font-display: swap;
          }

          @font-face {
            font-family: 'Gilroy';
            font-weight: 500;
            src: url('https://assets1.cleartax-cdn.com/cleartax-frontend/font/1606117853_gilroy_medium.otf')
              format('opentype');
            font-display: swap;
          }

          @font-face {
            font-family: 'Gilroy';
            font-weight: 600;
            src: url('https://assets1.cleartax-cdn.com/cleartax-frontend/font/1606117950_gilroy_semibold.otf')
              format('opentype');
            font-display: swap;
          }

          @font-face {
            font-family: 'Gilroy';
            font-weight: 700;
            src: url('https://assets1.cleartax-cdn.com/cleartax-frontend/font/1606118037_gilroy_bold.otf')
              format('opentype');
            font-display: swap;
          }

          @font-face {
            font-family: 'Gilroy';
            font-weight: 800;
            src: url('https://assets1.cleartax-cdn.com/cleartax-frontend/font/1606118078_gilroy_extrabold.otf')
              format('opentype');
            font-display: swap;
          }
          /* latin */

          strong {
            font-weight: 700;
            font-weight: 800;
          }

          .ca-footer-left {
            display: inline-block !important;
            width: 48% !important;
            margin: 0 auto;
            text-align: left !important;
          }

          .ca-footer-right {
            display: inline-block !important;
            width: 52% !important;
            text-align: right !important;
            float: right;
          }

          .body-right-text {
            display: inline-block;
            padding-left: 12px;
            width: 48%;
            vertical-align: top;
          }

          .body-left-icon {
            display: inline-block;
            width: 48%;
            vertical-align: text-top;
          }

          .col-body {
            /* margin: 0px 10%; */
            padding-bottom: 10px;
            /*  border-bottom: 1px solid #586B85;*/
          }

          .inner-table {
            /* margin: 0px 32px;*/
          }

          .table-style {
            padding: 16px 8% 0px 8%;
            border-width: 0 0 1px 1px;
            border-spacing: 0;
            border-collapse: collapse;
            width: 100%;
          }

          .new-table td {
            border: 5px solid #1678fb;
            border-radius: 12px !important;
          }

          .title {
            font-size: 28px;
          }

          .table-style td,
          .table-style th {
            margin: 0;
            border-width: 1px 1px 0 0;
            /*height: 50px;*/
            font-family: 'Gilroy', Verdana, sans-serif;
            color: #fff;
            line-height: 22px;
            border: 1px solid #e1e5ee;
            text-align: left;
            padding: 12px;
          }

          .table-style th {
            font-size: 14px;
          }

          .table-style tr td {
            text-align: center;
          }

          .table-style tr td:nth-child(1) {
            text-align: left;
          }

          .table-style img.button {
            width: 90px;
          }

          .visible-mobile {
            display: none;
          }

          .br3 {
            border-right: 3px solid #9b9797 !important;
            border-bottom: 3px solid #9b9797 !important;
          }

          .footer {
            padding: 30px 72px;
          }

          @media only screen and (min-width: 1000px) {
            .inner-table {
              width: 600px;
            }
          }

          @media only screen and (max-width: 600px) {
            .visible-mobile {
              display: block;
            }
            .banner-sec {
              padding: 0 4% !important;
            }
            .table-sm {
              width: 100% !important;
              /* font-size: 12px !important; */
            }
            .footer-left {
              display: inline-block !important;
              width: 47% !important;
              /*  margin: 0 auto;*/
              text-align: left;
            }
            .footer-right {
              display: inline-block !important;
              width: 47% !important;
              text-align: center !important;
            }
            .footer-right {
              text-align: center !important;
              margin-top: -7px !important;
            }
            .footer-left-item {
              padding: 5px !important;
              vertical-align: middle;
            }
            .footer {
              padding: 20px 0 !important;
              text-align: center;
            }

            .hide {
              display: none;
            }

            .mobile-view {
              display: block !important;
            }
            .ca-footer-left {
              display: block !important;
              width: 100% !important;
              margin: 0 auto;
              /* text-align: center !important;*/
            }
            .ca-footer-right {
              display: block !important;
              width: 100% !important;
              text-align: center !important;
            }
            .body-right-text {
              display: inline-block;
              padding-left: 12px;
              width: 100%;
              padding: 10px 0px;
            }
            .body-left-icon {
              display: inline-block;
              width: 100%;
              vertical-align: top;
              padding: 10px 0px;
            }

            .col-body {
              margin: 0px 2%;
              padding-bottom: 15px;
              /* border-bottom: 1px solid #586B85; */
            }
            .inner-table {
              /*   margin: 0px 16px;
                    margin-bottom: 16px;*/
            }
            .table-style {
              padding: 16px 8% 0px 8%;
              width: 100%;
            }
            .table-style th {
              font-size: 10px !important;
              height: auto;
              line-height: 17px !important;
              padding: 6px 4px;
            }
            .table-style td {
              font-size: 9px;
              height: auto;
              line-height: 15px;
              padding: 6px;
            }
            .table-style .star {
              height: 7px;
            }
            .title {
              font-size: 22px;
            }
            .full-width-button {
              width: 100%;
              text-align: center;
            }
            .bg-padding {
              padding: 22px 40px;
            }
            .table-style img.button {
              width: 60px;
            }
            .footer-bg {
              padding: 12% 8% !important;
            }
            .mob-lr-pad {
              padding-left: 2% !important;
              padding-right: 2% !important;
            }
          }

          ul li {
            line-height: 28px;
            margin-bottom: 16px;
          }

          hr {
            border-top: 1px solid #e1e5ee;
            border-style: ridge;
            border-bottom: none;
            border-left: none;
            border-right: none;
          }

          .list-img li {
            list-style-type: none;
          }

          .list-img li:before {
            content: '';
            display: inline-block;
            height: 18px;
            width: 18px;
            background-image: url(https://assets1.cleartax-cdn.com/cleartax/images/1617952421_checkmarkcircle2outline.png);
            background-size: contain;
            margin-left: -25px;
            margin-right: 3px;
            vertical-align: middle;
          }

          .body-list-icon {
            display: inline-block;
            width: 4%;
            vertical-align: middle;
          }

          .body-list-text {
            display: inline-block;
            padding-left: 10px;
            width: 88%;
            vertical-align: top;
          }

          a.no-link-style {
            text-decoration: none;
            color: inherit;
          }

          @media (prefers-color-scheme: dark) {
            .inner-table {
              background: #ffffff !important;
            }
            table {
              color: #202124 !important;
            }
            .title {
              color: #202124 !important;
            }
            .table-style td {
              color: #ffffff !important;
            }
            .table-style td.green {
              color: #45d684 !important;
            }
            .table-style td.blue {
              color: #4593fc !important;
            }
            .table-style td.yellow {
              color: #ffd95b !important;
            }
            .footer-bg {
              background-color: #0d4897 !important;
            }
            .footer-bg td {
              color: #ffffff !important;
            }
          }

          .footer-logo-new {
            padding-bottom: 30px;
          }
          .footer-social-icon {
            padding: 30px;
          }
          .footer-social-icon a {
            width: 12%;
            display: inline-block;
          }
          .footer-keyword {
            line-height: 20px;
            color: #555555;
            font-size: 13px;
            font-family: 'Gilroy';
            padding: 32px 100px 40px;
            text-align: center;
            max-width: 525px;
          }
          .footer-matrix-data {
            padding: 19px 30px;
            background: #f4f4f6;
          }
          .footer-matrix-data-box {
            font-size: 18px;
            font-weight: 600;
            font-family: 'Inter', Verdana, sans-serif;
            color: #555555 !important;
            line-height: 27px;
            padding: 0px 10px;
            text-align: center;
            display: inline-block;
            width: 40%;
          }

          .footer-matrix-data-box p {
            line-height: 25px;
          }

          .footer-matrix-wrapper {
            width: 50%;
          }
          p {
            margin: 0;
          }

          @media only screen and (max-width: 767px) {
            .footer-social-icon {
              padding: 0px 5px 15px 5px !important;
            }
            .footer-social-icon a {
              width: 14% !important;
              display: inline-block !important;
            }
            .footer-keyword {
              line-height: 21px !important;
              padding: 20px !important;
            }
            .footer-matrix-data {
              padding: 10px 0 !important;
            }
            .footer-matrix-data-box {
              padding: 0 0 20px 0 !important;
              width: 49% !important;
            }
            .footer-matrix-wrapper {
              width: 100% !important;
              display: block !important;
            }
          }
    	</style>
    </head>
    <body style="
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none;
          margin: 0;
          padding: 0;
          font-family: 'Gilroy', Verdana, sans-serif;
          font-weight: 400;
          font-size: 14px;
          background: #f2f7f9;
        ">
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="table-sm" style="background: #ffffff; border: solid 1px #eaeaea">
    	<tbody>
    		<tr>
    			<td>
    			<table align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" width="100%">
    				<tbody>
    					<tr>
    						<td>
    						<table bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="inner-table" width="100%">
    							<tbody>
    								<tr>
    									<td align="center" style="padding: 0px 0% 0px 0%"><a href="${partnerpagelink}?utm_source=${source}&amp;utm_medium=email&amp;utm_campaign=itr_2024_corp_partnership_campaign"><img alt="" src="https://cleartax-media.s3.amazonaws.com/finfo/wg-utils/emailers/97a0410f-b6f7-44bd-9988-f96f5374755a.png" style="width: 100%;" /></a></td>
    								</tr>
    								<tr>
    									<td style="
                                                 font-family: 'Gilroy', Verdana,
                                                    sans-serif;
                                                 color: #202124;
                                                 font-size: 16px;
                                                 line-height: 23px;
                                                 padding: 10px 8% 0px 8%;
                                              ">
    									<div style="text-align: center;"><strong>Let ClearTax take care of your tax woes<br />
    									<br />
    									Say hi to stress-free tax filing &amp; enjoy exclusive&nbsp;discount</strong></div>
    									</td>
    								</tr>
    								<tr>
    									<td align="center" style="padding: 20px 5% 10px 5%;font-family: Helvetica, Verdana,  sans-serif;"><a href="${partnerpagelink}?utm_source=${source}&amp;utm_medium=email&amp;utm_campaign=itr_2024_corp_partnership_campaign"><img alt="" src="https://cleartax-media.s3.amazonaws.com/finfo/wg-utils/emailers/284bc87a-d397-4059-82c9-03b3accd7be8.PNG" style="width: 410px; height: 72px;" /></a><br />
    									<br />
    									&nbsp;
    									<table border="0" cellpadding="0" cellspacing="0">
    										<tbody>
    											<tr>
    												<td align="center" bgcolor="#1b368f" style="-webkit-border-radius: 6px; -moz-border-radius: 6px; border-radius: 6px;"><a href="${partnerpagelink}?utm_source=${source}&amp;utm_medium=email&amp;utm_campaign=itr_2024_corp_partnership_campaign" style="font-size: 14px; font-family: Helvetica, Verdana, sans-serif;background-color:#1478fa; color: #ffffff; text-decoration: none; text-decoration: none; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; padding: 12px 30px; display: inline-block;font-weight: 600;" target="_blank">File Now</a></td>
    											</tr>
    										</tbody>
    									</table>
    									&nbsp;

    									<div style="text-align: justify;">&nbsp;</div>

    									<div style="text-align: justify;"><span style="font-size:14px;"><span style="font-family:Verdana,Geneva,sans-serif;">This tax season, let ClearTax take taxes off your list. So that, while your taxes are being filed, you can enjoy better things in life!</span></span><br />
    									&nbsp;</div>

    									<div style="text-align: justify;"><span style="font-size:14px;"><span style="font-family:Verdana,Geneva,sans-serif;">ClearTax is so much more than just a tax-filing platform.</span></span><br />
    									&nbsp;</div>

    									<div style="text-align: justify;"><span style="font-size:14px;"><span style="font-family:Verdana,Geneva,sans-serif;">It is like that friend who&#39;s got your back, especially when it comes to the boring stuff like paperwork and calculations for taxes. They handle it all, so you end up with the biggest savings and zero headaches. Pretty cool, huh?</span></span></div>
    									</td>
    								</tr>
    								<tr>
    									<td align="center" style="padding: 20px 5% 10px 5%;font-family: Helvetica, Verdana,  sans-serif;">
    									<div style="text-align: left;">&nbsp;Over <span style="color:#3498db;"><strong>6 million</strong></span> taxpayers trust ClearTax already!</div>
    									<br />
    									<br />
    									<img alt="" src="https://cleartax-media.s3.amazonaws.com/finfo/wg-utils/emailers/26a4306e-be40-410b-bad9-cc6d8a3ea531.png" style="width: 100%;" /><br />
    									&nbsp;
    									<div style="text-align: left;">&nbsp;
    									<p><span style="font-size:12px;"><strong>Get instant acknowledgment from ITD.&nbsp;</strong></span><br />
    									<br />
    									&nbsp;</p>

    									<p><span style="font-size:12px;"><strong>So why wait? File your taxes with ClearTax as early as possible to get faster refunds and avoid penalties.</strong></span></p>
    									</div>
    									</td>
    								</tr>
    								<tr>
    									<td align="center" style="padding: 20px 5% 10px 5%;font-family: Helvetica, Verdana,  sans-serif;"><img alt="" src="https://cleartax-media.s3.amazonaws.com/finfo/wg-utils/emailers/44fbbc5c-cb0c-422e-8d77-8089a52773df.png" style="width: 100%;" /><br />
    									&nbsp;
    									<p style="margin-left: 80px; text-align: left;"><strong>Use coupon code:&nbsp;<span style="color:#3498db;">${coupon}</span>to get exclusive discounts</strong></p>
    									</td>
    								</tr>
    								<tr>
    									<td align="center" style="padding: 20px 5% 10px 5%;font-family: Helvetica, Verdana,  sans-serif;"><a href="${partnerpagelink}?utm_source=${source}&amp;utm_medium=email&amp;utm_campaign=itr_2024_corp_partnership_campaign"><img alt="" src="https://cleartax-media.s3.amazonaws.com/finfo/wg-utils/emailers/785746a1-79f6-40d1-9606-8caca5301f13.PNG" style="width: 136px; height: 34px;" /></a><br />
    									<br />
    									&nbsp;
    									<p><strong>Scan here to claim your reward :</strong><br />
    									<br />
                      ${qrCode}
    									<br />
    									&nbsp;</p>
    									</td>
    								</tr>
    								<tr>
    									<td align="center" style="padding: 20px 5% 10px 5%;font-family: Helvetica, Verdana,  sans-serif;">
    									<p><strong>Feel free to reach out to us for any ITR related query:</strong><br />
    									&nbsp;</p>

    									<p style="text-align: center;">${ctpocemail}: +91-${ctpocphone}<br />
    									<br />
    									corpsupport1@clear.in&nbsp;</p>
    									</td>
    								</tr>
    								<tr>
    									<td>
    									<table align="center" border="0" cellpadding="0" cellspacing="0" class="table-sm" style="
                                    background: #fff;
                                    border: solid 1px #eaeaea;
                                  ">
    										<tbody>
    											<tr>
    												<td>
    												<table align="center" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" width="100%">
    													<tbody>
    														<tr>
    															<td>
    															<table bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="inner-table" width="100%">
    																<tbody>
    																	<tr>
    																		<td>
    																		<table border="0" cellpadding="0" cellspacing="0" class="footer-bg-new" style="
                                                            background-color: #f4f4f6;
                                                          " width="100%">
    																			<tbody>
    																				<tr>
    																					<td>
    																					<div class="footer-logo-new" style="
                                                                    text-align: center;
                                                                    padding: 15px 0px;
                                                                  "><a href="${partnerpagelink}?utm_source=${source}&amp;utm_medium=email&amp;utm_campaign=itr_2024_corp_partnership_campaign" target="_blank"><img alt="Hurray! We are now LIVE with tax-filing" src="https://assets.clear.in/cleartax/images/1689695675_logocleartax.png" style="width: 130px;" /> </a></div>
    																					</td>
    																				</tr>
    																				<tr>
    																					<td>
    																					<table style="
                                                                    width: 100%;
                                                                  ">
    																						<tbody>
    																							<tr style="
                                                                        text-align: center;
                                                                      ">
    																								<td class="footer-matrix-data">
    																								<table style="
                                                                            width: 100%;
                                                                          ">
    																									<tbody>
    																										<tr>
    																											<td class="footer-matrix-wrapper">
    																											<div class="footer-matrix-data-box">
    																											<p>6M+</p>
    																											<span style="
                                                                                      font-weight: 400;
                                                                                      line-height: 17px;
                                                                                      font-size: 10px;
                                                                                      white-space: nowrap;
                                                                                    ">users trust Cleartax</span></div>

    																											<div class="footer-matrix-data-box">
    																											<p>1.8M+</p>
    																											<span style="
                                                                                      font-weight: 400;
                                                                                      line-height: 17px;
                                                                                      font-size: 10px;
                                                                                      white-space: nowrap;
                                                                                    ">hours saved</span></div>
    																											</td>
    																											<td class="footer-matrix-wrapper">
    																											<div class="footer-matrix-data-box">
    																											<p>₹800 Cr+</p>
    																											<span style="
                                                                                      font-weight: 400;
                                                                                      line-height: 17px;
                                                                                      font-size: 10px;
                                                                                      white-space: nowrap;
                                                                                    ">worth taxes filed</span></div>

    																											<div class="footer-matrix-data-box">
    																											<p>40Cr+</p>
    																											<span style="
                                                                                      font-weight: 400;
                                                                                      line-height: 17px;
                                                                                      font-size: 10px;
                                                                                      white-space: nowrap;
                                                                                    ">worth taxes saved</span></div>
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
    																					<div class="footer-social-icon" style="
                                                                    text-align: center;
                                                                  "><a href="https://clr.tax/YyNNk" target="_blank"><img alt="facebook" src="https://assets1.cleartax-cdn.com/cleartax/images/1684317181_vector3.png" style="
                                                                        display: inline-block;
                                                                        width: 16px;
                                                                        height: 28px;
                                                                      " /></a> <a href="https://clr.tax/suwbf" target="_blank"><img alt="instagram" src="https://assets1.cleartax-cdn.com/cleartax/images/1684316510_group.png" style="
                                                                        display: inline-block;
                                                                        width: 26px;
                                                                        height: 26px;
                                                                      " /></a> <a href="https://clr.tax/PdhRZ" target="_blank"><img alt="twitter" src="https://assets1.cleartax-cdn.com/cleartax/images/1684316978_vector1.png" style="
                                                                        display: inline-block;
                                                                        width: 23px;
                                                                        height: 20px;
                                                                      " /></a> <a href="https://www.linkedin.com/company/clearofficial/mycompany/" target="_blank"><img alt="linkedIn" src="https://assets1.cleartax-cdn.com/cleartax/images/1684317048_group1.png" style="
                                                                        display: inline-block;
                                                                        width: 22px;
                                                                        height: 22px;
                                                                      " /></a> <a href="https://clr.tax/HipAc" target="_blank"><img alt="youtube" src="https://assets1.cleartax-cdn.com/cleartax/images/1684317127_group2.png" style="
                                                                        display: inline-block;
                                                                        width: 29px;
                                                                        height: 18px;
                                                                      " /></a></div>
    																					</td>
    																				</tr>
    																				<tr>
    																					<td>
    																					<div style="
                                                                    color: #555555;
                                                                    text-align: center;
                                                                  ">
    																					<div style="
                                                                      display: inline-block;
                                                                      padding: 0 7px;
                                                                      border-right: 1px
                                                                        solid
                                                                        #555555;
                                                                    "><img alt="minutes" src="https://assets1.cleartax-cdn.com/cleartax/images/1684321329_vector4.png" style="
                                                                        width: 14px;
                                                                        height: 14px;
                                                                        vertical-align: middle;
                                                                      " /> <span style="
                                                                        padding-left: 6px;
                                                                      ">3 minutes</span></div>

    																					<div style="
                                                                      display: inline-block;
                                                                      padding: 0 7px;
                                                                      border-right: 1px
                                                                        solid
                                                                        #555555;
                                                                    "><img alt="steps" src="https://assets1.cleartax-cdn.com/cleartax/images/1684325261_group1000004057.png" style="
                                                                        width: 14px;
                                                                        height: 14px;
                                                                        vertical-align: middle;
                                                                      " /> <span style="
                                                                        padding-left: 6px;
                                                                      ">3 steps</span></div>

    																					<div style="
                                                                      display: inline-block;
                                                                      padding: 5px
                                                                        7px 0;
                                                                    "><img alt="zero stress" src="https://assets1.cleartax-cdn.com/cleartax/images/1684325310_vector5.png" style="
                                                                        width: 14px;
                                                                        height: 14px;
                                                                        vertical-align: middle;
                                                                      " /> <span style="
                                                                        padding-left: 6px;
                                                                      ">Zero stress</span></div>
    																					</div>
    																					</td>
    																				</tr>
    																				<tr>
    																					<td class="footer-keyword">Built for all kinds of income &lt;3- Salaried Employees | Mutual Funds &amp; Stocks Investors | Crypto Investors | NRIs | Foreign Income | Freelancers | Business owners | ESOPs | RSUs</td>
    																				</tr>
    																				<tr>
    																					<td style="
                                                                  text-align: center;
                                                                  color: #555555;
                                                                  font-size: 14px;
                                                                  font-weight: 400;
                                                                  line-height: 19px;
                                                                  padding: 0 20px
                                                                    50px;
                                                                ">Need assistance? Write to us at <a class="no-link-style" href="mailto:support@cleartax.in" style="
                                                                    color: #555555;
                                                                  ">support@cleartax.in</a></td>
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
    </html>
    `;
    return htmlContent;
  };

  // Function to download HTML file
  const downloadHTMLFile = () => {
    const htmlContent = generateHTML();
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${companyname}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <input value={companyname} onChange={handleCNChange} type="text" placeholder="Company Name" />
      <input value={coupon} onChange={handleCouponChange} type="text" placeholder="Coupon" />
      <input value={source} onChange={handleSourceChange} type="text" placeholder="Source" />
      <input value={partnerpagelink} onChange={handlePplChange} type="text" placeholder="Partnerpage Link" />
      <input value={ctpocemail} onChange={handleEmailChange} type="email" placeholder="Your Email" />
      <input value={ctpocphone} onChange={handlePhoneChange} type="number" placeholder="Your Phone (max len 10)" />
      <button onClick={downloadHTMLFile}>Download HTML</button>
      <QRCode value={qrData} />
      <DataPdf {...myProps} />
    </div>
  );
};

export default QRTableGenerator;

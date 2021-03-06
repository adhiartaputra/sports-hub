function sendEmail(person, agenda) {

return  `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
      <!--[if gte mso 9]><xml>
       <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
       </o:OfficeDocumentSettings>
      </xml><![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-- -->
  	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  	<!--<![endif]-->

      <style type="text/css" id="media-query">
        body {
    margin: 0;
    padding: 0; }

  table, tr, td {
    vertical-align: top;
    border-collapse: collapse; }

  .ie-browser table, .mso-container table {
    table-layout: fixed; }

  * {
    line-height: inherit; }

  a[x-apple-data-detectors=true] {
    color: inherit !important;
    text-decoration: none !important; }

  [owa] .img-container div, [owa] .img-container button {
    display: block !important; }

  [owa] .fullwidth button {
    width: 100% !important; }

  [owa] .block-grid .col {
    display: table-cell;
    float: none !important;
    vertical-align: top; }

  .ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid {
    width: 650px !important; }

  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
    line-height: 100%; }

  .ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4 {
    width: 216px !important; }

  .ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8 {
    width: 432px !important; }

  .ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col {
    width: 325px !important; }

  .ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col {
    width: 216px !important; }

  .ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col {
    width: 162px !important; }

  .ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col {
    width: 130px !important; }

  .ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col {
    width: 108px !important; }

  .ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col {
    width: 92px !important; }

  .ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col {
    width: 81px !important; }

  .ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col {
    width: 72px !important; }

  .ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col {
    width: 65px !important; }

  .ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col {
    width: 59px !important; }

  .ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col {
    width: 54px !important; }

  @media only screen and (min-width: 670px) {
    .block-grid {
      width: 650px !important; }
    .block-grid .col {
      vertical-align: top; }
      .block-grid .col.num12 {
        width: 650px !important; }
    .block-grid.mixed-two-up .col.num4 {
      width: 216px !important; }
    .block-grid.mixed-two-up .col.num8 {
      width: 432px !important; }
    .block-grid.two-up .col {
      width: 325px !important; }
    .block-grid.three-up .col {
      width: 216px !important; }
    .block-grid.four-up .col {
      width: 162px !important; }
    .block-grid.five-up .col {
      width: 130px !important; }
    .block-grid.six-up .col {
      width: 108px !important; }
    .block-grid.seven-up .col {
      width: 92px !important; }
    .block-grid.eight-up .col {
      width: 81px !important; }
    .block-grid.nine-up .col {
      width: 72px !important; }
    .block-grid.ten-up .col {
      width: 65px !important; }
    .block-grid.eleven-up .col {
      width: 59px !important; }
    .block-grid.twelve-up .col {
      width: 54px !important; } }

  @media (max-width: 670px) {
    .block-grid, .col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important; }
    .block-grid {
      width: calc(100% - 40px) !important; }
    .col {
      width: 100% !important; }
      .col > div {
        margin: 0 auto; }
    img.fullwidth, img.fullwidthOnMobile {
      max-width: 100% !important; }
    .no-stack .col {
      min-width: 0 !important;
      display: table-cell !important; }
    .no-stack.two-up .col {
      width: 50% !important; }
    .no-stack.mixed-two-up .col.num4 {
      width: 33% !important; }
    .no-stack.mixed-two-up .col.num8 {
      width: 66% !important; }
    .no-stack.three-up .col.num4 {
      width: 33% !important; }
    .no-stack.four-up .col.num3 {
      width: 25% !important; }
    .mobile_hide {
      min-height: 0px;
      max-height: 0px;
      max-width: 0px;
      display: none;
      overflow: hidden;
      font-size: 0px; } }

      </style>
  </head>
  <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF">
    <style type="text/css" id="media-query-bodytag">
      @media (max-width: 520px) {
        .block-grid {
          min-width: 320px!important;
          max-width: 100%!important;
          width: 100%!important;
          display: block!important;
        }

        .col {
          min-width: 320px!important;
          max-width: 100%!important;
          width: 100%!important;
          display: block!important;
        }

          .col > div {
            margin: 0 auto;
          }

        img.fullwidth {
          max-width: 100%!important;
        }
  			img.fullwidthOnMobile {
          max-width: 100%!important;
        }
        .no-stack .col {
  				min-width: 0!important;
  				display: table-cell!important;
  			}
  			.no-stack.two-up .col {
  				width: 50%!important;
  			}
  			.no-stack.mixed-two-up .col.num4 {
  				width: 33%!important;
  			}
  			.no-stack.mixed-two-up .col.num8 {
  				width: 66%!important;
  			}
  			.no-stack.three-up .col.num4 {
  				width: 33%!important;
  			}
  			.no-stack.four-up .col.num3 {
  				width: 25%!important;
  			}
        .mobile_hide {
          min-height: 0px!important;
          max-height: 0px!important;
          max-width: 0px!important;
          display: none!important;
          overflow: hidden!important;
          font-size: 0px!important;
        }
      }
    </style>
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #FFFFFF;width: 100%" cellpadding="0" cellspacing="0">
  	<tbody>
  	<tr style="vertical-align: top">
  		<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;"><![endif]-->

      <div style="background-image:url('https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?w=940&amp;h=650&amp;auto=compress&amp;cs=tinysrgb');background-position:top center;background-repeat:no-repeat;;background-color:transparent">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-image:url('https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?w=940&h=650&auto=compress&cs=tinysrgb');background-position:top center;background-repeat:no-repeat;;background-color:transparent" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 650px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="650" style=" width:650px; padding-right: 25px; padding-left: 0px; padding-top:30px; padding-bottom:30px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
              <div class="col num12" style="min-width: 320px;max-width: 650px;display: table-cell;vertical-align: top;">
                <div style="background-color: transparent; width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 25px; padding-left: 0px;"><!--<![endif]-->


                      <div class="">
  	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 20px; padding-top: 30px; padding-bottom: 30px;"><![endif]-->
  	<div style="font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;color:#333333; padding-right: 10px; padding-left: 20px; padding-top: 30px; padding-bottom: 30px;">
  		<div style="line-height:14px;font-family:Lato, Tahoma, Verdana, Segoe, sans-serif;font-size:12px;color:#333333;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 17px;text-align: right">&#160;<br></p><p style="margin: 0;line-height: 14px;text-align: right;font-size: 12px"><span style="font-size: 28px; line-height: 33px;">Hey!! ${person.name} </span></p><p style="margin: 0;line-height: 14px;text-align: right;font-size: 12px"><span style="font-size: 28px; line-height: 33px;">You've joined ${agenda.name} </span></p><p style="margin: 0;line-height: 14px;text-align: right;font-size: 12px"><span style="font-size: 28px; line-height: 33px;">Please wait for further notification</span></p></div>
  	</div>
  	<!--[if mso]></td></tr></table><![endif]-->
  </div>



  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
          <tr style="vertical-align: top">
              <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 15px;padding-left: 15px;padding-top: 15px;padding-bottom: 15px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                  <table class="divider_content" align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                      <tbody>
                          <tr style="vertical-align: top">
                              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                  <span></span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
      </tbody>
  </table>

                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>    <div style="background-color:#f0f0f0;">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:#f0f0f0;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 650px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="650" style=" width:650px; padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:30px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
              <div class="col num12" style="min-width: 320px;max-width: 650px;display: table-cell;vertical-align: top;">
                <div style="background-color: transparent; width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->


                      <div class="">
  	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 25px; padding-bottom: 10px;"><![endif]-->
  	<div style="font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:120%;color:#333333; padding-right: 10px; padding-left: 10px; padding-top: 25px; padding-bottom: 10px;">
  		<div style="font-size:12px;line-height:14px;color:#333333;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;"><p style="margin: 0;font-size: 18px;line-height: 22px;text-align: center"><span style="font-size: 24px; line-height: 28px;"><strong>"STAY HEALTHY AND HAPPY!!"<br></strong></span></p></div>
  	</div>
  	<!--[if mso]></td></tr></table><![endif]-->
  </div>


                      <div class="">
  	<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px;"><![endif]-->
  	<div style="font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:150%;color:#A5A5A6; padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px;">
  		<div style="font-size:12px;line-height:18px;color:#A5A5A6;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">Sport's-Hub Team</p></div>
  	</div>
  	<!--[if mso]></td></tr></table><![endif]-->
  </div>

                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>    <div style="background-color:#ffffff;">
        <div style="Margin: 0 auto;min-width: 320px;max-width: 650px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:#ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 650px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="650" style=" width:650px; padding-right: 0px; padding-left: 0px; padding-top:30px; padding-bottom:30px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
              <div class="col num12" style="min-width: 320px;max-width: 650px;display: table-cell;vertical-align: top;">
                <div style="background-color: transparent; width: 100% !important;">
                <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->



  <div align="center" style="padding-right: 10px; padding-left: 10px; padding-bottom: 10px;" class="">
    <div style="line-height:10px;font-size:1px">&#160;</div>
    <div style="display: table; max-width:151px;">
    <!--[if (mso)|(IE)]><table width="131" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse; padding-right: 10px; padding-left: 10px; padding-bottom: 10px;"  align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:131px;"><tr><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="https://www.facebook.com/sports-hub" title="Facebook" target="_blank">
            <img src="images/facebook@2x.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        <div style="line-height:5px;font-size:1px">&#160;</div>
        </td></tr>
      </tbody></table>
        <!--[if (mso)|(IE)]></td><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 5px">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="https://instagram.com/sports-hub" title="Instagram" target="_blank">
            <img src="images/instagram@2x.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        <div style="line-height:5px;font-size:1px">&#160;</div>
        </td></tr>
      </tbody></table>
        <!--[if (mso)|(IE)]></td><td width="32" style="width:32px; padding-right: 0;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;Margin-right: 0">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="https://twitter.com/-sports-hub" title="Twitter" target="_blank">
            <img src="images/twitter@2x.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        <div style="line-height:5px;font-size:1px">&#160;</div>
        </td></tr>
      </tbody></table>
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
  </div>

                <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
                </div>
              </div>
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>   <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  		</td>
    </tr>
    </tbody>
    </table>
    <!--[if (mso)|(IE)]></div><![endif]-->


  </body></html>`

}

module.exports = sendEmail

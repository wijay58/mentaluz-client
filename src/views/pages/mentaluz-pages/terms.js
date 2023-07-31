import "./assets/css/plugins.css";
import "./assets/css/style.css";
import "./assets/js/plugins";
import "./assets/js/main";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import logoImg from "./assets/images/logo.png"
import blurry from "./assets/images/shapes/blurry-shape-4.svg"
import screen1 from "./assets/images/screens/screen-1.jpg"
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 50,
      duration: 600,
      easing: "cubic-bezier(0.77, 0, 0.175, 1)",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <body className="body" data-bs-theme="dark">
      <div class="wrapper d-flex flex-column justify-between">
        <nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img src={logoImg} alt="" width="165" />
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <div class="navbar-toggler-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
              <div class="navbar-content-inner ms-lg-auto d-flex flex-column flex-lg-row align-lg-center gap-4 gap-lg-10 p-2 p-lg-0">
                <ul class="navbar-nav gap-lg-2 gap-xl-5">
                  <li class="nav-item">
                    <a class="nav-link " href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="index.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="index.html">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">Pricing</a>
                  </li>
                </ul>
                <Link to="/login" className="lab-btn">
                  <p className="btn btn-outline-primary-dark">Get started</p>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main class="flex-grow-1">

          <section class="pt-20 pb-10 pt-lg-30 pb-lg-15">
            <div class="container">
              <div class="row justify-center mb-10">
                <div class="col-lg-8">
                  <h2 class="text-white fw-medium mb-0">
                    Terms and Conditions
                  </h2>
                </div>
              </div>

              <div class="row justify-center mt-8">
                <div class="col-lg-8">
                  <div class="">
                    <article class="blog-post">
                      <p>
                        Mentaluz, SRL ("Mentaluz") operates Mentaluz.com (as defined below), your use of Mentaluz.com is governed by these Terms of Service (“Terms”), and your use of Mentaluz.com constitutes your acceptance of the Terms.
                      </p>
                      <p>
                        "Mentaluz.com" (the "Service") means Mentaluz.com project made available at <Link to="/login"><p>https://Mentaluz.com</p></Link> (the “Site”) and any other software, sites, and services offered by Mentaluz in connection therewith but does not include any sites, services, products, or offerings governed by other terms of use, or, other agreements between you and Mentaluz. "Customer Data" means any data you make available to Mentaluz or Mentaluz from your GitHub account for the purpose of using Mentaluz. "Content" means all content generated by Mentaluz on your behalf (including metric data) and does not include Customer Data.
                      </p>
                      <p>
                        We will endeavor to provide you with notice about major changes to the Terms or Mentaluz and other changes (via email to the address on your account), but we make no guarantees. Other changes could be, without limitation, changes to payment policies, security patches, added or removed functionality, and other enhancements or restrictions to Mentaluz. Your use of Mentaluz after the Terms have changed constitutes your acceptance of the Terms as changed. You may reject changes to the Terms by terminating your subscription in accordance with the "Cancellation and Termination" section of these Terms of Service. Mentaluz shall not be liable to you or to any third party for any change to Mentaluz.com.
                      </p>
                      <p>
                        Please use Mentaluz.com responsibly and in compliance with these Terms. If you don't, we reserve the right to terminate your subscription in accordance with the "Cancellation and Termination" section of these Terms of Service.
                      </p>
                      <h4>1. Use of Mentaluz</h4>
                      <p>
                        To use Mentaluz, you must (i) have a account (ii) authorize Mentaluz to access your Customer Data to provide Mentaluz, (iii) provide accurate account information any time you register to use Mentaluz, (iv) provide accurate account information when you register to use Mentaluz, and (v) be a human over the age of 13. Uses by automated methods are not permitted. You grant Mentaluz a non-exclusive, royalty-free, and worldwide license to use, store, and copy your Customer Data in order to provide Mentaluz.
                      </p>
                      <p>
                        You are responsible for the security of your passwords and for any use of your account. You may not allow multiple people to use the same account or otherwise access Mentaluz in a manner intended to avoid incurring fees.
                      </p>
                      <p>
                        You must comply with all applicable GitHub policies and terms of service. Mentaluz is not responsible for any acts or omissions of GitHub whether related to your account or otherwise.
                      </p>
                      <p>
                        Mentaluz reserves the right to enforce quotas and usage limits (to any resources, including the API) at its sole discretion, with or without notice, which may result in Mentaluz disabling or throttling your usage of the Service for any amount of time.
                      </p>
                      <p>
                        You are responsible for obtaining access to Mentaluz and that access may involve third party fees (such as Internet service provider or airtime charges). You are responsible for those fees. In addition, you must provide and are responsible for all equipment necessary to access the Site.
                      </p>
                      <p>
                        You may not use Mentaluz:
                        <ul>
                          <li>
                            for any illegal purpose, in any manner inconsistent with applicable laws, regulations, or ordinances, or to submit, post, upload, or otherwise transmit any Customer Data or Content that is unlawful, defamatory, libelous, invasive of another's privacy, abusive, threatening, harassing, vulgar, obscene, indecent or otherwise objectionable;
                          </li>
                          <li>
                            to submit, post, upload or otherwise transmit any Customer Data or Content that infringes or otherwise violates the rights of any third party, including without limitation privacy rights, fiduciary rights and proprietary rights;
                          </li>
                          <li>
                            to submit, post, upload or otherwise transmit Customer Data or Content that contains viruses, corrupted files, or any other similar software or programs that may damage the operation of Mentaluz or another person's computer; or
                          </li>
                          <li>
                            if you are a person barred from receiving Mentaluz under the laws of the United States or other countries, including the country in which you are resident or from which you use Mentaluz.
                          </li>
                        </ul>
                      </p>
                      <h4>2. Cancellation and Termination</h4>
                      <p>
                        To cancel your subscription, account, and access to Mentaluz, send us an email at <a href="mailto:hi@tryprojecthub.com?Subject=Cancel+Subscription">info@mentaluz.com</a> instructing us to do so or cancel via the functionality on the Waffle website. If you paid for your subscription, Mentaluz is not obligated to provide any refunds if you cancel your subscription or if Mentaluz terminates your subscription because you breached these Terms. If your subscription is cancelled or terminated in accordance with the foregoing before the end of the current paid-up month, your cancellation will take effect immediately and you will not be charged again. All of your Customer Data and Content will, within a reasonable amount of time to be determined solely by Mentaluz, be deleted from Mentaluz upon cancellation.
                      </p>
                      <p>
                        You agree that Mentaluz, in its sole discretion and for any or no reason, may terminate or suspend your account. You agree that any termination of your access to the Service may be without prior notice, and you agree that Mentaluz will not be liable to you or any third party for such termination. If you paid for your subscription, and Mentaluz did not terminate or suspend your account due to your breach of these Terms, Mentaluz will provide a pro-rata refund of unused subscription fees if it terminates or suspends your account in accordance with this paragraph.
                      </p>

                    </article>
                    <article class="blog-post">
                      <h4>3. Customer Data</h4>
                      <p>
                        entaluz claims no ownership or control over any Customer Data. Except for the license expressly granted by you to Mentaluz to provide Mentaluz, you retain all right, title, and interest in and to Customer Data and you are responsible for protecting those rights and interests, as appropriate. Notwithstanding the foregoing, you grant to Mentaluz for its use a worldwide, non-exclusive, royalty-free license to aggregate or compile Customer Data with customer data of other users of Mentaluz so long as such aggregation or compilation omits any data that would enable the identification of you (“Aggregated Data”). Mentaluz shall have a worldwide, perpetual, royalty-free license to use, modify, distribute and create derivative works based on such Aggregated Data, and as between you and Mentaluz, Mentaluz shall own all compilations of the Aggregated Data, including all reports, statistics or analyses created or derived therefrom.
                      </p>
                      <p>
                        You understand that projects in Mentaluz will display Customer Data to you and any collaborators that you designate for that project. You are solely responsible for any collaborators and third-parties (including third-party services) that you allow to view Customer Data and entrust them at your own risk.
                      </p>
                      <p>
                        You are solely responsible for configuring Mentaluz to allow appropriate access to your Customer Data. Mentaluz is not responsible if you fail to configure, or misconfigure, your project and inadvertently allow unauthorized parties to view any Customer Data.
                      </p>
                      <h4>4. Ideas and Feedback</h4>
                      <p>
                        As part of your use of Mentaluz, you may choose, or we may invite you, to submit comments, feedback or ideas about Mentaluz, including but not limited to ideas about improving Mentaluz or our other offerings ("Ideas"). You hereby grant Mentaluz a perpetual, royalty-free, unlimited, worldwide license to use and/or incorporate such Ideas into any Mentaluz offering (including Mentaluz) at any time in Mentaluz’s sole discretion. Ideas you submit will not be afforded any confidential treatment by Mentaluz, regardless of whether you request such treatment or otherwise designate Ideas as proprietary or confidential.
                      </p>
                      <h4>5. External Sites and Content</h4>
                      <p>
                        The Mentaluz may contain links to other websites or content (“Third Party Sites”). Mentaluz does not endorse, sanction or verify the accuracy or ownership of the information contained in/on any Third Party Site or any products or services advertised on Third Party Sites. If you decide to leave the Site and navigate to Third Party Sites, or install any software or download content from any such Third Party Sites, you do so at your own risk. Once you access a Third Party Site through a link on our Site, you may be subject to the terms and conditions of such Third Party Site. You should review the applicable policies, including privacy and data gathering practices, of any Third Party Site to which you navigate from the Site, or relating to any software you use or install from a Third Party Site, including any applicable license agreement. Concerns regarding a Third Party Site should be directed to the Third Party Site itself. Mentaluz bears no responsibility for any action associated with any Third Party Site.
                      </p>
                      <h4>6. License and Restrictions</h4>
                      <p>
                        Subject to and conditioned upon your agreement to and compliance with these Terms, we will make Mentaluz available to you on a subscription basis solely for your own use and not for resale or to provide services to any third party.
                      </p>
                      <p>
                        Excluding Third Party Sites and their related content, all of the content available on or through Mentaluz, including without limitation, text, photographs, graphics, logos, trade/service marks, and/or audiovisual content, but expressly excluding Customer Data, is owned and/or controlled by Mentaluz, its licensors or Mentaluz users and is protected, as applicable, by copyright, trademark, trade dress, patent, and trade secret laws, other proprietary rights, and international treaties. You acknowledge that Mentaluz and any underlying technology or software used in connection with Mentaluz contain our proprietary information.
                      </p>
                      <p>
                        You will not, nor will you attempt to (or allow anyone else to or attempt to):
                      </p>
                      <p>
                        <ul>
                          <li>
                            copy, modify, create a derivative work of, reverse engineer, decompile or otherwise attempt to extract the source code of Mentaluz or any part thereof;
                          </li>
                          <li>
                            attempt to disable or circumvent any security or verification mechanism used by Mentaluz;
                          </li>
                          <li>
                            use Mentaluz in any manner, or otherwise engage in any activity, that could damage, disable, overburden or impair our servers or networks, or interfere with or disrupt Mentaluz or any other users' use or enjoyment of Mentaluz.
                          </li>
                          <li>
                            attempt to gain unauthorized access to any of Mentaluz, member accounts, or computer systems or networks, through hacking, password mining or any other means.
                          </li>
                          <li>
                            remove any notices of copyright, trademark or other proprietary rights contained in/on or accessible through Mentaluz or in any content or other material obtained via Mentaluz;
                          </li>
                          <li>
                            use any robot, spider, website search/retrieval application, or other automated device, process or means to access, retrieve or index any portion of Mentaluz;
                          </li>
                          <li>
                            reformat or frame any portion of the web pages that are part of Mentaluz;
                          </li>
                          <li>
                            use Mentaluz for commercial purposes not permitted under these Terms;
                          </li>
                          <li>
                            in connection with your use of Mentaluz, make unauthorized use of others’ GitHub accounts or Customer Data;
                          </li>
                          <li>
                            create user accounts by automated means or under false or fraudulent pretenses;
                          </li>
                          <li>
                            provide or use tracking or monitoring functionality in connection with Mentaluz, including, without limitation, to identify other users’ actions or activities;
                          </li>
                          <li>
                            impersonate or attempt to impersonate any other person or entity, including without limitation Mentaluz or any employee, contractor or associate of Mentaluz; or
                          </li>
                          <li>
                            collect or store personal data about other users in connection with the prohibited activities described in this paragraph.
                          </li>
                        </ul>
                      </p>
                      <h4>7. Open Source Software</h4>
                      <p>Open source software licenses for components of Mentaluz released under an open source license constitute separate written agreements. To the limited extent that the open source software licenses expressly supersede these Terms, the open source licenses govern your agreement with Mentaluz only for the use of the components of Mentaluz released under an open source license.To cancel your subscription, account, and access to Mentaluz, send us an email at <a href="mailto:hi@tryprojecthub.com?Subject=Cancel+Subscription">info@mentaluz.com</a> instructing us to do so or cancel via the functionality on the Waffle website. If you paid for your subscription, Mentaluz is not obligated to provide any refunds if you cancel your subscription or if Mentaluz terminates your subscription because you breached these Terms. If your subscription is cancelled or terminated in accordance with the foregoing before the end of the current paid-up month, your cancellation will take effect immediately and you will not be charged again. All of your Customer Data and Content will, within a reasonable amount of time to be determined solely by Mentaluz, be deleted from Mentaluz upon cancellation.
                      </p>
                      <h4>8. Monitoring of Content</h4>
                      <p>
                        You understand that Mentaluz may access and disclose Customer Data or otherwise provide third parties access to it for the following reasons:
                      </p>
                      <p>
                        <ul>
                          <li>
                            to send an email message to you upon your request;
                          </li>
                          <li>
                            to maintain the Site and Mentaluz and to develop new and useful features and services;
                          </li>
                          <li>
                            to follow a court order, subpoena, complaint or a lawful request from governmental authorities;
                          </li>
                          <li>
                            to enforce these Terms;
                          </li>
                          <li>
                            to respond to claims that any Customer Data or Content violates third party rights;
                          </li>
                          <li>
                            to respond to your requests for customer service; and
                          </li>
                          <li>
                            to protect the rights, property, or personal safety of Mentaluz, users of Mentaluz’s offerings, including without limitation Mentaluz, and the public.
                          </li>
                        </ul>
                      </p>
                      <h4>9. Our Copyright Dispute Policy</h4>
                      <p>Open source software licenses for components of Mentaluz released under an open source license constitute separate written agreements. To the limited extent that the open source software licenses expressly supersede these Terms, the open source licenses govern your agreement with Mentaluz only for the use of the components of Mentaluz released under an open source license.To cancel your subscription, account, and access to Mentaluz, send us an email at <a href="mailto:hi@tryprojecthub.com?Subject=Cancel+Subscription">info@mentaluz.com</a> instructing us to do so or cancel via the functionality on the Waffle website. If you paid for your subscription, Mentaluz is not obligated to provide any refunds if you cancel your subscription or if Mentaluz terminates your subscription because you breached these Terms. If your subscription is cancelled or terminated in accordance with the foregoing before the end of the current paid-up month, your cancellation will take effect immediately and you will not be charged again. All of your Customer Data and Content will, within a reasonable amount of time to be determined solely by Mentaluz, be deleted from Mentaluz upon cancellation.</p>
                      <p>
                        Mentaluz respects the intellectual property of others and requires that our users do the same. If you believe that material or content residing on or accessible through Mentaluz infringes a copyright, please send a notice of copyright infringement containing the following information to the Designated Copyright Agent listed below:
                      </p>
                      <ul>
                        <li>
                          identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works;
                        </li>
                        <li>
                          identification of the claimed infringing material and information reasonably sufficient to permit us to locate the material on Mentaluz (providing the URL(s) of the claimed infringing material satisfies this requirement);
                        </li>
                        <li>
                          information reasonably sufficient to permit us to contact you, such as an address, telephone number, and an email address;
                        </li>
                        <li>
                          a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
                        </li>
                        <li>
                          a statement by you, made under penalty of perjury, that the above information in your notification is accurate and that you are the copyright owner or are authorized to act on the copyright owner's behalf; and
                        </li>
                        <li>
                          your physical or electronic signature.
                        </li>
                      </ul>
                      <p>
                        Our Designated Copyright Agent for notification of claimed infringement can be reached by email at: info@mentaluz.com
                      </p>
                      <p>
                        <b>Disclaimer of Warranties:</b>
                      </p>
                      <p>
                        IF YOU ACCESS MENTALUZ, YOU DO SO AT YOUR OWN RISK. WE PROVIDE MENTALUZ “AS IS,” “WITH ALL FAULTS” AND “AS AVAILABLE.” WE MAKE NO EXPRESS OR IMPLIED WARRANTIES OR GUARANTEES ABOUT MENTALUZ. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE HEREBY DISCLAIM ALL SUCH WARRANTIES, INCLUDING ALL STATUTORY WARRANTIES, WITH RESPECT TO MENTALUZ, INCLUDING WITHOUT LIMITATION ANY WARRANTIES THAT MENTALUZ IS MERCHANTABLE, OF SATISFACTORY QUALITY, ACCURATE, FIT FOR A PARTICULAR PURPOSE OR NEED, OR NON-INFRINGING. WE DO NOT GUARANTEE THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF Mentaluz WILL BE EFFECTIVE, RELIABLE OR ACCURATE OR WILL MEET YOUR REQUIREMENTS. WE DO NOT GUARANTEE THAT YOU WILL BE ABLE TO ACCESS OR USE Mentaluz (EITHER DIRECTLY OR THROUGH THIRD-PARTY NETWORKS) AT TIMES OR LOCATIONS OF YOUR CHOOSING. WE ARE NOT RESPONSIBLE FOR THE ACCURACY, RELIABILITY, TIMELINESS OR COMPLETENESS OF INFORMATION PROVIDED BY ANY OTHER USERS OF Mentaluz OR ANY OTHER DATA OR INFORMATION PROVIDED OR RECEIVED THROUGH Mentaluz. EXCEPT AS EXPRESSLY SET FORTH HEREIN, Mentaluz MAKES NO WARRANTIES ABOUT THE INFORMATION SYSTEMS, SOFTWARE AND FUNCTIONS MADE ACCESSIBLE BY OR THROUGH Mentaluz OR ANY SECURITY ASSOCIATED WITH THE TRANSMISSION OF SENSITIVE INFORMATION. Mentaluz DOES NOT WARRANT THAT Mentaluz WILL OPERATE ERROR-FREE, THAT ERRORS IN THE SERVICE WILL BE FIXED, THAT LOSS OF DATA WILL NOT OCCUR, OR THAT Mentaluz IS FREE OF COMPUTER VIRUSES, CONTAMINANTS OR OTHER HARMFUL ITEMS. UNDER NO CIRCUMSTANCES WILL Mentaluz, ANY OF OUR AFFILIATES, DISTRIBUTORS, PARTNERS, LICENSORS, AND/OR ANY OF OUR OR THEIR DIRECTORS, OFFICERS, EMPLOYEES, CONSULTANTS, AGENTS, OR OTHER REPRESENTATIVES BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY YOUR RELIANCE ON INFORMATION OBTAINED THROUGH THE SERVICE.
                      </p>
                      <br /><br />
                      <h2 class="section-title">10. Limitations on Liability</h2>
                      <p>
                        YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH US IS THE CANCELLATION OF YOUR USE OF MENTALUZ. IN NO EVENT SHALL WE BE LIABLE TO YOU (OR TO ANY THIRD PARTY CLAIMING UNDER OR THROUGH YOU) FOR ANY DAMAGES WHATSOEVER, INCLUDING, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES OR ANY BODILY INJURY, EMOTIONAL DISTRESS, DEATH OR ANY OTHER DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE MENTALUZ, WHETHER ON-LINE OR OFF-LINE, OR OTHERWISE IN CONNECTION WITH MENTALUZ. THESE EXCLUSIONS APPLY TO ANY CLAIMS FOR LOST PROFITS, LOST DATA, LOSS OF GOODWILL OR BUSINESS REPUTATION, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, ANY OTHER COMMERCIAL DAMAGES OR LOSSES, OR ANY PERSONAL INJURY OR PROPERTY DAMAGES, EVEN IF WE KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. Mentaluz’S LIABILITY UNDER THESE TERMS SHALL BE LIMITED TO THE FEES YOU PAID Mentaluz IN THE TWELVE MONTHS PRIOR TO THE DATE THE CLAIM AROSE. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.
                      </p>
                      <br /><br />
                      <h2 class="section-title">11. Indemnification</h2>
                      <p>
                        You agree to hold harmless and indemnify Mentaluz, and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any third party claim arising from or in any way related to (a) your breach of the Terms, (b) your use of MENTALUZ, (c) your violation of applicable laws, rules or regulations in connection with MENTALUZ, or (d) your Customer Data, including any liability or expense arising from all claims, losses, damages (actual and consequential), suits, judgments, litigation costs and attorneys' fees, of every kind and nature. In such a case, Mentaluz will provide you with written notice of such claim, suit or action.
                      </p>
                      <br /><br />
                      <h2 class="section-title">12. Choice of Law and Dispute Resolution</h2>
                      <p>
                        These Terms will be governed by and construed in accordance with the laws of the State of California without giving effect to principles of conflict of laws, and the parties consent to the jurisdiction of the federal courts of the State of California. Each party irrevocably submits to the jurisdiction and venue of any such court in any such action or proceeding. The United Nations Convention on Contracts for the International Sale of Goods will not apply to These Terms.
                      </p>
                      <br /><br />
                      <h2 class="section-title">13. General Legal Terms</h2>
                      <p>
                        These Terms constitute the whole legal agreement between you and Mentaluz and govern your use of the Service and completely replace any prior agreements between you and Mentaluz, written or oral, in relation to Mentaluz.
                      </p>
                      <p>
                        If any part of the Terms is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect.
                      </p>
                      <p>
                        The failure of Mentaluz to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision.
                      </p>
                      <p>
                        Mentaluz shall not be liable for failing or delaying performance of its obligations resulting from any condition beyond its reasonable control, including but not limited to, governmental action, acts of terrorism, earthquake, fire, flood or other acts of God, labor conditions, power failures, and Internet disturbances.
                      </p>
                      <p>
                        Mentaluz may assign this contract at any time to any parent, subsidiary, or any affiliated company, or as part of the sale to, merger with, or other transfer of our company to another entity. You may not assign these Terms.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="cta-section py-10 py-lg-15" data-aos="fade-up-sm" data-aos-offset="150">
            <div class="container">
              <div class="rounded-5 border position-relative z-1 bg-dark-blue-4">
                <div class="animate-scale position-absolute w-full h-full z-n1">
                  <img src={blurry} alt="" class="bg-shape img-fluid" />
                </div>
                <div class="row justify-center">
                  <div class="col-lg-10">
                    <div class="text-center pt-6 px-6 pt-md-10 px-md-10 pt-lg-18 px-lg-18">
                      <h2 class="mb-6 text-white">
                        Using
                        <span class="text-primary-dark">Mentaluz</span>
                        you can save hours each week creating long-form content.
                      </h2>
                      <Link to="/login">
                        <p class="btn btn-primary-dark">Get Started Free</p>
                      </Link>
                      <div class="cta-image-container mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 90" class="text-primary-dark arrow-shape">
                          <path fill="currentColor" d="M3.724 2.303c8.095 4.54 13.968 13.648 16.408 22.434 2.336 8.415 2.426 20.276-5.705 25.79-2.961 2.01-7.092 2.24-8.781-1.444-1.571-3.422.29-7.096 3.683-8.452 9.162-3.663 16.334 8.02 18.234 15.324a30.563 30.563 0 0 1 .279 14.195c-.952 4.334-2.866 9.283-6.298 12.254-.494.427-1.3-.29-.971-.84 1.77-2.928 3.677-5.571 4.79-8.851 1.155-3.405 1.62-7.048 1.44-10.626-.358-7.103-3.568-15.745-10.125-19.354-3.476-1.912-10.316-1.353-10.055 3.973.107 2.158 1.647 4.035 3.933 3.81 2.086-.209 4.001-1.766 5.333-3.279 5.427-6.16 4.857-15.89 2.67-23.215a39.21 39.21 0 0 0-5.682-11.577c-2.69-3.76-6.017-6.61-9.592-9.472-.35-.277.039-.896.44-.67Z" />
                          <path fill="currentColor" d="M1.562.977c9.931 2.79 17.058 11.508 19.312 21.4 1.085 4.762 1.187 9.7.548 14.54-.653 4.937-1.854 10.549-4.949 14.589-2.156 2.82-7.305 5.961-10.266 2.388-2.608-3.142-2.18-9.094.45-12.093 2.945-3.356 8.048-2.969 11.491-.718 4.112 2.688 6.675 7.596 8.265 12.12 3.48 9.905 2.395 21.33-3.11 30.327-.527.858-1.947.203-1.423-.676 3.935-6.565 5.559-14.253 4.688-21.84-.443-3.864-1.552-7.677-3.306-11.147-2.011-3.973-5.078-8.396-9.854-8.994-5.273-.66-7.99 4.089-7.3 8.82.403 2.76 1.938 4.99 5.042 4.079 2.519-.74 4.35-3.051 5.51-5.296 3.708-7.194 4.563-16.802 3.066-24.658C17.848 13.969 11.217 4.92 1.373 1.995.736 1.812.917.797 1.563.977Z" />
                          <path fill="currentColor" d="M21.218 73.052c.375 2.062.446 4.204.634 6.29.088.987.18 1.975.266 2.964.04.457-.025 2.873.383 3.085.21.11 2.177-1.456 2.452-1.64l2.452-1.641c1.595-1.065 3.329-2.678 5.205-3.148.671-.169 1.174.542.746 1.106-.792 1.05-1.99 1.644-3.08 2.36-1.23.812-2.464 1.62-3.695 2.432-1.142.748-3.43 3.037-4.974 2.3-1.476-.7-.955-3.793-1.042-5.105-.198-2.945-.602-5.957-.531-8.906a.595.595 0 0 1 1.184-.097Z" />
                          <path fill="currentColor" d="M21.773 73.169c-.032 2.254-.679 4.55-.972 6.789-.338 2.597-.601 5.224-.564 7.844-.465-.225-.933-.454-1.398-.68a76.772 76.772 0 0 0 6.002-4.227c1.876-1.465 3.568-3.521 5.632-4.678.6-.336 1.581.26 1.137.983-1.181 1.924-3.415 3.456-5.165 4.844a64.808 64.808 0 0 1-6.607 4.574c-.694.421-1.465-.14-1.385-.91.27-2.565.462-5.128.849-7.683.348-2.297.616-4.895 1.59-7.019.19-.398.887-.308.88.163Z" />
                          <path fill="currentColor" d="M22.85 71.546c-.873 5.764-1.778 11.525-2.588 17.298-.462-.304-.922-.605-1.384-.91 2.439-1.254 4.864-2.527 7.207-3.954 2.158-1.317 4.212-3.127 6.536-4.109.733-.31 1.331.688.841 1.25-1.713 1.972-4.396 3.318-6.619 4.634-2.326 1.378-4.712 2.663-7.172 3.78-.633.287-1.294-.395-1.174-1.015 1.098-5.725 2.104-11.464 3.137-17.2.137-.79 1.337-.563 1.215.226Z" />
                        </svg>
                        <div class="cta-img rounded-top-4">
                          <img src={screen1} alt="" class="img-fluid w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>

        <footer class="footer bg-striped pt-10 pt-lg-15">
          <div class="container">
            <div class="row g-10">
              <div class="col-lg-9 col-xl-8 order-lg-2">
                <div class="row g-6">
                  <div class="col-md-4 col-lg-4">
                    <div class="footer-widget text-center text-md-start">
                      <h6 class="text-white mb-2">Mentaluz</h6>
                      <ul class="link-list list-unstyled mb-0">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="blog.html">Features</a>
                        </li>
                        <li>
                          <a href="login.html">Pricing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="footer-widget text-center text-md-start">
                      <h6 class="text-white mb-2">Use Cases</h6>
                      <ul class="link-list list-unstyled mb-0">
                        <li>
                          <a href="Terms and Conditions.html">Terms and Conditions</a>
                        </li>
                        <li>
                          <a href="Privacy Policy.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-4">
                    <div class="footer-widget text-center text-md-start">
                      <h6 class="text-white mb-4">News & Update</h6>
                      <form action="#">
                        <div class="input-group">
                          <input type="email" class="form-control" placeholder="Enter your email" />
                          <button class="btn btn-primary-dark px-4" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.031 8.917 15.477-4.334a.5.5 0 0 1 .616.617l-4.333 15.476a.5.5 0 0 1-.94.067l-3.248-7.382a.5.5 0 0 0-.256-.257L3.965 9.856a.5.5 0 0 1 .066-.94v0Z" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 order-lg-1 me-auto">
                <div class="footer-widget text-center text-lg-start">
                  <a href="">
                    <img src={logoImg} alt="" class="img-fluid" width="135" />
                  </a>
                  <p class="fs-sm mb-0 mt-4">
                    A Magical Tool to Optimize you content for the first know who you're targeting. Identify your
                    target audience.
                  </p>
                </div>
              </div>
            </div>

            <div class="text-center py-6 mt-8">
              <p class="fs-sm mb-0">Copyright 2023. <span class="text-primary-dark">Mentaluz</span></p>
            </div>
          </div>
        </footer>

      </div>

      <script src="assets/js/plugins.js"></script>
      <script src="assets/js/main.js"></script>

    </body>
  );
};

export default Terms;

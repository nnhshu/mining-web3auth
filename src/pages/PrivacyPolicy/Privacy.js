import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import {
    Row,
    Col
} from 'antd';

import styled from 'styled-components';

import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

const Image = styled.div`
    >img{
        width: 100%;
    }
`

function PrivacyPolicy() {

    return (
        <>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="static-content text-white">
                        <h1>Privacy Policy</h1>
                        <p>We respect the privacy of our users and website visitors (collectively, "you") and are committed to protecting your online privacy. This Privacy Policy outlines the process and methods by which Bepmining and its associated entities (hereafter referred to as "Bepmining" or "we") manage, collect, maintain and process user personal data.</p>
                        <p>We may update this Privacy Policy from time to time. We will post a new privacy policy on this page to notify you of any changes. We encourage you to periodically review this privacy policy to understand the changes. Changes to this Privacy Policy are effective as of the time they are posted on this page.</p>
                        <p>By using the Service or this Site, you consent to the collection and use of information in accordance with this Privacy Policy. Unless otherwise stated in this Privacy Policy, the terms used in this Privacy Policy have the same meaning as our Service Agreement.</p>

                        <h2>Information Collection and Management</h2>
                        <p>We may use your personal data to provide and improve the cloud mining services ("Services") that Bepmining provides to you and to improve your experience on this website. "Personal Data" means any information relating to a person identified or identifiable. When you create an account for using the service, we collect the information you provide to us. We also use a variety of techniques to collect and store information, including cookies, pixel tags, local storage (such as browser network storage or application data cache, database and server logs). Personal Data may include, but not limited to, the information as follows :</p>

                        <h3>Registration information</h3>
                        <p>When you create an account, you will need to provide data. When you are individual users, including your email and/or other information. </p>
                        <p>If you refuse to provide the above information, we will not be able to provide you with the service.</p>

                        <h3>Log information</h3>
                        <p>Bepmining collects information ("log data") sent by your browser when you visit our website and log into your account. This log data may include the following information: your computer's Internet Protocol ("IP") address, browser type, browser version, page of services you visit, access time and date, time spent on these pages, and more Statistical data. In addition, we may use third-party services such as Google Analytics to collect, monitor, and analyze such information to enhance the functionality of our services. These third-party service providers have their own privacy policies that explain how they use this information. These third-party service providers can only view the use of your personal data when needed to perform tasks on our behalf.</p>

                        <h2>How we use your information</h2>
                        <p>We may use the personal information you provide for the following purposes:</p>
                        <ul>
                            <li>Show you our website and its content;</li>
                            <li>Identify you as a user in our system;</li>
                            <li>Process your order;</li>
                            <li>Provide customer service;</li>
                            <li>Respond to your request;</li>
                            <li>Provide you with product updates;</li>
                            <li>Improve our website;</li>
                            <li>Send newsletters, surveys, offers and other promotional materials related to our products;</li>
                            <li>Communicate with you;</li>
                            <li>Manage risk and protect this website, our services and you from fraud;</li>
                            <li>Comply with all applicable laws and regulations and enforce this website and the Bepmining Service Agreement;</li>
                            <li>Other purposes for your consent.</li>
                        </ul>

                        <h2>How we protect your information</h2>
                        <p>We adopt various measures to protect the Confidential Information (“Protective Measures”). Such measures include:</p>
                        <ul>
                            <li>physical measures, such as ensuring the Confidential Information is stored in a secure facility;</li>
                            <li>electronic measures, such as implementing strict access requirements for access to the Confidential Information;</li>
                            <li>management measures, such as setting up an internal department for the protection of the Confidential Systems, implementing internal controls to ensure only the relevant employees are permitted to access the Confidential Information and training to ensure the relevant employees know how to deal with the Confidential Information;</li>
                            <li>security measures, such as using security technology and management systems to minimise the risk that the Confidential Information would be disclosed, damaged, misused and/or accessed without proper authorisation. When storing and transmitting the Personal Information, we shall adopt measures such as encryption to protect the Personal Information; and</li>
                            <li>other measures, such as a periodic review of the procedures and technology used to protect the Confidential Information.</li>
                            <li>Should you become aware of any potential security vulnerability, please contact us so that we can take the appropriate measures as soon as possible. Despite the Protective Measures, we cannot guarantee the absolute safety of the Confidential Information. When registering for our Services, choose a complex password and turn on advance security features, such as two-factor authentication. Never share your account credentials with third-parties. Where necessary, we shall anonymise and remove the identifiers from the Confidential Information.</li>
                            <li>Subject to any applicable laws, rules and regulations, we store the Confidential Information for as long as it is reasonably necessary for the purposes as described in this Policy, and may be retained until the time limit for any legal challenges has expired or in order for us to comply with the regulatory requirements regarding the retention of such personal information.</li>
                        </ul>

                        <h2>Information about cookies</h2>
                        <p>In order to give you a better website access experience, we use "cookies" to allow this website to identify your browser and store user preferences and other information. You may modify the acceptance of cookies or reject our cookies if your browser or browser additional services allow it.</p>

                        <h2>Information Security</h2>
                        <p>While we are committed to protecting our websites and services, you are responsible for protecting and maintaining the security of your personal information and verifying that the personal information we maintain about you is accurate and up-to-date. You must prevent unauthorized access to your account. Be sure to log out when using a shared computer and do not disclose your account password and any other account registration information to unauthorized people.</p>
                        <p>However, none of the methods or electronic storage methods transmitted over the Internet are 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security. We cannot guarantee the security of your personal information transmitted to our website and/or through our services. Any personal information transmitted at your own risk.</p>

                        <h2>International Data Transmission</h2>
                        <p>By submitting your information, you agree that your information, including personal data, may be transferred and stored to computers and systems outside of the jurisdiction of your country. In the event of such transmissions, we will endeavour to ensure that your information is protected to the same extent as is specified in your country.</p>

                        <h2>Third Party Links</h2>
                        <p>Our services may include links to third party websites that are not operated by us. If you click on a third party link, you will be directed to the third party website. This Privacy Policy does not apply to other third party websites. We strongly encourage you to review the privacy policy of the websites you visit. Bepmining cannot control the content and privacy policies of any third party website or service and is not responsible for it.</p>

                        <h2>Change of Personal Data Usage Purpose</h2>
                        <p>If we decide to use your personal data for any purpose other than this Privacy Policy Statement, we will notify you and provide you with a valid exit path for you to choose not to use your personal data outside of this Privacy Policy. Other purposes.</p>
                        <p>We may send you emails about new services and new events. You can refuse to receive promotional emails from Bepmining by selecting the "Unsubscribe" feature in each email we send. However, you agree that users of the Service should continue to receive other important emails related to the Service.</p>

                        <h2>Information Retention Time</h2>
                        <p>Unless there is a retention requirement in applicable laws and regulations, we will only retain and store your personal information for the period of time required to achieve the purposes stated in this policy. Where permitted by law, we may store certain personal information for filing or legal protection of our rights.</p>

                        <h2>How to Understand, Acquire, Change or Delete Your Personal Information</h2>
                        <p>If you wish to confirm that we are processing your data, accessing any personal data we may have about you, correcting any personal information we collect, or deleting your personal information we collect, you may use the contact details set forth in this Privacy Policy. Ways to contact us.</p>
                        <p>It is important for us to ensure that the accuracy, completeness and up-to-dateness of the personal information we collect about you is important. If you find that your information is inaccurate or out of date, please let us know and we will make the appropriate changes. However, we may not be able to accept requests to change information if we believe that the change will violate any legal or legal requirements or result in incorrect information.</p>

                        <h2>How to Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please send an email to support@bepmining.io</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default PrivacyPolicy;

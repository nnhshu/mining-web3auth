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

function Terms() {

    return (
        <>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="static-content text-white">
                        <h1>Terms of use</h1>

                        <p>Bepmining Service Agreement (hereinafter referred to as “this Agreement”) is related to right and obligation specifications  or its designated relevant party, including but not limited to the Bepmining Website (https://www.bepmining.io), the Bepmining website owner and its affiliates website for numerous services of Bepmining. This agreement has the effect of the contract and applies to all your activities on the Bepmining platform. By accessing and/or using this website, the user accepts and agrees to all terms and conditions of this Agreement. If you do not agree to any term of this Agreement, please stop using the services provided by Bepmining and the Website. If you purchase any product provided by Bepmining, you shall agree to the service agreement of that product as well. Bepmining reserves the right to change or modify the terms of this Agreement at any time at its sole discretion. User should periodically review this Agreement for the latest changes. Once the modified agreement is published, it will effectively replace the original agreement(unless the effective time is otherwise prescribed). If users continue to use Bepmining services after the release of this Agreement and its modification, it means that you accept and agree to the modification.</p>

                        <h2>Service Content</h2>
                        <p>Bepmining uses its own system to provide services/products.</p>
                        <p>Provision, modification, and termination of services:</p>

                        <ul>
                            <li>While accepting the Bepmining services, the user agrees to accept all kinds of information services provided by Bepmining. The user hereby authorizes Bepmining to send business information to his/her email, mobile phone, mailing address, etc. Users can enter the Bepmining related page to change the user profile.</li>
                            <li>User that has any objection to the modification of this agreement, or is dissatisfied with the service of Bepmining, can exercise the following rights:(1) Stop the usage of Bepmining network service. (2) Inform Bepmining to stop its service through customer service channels. Upon termination of the service, the user's right to use the Bepmining Network Service is immediately terminated. In this case, Bepmining is not obligated to transmit any unprocessed information or unfinished services to the User or any third party that is not directly related.</li>
                            <li>Once the user buys the product and service on the platform, Bepmining has the right to refuse the refund for their own reasons.</li>
                        </ul>

                        <h2>User Registration</h2>
                        <h3>You hereby represent and warrant to Bepmining as follows, which representations and warranties will be deemed repeated each time you use the services provided by Bepmining:</h3>
                        <ul>
                            <li>if you are a natural person: you are at least 18 years old of age and have full civil capacity.</li>
                            <li>if you are an entity: you are duly organized and validly existing under the laws of the jurisdiction of your organization or incorporation and, if relevant under such laws, in good standing.</li>
                            <li>your use of the services provided by Bepmining complies with the applicable laws and regulations in your country/region, and your use of the services provided by Bepmining does not violate your obligations to any third party.</li>
                            <li>you have the requisite power to use the services provided by Bepmining and perform your corresponding obligations, and the Agreement and the corresponding purchase order(s) are valid and binding on you.</li>
                        </ul>
                        <h3>For the registration data provided by the user, the user agrees to:</h3>
                        <ul>
                            <li>provide legal, true, accurate and detailed personal information.</li>
                            <li>update the user information in time if there is any change. If the registration information provided by the user is illegal, untrue, inaccurate, or incomplete, the user shall bear the corresponding responsibilities and consequences, and Bepmining reserves the right to terminate the usage of Bepmining services.</li>
                            <li>Unless obtained express written consent from Bepmining, you shall only register for one account at Bepmining；</li>
                            <li>For compliance purpose such as KYC (know your client) and/or anti-money laundering, Bepmining reserves the right to request you to provide Bepmining your PII (Personally Identifiable Information) and/or financial information.</li>
                            <li>You will be required to enter your username and password when using certain features of the services provided by Bepmining. If you are unable to access your account for reasons such as you forget the password, Bepmining reserves the right to request specific information from you, including but not limited to proof of identity,proof of residence, telephone number or Email proof and any identifiable activity information on the Website, such as transaction ID, order number, withdrawal information, etc. However, you hereby agree that you will not share your username and/or password with any third party or allow any third party to access your account. Bepmining is not responsible for any consequences and losses caused by your improper use of your account and/or password or any third party’s use of your account and/or password. If you believe that your username and/or password are known to any third party or that your account has been accessed by any third party, you should notify Bepmining immediately.</li>
                        </ul>

                        <h2>Risk Factors</h2>
                        <p>Before purchasing any Service, you shall evaluate if the Service is suitable for your financial capabilities and risk preferences. By purchasing any Service provided by Bepmining, you acknowledge that you understand and accept all the risks associated with this Service. The risks listed in this Section are not exhaustive. These risks, and additional risks that may occur now or in the future, may prevent you from obtaining any gains, may cause you to suffer financial losses, and may even terminate the services we provide:</p>
                        <ul>
                            <li>Use of any digital assets or related product and service carries potential financial, regulatory and other risks.   Before using any digital asset or related products and services, you should confirm that you have sufficient knowledge and experience in the features and risks of blockchain technology, digital asset, and smart contracts. Your decision to participate in any digital asset activity and/or use of related services should be based on independent study and/or consultation with professionals as you deem necessary.</li>
                            <li>The value of any product or service provided by Bepmining and the value of any digital asset may be affected by many factors not controlled by Bepmining, including but not limited to mining difficulty and/or other changes in mining parameters/attributes, market price fluctuations in digital assets, hardware (such as mining machines) obsolescence and hardware amortization, etc.</li>
                            <li>Due to the nature of the digital asset, the value of any digital asset may lose some or all of its value at any time. You are aware of the fact that the value of any digital asset can decrease rapidly (and even decrease to zero). Bepmining is not responsible for any and all losses caused by the market price fluctuations of any digital asset.</li>
                            <li>Digital asset transactions may take a while to be confirmed. Although very unlikely, it does exist the situation when some digital asset transactions may never be confirmed, and unconfirmed digital asset transactions mean such transactions are not completed.</li>
                            <li>Digital asset transactions are irreversible: if you send any amount of digital assets to any person or digital asset wallet address in error, you may not be able to cancel the transaction or recover these funds.</li>
                            <li>If you lose or forget any PIN or password required to access and use the digital assets, the digital assets may be lost or unavailable to you.</li>
                            <li>Bepmining will maintain or upgrade the system periodically. You hereby confirm that you do not expect that your use of the Services provided by Bepmining is continuous, without any interruption. Unless otherwise expressly prescribed, Bepmining is not responsible for any and all losses caused by the suspension and interruption due to Bepmining’s maintenance and upgrading of its system.</li>
                            <li>No authentication or computer security technology is 100% secure and safe. You agree to bear all risks related to hacking or identity theft.</li>
                            <li>You understand and agree that Bepmining reserves the right to post, modify, and/or provide information related to our service through the Website, emails and other official channels. Bepmining is not responsible for information obtained through non-official channels of Bepmining. If you have any question related to the truthfulness of information sent in the name of Bepmining, please contact us immediately.</li>
                        </ul>

                        <h2>User rights</h2>
                        <h3>User's username, password and security:</h3>
                        <ul>
                            <li>The user has the right to choose whether to become a registered user of Bepmining . If the user chooses to become a registered user of Bepmining, he or she can create an account. The naming and usage of the account should comply with relevant laws and regulations and be ethical. The account must not contain any insults, threats, obscenities, hatred and other infringements of the legitimate rights and interests of others.</li>
                            <li>Once the user has successfully registered and becomes a Bepmining registered user, he or she will get the account (email address) and password and shall be responsible for all activities and events that occur after logging into the system with this account and the corresponding password. The user shall be liable for any legal liability that is directly or indirectly caused by the use of improper language and other actions of the account.</li>
                            <li>If the password is lost, user can reset the password by requiring a reset email sent to the registered email address.</li>
                        </ul>
                        <h3>Bepmining Commitment: after the purchase of Bepmining Service products, if Bepmining is unable to provide service due to the reason of the platform, an alternative solution shall be provided to users. Otherwise, Bepmining shall bear the loss caused by failing to provide the service and the amount of settlement shall be separately negotiated by both parties.</h3>
                        <p>Bepmining Official customer service email: support@bepmining.io </p>

                        <h2>User Restrictions and Obligations</h2>
                        <p>User must not use this site to endanger national security, divulge national secrets, infringe upon the legitimate rights and interests of the state's social collectives and citizens, and may not use this site to produce, copy and disseminate the following information:</p>
                        <ul>
                            <li>inciting resistance and undermining of the Constitution and laws, and administration regulations.</li>
                            <li>inciting subversion of state power and overthrowing the Socialist System.</li>
                            <li>inciting secession and undermining of national unity.</li>
                            <li>inciting national hatred, ethnic discrimination, and undermining national unity.</li>
                            <li>fabricating or distorting facts, spreading of rumors, disturbing social order.</li>
                            <li>promoting feudal superstition, obscenity, pornography, gambling, violence, murder, terror, abetment.</li>
                            <li>blatantly insulting others, fabricating facts, or other hostile behaviors.</li>
                            <li>harming the credibility of state organs.</li>
                            <li>other violations of the Constitution and laws and administrative regulations.</li>
                            <li>conducting commercial advertising.</li>
                        </ul>
                        <p>Users may not maliciously register Bepmining accounts by any means, including but not limited to multiple account registrations for the purpose of profiting, speculating, cashing, and gaining awards. Users should not steal other user accounts. If users violate the above provisions, Bepmining reserves the right to immediately suspend or terminate the services provided to Users and to take all necessary legal measures to the extent permitted by applicable laws and regulations.</p>
                        <p>The user is obliged to properly keep the Bepmining account and password, Google verification code, and the user shall be fully responsible for the username and password, and Google Key Security. The user is responsible for any legal consequence caused by the user's username or password, Google Key leakage. The platform is not responsible for the loss of property caused by the user's own information leakage.</p>
                        <p>It is forbidden for users to use Bepmining as a place, platform or medium for engaging in various illegal activities in any form. The User shall neither engage in any commercial activities in the name of Bepmining nor use the information/data on the Website without prior written authorization from Bepmining., and may not use Bepmining as a place, platform or medium for commercial activities in any form.</p>
                        <p>You agree to comply with all applicable laws and regulations, this Agreement and all rules and policies announced by Bepmining from time to time regarding the use of the Website and the services provided by Bepmining. You cannot use the Bepmining website and the services it provides that is prohibited by the laws and regulations applicable to you.</p>
                        <p>The taxable tax, and all hardware, software, service, or fees from other aspects while you are using this service, will be undertaken by yourself.</p>
                        <p>You agree and represent that you are using the services provided by Bepmining only for your own benefit and that you are not using the services provided by Bepmining on behalf of others or for the benefit of any third parties.</p>
                        <p>You agree to contact Bepmining immediately if you find or suspect any fraud or misconduct by any third party using the services provided by Bepmining.</p>
                        <p>You should not participate in any activities that may affect the services provided by Bepmining and/or the security of the Website.</p>
                        <p>You shall not use any method (such as Proxy, Tor, VPN, etc.) to block your Internet traffic and IP addresses or use other technical services that may hide the user's real Internet connection.</p>
                        <p>Intellectual property rights of any content displayed on the Website, including but not limited to articles, pictures, news, materials, website structure, website layout, website design, unless otherwise specified, are entirely owned by Bepmining or Bepmining’s licensor (if any). The User shall respect the intellectual property rights of Bepmining and Bepmining’s licensor (if any). </p>
                        <p>You hereby represent and warrant that your use of the services provided by Bepmining will not negatively affect Bepmining's reputation or cause Bepmining to assume legal responsibility or other penalties, fines, and sanctions.</p>
                        <p>You can shut down your account at any time. But you are still obligated to perform your obligations to any pending transaction. Besides, you will be responsible to us for any costs incurred prior to shutting down.</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Terms;

import { Box, Button, Container, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';

import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useSnackbar } from '../contexts/SnackbarContext';

const TermsAndPrivacy = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useAuth();
  const showSnackbar = useSnackbar();

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAcknowledge = async () => {
    try {
      await axios.post('/api/acknowledgment/acknowledge', {
        termsAccepted: true,
        privacyAccepted: true,
      });
      showSnackbar('Acknowledgment recorded', 'success');
    } catch (error) {
      showSnackbar('Failed to record acknowledgment', 'error');
    }
  };

  return (
    <Container>
      <Box sx={{ p: 4, backgroundColor: '#1e1e1e', borderRadius: '8px', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Terms of Service and Privacy Policy
        </Typography>
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab label="Terms of Service" />
          <Tab label="Privacy Policy" />
        </Tabs>
        <TabPanel value={activeTab} index={0}>
          <Typography variant="body1">
            // Your Terms of Service content here
            1. Acceptance of Terms
By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

2. Use License
Permission is granted to temporarily download one copy of the materials (information or software) on the website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:

Modify or copy the materials;
Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
Attempt to decompile or reverse engineer any software contained on the website;
Remove any copyright or other proprietary notations from the materials; or
Transfer the materials to another person or "mirror" the materials on any other server.
3. Disclaimer
The materials on the website are provided on an 'as is' basis. The website makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

4. Limitations
In no event shall the website or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if the website or an authorized representative has been notified orally or in writing of the possibility of such damage.

5. Accuracy of Materials
The materials appearing on the website could include technical, typographical, or photographic errors. The website does not warrant that any of the materials on its website are accurate, complete or current. The website may make changes to the materials contained on its website at any time without notice. However, the website does not make any commitment to update the materials.

6. Links
The website has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by the website. Use of any such linked website is at the user's own risk.

7. Modifications
The website may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.

8. Governing Law
These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the website operates and you irrevocably submit to the exclusive jurisdiction of the courts in that location.

9. User Conduct
Users agree not to use the website for any unlawful purpose or any purpose prohibited by these Terms of Service. You are responsible for your conduct and any content that you submit, post, or display on the website.

10. Termination
The website reserves the right to terminate your access to all or any part of the website at any time, with or without cause, with or without notice, effective immediately.

11. Privacy Policy
Your use of the website is also governed by our Privacy Policy, which covers how we collect, use, and protect your personal information.

By using the website, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.
          </Typography>
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <Typography variant="body1">
            // Your Privacy Policy content here

terms agreement pricy and terms
Rental Agreement Terms and Conditions
Rates and Conditions

Rates and Conditions are subject to change without notice, but confirmed bookings are not affected by such changes.
Amendments to bookings will result in recalculation of the rate.
All prices are in Australian dollars (AU$).
Rental Duration

Rental days are calculated on a calendar day basis.
No refunds for late pickup or early return.
Delivery and Return of the Vehicle

Vehicle must be returned in a clean condition with a full fuel tank.
Additional charges apply for non-compliance, including a cleaning fee of AU$300 and a soiling fee of AU$150 for unemptied waste tanks.
Late Drop-offs and Pick-ups

Approval is required for late drop-offs and pick-ups, with additional fees applicable.
Rental Extension

Authorization required for rental extensions, subject to availability and additional costs.
One-Way Rentals

Available between specific branches, with applicable fees.
Authorized Drivers

Only authorized drivers can drive the vehicle, and they must meet specific age and license requirements.
Use of the Vehicle

The vehicle must be driven in a prudent manner and not used for prohibited activities (e.g., off-road driving, illegal purposes).
Maintenance and Repairs

Reimbursement for mechanical failure repairs up to AU$100, with pre-approval required for costs over AU$100.
On-Road Assistance

24-hour assistance provided, with charges applicable for user-caused issues (e.g., running out of fuel, lost keys).
Vehicle Availability

Specific vehicle categories cannot be guaranteed; alternatives may be provided.
Vehicle Damage and Liability

Standard Damage Cover included with additional options for Liability Reduction.
Liability deposit required, refundable if the vehicle is returned without damage.
Exclusions to Damage Cover

No coverage for damage due to major breaches, misuse, or specific exclusions listed in the terms.
Credit Card Authority

Authorization to charge the credit card for various fees and charges.
Accident Procedures

Specific steps must be followed in case of an accident, including reporting and providing details to Go Camper.
Tolls and Traffic Offences

Charges and administration fees apply for traffic offences.
Rental Charges

Additional charges or refunds may apply after rental, based on final calculation.
Cancellations and Amendments

Fees apply for cancellations and amendments, with specific rates based on notice period.
Personal Information and Tracking Device

Personal information is collected for providing rental services, and the vehicle may be fitted with a tracking device.
Customer Warranties

The customer warrants that all provided information is true.
This summary outlines the key points of the rental agreement and terms for Go Camper. For detailed information, please refer to the full terms and conditions document.

terms od service for a regular website
Website Terms of Service
1. Acceptance of Terms
By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

2. Use License
Permission is granted to temporarily download one copy of the materials (information or software) on the website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:

Modify or copy the materials;
Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
Attempt to decompile or reverse engineer any software contained on the website;
Remove any copyright or other proprietary notations from the materials; or
Transfer the materials to another person or "mirror" the materials on any other server.
3. Disclaimer
The materials on the website are provided on an 'as is' basis. The website makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

4. Limitations
In no event shall the website or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if the website or an authorized representative has been notified orally or in writing of the possibility of such damage.

5. Accuracy of Materials
The materials appearing on the website could include technical, typographical, or photographic errors. The website does not warrant that any of the materials on its website are accurate, complete or current. The website may make changes to the materials contained on its website at any time without notice. However, the website does not make any commitment to update the materials.

6. Links
The website has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by the website. Use of any such linked website is at the user's own risk.

7. Modifications
The website may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.

8. Governing Law
These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the website operates and you irrevocably submit to the exclusive jurisdiction of the courts in that location.

9. User Conduct
Users agree not to use the website for any unlawful purpose or any purpose prohibited by these Terms of Service. You are responsible for your conduct and any content that you submit, post, or display on the website.

10. Termination
The website reserves the right to terminate your access to all or any part of the website at any time, with or without cause, with or without notice, effective immediately.

11. Privacy Policy
Your use of the website is also governed by our Privacy Policy, which covers how we collect, use, and protect your personal information.

By using the website, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.

privacy policy
Privacy Policy
1. Introduction
This Privacy Policy outlines how [Website Name] ("we," "our," or "us") collects, uses, discloses, and protects your personal information when you visit and use our website [website URL] (the "Site"). By using the Site, you agree to the terms of this Privacy Policy.

2. Information We Collect
We may collect the following types of information:

Personal Information: Information that can be used to identify you, such as your name, email address, phone number, and payment information.
Non-Personal Information: Information that cannot be used to identify you, such as browser type, operating system, and your use of the Site.
3. How We Collect Information
We collect information in the following ways:

Directly from You: When you provide it to us, such as when you create an account, make a purchase, or contact us.
Automatically: When you use the Site, we may use cookies and other tracking technologies to collect information about your use of the Site.
From Third Parties: We may receive information about you from other sources, such as social media platforms, and combine it with the information we collect.
4. Use of Information
We may use your information to:

Provide, maintain, and improve the Site.
Process transactions and send you related information, including purchase confirmations and invoices.
Send you technical notices, updates, security alerts, and support and administrative messages.
Respond to your comments, questions, and requests, and provide customer service.
Communicate with you about products, services, offers, promotions, and events offered by us and others, and provide news and information we think will be of interest to you.
Monitor and analyze trends, usage, and activities in connection with our Site.
Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of [Website Name] and others.
Personalize and improve the Site and provide advertisements, content, or features that match user profiles or interests.
5. Sharing of Information
We may share your information with:

Service Providers: Third-party vendors, consultants, and other service providers who need access to your information to perform services on our behalf.
Business Transfers: In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
Legal Requirements: If required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, act in urgent circumstances to protect the personal safety of users of the Site, or the public, or protect against legal liability.
With Your Consent: We may share your information with third parties when we have your consent to do so.
6. Security
We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.

7. Your Choices

Account Information: You may update, correct, or delete information about you at any time by logging into your account or contacting us. We may retain certain information as required by law or for legitimate business purposes.
Cookies: Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of the Site.
Promotional Communications: You may opt out of receiving promotional emails from us by following the instructions in those emails or by contacting us. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.
8. Children's Privacy
The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information of a child under 13, we will take steps to delete such information from our files as soon as possible.

9. Changes to This Privacy Policy
We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on the Site and updating the "Last Updated" date at the top of this Privacy Policy.

10. Contact Us
If you have any questions about this Privacy Policy, please contact us at:

Email: [Your Contact Email]
Address: [Your Physical Address]
By using the Site, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
          </Typography>
        </TabPanel>
        <Button variant="contained" color="primary" onClick={handleAcknowledge} sx={{ mt: 2 }}>
          Acknowledge
        </Button>
      </Box>
    </Container>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default TermsAndPrivacy;

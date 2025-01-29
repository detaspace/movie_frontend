import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Privacy = () => {
    return (
        <Container maxWidth="md">
            <Box py={4} px={{ xs: 2, sm: 4 }}>
                <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: 'black', marginTop: '41px' }}>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" textAlign="justify" sx={{ color: 'black' }}>
                    FERADOX PRIVACY POLICY

                    Last Updated: 29/01/2025

                    FERADOX ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application and services ("Service"). By accessing or using FERADOX, you agree to the terms outlined in this Privacy Policy.

                    1. Information We Collect
                    We may collect the following types of information:

                    Personal Information: When you create an account, we may collect your name, email address, and other identifying details.

                    Uploaded Content: Any images, videos, and documents you upload to FERADOX.

                    Usage Data: Information about how you interact with our Service, including access times, pages viewed, and IP address.

                    Device Information: Details about the device you use to access FERADOX, such as operating system and browser type.

                    2. How We Use Your Information
                    We use the collected information to:

                    Provide, operate, and improve our Service.

                    Allow you to upload, store, and share content.

                    Monitor and analyze usage patterns to enhance user experience.

                    Respond to inquiries and provide customer support.

                    Ensure compliance with legal requirements and our Terms of Service.

                    3. How We Share Your Information
                    We do not sell or rent your personal information. However, we may share your information in the following cases:

                    With Service Providers: Third-party vendors who help us operate and improve FERADOX.

                    For Legal Compliance: If required by law or to protect our rights, users, or the public.

                    Business Transfers: In case of a merger, sale, or acquisition, your data may be transferred to the new entity.

                    4. Data Security
                    We take reasonable measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.

                    5. Your Choices and Rights

                    Access & Update: You may access and update your personal information within the app.

                    Deletion: You can request the deletion of your account and associated data by contacting us.

                    Opt-Out: You may opt out of certain data collection practices where applicable.

                    6. Cookies and Tracking Technologies
                    FERADOX may use cookies and similar tracking technologies to improve user experience and analyze app performance. You can manage your cookie preferences through your browser settings.

                    7. Third-Party Links and Services
                    FERADOX may contain links to third-party websites or services. We are not responsible for their privacy practices, and we encourage you to review their policies before engaging with them.

                    8. Children's Privacy
                    FERADOX is not intended for users under the age of 13. If we become aware that we have collected personal data from a child under 13, we will take appropriate steps to delete the information.

                    9. Changes to This Privacy Policy
                    We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy within the app. Continued use of the Service after changes are posted constitutes acceptance of the revised Privacy Policy.

                    10. Contact Information
                    For questions or concerns regarding this Privacy Policy, contact us at: peradoxmail@gmail.com

                    By using FERADOX, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
                </Typography>
            </Box>
        </Container>
    );
};

export default Privacy;
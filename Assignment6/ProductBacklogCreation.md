**Product Backlog Creation Table**

|Story ID | User Story | Priority (MoSCoW) | Effort Estimate (SP) | Dependencies |
|---------|------------|-------------------|----------------------|--------------|
| US-001 | Register and log in securely using email and password or SSO. | Must-have | 5 | None | 
| US-002 | Process and convert grades into points. | Must-have | 5 | US-007 |
| US-003 | Redeem points for monetary rewards. | Must-have | 5 | US-002 |
| US-004 | View academic progress, the total points earned, and the transaction history on a dashboard. | Must-have | 5 | US-002, US-003 | 
| US-005 | Send notifications when grades are uploaded, and when points are earned or redeemed. | Should-have | 3 | US-002, US-003 |
| US-006 | Submit a dispute via form or and API. | Should-have | 3 | US-002 | 
| US-007 | Upload student grades manually to manage student records. | Must-have | 5 | None |
|US-008 | Assign roles to students, educators, and admins for specific access control. | Must-have | 3 | US-001 |
| US-009 | Encrypt user data for security and compliance. | Must-have | 5 |	None |
| US-010 | Generate transaction receipts for redemptions. | Should-have | 3 | US-003 |

*Justifying Prioritization*

Must-have Stories:

They are critical to the minimum viable product (MVP) and align with core stakeholder success metrics (security, usability, compliance, and core functionality):

*US-001 (Registration/Login)* To secure the authentication of users is foundational for the users trust and system access. SSO supports and ensures the flexibility for institutional users.

*US-002 (Process Grades into Points)* This directly relates to the product’s value proposition which ultimately is to convert academic performance into rewards. It depends on story ID US-007 which is to upload grades, which is also a must-have.

*US-003 (Redeem Points for Rewards)* At it's core is a monetization or reward structure. If this does not work then the product doe not deliver the main motive.

*US-004 (Dashboard for Progress/History)* Unifies the users experience by displaying their earned points, academic progress, and their transactions in one place and this is key for of the system transparency and engagement within the.

*US-007 (Upload Grades Manually)* Allows the educators and/or admins to input the data needed for US-002. If the grade uploads does not work, the system is not functioning.

*US-008 (Role-Based Access Control)* This feature is critical for security and compliance purposes. It depends on US-001 though.

*US-009 (Data Encryption)* This is a non-negotiable for compliance with data protection laws and user trust.

Should-Have Stories: 

They enhance the systems usability and functionality, but are not critical to launch:

*US-005 (Notifications)* This improves the users engagement in the system by alerting users about grade updates and point changes, although the core system can operate without it.

*US-006 (Dispute Submission)* It adds a layer of user support, but can be left out if the initial dispute handling is managed manually.

*US-010 (Generate Transaction Receipts)* This is to build trust by documenting redemptions and it is secondary to enabling the redemption process itself.
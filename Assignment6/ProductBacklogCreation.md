**Product Backlog Creation Table**

|Story ID | User Story | Priority (MoSCoW) | Effort Estimate (SP) | Dependencies |
|---------|------------|-------------------|----------------------|--------------|
| US-001 | Register and log in securely using email and password or SSO. | Must-have | 5 | None | 
| US-002 | Process and convert grades into points. | Must-have | 5 | US-007 |
| US-003 | Redeem points for monetary rewards. | Must-have | 5 | US-002 |
| US-004 | View academic progress, the total points earned, and the transaction history in a dashboard. | Must-have | 5 | US-002, US-003 | 
| US-005 | Send notifications when grades are uploaded or when earned or points redeemed. | Should-have | 3 | US-002, US-003 |
| US-006 | Submit a dispute via form or and API. | Should-have | 3 | US-002 | 
| US-007 | Upload student grades manually to manage student records. | Must-have | 5 | None |
|US-008 | Assign roles to students, educators, and admins for specific access control. | Must-have | 3 | US-001 | Generate transaction receipts for redemptions. | Should-have | 3 | US-003 |
| US-009 | Encrypt user data for security and compliance. | Must-have | 5 |	None |
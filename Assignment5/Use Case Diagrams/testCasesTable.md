**Test Cases**

**Functional Requirements**

| Test Case ID  | Requirement ID | Description | Steps  | Expected Result | Actual Result | Status (Pass/Fail) |
|---------------|----------------|-------------|--------|-----------------|---------------|--------------------|
| TC-001 | FR-001 | User Registration via Email/Password | 1. The user navigates to the registration page. 2. They enter a valid email address and password. 3. Submit. | The account is created; a confirmation is email sent. Passwords are stored as encrypted hashes in the database. | The account is created; a confirmation is email received. Password is stored as SHA-256 hash in the database. | Pass |
|TC-002	| FR-001 | Admin Login with 2FA	| 1. Admin enters their credentials. 2. They enter the 2FA code. 3. Submit.	|Admin then gains access to the dashboard. Their login is blocked if 2FA code is incorrect. | Their login was a success with a valid 2FA code. The login failed with an incorrect code. | Pass |	
| TC-003 | FR-002 |Manual Grade Upload by Educator |1. The educator uploads a CSV file with the students grades. 2. Submit. 3. The system will validate the data. |	The grades are then converted to points. The students will see the updated points on their dashboards. | The grades are uploaded; the points are calculated. The students see the updates within a 1 minute. | Pass |
| TC-004 | FR-002 |	Grade Sync from Educational Institution	| 1. The educator will trigger a grade sync function. 2. The system then fetches the grades via an API. 3. Validate the data's integrity. | The grades are then imported; and the students are notified. A sync failure trigger alerts to the educators. | The grades are synced successfully. Students do receive the notifications. | Pass |	
| TC-005 | FR-003 | Student Redeems Points | 1. The student selects the "Redeem Points" button. 2. They enter the amount. 3. Confirm. | Their points are deducted; the payment is processed via a gateway. The receipt is sent to the student. | The points are deducted; the payment is processed. A receipt is emailed instantly to the student. | Pass |
| TC-006 | FR-003 | Insufficient Points for Redemption | 1. A student with 50 points tries to redeem 100 points. 2. Confirm. | The redemption is blocked. The error message reads: "Insufficient points." | The error message displayed is: "Insufficient points." | Pass |
| TC-007 | FR-004 | Payment Processing via Gateway |1. Redeeming points. 2. Mock a payment provider response. 3. Validate transaction. | Payment is confirmed. The transaction is logged with a timestamp, an amount, and the providers details. | The error message is displayed as: "Insufficient points." | Pass |
| TC-008 | FR-005 | Student Dashboard Load Time	| 1. A student logs in. 2. A measure of the dashboard load time is taken. | The dashboard is fully loaded in <2 seconds. It displays the students grades, their points, and the transaction history. | The error message displayed is: "Insufficient points." | Pass |
| TC-009 | FR-006 | Grade Update Notification | 1. Educator uploads grades. 2. Check student notifications.	| Student receives email/SMS/in-app alert within 1 minute. | An in-app notification is received in 45 seconds. The email is delayed by 3 minutes. | Fail |
| TC-010 | FR-007 | Student Submits Dispute | 1. The student files a dispute via a form. 2. The educator reviews the dispute.3. Approve/deny. | The dispute is logged. The student is notified of the resolution. An audit trail is created. | A dispute is logged. The student is notified via an email. The audit trail is missing a timestamp. | Fail |	
| TC-011 | FR-008 | Data Encryption Check | 1. Inspection of the database storage. 2. Monitoring the network traffic during the login process. | The sensitive data such as, passwords, and grades are encrypted with AES-256 at rest, and TLS 1.3 in transit. | The passwords are encrypted with AES-256. The network traffic uses TLS 1.3. | Pass |	
| TC-012 | FR-010 |	Concurrent User Load Test |	1. Simulate 5,000 users accessing their dashboards. 2. Monitor the response time. | All the dashboards load in <2 seconds. No server crashes or timeouts occur.	| 4,950/5,000 dashboards loaded in <2s. 50 users timed out due to server overload. | Fail |
|

**Non-Functional Requirements**

*Performance*: Validate the system’s ability to handle 5,000 users accessing dashboards at the same time with a response time of less than or equal to 2 seconds.

*Security*: Ensure the sensitive data is encrypted and in accordance with compliance regulations.
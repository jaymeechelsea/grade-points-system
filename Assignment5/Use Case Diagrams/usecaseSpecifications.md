**Specifications Document**

**1**
*Use Case*: Register
*Actors*: Users (Students, Educators, Admins)
*Description*: Users (Students, Educators, Admins) are able to create an account through an email/password or OAuth/SSO.
*Pre-Contitions*: If the user is not logged in. System is still operational.
*Post-Conditions*: A user account is then created in the database accompanied by encrypted credentials. The user receives a confirmation email once account is created.
*Basic Flow*: 
*1.* The user selects the "Register" button and chooses email/password or OAuth/SSO options. 
*2.* They then enter their email/password or authenticates via Identity Provider. 
*3.* The system then validates the input, the email and password. 
*4.* The system creates the account with a role attached either; Student, Educator, or Admin. 
*5.* THe system will send a confirmation email. 
*6.* The user verifies the email.
*Alternative Flow*: 
Alt. Flow 1: The email is already registered, the system then prompts the user to log in or reset their password. 
Alt. Flow 2: A weak password is entered, the system then rejects the registration and enforces their password policy. 
Alt. Flow 3: A OAuth/SSO failure occurs, the system then displays an error and suggests the user to retry or perform manual registration.

**2**
*Use Case*: Redeem Points
*Actors*: Student
*Description*: Students can convert their earned points into monetary rewards via a payment gateway.
*Pre-Contitions*: The student is logged into the system. The student has sufficient points. The Payment Provider is then available.
*Post-Conditions*: Points are then deducted from the student’s account. A payment is processed, and a receipt is then generated.
*Basic Flow*: 
*1.* The student will navigate to the "Redeem Points" button on the dashboard. 
*2.* The system will display the current points amount and the current redemption rate. 
*3.* The student then enters the amount to redeem.
*4.* The system will validate the points and triggers Process Payment which is the Payment Provider. 
*5.* A Payment Provider then confirms the successful transaction. 
*6.* The system will then deduct points, log the transaction, and sends the receipt via email/app.
*Alternative Flow*: 
Alt. Flow 1: Thers is insufficient points in the students account, the system will block being able to redeem the points and notifies the student of this. 
Alt. Flow 2: There is a payment failure, the system will roll back the points deduction function and alerts the student of this. 
Alt. Flow 3: The rate changes mid-process, the new rate is applied to only the future transactions.

**3**
*Use Case*: Upload Grades (Manually)
*Actors*: Educator
*Description*: The educators will manually input the students grades via a form.
*Pre-Contitions*: The educator is logged in. They have security permission to upload the students grades.
*Post-Conditions*: The students grades are stored in the database. The points then are automatically calculated and visible for the students to see on their dashboard.
*Basic Flow*: 
*1.* The educator will select the "Upload Grades" button and chooses a course/class. 
*2.* The system will display a form for the educator to enter the students grades manually. 
*3.* The educator will input the grades and submits. 
*4.* The system then validates the grades. 
*5.* The system will convert the grades into points using the predefined rules. 
*6.* The points are then updated on the student dashboards.
*Alternative Flow*: 
Alt. Flow 1: An invalid grade input format, the system rejects submission and highlights the errors. 
Alt. Flow 2: A duplicate entry occurs, the system displays a warning to the educator and prevents duplicates. 
Alt. Flow 3: Sync conflict, the system prioritizes the manual entry of grades.

**4**
*Use Case*: Sync Grades
*Actors*: Educational Institution
*Description*: Will automatically import the grades from the Educational Institution’s systems.
*Pre-Contitions*: The integration with the institution is authorized. The educator has security permission to sync grades.
*Post-Conditions*: The grades are imported and stored in a database. The points are automatically calculated and visible to students on their dashboard.
*Basic Flow*: 
*1.* The educator then selects the "Sync Grades" button and chooses the educational institution.
*2.* The system fetches the grades via a secure API/file transfer.
*3.* The system validates the data format and it's integrity.
*4.* The grades are then converted into points and updated in the database.
*5.* The students will receive a notification about their new grades.
*Alternative Flow*: 
Alt. Flow 1: An integration failure occurs, the system will alert the educator and logs the error where the Technical Support is notified.
Alt. Flow 2: The data is corrupted, the system will roll back the sync and tries to enter the data again.
Alt. Flow 3: Compliance is breached, the system stops the sync job and alerts the Admin/Institution.

**5**. 
*Use Case*: Review Dispute
*Actors*: Educators
*Description*: The educators will assess and resolve the student disputes about their grades/points.
*Pre-Conditions*: The dispute is submitted by students. The educator logs in and is assigned to the course.
*Post-Conditions*: The dispute is then resolved, it's either approved or denied. The logs are updated for auditing purposes.
*Basic Flow*:
*1.* The educator will select a dispute from their dashboard.
*2.* The system displays a disputes details which includes: the student, their grade, and the reason.
*3.* The educator will review the evidence.
*4.* The educator either approves or denies the dispute and adds comments to it.
*5.* The system updates the grade/points and notifies the student of the update.
*6.* Audit log will record the action.
*Alternative Flows*:
Alt. Flow 1: The dispute is escalated, and the educator forwards it to the Administrator for further review.
Alt. Flow 2: The student appeals their dispute, the dispute is re-opened with more evidence.
Alt. Flow 3: A timeout occurs, the system automatically denies disputes unresolved after 7 days of submission.

**6** 
*Use Case*: Configure RBAC
*Actors*: Administrators (Admins)
*Description*: The admins will define the role-based access controls.
*Pre-Conditions*: The admin is logged into the system with 2FA. The system is in maintenance mode which is optional.
*Post-Conditions*: The role permissions are updated by the admin. The users will either lose or gain access to features based on new rules.
*Basic Flow*: 
*1.* The admin will navigate to the "Role Management" button in the admin panel.
*2.* The system displays the current roles available, student, educator, or admin and their permissions.
*3.* Admins then edit the permissions.
*4.* The system then validates changes.
*5.* Changes will then be applied, and the logs are updated.
*Alternative Flows*:
Alt. Flow 1: An invalid permission is set, the system then rejects the changes.
Alt. Flow 2: A conflict with existing sessions occur, the system will force the user to re-login.
Alt. Flow 3: An audit failure occurs, the system is reverted and the changes applied if compliance checks fail.

**7**
*Use Case*: Audit Logs
*Actors*: Administrators (Admins)
*Description*: The admins will generate compliance reports for the Government & Education Regulators.
*Pre-Conditions*: Admins are logged in with 2FA. The logs exist as transactions, disputes, and security events.
*Post-Conditions*: The report is generated and saved to a database. Government & Education Regulators can access the report.
*Basic Flow*:
*1.* The admin can select the "Generate Audit Report" button and chooses a timeframe.
*2.* The system will compile logs of the grades, the disputes, the payments, and logins.
*3.* The system encrypts the report and then stores it in a secure repository.
*4.* The admin shares the report with Government & Education Regulators via a secure channel.
*Alternative Flows*:
Alt. Flow 1: The data is incomplete, the system will warn the admins and it then excludes incomplete records.
Alt. Flow 2: Unauthorized access occurs, the system then blocks the report generation and alerts the admins.
Alt. Flow 3: The Government & Education Regulators request, Government & Education Regulators directly pulls reports via API.

**8**
*Use Case*: Troubleshoot System Errors
*Actors*: Technical Support & Developers
*Description*: The Technical Support & Developers resolve the system failures.
*Pre-Conditions*: An error is detected via monitoring or user reporting it. Technical Support & Developers have access to the logs and tools.
*Post-Conditions*: An error is resolved, and the system functionality is restored. The root cause is then documented.
*Basic Flow*:
*1.* The technical support & developer reviews the alerts or error logs.
*2.* The support then identifies the issue.
*3.* The support then applies a fix.
*4.* The system is tested to confirm is the resolution was successful.
*5.* An incident report is added to the knowledge base.
*Alternative Flows*:
Alt. Flow 1: A critical failure occurs, the system switches to backup servers while it's getting fixed.
Alt. Flow 2: There is a third-party outage, the support then contacts the Payment Provider and/or Educational Institution for updates.
Alt. Flow 3: Data loss occurs, restore the data from backups and reconcile transactions.
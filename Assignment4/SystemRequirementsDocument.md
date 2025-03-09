**System Requirements Document**

**Stakeholder analysis table Link.
[StakeholderAnalysisTable](StakeholderAnalysisTable.md)

**Reflection Link.
[Reflection](Reflection.md)

**Functional Requirements**

1. User Authentication & Role Management
- The system must let students, educators, and admins register and log in using a secure authentication process.

Acceptance Criteria:

Users should be able to register using email/password, or sign in via OAuth or Single Sign-On (SSO).
The passwords must be stored safely in a database using encryption. All login attempts should be limited so as to prevent brute-force attacks. The system must also support role-based access control (RBAC) to restrict functionalities based on the user type. Admins can access all functionalities, including user management and configuration. While educators are able to upload grades and manage the distribution of points, however they aren't able access or change other users' data. The students can view their grades and points earned, but can't change their scores.

2. Grading & Points Calculation
- The system should allow educators to upload student grades manually or integrate with external Learning Management Systems (LMS) such as Google Classroom or Moodle.

Acceptance Criteria:

Educators upload the grades manually through a form, or grades are automatically imported from an integrated LMS. The grade upload process must be error-free, and failures must be able to trigger an alert to the educator. The system must automatically convert grades into points based on predetermined rules. The grade-to-points conversion rule is defined, and applied consistently. The points are then automatically calculated and displayed for each student after grades are uploaded.

3. Reward System & Point Redemption
- The system must allow students to redeem earned points for monetary rewards via an integrated payment gateway.

Acceptance Criteria:

Students can redeem their points for money and the redemption process must trigger a transaction and notify the student of the successful transfer. The system must allow the admins to define and change point redemption rates, they should be able to do this through the admin interface. Changes to redemption rates must be applied to future transactions, but should not affect previously redeemed points.

4. Payment Processing
- The system must securely process point-to-money conversions using a third-party payment provider.

Acceptance Criteria:

Payment providers or banks need to be integrated and fully functional, with no disruptions during point-to-cash conversion. The payments should also be processed securely using encryption. The system must generate transaction receipts for each reward redemption and send them to students via email or in-app notifications. A detailed receipt is generated for every transaction and delivered to students immediately via email and within the app. The receipt includes the date, points redeemed, amount converted, and payment provider details.

5. Student & Educator Dashboard
- The system must provide students with a dashboard that displays their academic progress, total earned points, pending rewards, and transaction history.

Acceptance Criteria:

The student dashboard must display their academic progress and total points earned. While waiting on the rewards, the transaction history must be clearly visible. The system should load the dashboard in under 2 seconds the educators' dashboard allows them to upload grades, track student performance, and manage point distributions. Educators can access an interface to upload grades and track student performance. Educators can assign points and manage student progress through the dashboard.

6. Notifications & Alerts
- The system must notify students via email, SMS, or in-app alerts when new grades are available or when they earn/redeem points.

Acceptance Criteria:

Notifications will be sent as soon as the new grades are posted or when students earn/redeem points. Students will have the ability to stop getting specific types of notifications. The system must notify educators of pending grading tasks or student disputes related to grades or points. Educators will then receive immediate alerts regarding pending grading tasks and disputes. Educators can respond to disputes through the system, with clear tracking of actions taken.

7. Dispute Resolution & Support
- The system must allow students to submit disputes if they believe there is an error in their grade or point calculation.

Acceptance Criteria:

Students can submit a dispute via a simple form with details of their issue, the dispute submissions are logged, and students will receive the confirmation that their dispute has been received by the educator. The system must give educators with a review panel the ability to assess and resolve disputes. Educators can review submitted disputes and take actions such as approving or denying the dispute. All actions taken must be logged for auditing purposes.

8. Security & Data Protection
- The system must encrypt all user data (grades, financial transactions, personal details) to comply with data protection regulations.

Acceptance Criteria:

All sensitive data must be encrypted both at rest and in transit. The system must comply with relevant data protection regulations from the government. The system must use a two-factor authentication (2FA) for admins and educators to prevent unauthorized access. Admins and educators must set up 2FA before accessing sensitive features and the 2FA must be required after each login attempt.

9. Learning Management Systems & External API Integration
- The system must integrate with Learning Management Systems (LMS) such as Google Classroom, Blackboard, and Moodle to sync grades automatically.

Acceptance Criteria:

The system integrates with supported LMS platforms and can automatically fetch grades. Integration must occur securely, and there should be no errors during the grade syncing process.

10. Performance & Scalability
- The system must support concurrent access by thousands of users without performance degradation.

Acceptance Criteria:

The system must maintain a response time of under 2 seconds for all user interactions under peak load. Load testing must show the system can handle at least 5,000 concurrent users without significant slowdowns The system must load all student dashboards within 2 seconds to ensure a smooth user experience. The student dashboard must be fully rendered in less than 2 seconds under typical usage conditions.

**Non-functional Requirements**

1. Usability
The system must provide students with an intuitive dashboard that displays their academic progress, total earned points, pending rewards, and transaction history. It must also give educators an easy-to-use dashboard that allows them to upload grades, track student performance, and manage point distributions. It need to notify students via email, SMS, or in-app alerts about when new grades are available or when they earn/redeem points while at the same time notify educators of pending grading tasks or student disputes related to grades or points. Focusing on creating a user-friendly experience for students, educators, and admins, ensuring that all users can easily navigate the system, access their data, and stay informed about relevant activities.

2. Deployability
The system must support integration with external Learning Management Systems (LMS) such as Google Classroom, Blackboard, and Moodle to sync grades automatically. The system must expose RESTful APIs that allow external systems to fetch and update grading data securely. These make sure that the system can be easily deployed in existing educational environments by integrating with widely used LMS platforms.

3. Maintainability
The system must allow educators to upload student grades manually or via an integration with external Learning Management Systems (LMS) such as Google Classroom or Moodle. It must also automatically convert grades into reward points based on predetermined rules. Encryption of all user data including: grades, financial transactions, and personal details, to comply with data protection regulations. The system must perform regular security audits to identify and fix vulnerabilities. The emphasis is on the need for ease of maintenance, ensuring that the system can be regularly updated, secure, and flexible enough to handle changes, like grade conversion rules and external system integrations.

4. Scalability
The system must be able to support the ongoing access of thousands of users without decreasing the systems performance. The system must scale dynamically based on demand, preventing slowdowns during peak usage times.This ensures the system will handle a large number of users at once, with emphasis during peak times, and adjusts its capacity as needed to maintain consistent performance.

5. Security
The system must allow students, educators, and admins to register and log in using a secure authentication process. The focus here is on securing sensitive data, preventing unauthorized access, and ensuring that transactions and user activities are protected through secure methods like multi-factor authentication and encryption.

6. Performance
The system must load all student dashboards within 2 seconds to ensure a smooth user experience. This highlights the role of maintaining an efficient system, making sure that students can access their dashboards and other features as fast as possible for a positive user experience.
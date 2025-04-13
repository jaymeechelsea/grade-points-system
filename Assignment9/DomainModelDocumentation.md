| Entity | Attributes | Methods | Relationships |
|--------|------------|---------|---------------|
| User | user_id, name, email, password_hash, role, is_verified, created_at | register(), login(), verify_email(), update_profile(), change_password() | A User can be a Student, Educator, or Admin (Role). |
| Student | student_id, user_id (FK), total_points, redeemed_points, grade_average | redeem_points(), view_dashboard(), raise_dispute()| A Student is a User; can receive Grades, earn Points, make Redemptions, and raise Disputes. |
| Educator | educator_id, user_id (FK), department, assigned_courses | upload_grades(), resolve_dispute(), view_student_progress() | An Educator is a User; uploads Grades and manages Disputes. |
| Admin | admin_id, user_id (FK), permissions | assign_roles(), set_redemption_rate(), manage_users(), generate_reports() | An Admin is a User; manages Roles, RedemptionRules, and Users. |
| Grade | grade_id, student_id (FK), course_name, score, uploaded_by, uploaded_at | convert_to_points(), flag_for_dispute() | A Grade belongs to a Student; uploaded by an Educator. |
| Point | point_id, student_id (FK), grade_id (FK), value, awarded_at | calculate_value(), expire_point() | Points are derived from Grades; belong to a Student. |
| Redemption | redemption_id, student_id (FK), points_redeemed, monetary_value, redeemed_at | process_redemption(), generate_receipt() | A Redemption belongs to a Student; based on Points. |
| Dispute | dispute_id, student_id (FK), grade_id (FK), reason, status, submitted_at | submit_dispute(), resolve_dispute() | A Dispute is raised by a Student; resolved by an Educator/Admin; targets a Grade. |
| Notification | notification_id, user_id (FK), message, type, is_read, created_at | send_notification(), mark_as_read(), unsubscribe() | Notifications are sent to Users based on system events (grades, rewards, etc).|
| RedemptionRule | rule_id, conversion_rate, updated_by (FK), effective_from, created_at | set_rate(), get_current_rate() | Defined and updated by Admins; used in Point -> Redemption calculation. |

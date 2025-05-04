import { describe, test, expect } from '@jest/globals';
import AdminService from '../services/AdminService.mjs';
import DisputeService from '../services/DisputeService.mjs';
import EducatorService from '../services/EducatorService.mjs';
import GradeService from '../services/GradeService.mjs';
import NotificationService from '../services/NotificationService.mjs';
import PointService from '../services/PointService.mjs';
import RedemptionService from '../services/RedemptionService.mjs';
import RedemptionRuleService from '../services/RedemptionRuleService.mjs';
import StudentService from '../services/StudentService.mjs';
import UserService from '../services/UserService.mjs';

describe('AdminService', () => {
    let adminService;

    beforeEach(() => {
        adminService = new AdminService();
        adminService.admins = new Map();
    });

    test('should add a new admin', () => {
        const admin = { admin_id: 'admin_1', name: 'Faith Macdonald', permissions: ['manage_users'] };
        adminService.addAdmin(admin);

        const savedAdmin = adminService.getAdminById('admin_1');
        expect(savedAdmin).toEqual(admin);
    });

    test('should update an existing admin', () => {
        const admin = { admin_id: 'admin_1', name: 'Faith Macdonald', permissions: ['manage_users'] };
        adminService.addAdmin(admin);

        const updatedAdmin = { admin_id: 'admin_1', name: 'Ruth Macdonald', permissions: ['manage_users', 'view_reports'] };
        adminService.updateAdmin('admin_1', updatedAdmin);

        const savedAdmin = adminService.getAdminById('admin_1');
        expect(savedAdmin.name).toBe('Ruth Macdonald');
        expect(savedAdmin.permissions).toContain('view_reports');
    });

    test('should retrieve an admin by ID', () => {
        const admin = { admin_id: 'admin_1', name: 'Faith Macdonald', permissions: ['manage_users'] };
        adminService.addAdmin(admin);

        const foundAdmin = adminService.getAdminById('admin_1');
        expect(foundAdmin).toEqual(admin);
    });

    test('should return null for a non-existent admin', () => {
        const foundAdmin = adminService.getAdminById('non_existent_id');
        expect(foundAdmin).toBeNull();
    });

    test('should delete an admin by ID', () => {
        const admin = { admin_id: 'admin_1', name: 'Faith Macdonald', permissions: ['manage_users'] };
        adminService.addAdmin(admin);

        adminService.deleteAdmin('admin_1');
        const deletedAdmin = adminService.getAdminById('admin_1');
        expect(deletedAdmin).toBeNull();
    });

    test('should throw an error when deleting a non-existent admin', () => {
        expect(() => adminService.deleteAdmin('non_existent_id')).toThrow('Admin with ID non_existent_id not found.');
    });

    test('should retrieve all admins', () => {
        const admin1 = { admin_id: 'admin_1', name: 'Faith Macdonald', permissions: ['manage_users'] };
        const admin2 = { admin_id: 'admin_2', name: 'Ruth Macdonald', permissions: ['view_reports'] };
        adminService.addAdmin(admin1);
        adminService.addAdmin(admin2);

        const allAdmins = adminService.getAllAdmins();
        expect(allAdmins).toHaveLength(2);
        expect(allAdmins).toEqual(expect.arrayContaining([admin1, admin2]));
    });
});

describe('DisputeService', () => {
    let disputeService;

    beforeEach(() => {
        disputeService = new DisputeService();
        disputeService.disputes = new Map(); 
    });

    test('should add a new dispute', () => {
        const dispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        disputeService.addDispute(dispute);

        const savedDispute = disputeService.getDisputeById('dispute_1');
        expect(savedDispute).toEqual(dispute);
    });

    test('should update an existing dispute', () => {
        const dispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        disputeService.addDispute(dispute);

        const updatedDispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Grade corrected', status: 'resolved', created_at: new Date(), resolved_at: new Date() };
        disputeService.updateDispute('dispute_1', updatedDispute);

        const savedDispute = disputeService.getDisputeById('dispute_1');
        expect(savedDispute.status).toBe('resolved');
        expect(savedDispute.description).toBe('Grade corrected');
    });

    test('should retrieve a dispute by ID', () => {
        const dispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        disputeService.addDispute(dispute);

        const foundDispute = disputeService.getDisputeById('dispute_1');
        expect(foundDispute).toEqual(dispute);
    });

    test('should return null for a non-existent dispute', () => {
        const foundDispute = disputeService.getDisputeById('non_existent_id');
        expect(foundDispute).toBeNull();
    });

    test('should delete a dispute by ID', () => {
        const dispute = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        disputeService.addDispute(dispute);

        disputeService.deleteDispute('dispute_1');
        const deletedDispute = disputeService.getDisputeById('dispute_1');
        expect(deletedDispute).toBeNull();
    });

    test('should throw an error when deleting a non-existent dispute', () => {
        expect(() => disputeService.deleteDispute('non_existent_id')).toThrow('Dispute with ID non_existent_id not found.');
    });

    test('should retrieve all disputes', () => {
        const dispute1 = { dispute_id: 'dispute_1', student_id: 'student_1', description: 'Incorrect grade assigned', status: 'pending', created_at: new Date(), resolved_at: null };
        const dispute2 = { dispute_id: 'dispute_2', student_id: 'student_2', description: 'Points not updated', status: 'pending', created_at: new Date(), resolved_at: null };
        disputeService.addDispute(dispute1);
        disputeService.addDispute(dispute2);

        const allDisputes = disputeService.getAllDisputes();
        expect(allDisputes).toHaveLength(2);
        expect(allDisputes).toEqual(expect.arrayContaining([dispute1, dispute2]));
    });
});

describe('EducatorService', () => {
    let educatorService;

    beforeEach(() => {
        educatorService = new EducatorService();
        educatorService.educators = new Map(); 
    });

    test('should add a new educator', () => {
        const educator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Computer Science', courses: ['CS101'], created_at: new Date() };
        educatorService.addEducator(educator);

        const savedEducator = educatorService.getEducatorById('educator_1');
        expect(savedEducator).toEqual(educator);
    });

    test('should update an existing educator', () => {
        const educator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Computer Science', courses: ['CS101'], created_at: new Date() };
        educatorService.addEducator(educator);

        const updatedEducator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Mathematics', courses: ['Math101'], created_at: new Date() };
        educatorService.updateEducator('educator_1', updatedEducator);

        const savedEducator = educatorService.getEducatorById('educator_1');
        expect(savedEducator.department).toBe('Mathematics');
        expect(savedEducator.courses).toContain('Math101');
    });

    test('should retrieve an educator by ID', () => {
        const educator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Computer Science', courses: ['CS101'], created_at: new Date() };
        educatorService.addEducator(educator);

        const foundEducator = educatorService.getEducatorById('educator_1');
        expect(foundEducator).toEqual(educator);
    });

    test('should return null for a non-existent educator', () => {
        const foundEducator = educatorService.getEducatorById('non_existent_id');
        expect(foundEducator).toBeNull();
    });

    test('should delete an educator by ID', () => {
        const educator = { educator_id: 'educator_1', user_id: 'user_1', department: 'Computer Science', courses: ['CS101'], created_at: new Date() };
        educatorService.addEducator(educator);

        educatorService.deleteEducator('educator_1');
        const deletedEducator = educatorService.getEducatorById('educator_1');
        expect(deletedEducator).toBeNull();
    });

    test('should throw an error when deleting a non-existent educator', () => {
        expect(() => educatorService.deleteEducator('non_existent_id')).toThrow('Educator with ID non_existent_id not found.');
    });

    test('should retrieve all educators', () => {
        const educator1 = { educator_id: 'educator_1', user_id: 'user_1', department: 'Computer Science', courses: ['CS101'], created_at: new Date() };
        const educator2 = { educator_id: 'educator_2', user_id: 'user_2', department: 'Mathematics', courses: ['Math101'], created_at: new Date() };
        educatorService.addEducator(educator1);
        educatorService.addEducator(educator2);

        const allEducators = educatorService.getAllEducators();
        expect(allEducators).toHaveLength(2);
        expect(allEducators).toEqual(expect.arrayContaining([educator1, educator2]));
    });
});

describe('GradeService', () => {
    let gradeService;

    beforeEach(() => {
        gradeService = new GradeService();
        gradeService.grades = new Map(); 
    });

    test('should add a new grade', () => {
        const grade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        gradeService.addGrade(grade);

        const savedGrade = gradeService.getGradeById('grade_1');
        expect(savedGrade).toEqual(grade);
    });

    test('should update an existing grade', () => {
        const grade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        gradeService.addGrade(grade);

        const updatedGrade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'B', created_at: new Date() };
        gradeService.updateGrade('grade_1', updatedGrade);

        const savedGrade = gradeService.getGradeById('grade_1');
        expect(savedGrade.grade_value).toBe('B');
    });

    test('should retrieve a grade by ID', () => {
        const grade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        gradeService.addGrade(grade);

        const foundGrade = gradeService.getGradeById('grade_1');
        expect(foundGrade).toEqual(grade);
    });

    test('should return null for a non-existent grade', () => {
        const foundGrade = gradeService.getGradeById('non_existent_id');
        expect(foundGrade).toBeNull();
    });

    test('should delete a grade by ID', () => {
        const grade = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        gradeService.addGrade(grade);

        gradeService.deleteGrade('grade_1');
        const deletedGrade = gradeService.getGradeById('grade_1');
        expect(deletedGrade).toBeNull();
    });

    test('should throw an error when deleting a non-existent grade', () => {
        expect(() => gradeService.deleteGrade('non_existent_id')).toThrow('Grade with ID non_existent_id not found.');
    });

    test('should retrieve all grades', () => {
        const grade1 = { grade_id: 'grade_1', student_id: 'student_1', course_id: 'course_1', grade_value: 'A', created_at: new Date() };
        const grade2 = { grade_id: 'grade_2', student_id: 'student_2', course_id: 'course_2', grade_value: 'B', created_at: new Date() };
        gradeService.addGrade(grade1);
        gradeService.addGrade(grade2);

        const allGrades = gradeService.getAllGrades();
        expect(allGrades).toHaveLength(2);
        expect(allGrades).toEqual(expect.arrayContaining([grade1, grade2]));
    });
});

describe('NotificationService', () => {
    let notificationService;

    beforeEach(() => {
        notificationService = new NotificationService();
        notificationService.notifications = new Map();
    });

    test('should add a new notification', () => {
        const notification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Your grade has been updated.', type: 'info', is_read: false, created_at: new Date() };
        notificationService.addNotification(notification);

        const savedNotification = notificationService.getNotificationById('notif_1');
        expect(savedNotification).toEqual(notification);
    });

    test('should update an existing notification', () => {
        const notification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Your grade has been updated.', type: 'info', is_read: false, created_at: new Date() };
        notificationService.addNotification(notification);

        const updatedNotification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Your grade has been corrected.', type: 'alert', is_read: true, created_at: new Date() };
        notificationService.updateNotification('notif_1', updatedNotification);

        const savedNotification = notificationService.getNotificationById('notif_1');
        expect(savedNotification.message).toBe('Your grade has been corrected.');
        expect(savedNotification.type).toBe('alert');
        expect(savedNotification.is_read).toBe(true);
    });

    test('should retrieve a notification by ID', () => {
        const notification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Your grade has been updated.', type: 'info', is_read: false, created_at: new Date() };
        notificationService.addNotification(notification);

        const foundNotification = notificationService.getNotificationById('notif_1');
        expect(foundNotification).toEqual(notification);
    });

    test('should return null for a non-existent notification', () => {
        const foundNotification = notificationService.getNotificationById('non_existent_id');
        expect(foundNotification).toBeNull();
    });

    test('should delete a notification by ID', () => {
        const notification = { notification_id: 'notif_1', user_id: 'user_1', message: 'Your grade has been updated.', type: 'info', is_read: false, created_at: new Date() };
        notificationService.addNotification(notification);

        notificationService.deleteNotification('notif_1');
        const deletedNotification = notificationService.getNotificationById('notif_1');
        expect(deletedNotification).toBeNull();
    });

    test('should throw an error when deleting a non-existent notification', () => {
        expect(() => notificationService.deleteNotification('non_existent_id')).toThrow('Notification with ID non_existent_id not found.');
    });

    test('should retrieve all notifications', () => {
        const notif1 = { notification_id: 'notif_1', user_id: 'user_1', message: 'Your grade has been updated.', type: 'info', is_read: false, created_at: new Date() };
        const notif2 = { notification_id: 'notif_2', user_id: 'user_2', message: 'Your points have been redeemed.', type: 'success', is_read: true, created_at: new Date() };
        notificationService.addNotification(notif1);
        notificationService.addNotification(notif2);

        const allNotifications = notificationService.getAllNotifications();
        expect(allNotifications).toHaveLength(2);
        expect(allNotifications).toEqual(expect.arrayContaining([notif1, notif2]));
    });
});

describe('PointService', () => {
    let pointService;

    beforeEach(() => {
        pointService = new PointService();
        pointService.points = new Map(); 
    });

    test('should add a new point record', () => {
        const point = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        pointService.addPoint(point);

        const savedPoint = pointService.getPointById('point_1');
        expect(savedPoint).toEqual(point);
    });

    test('should update an existing point record', () => {
        const point = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        pointService.addPoint(point);

        const updatedPoint = { point_id: 'point_1', student_id: 'student_1', points_earned: 70, points_redeemed: 30, created_at: new Date() };
        pointService.updatePoint('point_1', updatedPoint);

        const savedPoint = pointService.getPointById('point_1');
        expect(savedPoint.points_earned).toBe(70);
        expect(savedPoint.points_redeemed).toBe(30);
    });

    test('should retrieve a point record by ID', () => {
        const point = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        pointService.addPoint(point);

        const foundPoint = pointService.getPointById('point_1');
        expect(foundPoint).toEqual(point);
    });

    test('should return null for a non-existent point record', () => {
        const foundPoint = pointService.getPointById('non_existent_id');
        expect(foundPoint).toBeNull();
    });

    test('should delete a point record by ID', () => {
        const point = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        pointService.addPoint(point);

        pointService.deletePoint('point_1');
        const deletedPoint = pointService.getPointById('point_1');
        expect(deletedPoint).toBeNull();
    });

    test('should throw an error when deleting a non-existent point record', () => {
        expect(() => pointService.deletePoint('non_existent_id')).toThrow('Point with ID non_existent_id not found.');
    });

    test('should retrieve all point records', () => {
        const point1 = { point_id: 'point_1', student_id: 'student_1', points_earned: 50, points_redeemed: 20, created_at: new Date() };
        const point2 = { point_id: 'point_2', student_id: 'student_2', points_earned: 100, points_redeemed: 50, created_at: new Date() };
        pointService.addPoint(point1);
        pointService.addPoint(point2);

        const allPoints = pointService.getAllPoints();
        expect(allPoints).toHaveLength(2);
        expect(allPoints).toEqual(expect.arrayContaining([point1, point2]));
    });
});

describe('RedemptionService', () => {
    let redemptionService;

    beforeEach(() => {
        redemptionService = new RedemptionService();
        redemptionService.redemptions = new Map();
    });

    test('should add a new redemption', () => {
        const redemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 50, reward: 'Gift Card', created_at: new Date() };
        redemptionService.addRedemption(redemption);

        const savedRedemption = redemptionService.getRedemptionById('redemption_1');
        expect(savedRedemption).toEqual(redemption);
    });

    test('should update an existing redemption', () => {
        const redemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 50, reward: 'Gift Card', created_at: new Date() };
        redemptionService.addRedemption(redemption);

        const updatedRedemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 70, reward: 'Voucher', created_at: new Date() };
        redemptionService.updateRedemption('redemption_1', updatedRedemption);

        const savedRedemption = redemptionService.getRedemptionById('redemption_1');
        expect(savedRedemption.points_redeemed).toBe(70);
        expect(savedRedemption.reward).toBe('Voucher');
    });

    test('should retrieve a redemption by ID', () => {
        const redemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 50, reward: 'Gift Card', created_at: new Date() };
        redemptionService.addRedemption(redemption);

        const foundRedemption = redemptionService.getRedemptionById('redemption_1');
        expect(foundRedemption).toEqual(redemption);
    });

    test('should return null for a non-existent redemption', () => {
        const foundRedemption = redemptionService.getRedemptionById('non_existent_id');
        expect(foundRedemption).toBeNull();
    });

    test('should delete a redemption by ID', () => {
        const redemption = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 50, reward: 'Gift Card', created_at: new Date() };
        redemptionService.addRedemption(redemption);

        redemptionService.deleteRedemption('redemption_1');
        const deletedRedemption = redemptionService.getRedemptionById('redemption_1');
        expect(deletedRedemption).toBeNull();
    });

    test('should throw an error when deleting a non-existent redemption', () => {
        expect(() => redemptionService.deleteRedemption('non_existent_id')).toThrow('Redemption with ID non_existent_id not found.');
    });

    test('should retrieve all redemptions', () => {
        const redemption1 = { redemption_id: 'redemption_1', student_id: 'student_1', points_redeemed: 50, reward: 'Gift Card', created_at: new Date() };
        const redemption2 = { redemption_id: 'redemption_2', student_id: 'student_2', points_redeemed: 100, reward: 'Voucher', created_at: new Date() };
        redemptionService.addRedemption(redemption1);
        redemptionService.addRedemption(redemption2);

        const allRedemptions = redemptionService.getAllRedemptions();
        expect(allRedemptions).toHaveLength(2);
        expect(allRedemptions).toEqual(expect.arrayContaining([redemption1, redemption2]));
    });
});

describe('RedemptionRuleService', () => {
    let redemptionRuleService;

    beforeEach(() => {
        redemptionRuleService = new RedemptionRuleService();
        redemptionRuleService.redemptionRules = new Map(); 
    });

    test('should add a new redemption rule', () => {
        const redemptionRule = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        redemptionRuleService.addRedemptionRule(redemptionRule);

        const savedRule = redemptionRuleService.getRedemptionRuleById('rule_1');
        expect(savedRule).toEqual(redemptionRule);
    });

    test('should update an existing redemption rule', () => {
        const redemptionRule = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        redemptionRuleService.addRedemptionRule(redemptionRule);

        const updatedRule = { rule_id: 'rule_1', description: 'Redeem 150 points for a $15 voucher', points_required: 150, reward: 'Voucher', created_at: new Date() };
        redemptionRuleService.updateRedemptionRule('rule_1', updatedRule);

        const savedRule = redemptionRuleService.getRedemptionRuleById('rule_1');
        expect(savedRule.points_required).toBe(150);
        expect(savedRule.description).toBe('Redeem 150 points for a $15 voucher');
    });

    test('should retrieve a redemption rule by ID', () => {
        const redemptionRule = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        redemptionRuleService.addRedemptionRule(redemptionRule);

        const foundRule = redemptionRuleService.getRedemptionRuleById('rule_1');
        expect(foundRule).toEqual(redemptionRule);
    });

    test('should return null for a non-existent redemption rule', () => {
        const foundRule = redemptionRuleService.getRedemptionRuleById('non_existent_id');
        expect(foundRule).toBeNull();
    });

    test('should delete a redemption rule by ID', () => {
        const redemptionRule = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        redemptionRuleService.addRedemptionRule(redemptionRule);

        redemptionRuleService.deleteRedemptionRule('rule_1');
        const deletedRule = redemptionRuleService.getRedemptionRuleById('rule_1');
        expect(deletedRule).toBeNull();
    });

    test('should throw an error when deleting a non-existent redemption rule', () => {
        expect(() => redemptionRuleService.deleteRedemptionRule('non_existent_id')).toThrow('Redemption rule with ID non_existent_id not found.');
    });

    test('should retrieve all redemption rules', () => {
        const rule1 = { rule_id: 'rule_1', description: 'Redeem 100 points for a $10 voucher', points_required: 100, reward: 'Voucher', created_at: new Date() };
        const rule2 = { rule_id: 'rule_2', description: 'Redeem 200 points for a $20 voucher', points_required: 200, reward: 'Voucher', created_at: new Date() };
        redemptionRuleService.addRedemptionRule(rule1);
        redemptionRuleService.addRedemptionRule(rule2);

        const allRules = redemptionRuleService.getAllRedemptionRules();
        expect(allRules).toHaveLength(2);
        expect(allRules).toEqual(expect.arrayContaining([rule1, rule2]));
    });
});

describe('StudentService', () => {
    let studentService;

    beforeEach(() => {
        studentService = new StudentService();
        studentService.students = new Map();
    });

    test('should add a new student', () => {
        const student = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5, created_at: new Date() };
        studentService.addStudent(student);

        const savedStudent = studentService.getStudentById('student_1');
        expect(savedStudent).toEqual(student);
    });

    test('should update an existing student', () => {
        const student = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5, created_at: new Date() };
        studentService.addStudent(student);

        const updatedStudent = { student_id: 'student_1', user_id: 'user_1', total_points: 120, redeemed_points: 30, grade_average: 90.0, created_at: new Date() };
        studentService.updateStudent('student_1', updatedStudent);

        const savedStudent = studentService.getStudentById('student_1');
        expect(savedStudent.total_points).toBe(120);
        expect(savedStudent.grade_average).toBe(90.0);
    });

    test('should retrieve a student by ID', () => {
        const student = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5, created_at: new Date() };
        studentService.addStudent(student);

        const foundStudent = studentService.getStudentById('student_1');
        expect(foundStudent).toEqual(student);
    });

    test('should return null for a non-existent student', () => {
        const foundStudent = studentService.getStudentById('non_existent_id');
        expect(foundStudent).toBeNull();
    });

    test('should delete a student by ID', () => {
        const student = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5, created_at: new Date() };
        studentService.addStudent(student);

        studentService.deleteStudent('student_1');
        const deletedStudent = studentService.getStudentById('student_1');
        expect(deletedStudent).toBeNull();
    });

    test('should throw an error when deleting a non-existent student', () => {
        expect(() => studentService.deleteStudent('non_existent_id')).toThrow('Student with ID non_existent_id not found.');
    });

    test('should retrieve all students', () => {
        const student1 = { student_id: 'student_1', user_id: 'user_1', total_points: 100, redeemed_points: 20, grade_average: 85.5, created_at: new Date() };
        const student2 = { student_id: 'student_2', user_id: 'user_2', total_points: 200, redeemed_points: 50, grade_average: 90.0, created_at: new Date() };
        studentService.addStudent(student1);
        studentService.addStudent(student2);

        const allStudents = studentService.getAllStudents();
        expect(allStudents).toHaveLength(2);
        expect(allStudents).toEqual(expect.arrayContaining([student1, student2]));
    });
});

describe('UserService', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService();
        userService.users = new Map();
    });

    test('should add a new user', () => {
        const user = { user_id: 'user_1', name: 'John Doe', email: 'john.doe@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        userService.addUser(user);

        const savedUser = userService.getUserById('user_1');
        expect(savedUser).toEqual(user);
    });

    test('should update an existing user', () => {
        const user = { user_id: 'user_1', name: 'John Doe', email: 'john.doe@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        userService.addUser(user);

        const updatedUser = { user_id: 'user_1', name: 'Jane Doe', email: 'jane.doe@example.com', password_hash: 'new_hashed_password', role: 'user', is_verified: false, created_at: new Date() };
        userService.updateUser('user_1', updatedUser);

        const savedUser = userService.getUserById('user_1');
        expect(savedUser.name).toBe('Jane Doe');
        expect(savedUser.email).toBe('jane.doe@example.com');
        expect(savedUser.role).toBe('user');
    });

    test('should retrieve a user by ID', () => {
        const user = { user_id: 'user_1', name: 'John Doe', email: 'john.doe@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        userService.addUser(user);

        const foundUser = userService.getUserById('user_1');
        expect(foundUser).toEqual(user);
    });

    test('should return null for a non-existent user', () => {
        const foundUser = userService.getUserById('non_existent_id');
        expect(foundUser).toBeNull();
    });

    test('should delete a user by ID', () => {
        const user = { user_id: 'user_1', name: 'John Doe', email: 'john.doe@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        userService.addUser(user);

        userService.deleteUser('user_1');
        const deletedUser = userService.getUserById('user_1');
        expect(deletedUser).toBeNull();
    });

    test('should throw an error when deleting a non-existent user', () => {
        expect(() => userService.deleteUser('non_existent_id')).toThrow('User with ID non_existent_id not found.');
    });

    test('should retrieve all users', () => {
        const user1 = { user_id: 'user_1', name: 'John Doe', email: 'john.doe@example.com', password_hash: 'hashed_password', role: 'admin', is_verified: true, created_at: new Date() };
        const user2 = { user_id: 'user_2', name: 'Jane Doe', email: 'jane.doe@example.com', password_hash: 'hashed_password', role: 'user', is_verified: false, created_at: new Date() };
        userService.addUser(user1);
        userService.addUser(user2);

        const allUsers = userService.getAllUsers();
        expect(allUsers).toHaveLength(2);
        expect(allUsers).toEqual(expect.arrayContaining([user1, user2]));
    });
});
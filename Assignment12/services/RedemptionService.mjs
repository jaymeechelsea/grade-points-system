export class RedemptionService {
    constructor(redemptionRepository) {
        this.redemptionRepository = redemptionRepository;
    }

    createRedemption(redemptionEntity) {
        if (!redemptionEntity.redemption_id || !redemptionEntity.student_id || redemptionEntity.points_redeemed === undefined || !redemptionEntity.reward) {
            throw new Error('Missing required fields');
        }
        this.redemptionRepository.save(redemptionEntity);
    }

    getRedemptionById(redemption_id) {
        return this.redemptionRepository.findById(redemption_id);
    }

    getAllRedemptions() {
        return this.redemptionRepository.findAll();
    }

    updateRedemption(redemption_id, updatedFields) {
        const redemption = this.redemptionRepository.findById(redemption_id);
        if (!redemption) throw new Error('Redemption not found');

        const updated = { ...redemption, ...updatedFields };
        this.redemptionRepository.save(updated);
    }

    deleteRedemption(redemption_id) {
        this.redemptionRepository.delete(redemption_id);
    }
}
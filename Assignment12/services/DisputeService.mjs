export class DisputeService {
    constructor(disputeRepository) {
        this.disputeRepository = disputeRepository;
    }

    createDispute(disputeEntity) {
        if (!disputeEntity.dispute_id || !disputeEntity.student_id || !disputeEntity.description) {
            throw new Error('Missing required fields');
        }
        this.disputeRepository.save(disputeEntity);
    }

    getDisputeById(dispute_id) {
        return this.disputeRepository.findById(dispute_id);
    }

    getAllDisputes() {
        return this.disputeRepository.findAll();
    }

    updateDispute(dispute_id, updatedFields) {
        const dispute = this.disputeRepository.findById(dispute_id);
        if (!dispute) throw new Error('Dispute not found');

        const updated = { ...dispute, ...updatedFields };
        this.disputeRepository.save(updated);
    }

    deleteDispute(dispute_id) {
        this.disputeRepository.delete(dispute_id);
    }
}
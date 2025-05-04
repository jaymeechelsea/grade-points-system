export class EducatorService {
    constructor(educatorRepository) {
        this.educatorRepository = educatorRepository;
    }

    createEducator(educatorEntity) {
        if (!educatorEntity.educator_id || !educatorEntity.user_id || !educatorEntity.department) {
            throw new Error('Missing required fields');
        }
        this.educatorRepository.save(educatorEntity);
    }

    getEducatorById(educator_id) {
        return this.educatorRepository.findById(educator_id);
    }

    getAllEducators() {
        return this.educatorRepository.findAll();
    }

    updateEducator(educator_id, updatedFields) {
        const educator = this.educatorRepository.findById(educator_id);
        if (!educator) throw new Error('Educator not found');

        const updated = { ...educator, ...updatedFields };
        this.educatorRepository.save(updated);
    }

    deleteEducator(educator_id) {
        this.educatorRepository.delete(educator_id);
    }
}
export class PointService {
    constructor(pointRepository) {
        this.pointRepository = pointRepository;
    }

    createPoint(pointEntity) {
        if (!pointEntity.point_id || !pointEntity.student_id || pointEntity.points_earned === undefined) {
            throw new Error('Missing required fields');
        }
        this.pointRepository.save(pointEntity);
    }

    getPointById(point_id) {
        return this.pointRepository.findById(point_id);
    }

    getAllPoints() {
        return this.pointRepository.findAll();
    }

    updatePoint(point_id, updatedFields) {
        const point = this.pointRepository.findById(point_id);
        if (!point) throw new Error('Point record not found');

        const updated = { ...point, ...updatedFields };
        this.pointRepository.save(updated);
    }

    deletePoint(point_id) {
        this.pointRepository.delete(point_id);
    }
}
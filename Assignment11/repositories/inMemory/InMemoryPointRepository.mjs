import { PointEntity } from '../../entities/PointEntity.mjs';
import { PointRepository } from '../interfaces/PointRepository.mjs';

export class InMemoryPointRepository extends PointRepository {
    constructor() {
        super('point');
        this.points = new Map(); 
    }

    // Save (Create/Update)
    save(point) {
        if (!(point instanceof PointEntity)) {
            throw new Error('Only PointEntity instances can be saved.');
        }
        this.points.set(point.point_id, point);
    }

    // Find by ID
    findById(point_id) {
        return this.points.get(point_id) || null;
    }

    // Find all
    findAll() {
        return Array.from(this.points.values());
    }

    // Delete by ID
    delete(point_id) {
        if (!this.points.has(point_id)) {
            throw new Error(`Point with ID ${point_id} not found.`);
        }
        this.points.delete(point_id);
    }
}

export default InMemoryPointRepository;

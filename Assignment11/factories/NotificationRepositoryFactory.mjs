import { InMemoryNotificationRepository } from '../repositories/inMemory/InMemoryNotificationRepository.mjs';

export class NotificationRepositoryFactory {
    static getRepository(storageType = 'MEMORY') {
        switch (storageType) {
            case 'MEMORY':
                return new InMemoryNotificationRepository();
            default:
                throw new Error('Invalid storage type for NotificationRepository');
        }
    }
}

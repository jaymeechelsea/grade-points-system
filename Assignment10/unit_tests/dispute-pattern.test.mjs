describe('DisputePattern', () => {
    class Dispute {
      constructor(id, description, status = 'open') {
        this.id = id;
        this.description = description;
        this.status = status;
      }
  
      closeDispute() {
        this.status = 'closed';
      }
    }
  
    class DisputeFactory {
      static createDispute(id, description) {
        if (!id || !description) {
          throw new Error('Missing required properties');
        }
        return new Dispute(id, description);
      }
    }
  
    test('should create a dispute with valid properties', () => {
      const dispute = DisputeFactory.createDispute('1', 'Incorrect grade assigned');
      expect(dispute).toBeDefined();
      expect(dispute.id).toBe('1');
      expect(dispute.description).toBe('Incorrect grade assigned');
      expect(dispute.status).toBe('open');
    });
  
    test('should throw an error for missing properties', () => {
      expect(() => {
        DisputeFactory.createDispute('2');
      }).toThrow('Missing required properties');
    });
  
    test('should close a dispute', () => {
      const dispute = DisputeFactory.createDispute('3', 'Late submission penalty dispute');
      dispute.closeDispute();
      expect(dispute.status).toBe('closed');
    });
  });
import { DecimalPipe } from '@angular/common';
import { MidichlorianPipe } from './midichlorian.pipe';

describe('midichlorian pipe', () => {
  let sut: MidichlorianPipe;
  let decimalPipeMock: jasmine.SpyObj<DecimalPipe>;

  beforeEach(() => {
    decimalPipeMock = jasmine.createSpyObj<DecimalPipe>('DecimalPipe mock', [
      'transform',
    ]);
    decimalPipeMock.transform.and.returnValue('formatted number');
    sut = new MidichlorianPipe(decimalPipeMock);
  });

  it('should call the decimal pipe correctly', () => {
    // Act
    const result = sut.transform(40);

    // Assert
    expect(result).toBe('formatted number mc');
    expect(decimalPipeMock.transform).toHaveBeenCalledWith(40);
  });

  it('should work', () => {
    const decimalPipeMock = jasmine.createSpyObj<DecimalPipe>(
      'DecimalPipe mock',
      ['transform']
    );
  });
});

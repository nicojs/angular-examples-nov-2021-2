import { GreetPipe } from './greet.pipe';

describe('GreetPipe', () => {
    let sut: GreetPipe;

    beforeEach(() => sut = new GreetPipe());

    describe('transform', () => {
        it('should return "hey Frank"! when called with "Frank"', () => {
            const actual = sut.transform('Frank');
            expect(actual).toBe('Hey Frank!');
        });
    });
});

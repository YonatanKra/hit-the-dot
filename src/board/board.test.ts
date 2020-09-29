import { Board } from './board';

describe('Board', () => {
    beforeAll(() => {
        window.customElements.define(Board.selector, Board);
    });

    let element;
    beforeEach(() => {
        element = document.createElement('wc-board');
        document.body.append(element);
    });

    it('should be defined', () => {
        expect(element).toBeDefined();
    });

    describe('updateDot', () => {
        it('should throw error when value is not valid', () => {
            expect(element.updateDot(undefined)).toThrowError();
        })
    })
});

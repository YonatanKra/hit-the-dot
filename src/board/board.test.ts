import { Board } from './board';

describe('Board', () => {
    beforeAll(() => {
        window.customElements.define(Board.selector, Board);
    });

    let element: Board;
    beforeEach(() => {
        element = document.createElement(Board.selector) as Board;
        document.body.append(element);
    });

    it('should be defined', () => {
        expect(element).toBeDefined();
    });

    describe('attributeChangedCallback', () => {
        it('should not call nothing when there is unknown name', () => {
            const updateSquareSpy = spyOn(element, 'updateSquare');

            element.attributeChangedCallback('some-property', undefined, '');

            expect(updateSquareSpy).not.toHaveBeenCalled();
        });

        it('should call `updateSquare` when name is `dot`', () => {
            const updateSquareSpy = spyOn(element, 'updateSquare');

            element.attributeChangedCallback('dot', undefined, '10');

            expect(updateSquareSpy).toHaveBeenCalledWith('10');
        });
    })

    describe('updateSquare', () => {
        it('should throw error when value is undefined', () => {
            expect(element.updateSquare(undefined)).toThrowError();
        });

        it('should throw error when value is null', () => {
            expect(element.updateSquare(null)).toThrowError();
        });

        it('should throw error when value is not a string', () => {
            // @ts-ignore: checking what happened when got unexpected input type
            expect(element.updateSquare(10)).toThrowError();
        });

        it('should throw error when value is smaller than minimum valid value', () => {
            expect(element.updateSquare('0')).toThrowError();
        });

        it('should throw error when value is not a divider of `width`', () => {
            element.width = 123;
            expect(element.updateSquare('10')).toThrowError();
        });

        it('should throw error when value is not a divider of `width`', () => {
            element.width = 120;
            element.height = 123;
            expect(element.updateSquare('10')).toThrowError();
        });

        it('should set `square` by the given value', () => {
            element.width = 120;
            element.height = 120;

            element.updateSquare('10');
            expect(element.square).toEqual(10);
        });
    });

    describe('drawGrid', () => {
        it('should call context.lineTo `height / square` times to draw horizontal lines', () => {

        });

        it('should call context.lineTo `width / square` times to draw vertical lines', () => {

        });
    });
});

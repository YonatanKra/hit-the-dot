enum ATTRIBUTES {
    SQUARE = 'square'
}

export class Board extends HTMLCanvasElement {
    static selector = 'wc-board';
    static get observedAttributes() {
        return Object.values(ATTRIBUTES);
    }

    square: number;

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === ATTRIBUTES.SQUARE) {
            this.updateSquare(newValue);
        }
    }

    updateSquare(inputValue: string) {
        const value = Number(inputValue);
        if (typeof inputValue !== 'string') {
            throw Error(`Board: '${ATTRIBUTES.SQUARE}' must be a string`);
        }

        if (value < 10) {
            throw Error(`Board: '${ATTRIBUTES.SQUARE}' must be greater or equal 10`);
        }

        if (this.width % value !== 0) {
            throw Error(`Board: '${ATTRIBUTES.SQUARE}' must be a divider of element width (${this.width})`);
        }

        if (this.height % value !== 0) {
            throw Error(`Board: '${ATTRIBUTES.SQUARE}' must be a divider of element height (${this.height})`);
        }

        this.square = value;
    }

    drawGrid() {
        const context = this.getContext('2d');
        // for (let x = 0; x <= this.width; x += this.square) {
        //     context.moveTo(0.5 + x + this.square, this.square);
        //     context.lineTo(0.5 + x + this.square, this.height + this.square);
        // }

        // for (let x = 0; x <= this.height; x += this.square) {
        //     context.moveTo(this.square, 0.5 + x + this.square);
        //     context.lineTo(this.width + this.square, 0.5 + x + this.square);
        // }
        // context.strokeStyle = 'dodgeblue';
        // context.stroke();

    }
}

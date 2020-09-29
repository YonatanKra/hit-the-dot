enum ATTRIBUTES {
    DOT = 'dot',
    WIDTH = 'width',
    HEIGHT = 'height'
}

export class Board extends HTMLCanvasElement {
    static selector = 'wc-board';
    static get observedAttributes() {
        return Object.values(ATTRIBUTES);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === ATTRIBUTES.DOT) {
            this.updateDot(newValue);
        }
    }

    updateDot(value: string) {
        if (Number(value) < 10) {
            throw Error(`Board: '${ATTRIBUTES.DOT}' must be bigger than 10`);
        }
    }
}

import { Board } from './board';

if (!window.customElements.get(Board.selector)) {
    window.customElements.define(Board.selector, Board, { extends: 'canvas' });
}
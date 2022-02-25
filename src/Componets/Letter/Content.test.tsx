import React from 'react';
import { Content } from './Content';
import * as ReactDOM from 'react-dom';

describe('Letter Page testing İnputs.', () => {

    let container: HTMLDivElement;

    beforeEach(() => {

        container = document.createElement('div');

        document.body.appendChild(container);

        ReactDOM.render(<Content />, container);

    })


    afterEach(() => {

        document.body.removeChild(container);

        container.remove();

    })


    it('İnputs Placeholder Test', () => {

        const inputs = container.querySelectorAll('input');

        expect(inputs).toHaveLength(4);

        expect(inputs[0].placeholder).toBe("Name");

        expect(inputs[1].placeholder).toBe("Last Name");

        expect(inputs[2].placeholder).toBe("E-mail");

        expect(inputs[3].placeholder).toBe("Date");

    })


    it('Test Area Placeholder Test', () => {

        const textarea = container.querySelector('textarea');

        expect(textarea?.placeholder).toBe("Message")

    })

});
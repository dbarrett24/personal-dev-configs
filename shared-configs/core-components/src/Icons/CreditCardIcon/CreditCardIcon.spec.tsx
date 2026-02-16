import { CreditCardIcon } from './CreditCardIcon';
import { render, screen } from '@dbarrett24/testing-utils';
import { ComponentProps } from 'react';

describe('CreditCardIcon', () => {
    let props: ComponentProps<typeof CreditCardIcon>;

    beforeEach(() => {
        props = {
            brand: 'amex',
        };
    });

    it.each`
        brand
        ${'amex'}
        ${'cash'}
        ${'check'}
        ${'diners'}
        ${'discover'}
        ${'jcb'}
        ${'mastercard'}
        ${'money-order'}
        ${'visa'}
        ${'wire-transfer'}
        ${undefined}
    `('should render credit card icon $brand', ({ brand }) => {
        props.brand = brand;
        expect(render(<CreditCardIcon {...props} />).asFragment()).toMatchSnapshot();
        expect(screen.getByTestId(`credit-card-icon-${brand ?? 'other'}`)).toBeVisible();
    });
});

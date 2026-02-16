import {
    amex,
    cash,
    check,
    diners,
    discover,
    jcb,
    mastercard,
    moneyOrder,
    other,
    visa,
    wireTransfer,
} from './cardIcons';
import { cn } from '@dbarrett24/theme-system';

export type CardBrands =
    | 'amex'
    | 'cash'
    | 'check'
    | 'diners'
    | 'discover'
    | 'jcb'
    | 'mastercard'
    | 'money-order'
    | 'other'
    | 'visa'
    | 'wire-transfer';

export type CardIconProps = {
    brand: CardBrands;
    className?: string;
};

export const cardImages = {
    amex,
    cash,
    check,
    diners,
    discover,
    jcb,
    mastercard,
    'money-order': moneyOrder,
    other,
    visa,
    'wire-transfer': wireTransfer,
} as const;

export const CreditCardIcon = ({ brand, className }: CardIconProps) => {
    let svg = other;
    let testId = 'other';

    if (brand in cardImages) {
        svg = cardImages[brand];
        testId = brand;
    }

    return (
        <svg
            className={cn('h-[20px] w-[30px]', className)}
            data-testid={`credit-card-icon-${testId}`}
            fill="none"
            height="20"
            viewBox="0 0 30 20"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
        >
            {svg}
        </svg>
    );
};

CreditCardIcon.displayName = 'CreditCardIcon';

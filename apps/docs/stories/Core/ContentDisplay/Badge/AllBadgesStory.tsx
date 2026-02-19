import type { ComponentProps } from 'react';
import { Fragment } from 'react';
import { Badge } from '@dbarrett24/core-components/Badge';
import { H5 } from '@dbarrett24/core-components/Typography/Text';
import {
    criticalBold,
    criticalSubtle,
    infoBold,
    infoSubtle,
    neutralBold,
    neutralSubtle,
    successBold,
    successSubtle,
    warningBold,
    warningSubtle,
} from './allBadges';

const BADGE_GROUPS = [
    { label: 'Neutral, Bold', badges: neutralBold },
    { label: 'Neutral, Subtle', badges: neutralSubtle },
    { label: 'Critical, Bold', badges: criticalBold },
    { label: 'Critical, Subtle', badges: criticalSubtle },
    { label: 'Success, Bold', badges: successBold },
    { label: 'Success, Subtle', badges: successSubtle },
    { label: 'Info, Bold', badges: infoBold },
    { label: 'Info, Subtle', badges: infoSubtle },
    { label: 'Warning, Bold', badges: warningBold },
    { label: 'Warning, Subtle', badges: warningSubtle },
];

export const AllBadgesStory = (props: ComponentProps<typeof Badge>) => {
    return (
        <div className="grid max-w-[1100px] grid-cols-7 items-center justify-items-center gap-4 border border-black p-4">
            <div />
            {['MD, Square', 'MD, Round', 'SM, Square', 'SM, Round', 'XS, Square', 'XS, Round'].map((label) => (
                <H5
                    key={label}
                    className="text-center"
                >
                    {label}
                </H5>
            ))}
            {BADGE_GROUPS.map(({ label, badges }) => (
                <Fragment key={label}>
                    <H5 className="text-center">{label}</H5>
                    {badges.map((badge) => (
                        <Badge
                            key={`${badge.color}${badge.size}${badge.emphasis}`}
                            className="justify-self-center"
                            color={badge.color}
                            emphasis={badge.emphasis}
                            round={badge.round}
                            size={badge.size}
                        >
                            {props.children}
                        </Badge>
                    ))}
                </Fragment>
            ))}
        </div>
    );
};

import * as React from 'react';
import { BaseIconProps } from './types';

interface LineHeightIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const LineHeightIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: LineHeightIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.78235 2.21713C3.70733 2.14212 3.60559 2.09998 3.4995 2.09998C3.39342 2.09998 3.29167 2.14212 3.21666 2.21713L1.21666 4.21713C1.06045 4.37334 1.06045 4.62661 1.21666 4.78282C1.37287 4.93903 1.62614 4.93903 1.78235 4.78282L3.0995 3.46566L3.0995 11.5343L1.78235 10.2171C1.62614 10.0609 1.37287 10.0609 1.21666 10.2171C1.06045 10.3733 1.06045 10.6266 1.21666 10.7828L3.21666 12.7828C3.29167 12.8578 3.39342 12.9 3.4995 12.9C3.60559 12.9 3.70733 12.8578 3.78234 12.7828L5.78235 10.7828C5.93855 10.6266 5.93855 10.3733 5.78235 10.2171C5.62614 10.0609 5.37287 10.0609 5.21666 10.2171L3.8995 11.5343L3.8995 3.46566L5.21666 4.78282C5.37287 4.93903 5.62614 4.93903 5.78235 4.78282C5.93855 4.62661 5.93855 4.37334 5.78235 4.21713L3.78235 2.21713ZM8.49999 3.99997C8.22385 3.99997 7.99999 4.22382 7.99999 4.49997C7.99999 4.77611 8.22385 4.99997 8.49999 4.99997H14.5C14.7761 4.99997 15 4.77611 15 4.49997C15 4.22382 14.7761 3.99997 14.5 3.99997H8.49999ZM7.99999 7.49997C7.99999 7.22382 8.22385 6.99997 8.49999 6.99997H14.5C14.7761 6.99997 15 7.22382 15 7.49997C15 7.77611 14.7761 7.99997 14.5 7.99997H8.49999C8.22385 7.99997 7.99999 7.77611 7.99999 7.49997ZM8.49999 9.99997C8.22385 9.99997 7.99999 10.2238 7.99999 10.5C7.99999 10.7761 8.22385 11 8.49999 11H14.5C14.7761 11 15 10.7761 15 10.5C15 10.2238 14.7761 9.99997 14.5 9.99997H8.49999Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`LineHeightIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default LineHeightIcon;

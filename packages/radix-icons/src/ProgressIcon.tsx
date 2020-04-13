import * as React from 'react';
import { BaseIconProps } from './types';

interface ProgressIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const ProgressIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: ProgressIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.1 7.50043C2.1 4.51782 4.51769 2.10001 7.5 2.10001C10.4823 2.10001 12.9 4.51782 12.9 7.50043C12.9 10.483 10.4823 12.9009 7.5 12.9009C4.51769 12.9009 2.1 10.483 2.1 7.50043ZM7.5 1.10001C3.96534 1.10001 1.1 3.96561 1.1 7.50043C1.1 11.0353 3.96534 13.9009 7.5 13.9009C11.0347 13.9009 13.9 11.0353 13.9 7.50043C13.9 3.96561 11.0347 1.10001 7.5 1.10001ZM7 8.00001V3.12811C7.1641 3.10954 7.33094 3.10001 7.5 3.10001C9.93005 3.10001 11.9 5.07014 11.9 7.50043C11.9 7.66935 11.8905 7.83604 11.872 8.00001H7Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ProgressIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ProgressIcon;

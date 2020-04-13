import * as React from 'react';
import { BaseIconProps } from './types';

interface SquareIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const SquareIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: SquareIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 3V2H3H12H13V3V12V13H12H3H2V12V3ZM3 12H12V3H3V12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M13 2H2V13H13V2Z" fill={color} opacity=".2" />
        <path
          d="M2 3V2H3H12H13V3V12V13H12H3H2V12V3ZM3 12H12V3H3V12Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SquareIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SquareIcon;

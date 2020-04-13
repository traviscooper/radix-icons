import * as React from 'react';
import { BaseIconProps } from './types';

interface CodeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CodeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CodeIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M9.96424 2.68569C10.0668 2.4293 9.94209 2.13832 9.6857 2.03576C9.4293 1.9332 9.13832 2.05791 9.03576 2.3143L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68569ZM3.85355 5.14645C4.04882 5.34171 4.04882 5.65829 3.85355 5.85355L2.20711 7.5L3.85355 9.14645C4.04882 9.34171 4.04882 9.65829 3.85355 9.85355C3.65829 10.0488 3.34171 10.0488 3.14645 9.85355L1.14645 7.85355C0.951184 7.65829 0.951184 7.34171 1.14645 7.14645L3.14645 5.14645C3.34171 4.95118 3.65829 4.95118 3.85355 5.14645ZM11.1464 5.14645C11.3417 4.95118 11.6583 4.95118 11.8536 5.14645L13.8536 7.14645C14.0488 7.34171 14.0488 7.65829 13.8536 7.85355L11.8536 9.85355C11.6583 10.0488 11.3417 10.0488 11.1464 9.85355C10.9512 9.65829 10.9512 9.34171 11.1464 9.14645L12.7929 7.5L11.1464 5.85355C10.9512 5.65829 10.9512 5.34171 11.1464 5.14645Z"
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
        <path
          d="M10.4285 2.87139C10.6336 2.35861 10.3842 1.77664 9.87139 1.57152C9.35861 1.36641 8.77664 1.61582 8.57152 2.12861L4.57152 12.1286C4.36641 12.6414 4.61583 13.2234 5.12861 13.4285C5.64139 13.6336 6.22336 13.3842 6.42848 12.8714L10.4285 2.87139ZM4.20711 4.79289C4.59763 5.18342 4.59763 5.81658 4.20711 6.20711L2.91421 7.5L4.20711 8.79289C4.59763 9.18342 4.59763 9.81658 4.20711 10.2071C3.81658 10.5976 3.18342 10.5976 2.79289 10.2071L0.792893 8.20711C0.402369 7.81658 0.402369 7.18342 0.792893 6.79289L2.79289 4.79289C3.18342 4.40237 3.81658 4.40237 4.20711 4.79289ZM10.7929 4.79289C11.1834 4.40237 11.8166 4.40237 12.2071 4.79289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L12.2071 10.2071C11.8166 10.5976 11.1834 10.5976 10.7929 10.2071C10.4024 9.81658 10.4024 9.18342 10.7929 8.79289L12.0858 7.5L10.7929 6.20711C10.4024 5.81658 10.4024 5.18342 10.7929 4.79289Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M9.96424 2.68569C10.0668 2.4293 9.94209 2.13832 9.6857 2.03576C9.4293 1.9332 9.13832 2.05791 9.03576 2.3143L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68569ZM3.85355 5.14645C4.04882 5.34171 4.04882 5.65829 3.85355 5.85355L2.20711 7.5L3.85355 9.14645C4.04882 9.34171 4.04882 9.65829 3.85355 9.85355C3.65829 10.0488 3.34171 10.0488 3.14645 9.85355L1.14645 7.85355C0.951184 7.65829 0.951184 7.34171 1.14645 7.14645L3.14645 5.14645C3.34171 4.95118 3.65829 4.95118 3.85355 5.14645ZM11.1464 5.14645C11.3417 4.95118 11.6583 4.95118 11.8536 5.14645L13.8536 7.14645C14.0488 7.34171 14.0488 7.65829 13.8536 7.85355L11.8536 9.85355C11.6583 10.0488 11.3417 10.0488 11.1464 9.85355C10.9512 9.65829 10.9512 9.34171 11.1464 9.14645L12.7929 7.5L11.1464 5.85355C10.9512 5.65829 10.9512 5.34171 11.1464 5.14645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CodeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CodeIcon;

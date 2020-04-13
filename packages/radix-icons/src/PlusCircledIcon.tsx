import * as React from 'react';
import { BaseIconProps } from './types';

interface PlusCircledIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const PlusCircledIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: PlusCircledIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.49988 0.876892C3.84219 0.876892 0.877045 3.84204 0.877045 7.49972C0.877045 11.1574 3.84219 14.1226 7.49988 14.1226C11.1575 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1575 0.876892 7.49988 0.876892ZM1.82704 7.49972C1.82704 4.36671 4.36686 1.82689 7.49988 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49988 13.1726C4.36686 13.1726 1.82704 10.6327 1.82704 7.49972ZM7.5 4C7.77614 4 8 4.22386 8 4.5V7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H8V10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5V8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H7V4.5C7 4.22386 7.22386 4 7.5 4Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`PlusCircledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PlusCircledIcon;

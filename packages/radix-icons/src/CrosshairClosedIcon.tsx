import * as React from 'react';
import { BaseIconProps } from './types';

interface CrosshairClosedIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal' | 'twoTone';
}

export const CrosshairClosedIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: CrosshairClosedIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M8 0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V3.15531C4.98441 3.38469 3.38469 4.98441 3.15531 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H3.15534C3.38482 10.0155 4.98448 11.6151 7 11.8445V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V11.8444C10.0154 11.615 11.615 10.0154 11.8444 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H11.8445C11.6151 4.98448 10.0155 3.38482 8 3.15534V0.5ZM7 4.11329C5.50974 4.33136 4.33136 5.50974 4.11329 7H7V4.11329ZM8 7V4.11333C9.49013 4.33149 10.6684 5.50982 10.8865 7H8ZM7 8H4.11333C4.33149 9.49013 5.50982 10.6684 7 10.8865V8ZM8 10.8864V8H10.8864C10.6683 9.49006 9.49006 10.6683 8 10.8864Z"
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
          d="M8 0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V3.15531C4.98441 3.38469 3.38469 4.98441 3.15531 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H3.15534C3.38482 10.0155 4.98448 11.6151 7 11.8445V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V11.8444C10.0154 11.615 11.615 10.0154 11.8444 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H11.8445C11.6151 4.98448 10.0155 3.38482 8 3.15534V0.5ZM7 4.11329C5.50974 4.33136 4.33136 5.50974 4.11329 7H7V4.11329ZM8 7V4.11333C9.49013 4.33149 10.6684 5.50982 10.8865 7H8ZM7 8H4.11333C4.33149 9.49013 5.50982 10.6684 7 10.8865V8ZM8 10.8864V8H10.8864C10.6683 9.49006 9.49006 10.6683 8 10.8864Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8 0.5C8 0.223858 7.77614 0 7.5 0C7.22386 0 7 0.223858 7 0.5V3.15531C4.98441 3.38469 3.38469 4.98441 3.15531 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H3.15534C3.38482 10.0155 4.98448 11.6151 7 11.8445V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V11.8444C10.0154 11.615 11.615 10.0154 11.8444 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H11.8445C11.6151 4.98448 10.0155 3.38482 8 3.15534V0.5ZM7 4.11329C5.50974 4.33136 4.33136 5.50974 4.11329 7H7V4.11329ZM8 7V4.11333C9.49013 4.33149 10.6684 5.50982 10.8865 7H8ZM7 8H4.11333C4.33149 9.49013 5.50982 10.6684 7 10.8865V8ZM8 10.8864V8H10.8864C10.6683 9.49006 9.49006 10.6683 8 10.8864Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CrosshairClosedIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CrosshairClosedIcon;

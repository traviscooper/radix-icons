import * as React from 'react';
import { BaseIconProps } from './types';

interface GearIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const GearIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: GearIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.917 3.25a1 1 0 00-.992.87l-.142 1.078c-.151.035-.3.075-.447.12l-.663-.863a1 1 0 00-1.293-.257l-1.01.583a1 1 0 00-.424 1.248l.416 1.007c-.112.106-.22.214-.326.327l-1.007-.417a1 1 0 00-1.248.424l-.583 1.01a1 1 0 00.257 1.294l.862.662a7.433 7.433 0 00-.12.447l-1.077.143a1 1 0 00-.87.991v1.167a1 1 0 00.87.991l1.078.143c.035.15.075.3.12.447l-.863.662a1 1 0 00-.257 1.293l.584 1.01a1 1 0 001.248.425l1.007-.417c.105.112.214.221.326.327l-.416 1.006a1 1 0 00.424 1.248l1.01.584a1 1 0 001.293-.257l.663-.863c.146.044.295.084.446.12l.142 1.078a1 1 0 00.992.869h1.166a1 1 0 00.992-.87l.142-1.078c.15-.035.3-.075.447-.12l.663.864a1 1 0 001.293.256l1.01-.583a1 1 0 00.424-1.248l-.416-1.007c.112-.105.22-.214.326-.326l1.007.416a1 1 0 001.248-.423l.583-1.01a1 1 0 00-.256-1.294l-.863-.663c.044-.147.084-.296.12-.446l1.078-.143a1 1 0 00.87-.991v-1.167a1 1 0 00-.87-.991l-1.079-.143c-.035-.15-.075-.3-.119-.446l.863-.663a1 1 0 00.257-1.293l-.583-1.01a1 1 0 00-1.249-.425l-1.007.417a7.513 7.513 0 00-.326-.326l.417-1.007a1 1 0 00-.424-1.249l-1.01-.583a1 1 0 00-1.293.257l-.663.862a7.446 7.446 0 00-.448-.12l-.142-1.078a1 1 0 00-.992-.869h-1.166zm-.238 2.801c-.593.075-1.16.23-1.693.453L8.88 5.064l-1.01.583.695 1.68a6.538 6.538 0 00-1.239 1.238L5.647 7.87l-.583 1.01 1.44 1.107a6.456 6.456 0 00-.453 1.692l-1.8.238v1.167l1.8.238c.075.592.23 1.16.453 1.692l-1.44 1.106.584 1.01 1.679-.694c.355.466.772.883 1.238 1.238l-.694 1.68 1.01.583 1.106-1.44c.532.223 1.1.377 1.692.452l.238 1.801h1.166l.238-1.801a6.457 6.457 0 001.693-.453l1.106 1.44 1.01-.583-.695-1.68a6.54 6.54 0 001.239-1.237l1.68.695.582-1.01-1.44-1.107a6.46 6.46 0 00.453-1.692l1.801-.238v-1.167l-1.801-.238a6.458 6.458 0 00-.453-1.692l1.441-1.106-.583-1.01-1.68.694a6.536 6.536 0 00-1.238-1.238l.695-1.68-1.01-.583-1.106 1.44a6.456 6.456 0 00-1.694-.453l-.238-1.801h-1.166l-.238 1.801zm2.246 6.449a1.425 1.425 0 11-2.85 0 1.425 1.425 0 012.85 0zm1 0a2.425 2.425 0 11-4.85 0 2.425 2.425 0 014.85 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.07.5a1 1 0 00-.974.78l-.219.964c-.33.102-.647.234-.947.392l-.837-.527a1 1 0 00-1.24.139l-.606.606a1 1 0 00-.14 1.24l.529.838c-.159.3-.29.616-.392.946l-.965.219a1 1 0 00-.779.975v.857a1 1 0 00.779.975l.965.219c.101.33.233.647.392.947l-.528.837a1 1 0 00.14 1.24l.605.606a1 1 0 001.24.14l.838-.529c.3.159.616.29.946.393l.219.964a1 1 0 00.975.78h.857a1 1 0 00.975-.78l.219-.964c.33-.102.647-.234.947-.393l.837.528a1 1 0 001.24-.139l.606-.606a1 1 0 00.14-1.24l-.528-.837c.159-.3.29-.617.393-.947l.964-.219a1 1 0 00.779-.975v-.857a1 1 0 00-.779-.975l-.964-.219a5.475 5.475 0 00-.393-.947l.528-.837a1 1 0 00-.14-1.24l-.605-.606a1 1 0 00-1.24-.14l-.837.528a5.47 5.47 0 00-.948-.392l-.219-.965A1 1 0 007.928.5h-.857zM4.92 3.812a4.476 4.476 0 011.795-.744l.272-1.197.037-.166.047-.205h.857l.047.205.037.166.272 1.197c.659.116 1.268.375 1.795.744l1.039-.654.144-.091.178-.112.606.606-.112.178-.091.144-.655 1.038c.37.527.628 1.137.744 1.795l1.197.272.166.037.205.047v.857l-.205.046-.166.038-1.197.271a4.476 4.476 0 01-.744 1.796l.654 1.038.091.144.112.178-.606.606-.178-.112-.144-.09-1.038-.655a4.476 4.476 0 01-1.795.743l-.272 1.197-.037.166-.047.205h-.857l-.047-.205-.037-.166-.272-1.197a4.477 4.477 0 01-1.794-.744l-1.039.655-.144.091-.177.112-.607-.606.112-.178.091-.144.655-1.039a4.476 4.476 0 01-.744-1.794l-1.197-.272-.166-.038L1.5 7.93v-.857l.205-.047.166-.037 1.197-.272a4.476 4.476 0 01.744-1.794l-.655-1.04-.091-.144-.112-.177.606-.606.178.112.144.09 1.039.655zM8.926 7.5a1.425 1.425 0 11-2.85 0 1.425 1.425 0 012.85 0zm1 0a2.425 2.425 0 11-4.85 0 2.425 2.425 0 014.85 0z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`GearIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default GearIcon;
import React from "react";
import {Avatar, AvatarBadge, Icon} from '@chakra-ui/react'

const BuildSpaceLogo = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.17 41.34" {...props}>
    <defs>
      <linearGradient
        id="a"
        y1={20.67}
        x2={42.17}
        y2={20.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.3} stopColor="#6ccbdb" />
        <stop offset={1} stopColor="#5fc6e2" />
      </linearGradient>
    </defs>
    <path
      d="M42 36.44s-.09.4-.68.08c-.44-.24-.79-2.48-1.76-1.79-2.56 1.84-4.44 1.84-5.56 2.76a41.21 41.21 0 0 1-3.12 2.92 4.78 4.78 0 0 1-4.53.56c-2-.95-3.19-6.67-3.19-7.34s-4.34-.86-7.83.12-2.94 2.57-7 3.74C2.22 39.21-1.43 32.08.78 29c3.5-4.8 6.22-7.31 6.79-10.25a7.12 7.12 0 0 1 2.21-4.22L0 2.28 12.35 8.1s1.65 1.1 1.83.18 0-7.16 0-7.16 2.76-1.12 4.23 4c.61 2.16 2.32 0 2.32 0s0-5.51 1-5.14 2.2 3.12 3.12 4.59 5.6.09 7.25 1.37 8.19 10.57 9.38 12.77.52 17.73.52 17.73Z"
      fill="url(#a)"
    />
  </svg>
  );

function Logo() {
  return (
    

      <Icon as={BuildSpaceLogo} w="30" h="30" />
 

  );
}

export default Logo;


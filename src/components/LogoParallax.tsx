import svgPaths from "@/imports/svg-ylgyulqi35";

interface LogoParallaxProps {
  lightMode?: boolean;
}

export default function LogoParallax({ lightMode = false }: LogoParallaxProps) {
  const strokeColor = lightMode ? '#ffffff' : '#1D1D1D';
  
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 2223 1014">
        <g clipPath="url(#clip0_1_716)" id="Group 1">
          {/* Capa 1 - Verde */}
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_1_716">
              <path d={svgPaths.p8342a80} />
            </mask>
            <path 
              d={svgPaths.p8342a80} 
              fill="#00804C" 
              mask="url(#path-1-inside-1_1_716)" 
              stroke={strokeColor}
              strokeWidth="4.87449" 
            />
          </g>
          
          {/* Capa 2 - Morado */}
          <g id="Vector_2">
            <mask fill="white" id="path-2-inside-2_1_716">
              <path d={svgPaths.p12942900} />
            </mask>
            <path 
              d={svgPaths.p12942900} 
              fill="#9A96EB" 
              mask="url(#path-2-inside-2_1_716)" 
              stroke={strokeColor}
              strokeWidth="4.87449" 
            />
          </g>
          
          {/* Capa 3 - Rojo */}
          <g id="Vector_3">
            <mask fill="white" id="path-3-inside-3_1_716">
              <path d={svgPaths.p39830300} />
            </mask>
            <path 
              d={svgPaths.p39830300} 
              fill="#FF5545" 
              mask="url(#path-3-inside-3_1_716)" 
              stroke={strokeColor}
              strokeWidth="4.87449" 
            />
          </g>
          
          {/* Capa 4 - Rosa */}
          <g id="Vector_4">
            <mask fill="white" id="path-4-inside-4_1_716">
              <path d={svgPaths.pdc26580} />
            </mask>
            <path 
              d={svgPaths.pdc26580} 
              fill="#FF86AA" 
              mask="url(#path-4-inside-4_1_716)" 
              stroke={strokeColor}
              strokeWidth="4.87449" 
            />
          </g>
          
          {/* Capa 5 - Amarillo */}
          <g id="Vector_5">
            <mask fill="white" id="path-5-inside-5_1_716">
              <path d={svgPaths.p3f984f80} />
            </mask>
            <path 
              d={svgPaths.p3f984f80} 
              fill="#FDF164" 
              mask="url(#path-5-inside-5_1_716)" 
              stroke={strokeColor}
              strokeWidth="10" 
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_716">
            <rect fill="white" height="1013.07" width="2222.77" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

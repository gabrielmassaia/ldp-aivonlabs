import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function createIcon(path: React.ReactNode) {
  return function Icon({ size = 20, strokeWidth = 1.75, ...props }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={size}
        height={size}
        {...props}
      >
        {path}
      </svg>
    );
  };
}

export const SparklesIcon = createIcon(
  <g>
    <path d="m12 3-1.912 5.736a2 2 0 0 1-1.263 1.263L3.089 12l5.736 1.912a2 2 0 0 1 1.263 1.263L12 20.911l1.912-5.736a2 2 0 0 1 1.263-1.263L20.911 12l-5.736-1.912a2 2 0 0 1-1.263-1.263z" />
    <path d="M5 3v4" />
    <path d="M3 5h4" />
    <path d="M19 17v4" />
    <path d="M17 19h4" />
  </g>,
);

export const MessageCircleIcon = createIcon(
  <path d="M21 12a9 9 0 1 1-3.16-6.86L22 3l-1.86 4.16A8.99 8.99 0 0 1 21 12Z" />,
);

export const InstagramIcon = createIcon(
  <g>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-3.37-3.37A4 4 0 0 1 16 11.37Z" />
    <path d="M17.5 6.5h.01" />
  </g>,
);

export const MailIcon = createIcon(
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />,
);

export const ArrowRightIcon = createIcon(
  <g>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </g>,
);

export const CheckIcon = createIcon(
  <path d="m5 12 4.5 4.5L19 7" />,
);

export const MinusIcon = createIcon(<path d="M5 12h14" />);

export const LineChartIcon = createIcon(
  <path d="M3 3v18h18" />,
);

export const CpuIcon = createIcon(
  <g>
    <rect width="8" height="8" x="8" y="8" rx="1" />
    <path d="M3 10h2" />
    <path d="M3 14h2" />
    <path d="M10 3v2" />
    <path d="M14 3v2" />
    <path d="M21 10h-2" />
    <path d="M21 14h-2" />
    <path d="M10 21v-2" />
    <path d="M14 21v-2" />
  </g>,
);

export const LayersIcon = createIcon(
  <g>
    <path d="m12 2 9 5-9 5-9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </g>,
);

export const BotIcon = createIcon(
  <g>
    <rect x="6" y="8" width="12" height="8" rx="2" />
    <path d="M12 2v4" />
    <path d="M9 16v2" />
    <path d="M15 16v2" />
    <path d="M8 12h.01" />
    <path d="M16 12h.01" />
    <path d="M9 2h6" />
  </g>,
);

export const CircuitBoardIcon = createIcon(
  <g>
    <path d="M8 8h8v8H8z" />
    <path d="M4 6h2v2" />
    <path d="M20 6h-2v2" />
    <path d="M4 18h2v-2" />
    <path d="M20 18h-2v-2" />
    <path d="M10 8V6" />
    <path d="M14 8V6" />
    <path d="M14 18v-2" />
    <path d="M10 18v-2" />
  </g>,
);

export const ShieldCheckIcon = createIcon(
  <g>
    <path d="M12 3 5 6v6c0 4.25 2.75 7.75 7 9 4.25-1.25 7-4.75 7-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </g>,
);

export const GaugeIcon = createIcon(
  <g>
    <path d="M12 15V9" />
    <path d="M20.05 11A8 8 0 1 0 4 11" />
  </g>,
);

export const WorkflowIcon = createIcon(
  <g>
    <rect width="8" height="6" x="3" y="3" rx="1" />
    <rect width="8" height="6" x="13" y="15" rx="1" />
    <path d="M7 9v6h6" />
  </g>,
);

export const RocketIcon = createIcon(
  <g>
    <path d="M4.5 16.5c-.5 1.5-1.5 3-1.5 3s1.5-1 3-1.5" />
    <path d="M12 15c-2.5-2.5-2.5-6-1-9 3-1.5 6.5-1.5 9 1 2.5 2.5 2.5 6 1 9-3 1.5-6.5 1.5-9-1Z" />
    <path d="M14.5 9.5a2 2 0 1 0 2.83 2.83 2 2 0 0 0-2.83-2.83Z" />
    <path d="m12 15-3 3" />
  </g>,
);

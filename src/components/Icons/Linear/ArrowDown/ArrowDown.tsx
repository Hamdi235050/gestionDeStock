import { Path, Svg, type SvgProps } from "react-native-svg";
export const ArrowDown = ({
  width = "24",
  height = "24",
  ...restProps
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    {...restProps}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

import * as React from "react"
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg"
function SvgComponent(props) {
  return (
    <Svg
      width={202}
      height={168}
      viewBox="0 0 202 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Rect width={202} height={168} rx={12} fill="url(#prefix__pattern0)" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00058 0 0 .0007 -.24 0)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={2560}
          height={1440}
        />
      </Defs>
    </Svg>
  )
}
export default SvgComponent
import { styled, keyframes, css } from "styled-components";

const train = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`

const pulse = keyframes`
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled("div").withConfig({
  shouldForwardProp: (prop) => !["padding", "borderRadius"].includes(prop),
})<{ padding: string; borderRadius: string}>(
  ({ padding, borderRadius}) => ({
    borderRadius: borderRadius,
    position: "relative",
    width: "max-content",
    height: "max-content",
    padding: padding,
    overflow: "hidden",
  })
);


const Background = styled.div.withConfig({
  shouldForwardProp: (prop) => !["colors", "blur", "animation", "animDuration"].includes(prop),
})<{colors: string[], blur: string, animation: "off" | "train" | "pulse", animDuration?: number}>`
  ${({animation, animDuration = 0}) => {
    switch (animation){
      case "off":
        return ""
      case "train":
        // @ts-ignore
        return css`animation: ${animDuration || 8}s ${train} linear infinite;`
      case "pulse":
        // @ts-ignore
        return css`animation: ${animDuration || 1}s ${pulse} ease-in-out infinite alternate;`
    }
  }}
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  &::before, &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
    background: linear-gradient(to right, ${({colors}) => colors.length ? colors.join(", "): "black"});
    filter: blur(${({blur}) => blur});
  };
  &::before {
    left: 0;
  };
  &::after {
    left: 100%
  }
`
// (() => ({
//   // animation: `${TrainAnimation}`,
//   height: "100%",
//   width: "100%",
//   position: "absolute",
//   top: "0",
//   left: "0",
//   zIndex: "-1",
//   "&::before, &::after": {
//     content: `${"''"}`,
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     top: "0",
//     zIndex: "-1",
//     background:
//       "linear-gradient(to right, blue, royalblue, skyblue, teal, purple, orange, blue)",
//     filter: "blur(16px)",
//   },
//   "&::before": {
//     left: "0",
//   },
//   "&::after": {
//     left: "100%"
//   }
// }));

export { Wrapper, Background };
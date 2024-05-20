import styled, { keyframes, css } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "colors",
      "blur",
      "animation",
      "animDuration",
      "borderRadius",
      "spread",
    ].includes(prop),
})<{
  colors: string[];
  blur?: string;
  animation?: "off" | "pulse";
  animDuration?: number;
  borderRadius?: string;
  spread?: string;
}>`
  position: relative;
  width: max-content;
  height: max-content;
  &::before {
    content: "";
    border-radius: ${({ borderRadius = "0" }) => borderRadius};
    background-image: linear-gradient(
      to right,
      ${({ colors }) => (colors.length ? colors.join(", ") : "black")}
    );
    filter: blur(${({ blur = "16px" }) => blur});
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    z-index: -1;
    ${({ animation = "off", animDuration = 0 }) => {
      switch (animation) {
        case "off":
          return "";
        case "pulse":
          // @ts-ignore
          return css`
            animation: ${animDuration || 1}s ${pulse} ease-in-out infinite
              alternate;
          `;
      }
    }}
    ${({ spread }) => {
      const spreadVal = parseInt(spread || "0") || 0;
      return `
        top: -${spreadVal / 2}px;
        left: -${spreadVal / 2}px;
        width: calc(100% + ${spreadVal}px);
        height: calc(100% + ${spreadVal}px);`;
    }}
  }
`;

export { Wrapper };

// .gradientWrapper2 {
//   position: relative;
//   width: max-content;
//   height: max-content;
//   padding: 10px;
//   /* background-image: radial-gradient(circle at 0% 50%, rgb(219, 0, 255) 0%, transparent 40%), radial-gradient(circle at 20% 50%, red 0%, transparent 40%), radial-gradient(circle at 40% 50%, orange 0%, transparent 40%), radial-gradient(circle at 60% 50%, teal 0%, transparent 40%), radial-gradient(circle at 80% 50%, skyblue 0%, transparent 40%); */
//   /* filter: drop-shadow(5px 0 10px blue) drop-shadow(15px 0 10px royalblue) drop-shadow(15px 0 10px skyblue) drop-shadow(25px 0 10px teal) drop-shadow(45px 0 10px purple) drop-shadow(55px 0 10px orange) drop-shadow(65px 0 10px blue); */
// }
// /*  */

// .gradientWrapperContent2 {
//   border-radius: 20px;
//   background-image: linear-gradient(to right, purple, red, orange, teal, skyblue, purple);
//   filter: blur(10px);
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
// }

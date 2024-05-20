# react-cool-wrappers

**Description:**

**react-cool-wrappers** is a component wrapper designed to enhance your React applications with visually appealing gradient shadows and borders. With built-in animation support, it adds an extra layer of dynamism to your UI components. Customize colors and animations to fit the aesthetic of your project seamlessly.

**Key Features:**

- Gradient shadows and borders
- Animation support
- Customizable colors and animations

## Peer Dependencies

Make sure to install peer dependencies! Below are the list of peer dependencies.

- `react >=16.14.0 <=18.3.1`
- `react-dom >=16.14.0 <=18.3.1`
- `styled-components >=4.4.1 <=6`
- `tslib>=2`  will be removed soon!

## APIs

### GradientBorder

#### Importing

```javascript
import {GradientBorder} from 'react-cool-wrappers';
```

#### Usage

```jsx
const BorderButton = () => {
  return (
    <GradientBorder
      colors={[
        "blue",
        "skyblue",
        "royalblue",
        "teal",
        "pink",
        "purple",
        "blue",
      ]}
      size="10px"
      animation="train"
    >
      <button>Cool Button!</button>
    </GradientBorder>
  );
};
```

#### Properties

| Parameter | Type     | Description                       | Default |
| :-------- | :------- | :-------------------------------- | :------ |
| `colors`      | `Array<string>` | **Required**. Pass in an array of colors used for border gradient. It's recommended to keep the first & last color the same to enable seamless animation. | undefined |
| `size`      | `string` | This represents the border size of the wrapper. Expects a pixel value. | `10px` |
| `borderRadius`      | `string` | This represents the border-radius of the wrapper. Expects a pixel value. | `10px` |
| `blur`      | `string` | This represents the blur value for the gradient. Expects a pixel value. | `16px` |
| `animation`      | `'off' \| 'pulse'` | This represents the type of animation applied. | `off` |
| `animDuration`      | `number` | This represents the animation duration. | _Default is different for different types_ | `undefined` |
| `attrs`      | `HTMLAttributes<HTMLDivElement>` | You can pass in the custom attributes for the wrapper here. Passed attributes will be provided to the wrapper. | `undefined` |


#### Demo

![](https://github.com/adurhmn/react-cool-wrappers/blob/main/assets/demo/Demo1.gif)

<br>

---

### GradientShadow

#### Importing

```javascript
import {GradientShadow} from 'react-cool-wrappers';
```

#### Usage

```jsx
const ShadowButton = () => {
  return (
    <GradientShadow
      colors={[
        "blue",
        "skyblue",
        "royalblue",
        "teal",
        "pink",
        "purple",
        "blue",
      ]}
      spread="10px"
    >
      <button>Cool Button!</button>
    </GradientShadow>
  );
};
```

#### Properties

| Parameter | Type     | Description                       | Default |
| :-------- | :------- | :-------------------------------- | :------ |
| `colors`      | `Array<string>` | **Required**. Pass in an array of colors used for gradient. It's recommended to keep the first & last color the same to enable seamless animation. | undefined |
| `spread`      | `string` | This represents the shadow spread size. Expects a pixel value. | `10px` |
| `borderRadius`      | `string` | This represents the border-radius of the wrapper. Expects a pixel value. | `10px` |
| `blur`      | `string` | This represents the blur value for the shadow. Expects a pixel value. | `16px` |
| `animation`      | `'off' \| 'pulse'` | This represents the type of animation applied. | `off` |
| `animDuration`      | `number` | This represents the animation duration. | _Default is different for different types_ | `undefined` |
| `attrs`      | `HTMLAttributes<HTMLDivElement>` | You can pass in the custom attributes for the wrapper here. Passed attributes will be provided to the wrapper. | `undefined` |

#### Demo

![](https://github.com/adurhmn/react-cool-wrappers/blob/main/assets/demo/Demo2.jpg)

<br>

## Feedback

If you have any feedback, please reach out to me at abdurmrahman7@gmail.com

## Author

- Abdur Rahman (abdurmrahman7@gmail.com)

## License

[MIT](https://choosealicense.com/licenses/mit/)


# chakra-ui-contextmenu

![](https://badgen.net/npm/v/chakra-ui-contextmenu)
![](https://badgen.net/npm/types/chakra-ui-contextmenu)
[![](https://badgen.net/bundlephobia/dependency-count/react-complex-tree)](https://bundlephobia.com/package/chakra-ui-contextmenu)
[![](https://badgen.net/bundlephobia/minzip/react-complex-tree)](https://bundlephobia.com/package/chakra-ui-contextmenu)

> Context Menu component for Chakra UI

![Demo for React Complex Tree](https://i.imgur.com/LDeTCoQ.gif)

[Checkout the storybook for more examples!](http://lukasbach.github.io/chakra-ui-contextmenu/)

## Installation

To start using chakra-ui-contextmenu, install it to your project as a dependency via

```
npm install chakra-ui-contextmenu
```

then import it and add your context menu component with

```typescript jsx
import { ContextMenu } from 'chakra-ui-contextmenu';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import { MenuList, MenuItem } from '@chakra-ui/menu';

render(
  <ContextMenu
    renderMenu={() => (
      <MenuList>
        <MenuItem>Context Menu Item 1</MenuItem>
        <MenuItem>Context Menu Item 2</MenuItem>
      </MenuList>
    )}
  >
    {ref => <div ref={ref}>Target</div>}
  </ContextMenu>
);
```

## Usage with Typescript

When using Typescript, you can type the context menu component with the kind
of target component to get better typings:

```typescript jsx
render(
  <ContextMenu<HTMLDivElement>
    renderMenu={() => (
      <MenuList>
        <MenuItem>Context Menu Item 1</MenuItem>
        <MenuItem>Context Menu Item 2</MenuItem>
      </MenuList>
    )}
  >
    {ref => <div ref={ref}>Target</div>}
  </ContextMenu>
);
```

## Props

The `ContextMenu` component provides the following props:

```typescript
export interface ContextMenuProps<T extends HTMLElement> {
  renderMenu: () => JSX.Element | null;
  children: (ref: MutableRefObject<T | null>) => JSX.Element | null;
  menuProps?: MenuProps;
  portalProps?: PortalProps;
  menuButtonProps?: MenuButtonProps;
}
```

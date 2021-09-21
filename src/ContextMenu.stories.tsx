import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContextMenu } from './ContextMenu';
import { Box, Button, ChakraProvider, Menu } from '@chakra-ui/react';
import { MenuList, MenuItem, MenuButton } from '@chakra-ui/menu';

export default {
  title: 'Context Menu',
  component: ContextMenu,
  decorators: [
    story => (
      <ChakraProvider>
        <style>{`
          html, body, #root {
            width: 100%;
            height: 100%;
          }
        `}</style>
        {story()}
      </ChakraProvider>
    )
  ]
} as ComponentMeta<typeof ContextMenu>;

const Template: ComponentStory<typeof ContextMenu> = (args) => <ContextMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: ref => (
    <div ref={ref} style={{ cursor: 'default' }}>Right-click me!</div>
  ),
  renderMenu: () => (
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  )
};

export const MultipleTargets = () => (
  <div>
    <ContextMenu<HTMLDivElement> renderMenu={() => (
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    )}>
      {ref => (
        <div ref={ref} style={{ cursor: 'default' }}>Target 1</div>
      )}
    </ContextMenu>
    <ContextMenu<HTMLDivElement> renderMenu={() => (
      <MenuList>
        <MenuItem>Mark as Draft</MenuItem>
      </MenuList>
    )}>
      {ref => (
        <div ref={ref} style={{ cursor: 'default' }}>Target 2</div>
      )}
    </ContextMenu>
    <ContextMenu<HTMLDivElement> renderMenu={() => (
      <MenuList>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    )}>
      {ref => (
        <div ref={ref} style={{ cursor: 'default' }}>Target 3</div>
      )}
    </ContextMenu>
  </div>
);

export const Scrolling = () => (
  <Box h="200%" pt="100%">
    <ContextMenu<HTMLDivElement> renderMenu={() => (
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    )}>
      {ref => (
        <div ref={ref} style={{ cursor: 'default' }}>Target 1</div>
      )}
    </ContextMenu>
  </Box>
);

export const ClickOtherTarget = () => (
  <>
    <ContextMenu<HTMLDivElement> renderMenu={() => (
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    )}>
      {ref => (
        <div ref={ref} style={{ cursor: 'default' }}>Context Menu Target</div>
      )}
    </ContextMenu>
    <Button onClick={() => alert("Click received!")}>
      Click me while the context menu is open!
    </Button>
  </>
);

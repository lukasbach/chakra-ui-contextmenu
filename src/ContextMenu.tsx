import * as React from 'react';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useEventListener, Portal, Menu, MenuButton } from '@chakra-ui/react';

export interface ContextMenuProps<T> {
  renderMenu: () => JSX.Element | null;
  children: (ref: MutableRefObject<T | null>) => JSX.Element | null;
}

export function ContextMenu<T extends HTMLElement = HTMLElement>(props: ContextMenuProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isDeferredOpen, setIsDeferredOpen] = useState(false);
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsRendered(true);
        setTimeout(() => {
          setIsDeferredOpen(true);
        });
      });
    } else {
      setIsDeferredOpen(false);
      const timeout = setTimeout(() => {
        setIsRendered(isOpen);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEventListener('contextmenu', e => {
    if (targetRef.current?.contains(e.target as any) && e.target === targetRef.current) {
      e.preventDefault();
      setIsOpen(true);
      setPosition([e.pageX, e.pageY]);
    } else {
      setIsOpen(false);
    }
  });

  return (
    <>
      { props.children(targetRef) }
      {isRendered && (
        <Portal>
          <Menu
            isOpen={isDeferredOpen}
            onClose={() => setIsOpen(false)}
            gutter={0}
          >
            <MenuButton
              aria-hidden={true}
              w={1}
              h={1}
              style={{
                position: 'absolute',
                left: position[0],
                top: position[1],
              }}
            />
            { props.renderMenu() }
          </Menu>
        </Portal>
      )}
    </>
  );
}

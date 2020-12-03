import { Grid, GridItem, Text, IconButton, Button } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '../theme';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const navItems: Array<[item: string, link: string]> = [
    ["Feed", "/feed"],
    ["Classes", "/"],
    ["Students", "/"],
    ["Workspace", "/"],
    ["Settings", "/"],
    ["Account", "/"],
  ];
  const navStyle = {
    color: `${theme.colors.text.tertiary}`,
    borderRight: `6px solid transparent`,
  }
  const navHoverStyle = isOpen ? {
    color: `${theme.colors.text.primary}`,
    fontWeight: 700,
    borderRight: `6px solid ${theme.colors.brand[100]}`,
  } : undefined;
  const navToggler = {
    top: isOpen ? "0" : "",
    right: isOpen ? "" : "0",
    aria: isOpen ? "close nav" : "open nav",
    icon: isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />,
  }
  return (
    <Grid
      zIndex="99"
      position="fixed"
      as="nav"
      bg="white"
      w="xs"
      minH="100vh"
      justifyItems="center"
      alignContent="center"
      gap="8em"
      transform={isOpen ? "translateX(0)" : "translateX(-80%)"}
      transition="transform .3s"
    >
      <GridItem
        top={navToggler.top}
        right={navToggler.right}
        cursor="pointer"
        p=".8em"
        position="fixed"
        >
        <IconButton
          bg="transparent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={navToggler.aria}
          icon={navToggler.icon}
        />
      </GridItem>
      <GridItem>
        <Image
          src="/learnbee-logo.svg"
          height={130}
          width={130}
        />
      </GridItem>
      <Grid
        w="100%"
        gap="1em"
      >
        {navItems.map(item => (
          <Grid
            as={Button}
            colorScheme={theme.colors.brand[100]}
            _hover={navHoverStyle}
            _focus={navHoverStyle}
            _active={navHoverStyle}
            css={navStyle}
            disabled={!isOpen}
            key={item[0]}
            variant="ghost" // Button prop
            borderRadius="0"
            bg="transparent"
            cursor={!isOpen ? "unset !important" : "pointer" }
            h="2em"
            transition="all 0.3s"
            alignItems="center"
          >
            <Link
              href={item[1]}
            >
              <Text
                as="a"
              >
                {item[0]}
              </Text>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
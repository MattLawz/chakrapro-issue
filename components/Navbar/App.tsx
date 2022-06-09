import {
    Box,
    Button,
    ButtonGroup,
    Container,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
  import { Logo } from './Logo'
  import { ResourcesPopover } from './ResourcesPopover'

  export const Navbar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" minH="md">
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
              <Logo />
              {isDesktop ? (
                <>
                  <ButtonGroup variant="link" spacing="8">
                    <Button>What Is Coinworks?</Button>
                    <Button>Features</Button>
                    <Button>Team</Button>
                    <ResourcesPopover />
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button variant="ghost">Discord</Button>
                    <Button variant="primary">GitHub</Button>
                  </HStack>
                </>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }
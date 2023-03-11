import Layout from "../../components/ui/layout/Layout";
import {SnowContainer} from "../../components/ui/particles/SnowContainer";
import Image from "next/image";
import {
  Box,
  Stack,
  SimpleGrid,
  Container,
  Text,
  StackDivider,
  useColorModeValue, Heading, Flex, HStack, Center
} from "@chakra-ui/react";
import H1Decorated from "../../components/ui/text/H1Decorated";
import Button from "../../components/ui/button/Button";

export default function Services() {
  return (
    <Layout>
      <SnowContainer/>
      <Stack position={'relative'} spacing={20}>
        <Box p={4} as={'section'} id={'service-banner'}>
          <Container maxW={'80%'} py={20}>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
              <Stack
                spacing={{base: 8, md: 10}}
              >
                <H1Decorated>Services</H1Decorated>
                <Box display={{base: 'flex', sm: 'none'}}>
                  <Image src={'/services-banner.png'} alt={'services-banner'} width={800} height={800}/>
                </Box>
                <Text color={'gray.400'} fontSize={'lg'}>
                  Our goal is to provide greater practicality and ease in creating and managing your events, putting
                  control of your event participants in your hands.
                </Text>
                <Text color={'gray.400'} fontSize={'lg'}>
                  You can better organize yourself in terms of promoting your event by referring to the list of
                  attendees, checking who will be attending, preparing to accommodate the expected number of people, and
                  enjoying many other benefits
                </Text>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={'gray.700'}
                    />
                  }>
                </Stack>
              </Stack>
              <Box display={{base: 'none', sm: 'flex'}}>
                <Image src={'/services-banner.png'} alt={'services-banner'} width={800} height={800}/>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
        <Stack bgColor={'gray.900'} position={'relative'} spacing={{base: 16, sm: "40"}} py={'8rem'}>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Container as={'section'} id={'services'} maxW={'80%'}>
              <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
                <Stack
                  spacing={{base: 8, md: 10}}
                  py={{base: 20, md: 28}}
                >
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={'red.500'}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}>
                    Label
                  </Text>
                  <Heading>Share an Event</Heading>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    As a label, you can create an account and share your events. There are no limits to published
                    events. Share when you want, for when you want, and how you want.
                  </Text>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    When sharing an event you can define necessary data!
                  </Text>
                </Stack>
                <Stack
                  spacing={{base: 8, md: 10}}
                  py={{base: 20, md: 28}}
                >
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={'red.500'}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}>
                    User
                  </Text>
                  <Heading>Ensure your Presence</Heading>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    As a user, you can navigate between the publicized events, check the public information about them,
                    and guarantee your presence in them.
                  </Text>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    You can also browse your favorite labels, see information about them and which events are active for
                    them at that moment!
                  </Text>
                </Stack>
              </SimpleGrid>
            </Container>
          </Flex>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Container as={'section'} id={'prices'} maxW={'80%'}>
              <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
                <Stack
                  spacing={{base: 8, md: 10}}
                  py={{base: 20, md: 28}}
                >
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={'red.500'}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}>
                    Price
                  </Text>
                  <Heading>Pay per event. No subscriptions</Heading>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    You only pay for what you share, no monthly subscription.
                  </Text>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    There is a single charge of R$50 for creating an account as a label, then enjoy sharing as many events as you want
                  </Text>
                </Stack>
                <Flex alignItems={'center'} alignContent={'center'} justifyContent={'center'}>
                  <Box
                    mb={4}
                    shadow="base"
                    borderWidth="1px"
                    p={6}
                    borderColor={'gray.600'}
                    borderRadius={'xl'}
                    position="relative"
                  >
                    <Box
                      position="absolute"
                      top="-16px"
                      left="50%"
                      style={{transform: 'translate(-50%)'}}>
                      <Text
                        textTransform="uppercase"
                        bg={'red.700'}
                        px={3}
                        py={1}
                        color={'gray.300'}
                        fontSize="sm"
                        fontWeight="600"
                        rounded="xl">
                        Most Popular
                      </Text>
                    </Box>
                    <Stack py={4} px={12} spacing={2}>
                      <Center>
                        <Text fontWeight="500" fontSize="2xl">
                          Share an Event
                        </Text>
                      </Center>
                      <HStack justifyContent="center">
                        <Text fontSize="3xl" fontWeight="600">
                          R$
                        </Text>
                        <Text fontSize="5xl" fontWeight="900">
                          100
                        </Text>
                        <Text fontSize="3xl" color="gray.500">
                          /event
                        </Text>
                      </HStack>
                      <Flex fontSize={'lg'} color={'gray.400'} justifyContent={'space-between'}>
                        <Stack w={'full'}>
                          <Text>Title</Text>
                          <Text>Description</Text>
                          <Text>Flyer</Text>
                          <Text>Place</Text>
                          <Text>Price per lot</Text>
                        </Stack>
                        <Stack w={'full'}>
                          <Text>Date Start</Text>
                          <Text>Date End</Text>
                          <Text>List available At</Text>
                          <Text>Classification</Text>
                          <Text>Status</Text>
                        </Stack>
                      </Flex>
                      <Center w="100%" pt={7}>
                        <Button w="sm" text={'Share now'}/>
                      </Center>
                    </Stack>
                  </Box>
                </Flex>
              </SimpleGrid>
            </Container>
          </Flex>
        </Stack>
      </Stack>
    </Layout>
  )
}
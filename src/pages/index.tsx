import Layout from '../components/ui/layout/Layout';
import {FcConferenceCall, FcNews, FcPrint, FcApproval, FcLineChart, FcFlowChart} from 'react-icons/fc';
import ControlPanel from '../components/assets/admin-control-panel.svg'
import FAQs from '../components/assets/faqs.svg'
import {SnowContainer} from '../components/ui/particles/SnowContainer';
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box,
  Center,
  Container,
  createIcon, Flex,
  Heading,
  HStack,
  Icon, Image, SimpleGrid,
  Stack, StackDivider,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import H1Decorated from "../components/ui/text/H1Decorated";
import Button from "../components/ui/button/Button";
import {ReactElement} from "react";

export default function Home() {
  return (
    <Layout>
      <SnowContainer/>
      <Stack py={'10rem'} spacing={20}>
        <Container as={'section'} id={'home'} maxW={'80%'}>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Stack
              align={'center'}
              spacing={{base: 8, md: 10}}
              py={{base: 20, md: 28}}
            >
              <Heading>
                <Center fontSize={'5xl'}>A new way to </Center>
                <H1Decorated>Share your Events</H1Decorated>
              </Heading>
              <Text color={'gray.400'}>
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                Share your event in a simple way and have access to it's guest list whenever you want
              </Text>
              <HStack
                direction={'column'}
                spacing={3}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}>
                <Button text={'Prices'}
                />
                <Button text={'Share Now'}/>
                <Box>
                  <Icon
                    as={Arrow}
                    color={useColorModeValue('gray.800', 'gray.300')}
                    w={71}
                    position={'absolute'}
                    right={-71}
                    top={'10px'}
                  />
                  <Text
                    fontSize={'lg'}
                    fontFamily={'Caveat'}
                    position={'absolute'}
                    right={'-105px'}
                    top={'-15px'}
                    transform={'rotate(10deg)'}>
                    Starting at R$50
                  </Text>
                </Box>
              </HStack>
            </Stack>
          </Flex>
        </Container>
        <Box p={4} as={'section'} id={'features'} bgColor={'gray.900'} position={'relative'}>
          <Container maxW={'80%'} py={20}>
            <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
              <Feature
                icon={<Icon as={FcNews} w={10} h={10}/>}
                title={'Control in your hands'}
                text={
                  'Manage the list the way you want, add names, switch names between lots...'
                }
              />
              <Feature
                icon={<Icon as={FcConferenceCall} w={10} h={10}/>}
                title={'Available for everyone'}
                text={
                  'Without red tape, create an account and you can share your event! You don\'t need to have a company!'
                }
              />
              <Feature
                icon={<Icon as={FcPrint} w={10} h={10}/>}
                title={'Guest list whenever you want'}
                text={
                  'Take the guest list the way and the time you want, excel, google spreadsheets, printed...'
                }
              />
            </SimpleGrid>
          </Container>
        </Box>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Container as={'section'} id={'goal'} maxW={'80%'}>
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
                  Our Goal
                </Text>
                <Heading>Software as a Service for you</Heading>
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
                      borderColor={useColorModeValue('gray.100', 'gray.700')}
                    />
                  }>
                  <Row
                    icon={
                      <Icon as={FcLineChart} w={10} h={10}/>
                    }
                    text={'Greater management'}
                  />
                  <Row
                    icon={<Icon as={FcFlowChart} w={10} h={10}/>}
                    text={'Greater flexibility'}
                  />
                  <Row
                    icon={
                      <Icon as={FcApproval} w={10} h={10}/>
                    }
                    text={'Greater confidence'}
                  />
                </Stack>
              </Stack>
              <Flex display={{base: 'none', sm: 'flex'}}>
                <ControlPanel/>
              </Flex>
            </SimpleGrid>
          </Container>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Container as={'section'} id={'faq'} maxW={'80%'}>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
              <Flex display={{base: 'none', sm: 'flex'}}>
                <FAQs/>
              </Flex>
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
                  FAQ
                </Text>
                <Heading>Frequently Asked Questions</Heading>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        What do I need to do to share an event?
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      To share an event, just access your account, or create one, access the "Share my Event" tab, fill in the information and that's it! Your event is available to everyone!
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        What do I need to fill in to share an event?
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      To share an event, we are committed to disclosing as much information as possible and important to the user, such as Title, Location, Description, Start Date, Date End, Price, Classification and Flyer.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        Can I manually add names to the list?
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      Yes, you can manually add as many names as you want to your list. You have the option to add names in the column for any of the prices you have in the event, or move names between these columns.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        How do I get someone to join an event for free?
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      A user cannot enter alone in the "Free" column of your event. But don't worry, when adding names you can add it in the "Free" column.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        How do I get my guest list?
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      To do this, just access your events and click on the document icon, there you will have the option to print the list, download as excel and download as google shhets.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>
            </SimpleGrid>
          </Container>
        </Flex>
      </Stack>
    </Layout>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({title, text, icon}: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.400'}>{text}</Text>
    </Stack>
  );
};

interface RowProps {
  text: string;
  icon?: ReactElement;
}

const Row = ({text, icon}: RowProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
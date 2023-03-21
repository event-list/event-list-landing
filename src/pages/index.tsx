import Layout from '../components/ui/layout/Layout';
import {FcConferenceCall, FcNews, FcPrint, FcApproval, FcLineChart, FcFlowChart} from 'react-icons/fc';
import ControlPanel from '../components/assets/admin-control-panel.svg'
import FAQs from '../components/assets/faqs.svg'
import {SnowContainer} from '../components/ui/particles/SnowContainer';
import {useTranslation} from 'next-i18next'
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
  Box,
  Center,
  Container,
  createIcon, Flex,
  Heading,
  HStack,
  Icon, SimpleGrid,
  Stack, StackDivider,
  Text,
} from "@chakra-ui/react";
import H1Decorated from "../components/ui/text/H1Decorated";
import Button from "../components/ui/button/Button";
import {ReactElement} from "react";
import Link from "next/link";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'index',
        'header',
        'common'
      ])),
    },
  }
}

export default function Home() {
  const {t} = useTranslation('index')

  return (
    <Layout>
      <SnowContainer/>
      <Container as={'section'} id={'home'} maxW={'80%'}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Stack
            align={'center'}
            spacing={{base: 8, md: 10}}
            py={{base: 20, md: 28}}
          >
            <Center fontSize={{base: '2xl', md: '5xl'}}>{t('new-way')}</Center>
            <H1Decorated textAlign={'center'}>{t('share-your-events')}</H1Decorated>
            <Text color={'gray.400'} textAlign={'center'}>
              {t('share-event-short-description')}
            </Text>
            <HStack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Link href={'/services#prices'}>
                <Button text={t('prices')}/>
              </Link>
              <Link href={'/'}>
                <Button text={t('share-now')}/>
              </Link>
            </HStack>
          </Stack>
        </Flex>
      </Container>
      <Stack bgColor={'gray.900'} position={'relative'} spacing={{base: 8, sm: "40"}} py={{base: '3rem', md: '8rem'}}>
        <Box as={'section'} id={'features'}>
          <Container maxW={'80%'} py={2}>
            <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
              <Feature
                icon={<Icon as={FcNews} w={10} h={10}/>}
                title={t('control-in-your-hands')}
                text={
                  t('control-in-your-hands-description')
                }
              />
              <Feature
                icon={<Icon as={FcConferenceCall} w={10} h={10}/>}
                title={t('available-for-everyone')}
                text={
                  t('available-for-everyone-description')
                }
              />
              <Feature
                icon={<Icon as={FcPrint} w={10} h={10}/>}
                title={t('guest-list-whenever-you-want')}
                text={
                  t('guest-list-whenever-you-want-description')
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
                  {t('our-goal')}
                </Text>
                <Heading>{t('why-create-guest-list')}</Heading>
                <Flex display={{base: 'flex', sm: 'none'}}>
                  <ControlPanel/>
                </Flex>
                <Text color={'gray.400'} fontSize={'lg'}>
                  {t('our-goal-first-p')}
                </Text>
                <Text color={'gray.400'} fontSize={'lg'}>
                  {t('our-goal-second-p')}
                </Text>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={'gray.700'}
                    />
                  }>
                  <Row
                    icon={
                      <Icon as={FcLineChart} w={10} h={10}/>
                    }
                    text={t('greater-management')}
                  />
                  <Row
                    icon={<Icon as={FcFlowChart} w={10} h={10}/>}
                    text={t('greater-flexibility')}
                  />
                  <Row
                    icon={
                      <Icon as={FcApproval} w={10} h={10}/>
                    }
                    text={t('greater-confidence')}
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
                  {t('faq')}
                </Text>
                <Heading>{t('frequently-asked-questions')}</Heading>
                <Flex display={{base: 'flex', sm: 'none'}}>
                  <FAQs/>
                </Flex>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        {t('question-what-need-share-event')}
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {t('answer-what-need-share-event')}
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        {t('question-what-fill-share-event')}
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {t('answer-what-fill-share-event')}
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        {t('question-add-manually-names')}
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {t('answer-add-manually-names')}
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        {t('question-add-free-names')}
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {t('answer-add-free-names')}
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        {t('question-get-geust-list')}
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {t('answer-get-geust-list')}
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
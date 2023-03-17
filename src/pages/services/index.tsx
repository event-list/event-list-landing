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
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'services',
        'header',
        'common'
      ])),
    },
  }
}

export default function Services() {
  const {t} = useTranslation('services')

  return (
    <Layout>
      <SnowContainer/>
      <Stack position={'relative'} spacing={{base: 12, sm: 20}}>
        <Box p={4} as={'section'} id={'service-banner'}>
          <Container maxW={'80%'} py={{base: 12, sm: 20}}>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
              <Stack
                spacing={{base: 8, md: 10}}
              >
                <H1Decorated>{t('services')}</H1Decorated>
                <Box display={{base: 'flex', sm: 'none'}}>
                  <Image src={'/services-banner.png'} alt={'services-banner'} width={800} height={800}/>
                </Box>
                <Text color={'gray.400'} fontSize={'lg'}>
                  {t('services-goodbye-manual-lists')}
                </Text>
                <Text color={'gray.400'} fontSize={'lg'}>
                  {t('services-not-event-creator')}
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
        <Stack bgColor={'gray.900'} position={'relative'} spacing={{base: 8, sm: "40"}} py={{base: '3rem', md: '8rem'}}>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Container as={'section'} id={'services'} maxW={'80%'}>
              <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
                <Stack
                  spacing={{base: 8, md: 10}}
                  py={2}
                >
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={'red.500'}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}>
                    {t('merchant')}
                  </Text>
                  <Heading>{t('share-an-event')}</Heading>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    {t('as-a-merchant')}
                  </Text>
                </Stack>
                <Stack
                  spacing={{base: 8, md: 10}}
                  py={2}
                >
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={'red.500'}
                    p={2}
                    alignSelf={'flex-start'}
                    rounded={'md'}>
                    {t('user')}
                  </Text>
                  <Heading>{t('ensure-your-presence')}</Heading>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    {t('as-an-user')}
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
                    {t('price')}
                  </Text>
                  <Heading>{t('pay-per-event')}</Heading>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    {t('no-montly')}
                  </Text>
                  <Text color={'gray.400'} fontSize={'lg'}>
                    {t('enjoy-share-an-event')}
                  </Text>
                </Stack>
                <Flex alignItems={'center'} alignContent={'center'} justifyContent={'center'}>
                  <Box
                    mb={4}
                    shadow="base"
                    borderWidth="1px"
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
                        {t('most-popular')}
                      </Text>
                    </Box>
                    <Stack py={4} px={12} spacing={2}>
                      <Center>
                        <Text fontWeight="500" fontSize="2xl" textAlign={'center'}>
                          {t('share-an-event')}
                        </Text>
                      </Center>
                      <HStack justifyContent="center">
                        <Text fontSize="3xl" fontWeight="600">
                          {t('price-card.coin')}
                        </Text>
                        <Text fontSize="5xl" fontWeight="900">
                          {t('price-card.value')}
                        </Text>
                        <Text fontSize="3xl" color="gray.500">
                          {t('price-card.prefix')}
                        </Text>
                      </HStack>
                      <Flex fontSize={'lg'} color={'gray.400'} justifyContent={'space-between'}>
                        <Stack w={'full'}>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('title')}</Text>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('description')}</Text>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('flyer')}</Text>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('place')}</Text>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('price-per-lot')}</Text>
                        </Stack>
                        <Stack w={'full'}>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('date-start')}</Text>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('date-end')}</Text>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('list-available-at')}</Text>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('classification')}</Text>
                          <Text fontSize={{base: 'md', sm: 'lg'}}>{t('status')}</Text>
                        </Stack>
                      </Flex>
                      <Center pt={7}>
                        <Button text={t('share-now')}/>
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
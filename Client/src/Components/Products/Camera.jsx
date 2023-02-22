import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,

} from '@chakra-ui/react';

 const Camera=()=> {
  return (
    
    <Flex
      w={'full'}
      h={'28vh'}
      backgroundImage={
        'url(https://www.adorama.com/images/cms/15616Photography-Category-Header-BG_18641.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={600}
            lineHeight={1.2}
            fontSize={'40px'}
           >
          Photography
          </Text>
         
        </Stack>
      </VStack>
    </Flex>
   
  );
}
export default Camera
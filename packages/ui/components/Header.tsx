import { Flex, Image, Text } from "@chakra-ui/react";

const MainHeader = () => (
	<Flex
		w="100%"
		align="center"
		justify="center"
		flexDir="column"
		pos="relative"
		padding="20px"
	>
		<Image src="logo.png" boxSize="200px" objectFit="contain" />
		<Text fontSize="36px" textAlign="center">WIP - Where Nature Meets Nurture: Healing from the Cradle of Mankind</Text>
	</Flex>
);

export default MainHeader;

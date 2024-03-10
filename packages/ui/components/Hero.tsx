import { Flex, Text, Image, Heading } from "@chakra-ui/react";

const Hero = () => (
	<Flex padding={{ base: "20px", md: "50px" }} pos="relative" align="center" flexDirection={{ base: "column", md: "row" }}>
		<Flex flexDir="column" padding="50px">
			<Text fontSize="24px">
				We aspire to lead a movement where the wisdom of African herbal traditions shines brightly, inspiring a new wave of herbal remedy enthusiasts to embrace natural and sustainable healing practices with Cradle Apothecary.
			</Text>
			<Flex h="30px" />
			<Text fontSize="24px">
				We want to be the bridge between cultures and traditions through the promotion of African herbal remedies and the popular Western herbal world, creating a global community united by a shared passion for holistic well-being.
			</Text>
		</Flex>
	</Flex>
);

export default Hero;

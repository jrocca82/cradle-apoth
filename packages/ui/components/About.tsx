import { Flex, Text, Image, Heading, OrderedList, ListItem, List } from "@chakra-ui/react";
import Link from "next/link";

const About = () => (
    <Flex
        padding={{ base: "20px", md: "50px" }}
        fontSize="24px"
        align="center"
        flexDirection={{ base: "column", md: "row" }}
        bgImage="url('tree.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minH="100vh"
    >
        <Flex
            flexDir="column"
            padding="50px"
            bgColor="white"
            borderRadius="lg"
            marginX="50px"
        >
            <Heading>
                The earth is generous to Its people, It gives unreservedly.
            </Heading>
            <Text fontSize="24px">
                In a world where wellness is paramount, Cradle Apothecary's vision is to champion the integration of African superfoods into mainstream health practices, fostering a culture of empowerment and wellbeing for all.
            </Text>
            <Flex h="30px" />
            <Text>
                We want to bring the rich history and powerful healing properties of the natural and ancient ingredients from Africa to the Western world .
            </Text>
        </Flex>
    </Flex>

);

export default About;

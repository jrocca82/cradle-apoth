import { Flex, Button, Image } from "@chakra-ui/react";
import { NextPage } from "next";
import MainHeader from "@cradleapoth/ui/components/Header";
import About from "@cradleapoth/ui/components/About";
import Hero from "@cradleapoth/ui/components/Hero";
import { sendEmail } from "@cradleapoth/ui/helpers/sendEmail";


const HomePage: NextPage = () => (
	<Flex w="100%" flexDirection="column">
		<MainHeader />
		<Flex w="100%" justify="center" mb="20px">
			<Button
				onClick={sendEmail}
				mt={4}
				bgColor="secondary.500"
				color="white"
				w="200px"
			>
				Contact Us
			</Button>
		</Flex>

		<About />
		<Hero />
		<Button
			onClick={sendEmail}
			marginBottom="50px" 
			alignSelf="center"
			bgColor="secondary.500"
			color="white"
			w="200px"
		>
			Get in Touch
		</Button>
	</Flex>
);

export default HomePage;

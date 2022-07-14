import {
	HStack,
	Text,
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	Image,
	Heading
} from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";
import ConnectWallet from "./ConnectWallet";
import { useContext } from "react";
import { Web3Context } from "../context/Web3Context";
import { ProfileMenu } from "./ProfileMenu";
import UploadButton from "./UploadButton";
import { RootContext } from "../pages/_app";

export default function Header() {
	const { account } = useContext(Web3Context);
	const { uploadModalOnOpen } = useContext(RootContext);

	return (
		<HStack
			justifyContent="space-between"
			px={5}
			py={4}
			zIndex="1000"
			background={"#F9F9C5"}
			width="100%"
			borderWidth="2px"
			position="fixed"
			borderColor={"#F37878"}
			borderRadius="30px"
		>
			<HStack>
				<Link href="/">
					
					<Heading  color={"#F37878"}>
						safree
					</Heading>
				</Link>
			</HStack>

			<HStack>
				{account ? (
					<HStack>
						<Button onClick={uploadModalOnOpen} background={"#F37878"}>Upload</Button>
						<ProfileMenu />
					</HStack>
				) : (
					<ConnectWallet />
				)}
			</HStack>
		</HStack>
	);
}

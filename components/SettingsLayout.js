import { HStack, Grid, VStack, Button } from "@chakra-ui/react";
import { ApolloContext } from "../context/ApolloContext";
import { useContext } from "react";
import ConnectWallet from "./ConnectWallet";
import { useEffect } from "react";
import Link from "next/link";

export default function SettingsLayout({ children }) {
	const { apolloContext } = useContext(ApolloContext);
	const { currentProfile } = apolloContext;

	return (
		<HStack justifyContent="center" width="100%" py="100px" background={"#F9F9C5"} borderWidth="2px" borderColor={"#F37878"}>
			{currentProfile !== undefined ? (
				<Grid
					width="100%"
					templateColumns="1fr 3fr"
					gridGap={4}
					px="200px"
					borderColor={"#F37878"}
				>
					<VStack width="100%">
						<Link href="/settings">
							<Button
								variant="ghost"
								textAlign="left"
								width="100%"
								color={"#F37878"}
								borderColor={"#F37878"}
							>
								General
							</Button>
						</Link>
						<Link href="/settings/allowance">
							<Button
								variant="ghost"
								textAlign="left"
								width="100%"
								color={"#F37878"}
							>
								Allowance
							</Button>
						</Link>
					</VStack>
					<VStack spacing="20px" width="100%" >
						{children}
					</VStack>
				</Grid>
			) : (
				<ConnectWallet />
			)}
		</HStack>
	);
}

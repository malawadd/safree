import {
	VStack,
	Text,
	Box,
	Heading,
	HStack,
	Avatar,
	AccordionButton,
} from "@chakra-ui/react";
import svgAvatarGenerator from "./svgAvatarGenerator";
import Link from "next/link";

export default function Sidebar({ recommendedProfiles }) {
	return (
		<VStack height="100%" width="100%" padding={5}>
			<VStack
				borderWidth="2px"
				width="100%"
				padding={5}
				borderRadius="30px"
				alignItems="flex-start"
				borderColor={"#F37878"}
				backgroundColor={"#F9F9C5"}

			>
				<Heading size="md" color={"#F37878"}>Recommeded Profiles</Heading>
				<VStack width="100%">
					{recommendedProfiles
						? recommendedProfiles.map((profile) => {
								return (
									<Link
										key={profile.id}
										href={`/user/${profile.id}`}
									>
										<HStack
											width="100%"
											justifyContent="flex-start"
										>
											{profile.picture ? (
												<Avatar 
													borderWidth="2px"
													borderColor={"#F37878"}
													src={
														profile.picture.original
															.url
													}
												/>
											) : (
												<Avatar
													backgroundColor={"#F9F9C5"}
													borderWidth="2px"
													borderColor={"#F37878"}
													size="md"
													bg={"#F9F9C5"}
													src={svgAvatarGenerator(
														profile.ownedBy,
														{
															dataUri: true,
														}
													)}
												/>
											)}

											<VStack
												alignItems="flex-start"
												spacing="0"
											>
												<span>{profile.name}</span>
												<span>{profile.handle}</span>
												
											</VStack>
										</HStack>
									</Link>
								);
						  })
						: null}
				</VStack>
				{/* 				
				<HStack width="100%" justifyContent="flex-start">
					<Avatar size="md" src="https://bit.ly/dan-abramov" />
					<VStack spacing="0">
						<span>Username</span>
						<span>Followers</span>
					</VStack>
				</HStack> */}
			</VStack>
		</VStack>
	);
}

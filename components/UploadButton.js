import { useContext } from "react";
import { ApolloContext } from "../context/ApolloContext";
import { Button } from "@chakra-ui/react";

function UploadButton() {
	const { apolloContext } = useContext(ApolloContext);
	const { profiles } = apolloContext;

	return (
		<>{profiles && profiles.length > 0 ? <Button background={"#F37878"} >Upload</Button> : null}</>
	);
}

export default UploadButton;

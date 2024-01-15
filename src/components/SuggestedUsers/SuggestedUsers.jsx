import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedUserHeader from "../SuggestedUsers/SuggestedUserHeader/SuggestedUserHeader";
import SuggestedUser from "./SuggestedUser/SuggestedUser";
import useGetSuggestedUsers from "../../Hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  if (isLoading) return null;
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedUserHeader />
      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.400" }}
            cursor={"pointer"}
          >
            See All
          </Text>
        </Flex>
      )}

      {/* suggested user rendered here */}
      {suggestedUsers.map((user) => {
        return <SuggestedUser user={user} key={user.id} />;
      })}
      {/* my details and construction time mentioned */}
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href="https://www.instagram.com/mhrishabh_tiwari?igsh=OHNpdjc2b3VhNzJl"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          RISHABH TIWARI
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;

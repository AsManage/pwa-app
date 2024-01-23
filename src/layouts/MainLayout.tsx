import { Box, Flex, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import SimpleSidebar from "components/molecules/Sidebar";
import React from "react";
import { FaBackward, FaList } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoHome, IoPersonSharp, IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        h="50px"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          position="absolute"
          h="30px"
          w="30px"
          left="12px"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack
            fontSize="28px"
            color="var(--chakra-colors-purple-600)"
          />
        </Box>

        <Flex alignItems="center">
          <Image src="/images/logo-trans.png" h="30px" />
          <Text color="purple.500" fontWeight="bold" fontSize="18px">
            ASMANAGE
          </Text>
        </Flex>
      </Flex>
      <Box bg="gray.100" h="calc(100vh - 110px)" p="12px" overflow="auto">
        {children}
      </Box>
      <Box h="50px">
        <Tabs position="relative" isFitted colorScheme="purple">
          <TabList h="60px" pb="10px">
            <Tab borderTopWidth="3px" borderBottom="none">
              <IoHome fontSize="18px" />
            </Tab>
            <Tab borderTopWidth="3px" borderBottom="none">
              <IoSettings fontSize="18px" />
            </Tab>
            <Tab borderTopWidth="3px" borderBottom="none">
              <IoPersonSharp fontSize="18px" />
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Box>
  );
}

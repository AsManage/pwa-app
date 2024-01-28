import { Box, Flex, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const router = useLocation();

  useEffect(() => {
    const firstRoute = router.pathname.split("/")[1];
    switch (firstRoute) {
      case "home":
        setIndex(0);
        break;
      case "profile":
        setIndex(1);
        break;
      default:
        break;
    }
  }, [router.pathname]);

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
        <Tabs position="relative" isFitted colorScheme="purple" index={index}>
          <TabList h="60px" pb="10px">
            <Tab
              borderTopWidth="3px"
              borderBottom="none"
              onClick={() => {
                navigate("/home");
              }}
            >
              <IoHome fontSize="18px" />
            </Tab>
            <Tab
              borderTopWidth="3px"
              borderBottom="none"
              onClick={() => {
                navigate("/profile");
              }}
            >
              <IoPersonSharp fontSize="18px" />
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Box>
  );
}

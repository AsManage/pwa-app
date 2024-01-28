import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaReceipt } from "react-icons/fa";
import { showData } from "utils/common";

type Props = {
  cardTitle?: string;
  gradientColor?: string;
  isComingSoon?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export function FeatureCard({
  cardTitle,
  gradientColor,
  isComingSoon = false,
  icon,
  onClick,
}: Props) {
  return (
    <Box
      w="100%"
      h="150px"
      borderRadius="16px"
      background={gradientColor}
      opacity={isComingSoon ? 0.4 : 1}
      padding="12px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      cursor="pointer"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      pointerEvents={isComingSoon ? "none" : "auto"}
      onClick={() => {
        if (!isComingSoon) onClick && onClick();
      }}
    >
      <Box textAlign="center">
        <Text color="white" fontSize="20px" fontWeight="bold">
          {showData(cardTitle)}
        </Text>
        {isComingSoon && (
          <Text color="white" fontSize="20px" fontWeight="bold">
            Coming Soon...
          </Text>
        )}
      </Box>

      <Box
        p="12px"
        bg="white"
        position="absolute"
        top={0}
        right={0}
        borderBottomLeftRadius="12px"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      >
        {icon}
      </Box>
    </Box>
  );
}

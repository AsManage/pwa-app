import { Box, Flex } from "@chakra-ui/react";
import { FeatureCard } from "components/card/FeatureCard";
import React from "react";
import { FaBoxOpen, FaReceipt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {};

const listCard = [
  {
    id: 1,
    title: "Audit",
    color: "var(--gradient-07)",
    icon: <FaReceipt fontSize="18px" />,
    path: "/audit",
  },
  {
    id: 2,
    title: "Asset",
    color: "var(--gradient-09)",
    isComingSoon: true,
    icon: <FaBoxOpen fontSize="18px" />,
  },
];

export function HomContainer({}: Props) {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex gap="12px">
        {listCard?.map((card) => {
          return (
            <FeatureCard
              key={card.id}
              cardTitle={card.title}
              gradientColor={card.color}
              isComingSoon={card.isComingSoon}
              icon={card.icon}
              onClick={() => {
                navigate(String(card.path));
              }}
            />
          );
        })}
      </Flex>
    </Box>
  );
}

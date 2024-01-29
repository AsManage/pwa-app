import {
  Avatar,
  Box,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { AUDIT_ASSET_STATUS } from "constants/common";
import { CgMenuGridO } from "react-icons/cg";

type Props = {
  title?: string;
  image?: string;
  status: string;
  onClick?: () => void;
};

export function AssetCard({ title, image, status, onClick }: Props) {
  return (
    <Box
      w="100%"
      padding="12px"
      borderRadius="8px"
      position="relative"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      transition="0.3s"
      bg={status === AUDIT_ASSET_STATUS.AUDITED ? "green.200" : "#f2f2f2"}
      cursor="pointer"
      display="flex"
      alignItems="center"
      gap="12px"
      onClick={onClick}
    >
      <Avatar
        src={image ? image : "/images/img-placeholder.jpg"}
        objectFit="cover"
      />
      <Text
        fontSize="16px"
        fontWeight="medium"
        width="calc(100% - 30px)"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {title}
      </Text>
      <Menu colorScheme="purple">
        <Box cursor="pointer" position="absolute" top="12px" right="12px">
          <MenuButton as={CgMenuGridO} fontSize="22px"></MenuButton>
          <MenuList>
            <MenuItem>Hand over</MenuItem>
            <MenuItem>Transfer</MenuItem>
          </MenuList>
        </Box>
      </Menu>
    </Box>
  );
}

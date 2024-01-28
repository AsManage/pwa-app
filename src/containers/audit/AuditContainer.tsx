import { Box } from "@chakra-ui/react";
import AuditCard from "components/molecules/AuditCard";
import { AUDIT_STATUS } from "constants/common";
import React from "react";

type Props = {};

export default function AuditContainer({}: Props) {
  return (
    <Box>
      <AuditCard status={AUDIT_STATUS.UPCOMING} sessionId={0} />
    </Box>
  );
}

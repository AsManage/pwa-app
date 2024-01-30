import { Box, Button, VStack, useDisclosure } from "@chakra-ui/react";
import AlertConfirm from "components/modal/AlertConfirm";
import { AssetCard } from "components/molecules/AssetCard";
import { AUDIT_STATUS } from "constants/common";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  endAuditSession,
  getSessionDetail,
  startAuditSession,
} from "services/audit.service";

type Props = {};

export default function AuditDetailContainer({}: Props) {
  const [sessionDetail, setSessionDetail] = useState({});
  const { auditId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const initData = async () => {
    const response = await getSessionDetail(Number(auditId));
    const { isSuccess, result } = response.data;
    if (isSuccess) {
      setSessionDetail(result);
    }
  };

  const handleStartAudit = async () => {
    await startAuditSession(Number(auditId));
    initData();
  };

  const handleEndAudit = async () => {
    await endAuditSession(Number(auditId));
    navigate(-1);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <Box>
      <VStack spacing="12px">
        {(sessionDetail as any)?.status === AUDIT_STATUS.AUDITING ? (
          <VStack w="100%">
            {(sessionDetail as any)?.assets?.map((asset: any) => {
              return (
                <AssetCard
                  key={asset?.assetId}
                  title={asset?.detail?.name}
                  image={asset?.detail?.image}
                  status={asset?.status}
                  onClick={() => {
                    navigate("verify");
                  }}
                />
              );
            })}
            <Button colorScheme="red" onClick={onOpen}>
              End Audit
            </Button>
          </VStack>
        ) : (
          <Button colorScheme="green" onClick={handleStartAudit}>
            Start Audit
          </Button>
        )}
      </VStack>
      <AlertConfirm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleEndAudit}
      />
    </Box>
  );
}

import { Box, Button, VStack } from "@chakra-ui/react";
import { AssetCard } from "components/molecules/AssetCard";
import { AUDIT_STATUS } from "constants/common";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSessionDetail } from "services/audit.service";

type Props = {};

export default function AuditDetailContainer({}: Props) {
  const [sessionDetail, setSessionDetail] = useState({});
  const { auditId } = useParams();
  const navigate = useNavigate();

  const initData = async () => {
    const response = await getSessionDetail(Number(auditId));
    const { isSuccess, result } = response.data;
    if (isSuccess) {
      setSessionDetail(result);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <Box>
      <VStack spacing="12px">
        {true ? (
          (sessionDetail as any)?.assets?.map((asset: any) => {
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
          })
        ) : (
          <Button colorScheme="green">Start Audit</Button>
        )}
      </VStack>
    </Box>
  );
}

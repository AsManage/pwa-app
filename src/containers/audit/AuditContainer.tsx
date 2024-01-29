import { Box, Img, Text, VStack } from "@chakra-ui/react";
import AuditCard from "components/molecules/AuditCard";
import { AUDIT_STATUS, DEFAULT_FORMAT_DATETIME } from "constants/common";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getListAvailableSession } from "services/audit.service";

type Props = {};

export default function AuditContainer({}: Props) {
  const [data, setData] = useState([]);

  const initData = async () => {
    const response = await getListAvailableSession();
    const { isSuccess, result } = response.data;
    if (isSuccess) {
      setData(result);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <VStack spacing="12px">
      {data?.length > 0 ? (
        data?.map((ele: any) => {
          return (
            <AuditCard
              key={ele?.id}
              status={ele?.status}
              sessionId={ele?.id}
              name={ele?.name}
              startDate={moment(ele.startDate).format(DEFAULT_FORMAT_DATETIME)}
              endDate={moment(ele.endDate).format(DEFAULT_FORMAT_DATETIME)}
              assigner={`${ele?.createdUser.firstName} ${ele?.createdUser.lastName}`}
            />
          );
        })
      ) : (
        <Box p="24px">
          <Img src="/images/no-data-found.png" />
        </Box>
      )}
    </VStack>
  );
}

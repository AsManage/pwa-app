import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import QrReader from "react-qr-reader";

type Props = {};

export default function AuditDetailContainer({}: Props) {
  const [data, setData] = useState<any>();

  const handleError = (err: any) => {
    console.error(err);
  };

  const handleScan = (data: any) => {
    if (data) {
      setData({
        result: data,
      });
    }
  };

  return (
    <Box>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        facingMode="environment"
      />
      <p>{JSON.stringify(data?.result)}</p>
    </Box>
  );
}

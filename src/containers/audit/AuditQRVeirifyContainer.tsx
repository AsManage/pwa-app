import {
  Box,
  Button,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { AssetCard } from "components/molecules/AssetCard";
import React, { useEffect, useState } from "react";
import QrReader from "react-qr-reader";
import { useNavigate, useParams } from "react-router-dom";
import {
  getListAvailableSession,
  getSessionDetail,
} from "services/audit.service";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { showToast } from "store/common";

type Props = {};

export default function AuditQRVeirifyContainer({}: Props) {
  const [isVerified, setIsVerified] = useState(false);
  const [sessionDetail, setSessionDetail] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auditId } = useParams();
  const handleError = (err: any) => {
    console.error(err);
  };

  const handleScan = (data: any) => {
    const valid = Object.keys(
      _.mapKeys((sessionDetail as any)?.assets, "assetId")
    ).includes(data);
    if (valid) {
      dispatch(
        showToast({
          status: "success",
          message: "Scan QR Success",
        })
      );
    }
    setIsVerified(valid);
  };

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
      {isVerified ? (
        <VStack spacing="12px" w="100%">
          <Box w="100%">
            <Text className="required" mb="8px">
              Status
            </Text>
            <Select
              focusBorderColor="purple.400"
              colorScheme="purple"
              placeholder="Select option"
              variant="solid"
              //   value={formData.categoryId}
              //   onChange={(e) => {
              //     handleChangeData("categoryId", e.target.value);
              //   }}
            >
              <option value="bad">Bad</option>
              <option value="medium">Medium</option>
              <option value="good">Good</option>
              <option value="very-good">Very Good</option>
            </Select>
          </Box>
          <Box w="100%">
            <Text mb="8px">Note</Text>
            <Textarea
              placeholder=""
              focusBorderColor="purple.400"
              colorScheme="purple"
              variant="solid"
              //   value={formData.conditionState}
              //   onChange={(e) => {
              //     handleChangeData("conditionState", e.target.value);
              //   }}
            />
          </Box>
          <Button
            colorScheme="purple"
            onClick={() => {
              navigate(-1);
            }}
          >
            Submit
          </Button>
        </VStack>
      ) : (
        <VStack spacing="12px" w="100%">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
            facingMode="environment"
          />
          <Button
            colorScheme="purple"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
        </VStack>
      )}
    </Box>
  );
}

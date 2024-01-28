import { Box } from "@chakra-ui/react";
import { FeatureCard } from "components/card/FeatureCard";
import { HomContainer } from "containers/HomContainer";
import { MainLayout } from "layouts/MainLayout";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {};

export function HomePage({}: Props) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <HomContainer />
    </MainLayout>
  );
}

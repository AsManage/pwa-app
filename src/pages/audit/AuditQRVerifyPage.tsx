import AuditContainer from "containers/audit/AuditContainer";
import AuditQRVeirifyContainer from "containers/audit/AuditQRVeirifyContainer";
import { MainLayout } from "layouts/MainLayout";
import React from "react";

type Props = {};

export default function AuditQRVerifyPage({}: Props) {
  return (
    <MainLayout>
      <AuditQRVeirifyContainer />
    </MainLayout>
  );
}

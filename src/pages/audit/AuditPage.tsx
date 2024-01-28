import AuditContainer from "containers/audit/AuditContainer";
import { MainLayout } from "layouts/MainLayout";
import React from "react";

type Props = {};

export default function AuditPage({}: Props) {
  return (
    <MainLayout>
      <AuditContainer />
    </MainLayout>
  );
}

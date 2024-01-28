import AuditDetailContainer from "containers/audit/AuditDetailContainer";
import { MainLayout } from "layouts/MainLayout";
import React from "react";

type Props = {};

export default function AuditDetailPage({}: Props) {
  return (
    <MainLayout>
      <AuditDetailContainer />
    </MainLayout>
  );
}

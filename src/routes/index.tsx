import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "pages/auth/LoginPage";

import { NotFoundPage } from "pages/error/NotFoundPage";
import { HomePage } from "pages/HomePage";
import { ProfilePage } from "pages/ProfilePage";
import AuditPage from "pages/audit/AuditPage";
import AuditDetailPage from "pages/audit/AudiDetailPage";
import AuditQRVerifyPage from "pages/audit/AuditQRVerifyPage";

type Props = {};

function MainRoutes({}: Props) {
  return (
    <Routes>
      {/** AUTH ROUTE */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />

      {/** PROFILE ROUTE */}
      <Route path="/profile" element={<ProfilePage />} />

      {/** AUDIT ROUTE */}
      <Route path="/audit" element={<AuditPage />} />
      <Route path="/audit/:auditId" element={<AuditDetailPage />} />
      <Route path="/audit/:auditId/verify" element={<AuditQRVerifyPage />} />

      <Route path="/error/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default React.memo(MainRoutes);

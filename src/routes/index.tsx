import React from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "pages/auth/LoginPage";

import { NotFoundPage } from "pages/error/NotFoundPage";
import { HomePage } from "pages/HomePage";

type Props = {};

function MainRoutes({}: Props) {
  return (
    <Routes>
      {/** AUTH ROUTE */}
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />

      <Route path="/error/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default React.memo(MainRoutes);

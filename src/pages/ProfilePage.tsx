import { Button } from "@chakra-ui/react";
import { MainLayout } from "layouts/MainLayout";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { logout } from "store/auth";
import { useDispatch } from "store/store";

type Props = {};

export function ProfilePage({}: Props) {
  const dispatch = useDispatch();

  return (
    <MainLayout>
      <Button
        colorScheme="purple"
        margin="auto"
        display="block"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </MainLayout>
  );
}

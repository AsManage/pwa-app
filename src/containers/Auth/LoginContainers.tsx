import { ChangeEvent, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useDispatch } from "store/store";
import { loginAction } from "store/auth";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX } from "utils/regex";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const LoginContainers = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [infoError, setInfoError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChangeInfo =
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setInfo({
        ...info,
        [key]: e.target.value,
      });
    };

  const handleLogin = () => {
    const error = { email: "", password: "" };
    let inValid = false;
    if (!EMAIL_REGEX.test(info.email)) {
      error.email = "Invalid email format!";
      inValid = true;
    } else {
      error.email = "";
    }
    if (info.password.length < 8) {
      error.password = "Password contain at least 8 character!";
      inValid = true;
    } else {
      error.password = "";
    }
    setInfoError(error);

    if (!inValid) {
      dispatch(
        loginAction({
          params: info,
          callback: () => {
            navigate("/");
          },
        })
      );
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="whiteAlpha.900"
      justifyContent="flex-start"
      alignItems="center"
      py="24px"
    >
      <Stack
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Heading color="purple.600" textTransform="uppercase">
          Asmanage APP
        </Heading>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          style={{
            width: "100%",
          }}
        >
          <Box w="100%">
            <Stack spacing={4} p="2rem" backgroundColor="whiteAlpha.900">
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    isInvalid={infoError.email.length > 0}
                    value={info.email}
                    onChange={handleChangeInfo("email")}
                  />
                </InputGroup>
                {infoError.email && (
                  <Text className="error-message">{infoError.email}</Text>
                )}
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    isInvalid={infoError.password.length > 0}
                    value={info.password}
                    onChange={handleChangeInfo("password")}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {infoError.password && (
                  <Text className="error-message">{infoError.password}</Text>
                )}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="purple"
                width="150px"
                margin="auto"
              >
                Login
              </Button>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
};

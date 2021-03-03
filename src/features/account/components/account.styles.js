import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(235, 235, 235, 0.35);
`;

export const AccountContainer = styled.View`
  background-color: rgba(223, 255, 255, 0.55);
  padding: ${(props) => props.theme.space.lg};
  margin-top: ${(props) => props.theme.space.sm};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  borderRadius: 20,
})`
  padding: ${(props) => props.theme.space.ms};
`;

export const AuthInput = styled(TextInput).attrs({
  borderWidth: 2,
  borderRadius: 5,
  borderColor: colors.brand.primary,
  underlineColor: "rgba(0, 0, 0, 0)",
  mode: "none",
})`
  width: 300px;
  background-color: rgba(233, 255, 255, 0.001);
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space.sm};
  margin-bottom: ${(props) => props.theme.space.sm};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space.sm};
`;

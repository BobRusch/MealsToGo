import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { List, Avatar } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utlilty/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space.md};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photoUri, setPhotoUri] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser}-photo`);
    setPhotoUri(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user.uid);
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photoUri && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photoUri && (
            <Avatar.Image
              size={180}
              source={{ uri: photoUri }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

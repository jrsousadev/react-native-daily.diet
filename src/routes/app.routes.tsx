import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home";
import { Static } from "@screens/Statistic";
import { CreateFeed } from "@screens/CreateFeed";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={HomeScreen} />
      <Screen name="static" component={Static} />
      <Screen name="createFeed" component={CreateFeed} />
    </Navigator>
  );
}

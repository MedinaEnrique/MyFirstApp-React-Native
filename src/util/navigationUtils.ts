// navigationUtils.ts

import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../presentation/routes/StackNavigator';

export const navigateToScreen = (
  navigation: NavigationProp<RootStackParamList>,
  screen: keyof RootStackParamList,
) => {
  // Aquí podrías realizar alguna lógica adicional si es necesario antes de navegar
  navigation.navigate(screen);
};

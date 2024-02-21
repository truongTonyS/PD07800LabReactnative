import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListUser from "./listUser";
import addUser from "./addUser";

const Crud = () => {
    const Stack = createNativeStackNavigator();

 return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ListUser" component={ListUser}/>
            <Stack.Screen name="addUser" component={addUser}/>
        </Stack.Navigator>
    </NavigationContainer>
 )
}
export default  Crud;
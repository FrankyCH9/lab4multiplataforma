import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Settings from "./Settings";

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName= "Home">
        <Drawer.Screen name =  "Home" component={Home}/>
        <Drawer.Screen name= "Notificacions" component={Settings}/>
        <Drawer.Screen name= "Aldo Franky" component={Settings}/>
        
      </Drawer.Navigator>
      

    </NavigationContainer>
  )
}
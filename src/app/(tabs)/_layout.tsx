import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="readings"
        options={{
          title: 'Sensores',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="asist"
        options={{
          title: 'Asistencia',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Selector',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
    <Tabs.Screen
        name="login"
        options={{
          title: 'Login User',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="monitor"
        options={{
          title: 'Monitor',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: 'Recetas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'Usuario',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
    
  );
}

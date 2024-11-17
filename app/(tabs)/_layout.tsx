import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Fast',
          tabBarIcon: ({ color }) => <Ionicons name='rocket' color={color} />,
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Slow',
          tabBarIcon: ({ color }) => <Ionicons name='stop' color={color} />,
        }}
      />
    </Tabs>
  );
}

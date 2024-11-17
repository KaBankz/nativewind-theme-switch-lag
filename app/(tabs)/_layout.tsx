import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Fast',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='rocket' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Slow',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='refresh' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='side-by-side'
        options={{
          title: 'Side by Side',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='swap-vertical' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

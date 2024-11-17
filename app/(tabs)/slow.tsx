import { Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View className='bg-white dark:bg-black flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold text-black dark:text-white'>
        I'm Slow to Change Themes 😞
      </Text>

      <View className='flex-row'>
        <View className='size-24 bg-red-500 dark:bg-blue-500' />
        <View className='size-24 bg-black dark:bg-white' />
        <View className='size-24 bg-green-500 dark:bg-yellow-500' />
      </View>

      <View>
        <Text className='text-2xl text-red-500 dark:text-blue-500'>
          I change colors slow
        </Text>
      </View>
    </View>
  );
}

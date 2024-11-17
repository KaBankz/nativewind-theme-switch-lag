import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function SideBySideScreen() {
  const colorScheme = useColorScheme();
  return (
    <>
      {/* NativeWind */}
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
      {/* StyleSheet */}
      <View
        style={{
          ...styles.container,
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        }}
      >
        <Text
          style={{
            ...styles.title,
            color: colorScheme === 'dark' ? '#fff' : '#000',
          }}
        >
          I'm Fast to Change Themes 🚀
        </Text>

        <View style={styles.rowContainer}>
          <View
            style={[
              styles.box,
              {
                backgroundColor: colorScheme === 'dark' ? '#3b82f6' : '#ef4444',
              },
            ]}
          />
          <View
            style={[
              styles.box,
              { backgroundColor: colorScheme === 'dark' ? '#fff' : '#000' },
            ]}
          />
          <View
            style={[
              styles.box,
              {
                backgroundColor: colorScheme === 'dark' ? '#eab308' : '#22c55e',
              },
            ]}
          />
        </View>

        <View>
          <Text
            style={[
              styles.colorText,
              { color: colorScheme === 'dark' ? '#3b82f6' : '#ef4444' },
            ]}
          >
            I change colors fast
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  box: {
    width: 96,
    height: 96,
  },
  colorText: {
    fontSize: 24,
  },
});

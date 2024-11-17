import { StyleSheet, Text, View, useColorScheme } from 'react-native';

export default function TabOneScreen() {
  const colorScheme = useColorScheme();

  return (
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

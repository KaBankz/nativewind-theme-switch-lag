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

      <View style={styles.rowContainer}>
        <View
          style={[
            styles.box,
            { backgroundColor: colorScheme === 'dark' ? '#3b82f6' : '#ef4444' },
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
            { backgroundColor: colorScheme === 'dark' ? '#eab308' : '#22c55e' },
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

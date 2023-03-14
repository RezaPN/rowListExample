import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const heightWidth = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {width: windowWidth, height: windowWidth * 0.8},
  titleWrapper: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    flex: 1,
  },
  titleText: {fontSize: 25, fontWeight: 'bold'},
  deskripsiWrapper: {
    backgroundColor: 'white',
    marginTop: 5,
    paddingLeft: 10,
    flex: 1,
  },
  deskripsiTitle: {fontSize: 16, fontWeight: 'bold', marginBottom: 10},
  gap: {height: 20},
  deskripsiText: {fontSize: 14, fontWeight: '400'},
});

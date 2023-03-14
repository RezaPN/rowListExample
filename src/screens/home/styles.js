import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const heightWidth = Dimensions.get('window').height;
const cardWidth = windowWidth * 0.45;

export default styles = StyleSheet.create({
  activityIndicator: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  image: {width: cardWidth, height: cardWidth},
  sectionContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    width: cardWidth, // 40% of screen width
    height: heightWidth * 0.29,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
  sectionTitle: {
    marginTop: 2,
    paddingHorizontal: 5,
    fontSize: windowWidth < 375 ? 12 : 14, // adjust font size based on screen width
    fontWeight: 'bold',
  },
  backgroundStyle: {
    backgroundColor: '#F5F5F5',
  },
});

import {BlurView} from '@react-native-community/blur';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {colors} from '../css';

const MenuBlur = () => {
  return (
    <BlurView
      intensity={10}
      style={[
        style.absolute,
        {flex: 1, backgroundColor: 'rgba(61, 53, 105, 1)'},
      ]}
    />
  );
};

export const HomeScreen = ({navigation}) => {
  const musicHandler = e => {
    navigation.navigate('Music');
    
  };

  return (
    <SafeAreaView style={[style.container]}>
      <ScrollView>
        {/* Header */}
        <View style={style.header}>
          {/* <MenuBlur /> */}
          <Image
            style={style.image}
            source={require('../assert/COMING_SOON/8_JuFuzzyFam-3.jpg')}
          />
          <Text style={style.headerText}>John Wicks</Text>
        </View>

        {/* New Release */}
        <View style={[style.row, style.mtL]}>
          <Text style={style.title}>New Release</Text>
          <Text style={style.link}>See more</Text>
        </View>
        <View style={[style.grid2, style.pbL]}>
        <TouchableHighlight
            underlayColor="black"
            onPress={() => musicHandler('man with the gun')} style={style.box2}>
              <View >
                <Image
                  style={style.image}
                  source={require('../assert/NEW_RELEASES/1_AC_1.5.png')}
                />
              </View>
        </TouchableHighlight>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/2_Detective.png')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/3_AC2_COVER.jpg')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/4_Ju_MerryChristmas.png')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/5.png')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/6_Alien_N_Kick.jpg')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/7_APPROPRIATE_AUDIO.jpg')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/8.jpg')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/9_EVERYBODIES_WATCHING.png')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/10_AUTONOMY_AUDIO_EPISODES.png')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/11_Bugging_Gilbert.png')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/12_GAMESHOW_LOGO.jpg')}
            />
          </View>
          <View style={style.box2}>
            <Image
              style={style.image}
              source={require('../assert/NEW_RELEASES/13_artworks.jpg')}
            />
          </View>
        </View>

        {/* Horizontal */}
        <View >
          <View style={[style.row, style.mtM]}>
            <Text style={style.title}>Videos </Text>
            <Text style={style.link}>See more</Text>
          </View>
          <ScrollView
            scrollEnabled={true}
            scrollToOverflowEnabled={true}
            horizontal={true}>
            <View style={style.grid}>
              <TouchableHighlight
                underlayColor="black"
                onPress={() => musicHandler('man with the gun')}>
                <View style={style.box3}>
                  <Image
                    style={style.image}
                    source={require('../assert/HORIZONTAL/01.png')}
                  />
                </View>
              </TouchableHighlight>
              <View style={style.box3}>
                <Image
                  style={style.image}
                  source={require('../assert/HORIZONTAL/02.png')}
                />
              </View>
              <View style={style.box3}>
                <Image
                  style={style.image}
                  source={require('../assert/HORIZONTAL/03.png')}
                />
              </View>
              <View style={style.box3}>
                <Image
                  style={style.image}
                  source={require('../assert/HORIZONTAL/Julian_Stephen_Prince_Charming-front-large.jpg')}
                />
              </View>
              <View style={style.box3}>
                <Image
                  style={style.image}
                  source={require('../assert/HORIZONTAL/RestartContinueCover.jpg')}
                />
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Coming Soon */}
        <View style={[style.pbL, style.ptL]}>
          <View style={[style.row, style.mtM]}>
            <Text style={style.title}>Coming Soon</Text>
            <Text style={style.link}>See more</Text>
          </View>
          <ScrollView
            scrollEnabled={true}
            scrollToOverflowEnabled={true}
            horizontal={true}>
            <View style={style.grid}>
              <TouchableHighlight
                underlayColor="black"
                onPress={() => musicHandler('man with the gun')}>
                <View style={style.box}>
                  <Image
                    style={style.image}
                    source={require('../assert/COMING_SOON/1_MY_BILLIONAIRE_EX_FIANCEE.png')}
                  />
                </View>
              </TouchableHighlight>
              <View style={style.box}>
                <Image
                  style={style.image}
                  source={require('../assert/COMING_SOON/2_CoffeeBlack_Red.png')}
                />
              </View>
              <View style={style.box}>
                <Image
                  style={style.image}
                  source={require('../assert/COMING_SOON/3_AUTONOMY.png')}
                />
              </View>
              <View style={style.box}>
                <Image
                  style={style.image}
                  source={require('../assert/COMING_SOON/4_ADVENTURE_ISLAND_MOVIE.png')}
                />
              </View>
              <View style={style.box}>
                <Image
                  style={style.image}
                  source={require('../assert/COMING_SOON/5.png')}
                />
              </View>
              <View style={style.box}>
                <Image
                  style={style.image}
                  source={require('../assert/COMING_SOON/6_DAD_COVER.png')}
                />
              </View>
              <View style={style.box}>
                <Image
                  style={style.image}
                  source={require('../assert/COMING_SOON/7_HEIST_MOVIE_COVER.jpg')}
                />
              </View>
              <View style={style.box}>
                <Image
                  style={style.image}
                  source={require('../assert/COMING_SOON/8_JuFuzzyFam-3.jpg')}
                />
              </View>
              <View style={style.box}>
                <Image
                  style={style.image}
                  source={require('../assert/COMING_SOON/9_SWIPE_COVER.png')}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  title: {
    color: '#f6f4fb',
    fontSize: 22,
    fontWeight: '500',
  },
  header: {
    flex: 1,
    height: 450,
    width: '100%',
  },
  headerText: {
    position: 'absolute',
    zIndex: 10,
    color: '#f6f4fb',
    fontSize: 42,
    fontWeight: '500',
    bottom: 10,
    left: 10,
  },
  link: {
    color: '#c0afdf',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  box: {
    backgroundColor: '#651064',
    width: 190,
    height: 260,
    borderRadius: 15,
    overflow: 'hidden',
  },
  box2: {
    backgroundColor: '#651064',
    width: '47%',
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
  },
  box3: {
    backgroundColor: '#651064',
    width: 280,
    height: 170,
    borderRadius: 15,
    overflow: 'hidden',
  },
  grid: {
    padding: 15,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  grid2: {
    padding: 15,
    marginTop: 10,
    flex: 1,
    gap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  mtS: {marginTop: 10},
  mtM: {marginTop: 25},
  mtL: {marginTop: 50},
  mbS: {marginBottom: 10},
  mbM: {marginBottom: 25},
  mbL: {marginBottom: 50},
  ptS: {paddingTop: 10},
  ptM: {paddingTop: 25},
  ptL: {paddingTop: 50},
  pbS: {paddingBottom: 10},
  pbM: {paddingBottom: 25},
  pbL: {paddingBottom: 80},
});

// import TrackPlayer, {
//   AppKilledPlaybackBehavior,
//   Capability,
//   RepeatMode,
//   Event,
// } from 'react-native-track-player';

// export async function SetupPlayer() {
//   let isSetup = false;

//   try {
//     await TrackPlayer.getCurrentTrack();
//     isSetup = true;
//   } catch (error) {
//     await TrackPlayer.setupPlayer();
//     await TrackPlayer.updateOptions({
//       android: {
//         appKilledPlaybackBehavior:
//           AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
//       },
//       capabilities: [
//         Capability.Play,
//         Capability.Pause,
//         Capability.SkipToNext,
//         Capability.SkipToPrevious,
//         Capability.SeekTo,
//       ],
//       compactCapabilities: [
//         Capability.Play,
//         Capability.Pause,
//         Capability.SkipToNext,
//       ],
//       progressUpdateEventInterval: 2,
//     });

//     isSetup = true;
//   } finally {
//     return isSetup;
//   }
// }

// export async function addTracks() {
//   await TrackPlayer.add([
//     {
//       id: '1',
//       url: require('../Tracks/Kalla.mp3'),
//       title: 'Kalla Kalavani',
//       artist: 'Rahman',
//       duration: 60,
//     },
//   ]);
//   await TrackPlayer.setRepeatMode(RepeatMode.Queue);
// }

// export async function playbackService() {
//   // TODO: Attach remote event handlers
// }

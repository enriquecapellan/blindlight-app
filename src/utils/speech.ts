import Tts from 'react-native-tts';

Tts.addEventListener('tts-start', _ => {});
Tts.addEventListener('tts-progress', _ => {});
Tts.addEventListener('tts-cancel', _ => {});

Tts.setDefaultLanguage('es-MX');
Tts.setDefaultVoice('com.apple.ttsbundle.Paulina-compact');

export default function speak(text: string, callback?: () => void) {
  Tts.addEventListener('tts-finish', _ => callback && callback());
  Tts.speak(text);
}

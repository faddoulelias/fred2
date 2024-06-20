import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainPage from './src/pages/MainPage';
import ChatPage from './src/pages/ChatPage';
import { StatusBar } from 'expo-status-bar';
import VisitPage from './src/pages/VisitPage';
import MapPage from './src/pages/MapPage';
import HelpPage from './src/pages/HelpPage';
import DocumentsPage from './src/pages/DocumentsPage';
import CameraPage from './src/pages/CameraPage';

export type SelectedPage = 'main' | 'chat' | 'visit' | 'help' | 'map' | 'documents' | 'camera';

export default function App() {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>('main');

  const renderPage = () => {
    switch (selectedPage) {
      case 'main':
        return <MainPage onPageSelected={setSelectedPage} />;
      case 'chat':
        return <ChatPage onBack={() => setSelectedPage('main')} />;
      case 'visit':
        return <VisitPage onBack={() => setSelectedPage('main')} />;
      case 'help':
        return <HelpPage onBack={() => setSelectedPage('main')} />;
      case 'map':
        return <MapPage onBack={() => setSelectedPage('main')} />;
      case 'documents':
        return <DocumentsPage onBack={() => setSelectedPage('main')} />;
      case 'camera':
        return <CameraPage onBack={() => setSelectedPage('main')} />;
      default:
        return <MainPage onPageSelected={setSelectedPage} />;
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {renderPage()}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%'
  },
});

import { StyleSheet, Text, View } from 'react-native';
import CameraSection from '../components/CameraSection';
import MenuPanel from '../components/MenuPanel';
import { SelectedPage as ApplicationPage } from '../../App';

interface MainPageProps {
    onPageSelected: (page: ApplicationPage) => void;
}

function MainPage(props: MainPageProps) {
    return (
        <View style={styles.container}>
            <CameraSection onCameraPress={() => props.onPageSelected('camera')} />
            <MenuPanel onPageSelected={(page) => props.onPageSelected(page)} />
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


export default MainPage;
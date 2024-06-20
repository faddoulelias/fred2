import { StyleSheet, View } from 'react-native';
import PageIcon from './PageIcon';
import { SelectedPage } from '../../App';

interface MenuPanelProps {
    onPageSelected: (page: SelectedPage) => void;
}

function MenuPanel(props: MenuPanelProps) {
    return (
        <View style={styles.container}>
            <View style={styles.navigationPanel}>
                <PageIcon iconName="comment" title="Chat" onPress={() => props.onPageSelected('chat')} />
                <PageIcon iconName="eye" title="Visit" onPress={() => props.onPageSelected('visit')} />
                <PageIcon iconName="question-circle" title="Help" onPress={() => props.onPageSelected('help')} />
                <PageIcon iconName="map" title="Map" onPress={() => props.onPageSelected('map')} />
                <PageIcon iconName="book" title="Documents" onPress={() => props.onPageSelected('documents')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#232',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navigationPanel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 30,
    }
});

export default MenuPanel;
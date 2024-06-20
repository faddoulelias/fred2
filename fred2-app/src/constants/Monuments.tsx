export type Monument = {
    name: string;
    iconName: string;
    audio: any;
    classId?: ImageClass;
};

export type ImageClass = 'planeur' | 'chambre_onde' | 'jacques_julien' | 'moteur' | 'robot'

export function getClassName(classId: ImageClass): string {
    switch (classId) {
        case 'planeur':
            return 'Le planeur';
        case 'chambre_onde':
            return 'La chambre à blindage électromagnétique';
        case 'jacques_julien':
            return 'Le bâtiment Jacques-Julien';
        case 'moteur':
            return 'Le moteur';
        case 'robot':
            return 'Le robot';
        default:
            return 'Unknown';
    }
}

export const monumentsList: Monument[] = [
    {
        name: 'Chambre anechoïque',
        iconName: 'sine-wave',
        audio: require('../../assets/audio/Chambre_anechoïque.mp3'),
        classId: 'chambre_onde'
    },
    {
        name: 'Moteur',
        iconName: 'engine',
        audio: require('../../assets/audio/Moteur.mp3'),
        classId: 'moteur'
    },
    {
        name: 'Robot voiture',
        iconName: 'car',
        audio: require('../../assets/audio/Robot_voiture.mp3'),
        classId: 'robot'
    },
    {
        name: 'Robot voiture extérieur',
        iconName: 'car',
        audio: require('../../assets/audio/Robot_voiture_exterieur.mp3'),
    },
    {
        name: 'Ruche',
        iconName: 'bee',
        audio: require('../../assets/audio/Ruche.mp3'),
    },
    {
        name: 'Batiment Jacques Julien',
        iconName: 'hoop-house',
        audio: require('../../assets/audio/Jacques_julien.mp3'),
        classId: 'jacques_julien'
    },
    {
        name: 'Salle robotique',
        iconName: 'robot',
        audio: require('../../assets/audio/Salle_robotique.mp3'),
    },
    {
        name: 'Vibration 2D',
        iconName: 'airplane',
        audio: require('../../assets/audio/Vibration_2D.mp3'),
        classId: 'planeur'
    },
    {
        name: 'Vibration 3D',
        iconName: 'sawtooth-wave',
        audio: require('../../assets/audio/Vibration_3D.mp3'),
    },
    {
        name: 'Remerciements',
        iconName: 'heart',
        audio: require('../../assets/audio/Remerciements.mp3')
    }
];

export function getMonumentByClassId(classId: ImageClass): Monument | undefined {
    return monumentsList.find(monument => monument.classId === classId);
}
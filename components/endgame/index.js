import {Alert, View, Text,Pressable, TouchableOpacity } from 'react-native';
import styles from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../contains/colors';
import Modal from "react-native-modal";

function EndGame() {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                isVisible={false}
                hasBackdrop={true}
                backdropOpacity={0.5}
                backdropColor="#350606"
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Bạn đã thua!</Text>
                        <View style={styles.scored}>
                            <Text style={styles.modalText1}>Điểm số :</Text>
                            <Text style={styles.number}>20</Text>
                        </View>
                        <TouchableOpacity style={styles.tryAgain}>
                            <FontAwesome5 name="recycle" size={30} color={colors.one} />
                            <Text style={styles.tryAgainText}>Chơi lại</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default EndGame;
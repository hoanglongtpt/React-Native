import { StyleSheet ,Dimensions } from 'react-native';
import colors from '../../contains/colors';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container : {
        width : windowWidth / 5,
        height : (windowHeight - 92) / 10,
        justifyContent: 'center',
        alignItems : 'center',
        
    },
    item : {
        backgroundColor : 'green',
        borderRadius : 100
    },
    itemNumber : { 
        fontWeight : 'bold',
        fontSize : 24,
        paddingHorizontal: 13,
        paddingVertical : 13
    },
    bg_one : {
        backgroundColor : colors.one,
        borderColor : colors.one
    },
    bg_two : {
        backgroundColor : colors.two,
        borderColor : colors.two
    },
    bg_three : {
        backgroundColor : colors.three,
        borderColor : colors.three
    },
    bg_four : {
        backgroundColor : colors.four,
        borderColor : colors.four
    },
    bg_five : {
        backgroundColor : colors.five,
        borderColor : colors.five
    },
    
  });

export default styles;
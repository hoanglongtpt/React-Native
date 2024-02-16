import {StyleSheet} from 'react-native';

    const styles = StyleSheet.create({
    image: {
      flex: 1,
    },
    container: {
        flex: 1,
        paddingVertical: 20
    },
    info : {
        paddingHorizontal: 10,
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginBottom : 20
    },
    infotext : {
        flexDirection : 'row',
        alignItems: 'center',
    },
    text : {
        color: 'white',
        paddingLeft : 10,
        fontSize : 24,
        fontWeight: 'bold'
    },
    play : {
        flexDirection : 'row',
        flexWrap : 'wrap'
    }
  });

  export default styles;
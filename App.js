import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, SafeAreaView } from 'react-native';


import styles from './App.component.style';
import image from "./assets/image/bg.png";
import { FontAwesome } from '@expo/vector-icons';
import colors from './contains/colors';
import { Item } from './components/items';
import EndGame from './components/endgame';
import { useState } from 'react';
import bgItem from './components/items/style';

const shuffle = (array) => array.sort(() => Math.random() - 0.5);
const data = () => shuffle(Array.from({length : 50},(_,i) => i +1));
const colorItem = [bgItem.bg_one,bgItem.bg_two,bgItem.bg_three,bgItem.bg_four,bgItem.bg_five];
let arrBg = [];
for (let i = 0; i < 10; i++) {
  arrBg = [...arrBg,...colorItem]
}
const shuffleBg = () => shuffle(arrBg);
const onChoin = (value) => {
  alert(value);
}

export default function App() {
  const [items,setItems] = useState(data());
  const [bg,setBg] = useState(shuffleBg());
  const [numberNetx , setNumberNext] = useState(1);
  const onChoin = (value) => {
    if (value === numberNetx) {
      setNumberNext(numberNetx + 1);
    }else {
      setNumberNext(1);
      alert("Lỗi!");
    }
  }
  
  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>
          <View style={styles.info}>
            <View style={styles.infotext}>
              <FontAwesome name="money" size={24} color={colors.one} />
              <Text style={styles.text}>01</Text>
            </View>
            <View style={styles.infotext}>
              <FontAwesome name="clock-o" size={24} color={colors.one} />
              <Text style={styles.text}>60</Text>
            </View>
          </View>
          <View style={styles.play}>
            {
              items.map((val, index) => <Item onChoin={onChoin}  key={index} val={val} bg={bg[index]} />)
            }
          </View>
          <EndGame/>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}





import React, { useMemo, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from './gifts.styles';
import { PURPLE, DARK_BLUE, PINK, BLACK } from '../../../assets/colors';
import { Background } from '../../../components/background';
import BigLogo from '../../../assets/svgs/big-logo.svg'
import { ImageContainer } from '../../../components/imageContainer';
import { gifts } from '../../constants';
import { Button } from '../../auth/components/buttons/button';
import { Question } from '../../../components/question';
import { Header } from '../../../components/header';
import { Slot } from '../../../components/slot';
export const GiftsScreen: React.FC = () => {
  const [time, setTime] = useState(70);
  const timerRef = React.useRef(time);
  const [isStopedTimer,setIsStopedTimer]=useState(false)
  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        setIsStopedTimer(true);
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  const timerformats = useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return {
      minute: minutes,
      second1: Math.floor(seconds / 10),
      second2: Math.floor(seconds % 10)
    }
  }, [time]);

  return (
    <>
      <Background />
      <View style={styles.container}>
        <Header title='Розыгрыш' />
        <BigLogo />
        <Question title='До начала розыгрыша' style={styles.question} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Slot title={0} style={{ marginRight: 5 }}/>
          <Slot title={timerformats.minute}/>
          <View style={{ marginHorizontal: 7 }}>
            <Text style={{ color: BLACK, fontSize: 50, fontWeight: 'bold' }}>:</Text>
          </View>
          <Slot title={timerformats.second1} style={{ marginRight: 5 }} isStopedTime={isStopedTimer} />
          <Slot title={timerformats.second2}  isStopedTime={isStopedTimer}/>
        </View>
        <Question title='Разыгрываем сегодня' style={styles.question} />
        <View style={styles.giftContainer}>
          {gifts.map((el, index) => {
            return (
              <ImageContainer
                key={index}
                title={el.title}
                count={el.count}
                url={el.url} />
            )
          })}
        </View>
        <Button title='Участвовать' color={PINK} />
      </View>
    </>
  )
}

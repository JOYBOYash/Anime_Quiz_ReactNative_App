import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function App() {

  const [curques, setCurQues] = useState(0);
  const [score, setScore ] = useState(0);
  const [showscore, setShowScore] = useState(false);
 
  const quizData = [
    {
      question: "What's Naruto's dream ?",
      option: ['Hokage','Kazekage','Mizukage', 'Raikage'],
      answer: 'Hokage'
    },
    {
      question: "Who's Vice captain of StrawHats ?",
      option: ['Usopp','Nami','Zoro', 'Sanji'],
      answer: 'Zoro'
    },
    {
      question: "What is Naruto's rival name ?",
      option: ['Shikamaru','Sakura','Choji', 'Sasuke'],
      answer: 'Sasuke'
    },
    {
      question: "Who's the king of Hell in DragonBall ?",
      option: ['Frieza','Goku','Yemma', 'Kirin'],
      answer: 'Yemma'
    },
    {
      question: "Which weapon does might guy use ?",
      option: ['Kunai','Shuriken','Nunchak', 'Nintou'],
      answer: 'Nunchak'
    },
    {
      question: "Whom did L pretend to be as ?",
      option: ['Kira','Kuro','Kara', 'Koro'],
      answer: 'Kira'
    },
    {
      question: "What is Saitama's current rank ?",
      option: ['A','S','B', 'GOD'],
      answer: 'A'
    },
    {
      question: "Which is not Ichigo's own power ?",
      option: ['FullBring','Shinigami','Hollow', 'Quincy'],
      answer: 'FullBring'
    },
    {
      question: "Who's the Pirate King in One Piece ?",
      option: ['Luffy','Gol D Roger','Zoro', 'WhiteBeard'],
      answer: 'Gol D Roger'
    },
    {
      question: "Where did Gon meet his dad ?",
      option: ['Hunter Elections','Lost Continent','Chimeran Palace', 'Hospital 💀'],
      answer: 'Hunter Elections'
    },
    
  ]
   
  const handleAnswer = (selectedAnswer) => {
    const answer = quizData[curques]?.answer;
    if(answer === selectedAnswer){
      setScore((prevScore)=> prevScore + 1);
    }
    
    const nxtques = curques + 1;
    if(nxtques < quizData.length){
      setCurQues(nxtques);
    }
    else{
      setShowScore(true);
    }

  }
  
  

  const handleRestart = () => {
    setCurQues(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <View style={styles.container}>

      {showscore ? <View>
        <Text style={styles.overtxt} >
                     - Game Over -
                  </Text>
                  <Text style={styles.scoretxt} >
                     Your Score: 
                  </Text>
            <Text style={styles.scoreStyle} >
                {score}
            </Text>
            
            <TouchableOpacity style ={styles.optionContainer} onPress={handleRestart} >
                  <Text style={styles.resetbtn} >
                      Restart ! 
                  </Text>
            </TouchableOpacity>

      </View> : 
         
       <View style={styles.questionContainer}>
    
            <Text style={styles.startxt}>
               Anime Quiz !
            </Text>

            <Text style={styles.quesText}>
              {quizData[curques]?.question}
            </Text>
             {quizData[curques]?.option.map((item)=>{
              return <TouchableOpacity onPress={()=> handleAnswer(item) } style={styles.optionContainer}>
                   <Text style={styles.optionStyle}>{item}</Text>
              </TouchableOpacity>
             })}
       </View>
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'

  },
  questionContainer:{
    backgroundColor: '@dddddd',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    color: 'white',
    
  },
  startxt:{
    color:'white',
    fontSize: 45,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingBottom: 125,
  },
  optionStyle: {
    color:'blue',
    padding: 5,
    fontSize: 18,
    alignSelf: 'center',
    
  },
  optionContainer:{
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 15,
    borderColor: 'white',
    borderRadius: 10,
  },
  quesText:{
    fontSize: 25,
    textAlign:'center',
    color: 'green',
  },
  resetbtn:{
    fontSize: 25,
    paddingHorizontal: 10,
    color: 'green',
    borderColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  overtxt:{
    color: 'red',
    fontSize: 55,
    alignSelf: 'top',
    paddingBottom: 250,
  },
  scoretxt:{
    color: 'green',
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  scoreStyle:{
    color: 'blue',
    fontSize: 25,
    paddingBottom: 150,
    textAlign:'center',
  }
});

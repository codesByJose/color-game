import { useState } from "react";
import {  Box, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";


const colorOfButtons = ["#0000FF", "#FF0000", "#00FF00", "#FFC0CB", "#FFA500", "#A52A2A"];
const target = ["#0000FF", "#FF0000", "#00FF00", "#FFC0CB", "#FFA500", "#A52A2A"];
const defaultColor = "#b2b2b2";
export default function App() {
  const [targetColor, setTargetColor] = useState(target[Math.floor(Math.random() * target.length)]);
  const [buttonColor, setButtonColor] = useState(Array(colorOfButtons.length).fill());
  const [clickedButtons, setClickedButtons] = useState(Array(colorOfButtons.length).fill(false));
  const [message, setMessage] = useState("");
  const [moves, setMoves] = useState([]);
  const [score, setScore] = useState(0);
  const [allScores, setAllScores] = useState([]);

  function getRandomColor(index) {
    const newColor = [...buttonColor];
    newColor[index] = colorOfButtons[Math.floor(Math.random() * colorOfButtons.length)];
    setButtonColor(newColor);
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[index] = true;
    setClickedButtons(newClickedButtons);

    setMoves([...moves, index + 1]);

    if (newColor[index] !== targetColor) {
      setMessage("Try Again");
    } else {
      setMessage("Correct Guess");
      setScore(score + 1);
      setButtonColor(Array(colorOfButtons.length).fill(color));
      setTimeout(() => {
        reset();
      }, 2000);
      setMoves([]);
    }}
    

  function reset() {
    if (score > 0) {
      setAllScores([ score]);
    }
    setTargetColor(target[Math.floor(Math.random() * target.length)]);
    setButtonColor(Array(colorOfButtons.length).fill(defaultColor));
    setClickedButtons(Array(colorOfButtons.length).fill(false));
    setMoves([]);
    
  }

  return (
    <Box display={"flex"} margin={3} flexDir={{base : "column", sm : "column", md : "row"}} p={5} justifyContent={"space-between"} alignItems={"center"} w={"800px"} boxShadow= {" 0 0 10px 0 rgba(0, 0, 0, 0.5);"} >
      <Box flexBasis={"70%"}>
      <Text data-testid="gameInstruction" m={4} fontSize={"2em"} fontWeight={900}>Guess the correct color button</Text>
        <Box textAlign={"center"} >
        <Button data-testid="targetColor"  backgroundColor={targetColor} _hover={{background: targetColor}}  width={ {base : "40", sm : "150", md : "150"}} height = {{base : "40", sm : "150", md : "150"}} marginBottom = {7} > </Button>
        </Box>
        <Box display={"grid"} gridTemplateColumns={{base : "repeat(3, 3fr)", sm : "repeat(2, 3fr)"}} gap={4}>
          {buttonColor.map((color, index) => (
            <Button data-testid="buttonColors"
            backgroundColor={color}  width={ {base : "20", sm : "150", md : "150"}} height = {{base : "20", sm : "150", md : "150"}} _hover= {{backgroundColor: color}}
              key={index}
              onClick={() => getRandomColor(index)}
              disabled={clickedButtons[index]}
            >
            </Button>
          ))}
      </Box>
      </Box>
      
      <Box flexBasis={"30%"} display={"flex"} flexDir={"column"} justifyContent={"center"}  p={4}>
      <Text data-testid="message" fontSize={"1em"} mb={3}>Message: {message}</Text>
      <Box  w={"100%"}>
        <Text data-testid="moves" fontWeight={600} font>Moves</Text>
        <UnorderedList >
          {moves.map((m, i) => (
            <ListItem listStyleType={"none"} key={i}># {m}</ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Text pr={4}>Score</Text>
        <Text data-testid="gameStatus">{score}</Text>
      </Box>
     
      
      <Button data-testid="newGameButton" onClick={reset}>Reset</Button>
      </Box>
    </Box>
  );
}
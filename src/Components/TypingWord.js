import Typing from "react-typing-animation";

function TypingWord() {
  return (
    <Typing speed={100}>
      This line will be typed at 100ms/character,
      <br />
      <Typing.Speed ms={20} />
      then this will be typed at 20ms/character.
    </Typing>
  );
}

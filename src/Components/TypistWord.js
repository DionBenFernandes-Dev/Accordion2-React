import Typist from "react-typist";

function TypistWord() {
  return (
    <Typist>
      <p> First Sentence </p>
      <Typist.Delay ms={1000} />
      This won't be animated until 1000ms after the first sentenced is rendered
    </Typist>
  );
}

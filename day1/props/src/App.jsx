import Greet from "./components/Greet"
export default function App(){
  return (
    <div id="root">
      <Greet details="1" name="Harsh" age="20"/>
      <Greet details="2" name="Nivedita" age="18"/>
      <Greet details="3" name="Ritesh" age="22"/>
      <Greet details="4" name="Manoj" age="24"/>
    </div>
  )
}
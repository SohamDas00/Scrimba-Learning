import BasicExample from "./components/BasicExample"
import Card from "./components/card"
import Card2 from "./components/card2"

const App = (props) => {
  return (
    <div>
      <BasicExample />
      <h1>Hello world</h1>
      <Card />
      <div className="profile">
        <Card2 user="Soham" description="He is a good boy" age={21} img="https://us.123rf.com/450wm/aberrantrealities/aberrantrealities2309/aberrantrealities230907561/212490142-a-man-wearing-a-hat-and-sunglasses-in-the-snow.jpg" />
        <Card2 user="Aman" description="He is a bad boy" age={24} img="https://us.123rf.com/450wm/aberrantrealities/aberrantrealities2309/aberrantrealities230907710/212490845-a-person-wearing-a-black-coat.jpg?ver=6" />
      </div>
    </div>
  )
}

export default App
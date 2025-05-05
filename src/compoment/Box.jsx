import '../App.css'
import Draggable from "./Draggable.jsx";

function App() {
    const [position, setPosition] = useState(0);
  
    return (
      <div>
        {
          Array(ITEMS).fill(null).map((_, index) => {
            return <Box 
                     key={index} 
                     hasItem={index === position} 
                     onSelect={() => setPosition(index)}/>
          })
        }
      </div>
    );
  } 

const Box = ({hasItem, onSelect}) => {

    const dragEnterOrOver = (e) => {
      if (hasItem) return;
      e.preventDefault();
    }
  
    return (
      <div
        onDrop={onSelect}
        onDragEnter={dragEnterOrOver}
        onDragOver={dragEnterOrOver}
        className="box"
      >
        {hasItem && <Draggable/>}
      </div>
    )
  }

  const ITEMS = 3;

  


export default Box;
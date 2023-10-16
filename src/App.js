
import './App.css';
import Colorpicker from './components/Colorpicker';

const Apps = () => {
  const colors = ["red", "green", "blue", "yellow", "purple","orange","violet","black","pink","skyblue","lightgreen","darkviolet","lightyellow","gray"];

  return (
    <div className="App">
      <Colorpicker colors={colors} />
    </div>
  );
};

export default Apps;

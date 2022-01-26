import {useContext} from "react"
import Usercontext from "../../context/userContext";
function Checkbox() {
  const {value, name } = useContext(Usercontext)
  return (
    <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>

    </div>
  );
}

export default Checkbox;

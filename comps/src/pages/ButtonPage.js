import Button from "../components/Button";
import {GoBell, GoCloud, GoDatabase} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div>
      <Button primary onClick={handleClick}>
        <GoBell />
        Hello World
      </Button>
      <Button danger>
        <GoDatabase/>
        Test
      </Button>
      <Button danger rounded>
        <GoCloud/>
        Bar
      </Button>
      <Button primary>Bar</Button>
    </div>
  );
}

export default ButtonPage;
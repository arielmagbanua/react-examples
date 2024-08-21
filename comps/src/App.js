import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import SideBar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto px-4 grid grid-cols-6 gap-4 mt-4">
      <SideBar/>

      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage/>
        </Route>

        <Route path="/">
          <DropdownPage/>
        </Route>

        <Route path="/dropdown">
          <DropdownPage/>
        </Route>

        <Route path="/buttons">
          <ButtonPage/>
        </Route>

        <Route path="/modal">
          <ModalPage/>
        </Route>

        <Route path="/table">
          <TablePage/>
        </Route>

        <Route path="/counter">
          <CounterPage initialCount={0}/>
        </Route>
      </div>
    </div>
  );
}

export default App;

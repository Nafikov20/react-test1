import Content from "./components/Content";
import Menu from "./components/Menu";
import Header from "./components/Header";

function App() {
   return (
      <div className="wrapper">
            <Menu />
         <div className="page">
            <Header />
            <Content />
         </div>
      </div>
   );
}

export default App;

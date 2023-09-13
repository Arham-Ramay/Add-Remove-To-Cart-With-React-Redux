import "./App.css";
// import User from "./components/User";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
function App() {
  return (
    <div className="">
      {/* <User data={{name:"arham",age:20}}/> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;

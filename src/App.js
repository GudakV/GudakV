import './App.css';
import Posts from "./Postu/Posts/Posts"


// 1. Описати всю сім'ю сімпсонів (5 персонажів)
const App  = () => {
const lift = (obj) => {
    console.log(obj);
}
  return (
      <div>
          {
              <Posts/>
          }
      </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import Component from "./Components/Component";

// 1. Описати всю сім'ю сімпсонів (5 персонажів)
function App() {
  let classNameItem = 'card'
  return (
    <div className="wrap">
      <div className={classNameItem}>
        <h2>Bart Simpson</h2>
        <img src= "https://w7.pngwing.com/pngs/879/973/png-transparent-bart-simpson-supreme-thumbnail.png" />
      </div>

        <div className={classNameItem}>
        <h2>Homer Simpson</h2>
        <img src= "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
      </div>

        <div className={classNameItem}>
        <h2>Marge Simpson</h2>
        <img src= "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png" />
      </div>

        <div className={classNameItem}>
        <h2>Lisa Simpson</h2>
        <img src= "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png" />
      </div>

        <div className={classNameItem}>
        <h2>Maggie Simpson</h2>
        <img src= "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png" />
      </div>

        <div className={classNameItem}>
            <Component
                id={27}
                name={'Artist Morty'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                pic = 'https://rickandmortyapi.com/api/character/avatar/27.jpeg'
            />
            <Component
                id={95}
                name={'Dipper and Mabel Mortys'}
                status={'unknown'}
                species={'Human'}
                gender={'unknown'}
                pic = 'https://rickandmortyapi.com/api/character/avatar/95.jpeg'
            />
            <Component
                id={114}
                name={'Ethan'}
                status={'unknown'}
                species={'Human'}
                gender={'Male'}
                pic = 'https://rickandmortyapi.com/api/character/avatar/114.jpeg'
            />
            <Component
                id={194}
                name={'Kozbian'}
                status={'Alive'}
                species={'Alien'}
                gender={'unknown'}
                pic = 'https://rickandmortyapi.com/api/character/avatar/194.jpeg'
            />
            <Component
                id={369}
                name={'Tusked Assassin'}
                status={'unknown'}
                species={'Alien'}
                gender={'Male'}
                pic = 'https://rickandmortyapi.com/api/character/avatar/369.jpeg'
            />
            <Component
                id={671}
                name={'New Improved Galactic Federation Guard'}
                status={'Dead'}
                species={'Alien'}
                gender={'Male'}
                pic = 'https://rickandmortyapi.com/api/character/avatar/671.jpeg'
            />
        </div>
    </div>
  );
}

export default App;

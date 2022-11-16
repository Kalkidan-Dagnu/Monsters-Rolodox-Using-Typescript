import './App.css';
import { ChangeEvent, useEffect, useState } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component'
import { getData } from './utils/data.utils';

export type Monster = {
  id: number;
  email: string;
  name: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');

  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(
      event.target.value.toLocaleLowerCase())
  }

  useEffect( () => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();    
  },
  []);

  useEffect(
    () => {
      const newFilteredMonsters =  
           monsters
           .filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
      setFilteredMonsters(newFilteredMonsters)
    },
    [monsters, searchField]
  )

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
     <SearchBox 
        placeholder="Search Monsters" 
        className="search-box" 
        onChangeHandler={onSearchChange} 
        />
      {/* {filteredMonsters.map((monster) => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))} */}

      <CardList list={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField:''
//     }
//   }

//   componentDidMount() {
//   }


//   render() {

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//        return (
//     );

//   }
// }

export default App;

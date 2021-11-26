import Card from './components/Card'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addCard } from './reducer/cardsSlice'
import { cardSelector } from './selectors/wallet';

const getStripe = async () => {
  return await fetch('https://random-data-api.com/api/stripe/random_stripe')
  .then(response => response.json())
  .then(data => {console.log(data); return data});
}

const App = () => {
  const cards = useSelector(cardSelector) || []
  const dispatch = useDispatch()

  const handleClick = async () => {
    const card = await getStripe()
    dispatch(addCard(card))
  }

  return (
    <div className="App">
      <button onClick={handleClick} >add card</button>
      <div>
        {cards.map(data => {
          console.log({data})
          return <Card data={data} />
        })}
      </div>
    </div>
  );
}

export default App;

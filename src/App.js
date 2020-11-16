
import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import Button from '@material-ui/core/Button';

const ANIMAL_DATA =[{
  id: 'dog1',
  name: 'Dog',
  img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&amp;resize=1200:*",
  description: 'Dogs (Canis lupus familiaris) are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. ... They are a popular pet because they are usually playful, friendly, loyal and listen to humans.'
  
},
{
  name: 'Cat',
  id: 'cat1',
  
},
{
  name: 'Pig',
  id: 'pig1',
  
},
{
  name: 'Horse',
  id: 'horse1',
  
}]

const cardFiller = () => {
  const [data, setData] = useState(ANIMAL_DATA);
  const fillerCard = (name) => () => {
    ANIMAL_DATA.map(p => {
      return <MainContainer/>
    })
  }
}

const App = () => {
  return (
    <div className="App">
      <Button variant="contained" color="primary">Animal</Button>
      <Button variant="contained" color="primary">Animal</Button>
      <div className="Appy">
        {this.state.fillerCard}
      </div>
    </div>
  );
}

export default App;

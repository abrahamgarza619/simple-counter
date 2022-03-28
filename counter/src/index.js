import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import PropTypes from 'prop-types'

function SimpleCounter(props){
  return(
  <div className='bigCounter'>
    <div className='calender'>icon</div>
    <div className='four'>{props.digitFour}</div>
    <div className='three'>{props.digitThree}</div>
    <div className='two'>{props.digitTwo}</div>
    <div className='one'>{props.digitOne}</div>
  </div>);
};

SimpleCounter.propTypes = {
  digitFour: propTypes.num,
  digitThree: propTypes.num,
  digitTwo: propTypes.num,
  digitOne: propTypes.num

}

let counter = 0;

setInterval(function(){
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  counter++;
  ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>,
    document.getElementById('root')
  );
  }, 1000);

  

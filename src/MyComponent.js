import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            //part 3 attempt
            // cardval: ['star', 'star', 'circle', 'circle'],
            cards: ['down', 'down', 'down', 'down'],
        }
    }

    handleClick(i){
        const newState = this.state.cards.slice()
        if (newState[i] === 'up') {
            newState[i] = 'down'
        }
        else (newState[i] = 'up')
        // part 3 attempt
        // else {
        //     const cnt = this.cards.forEach(x => {
        //         let cnt = 0
        //         if (x !== 'down') {
        //            cnt += 1
        //         }
        //         return cnt
        //     })
        //     if (cnt <= 1) {newState[i] = this.cardval[i]}
        // }
        console.log(newState)
        this.setState({cards: newState});
    }


    render() {
        const card = []
        this.state.cards.forEach((x,i) => {
            card.push(<Card i = {i} val = {this.state.cards[i]} onClick={() => this.handleClick(i)}/>)
            }
        )
        return (
            <div>
                {card}
            </div>
        )
    }
}

class Card extends React.Component {
    constructor(props) {
        super();
    }

    render(){
        return <h1 className='cardContainer' onClick={this.props.onClick}>{this.props.val}</h1>}
}

export default MyComponent;

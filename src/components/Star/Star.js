import React, {Component} from 'react';

class Star extends Component {
    constructor () {
        super();
        //sets up an initial state
        this.state = {
            //an object on a state
            newStar: {
                name: '',
                role: '',
            },// end star
            starList:[],//end starlist
        }//end state
    }//end constructor

    handleNameChange = (event) => {
        this.setState ({
            newStar: {
                ...this.state.newStar,
            name: event.target.value,
            },
        });//end setState
    }//end handleNameChange

    handleRoleChange = (event) => {
        this.setState ({
            newStar: {
                ...this.state.newStar,
            role: event.target.value,
            },
        });//end state
    }//end handleRoleChange

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`the almost star's name ${this.state.newStar.name}`);
        this.setState({
            newStar: {
                name: '',
                role: '',
            },
            starList: [...this.state.starList,this.state.newStar],
        })//end setState
    }//end handleSubmit

    render(){
        //loop over array
        let starListArray = [];
        for(let i = 0; i < this.starListArray; i++) {
            starListArray.push(<li key={i}>{this.state.starList[i].name}:
            {this.state.starList[i].role}</li>);
        }//end for loop


        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Star Name:
                    <input type="text" value={this.state.newStar.name} onChange={this.handleNameChange}/>
                </label>
                <br/>
                <label>
                    Star Role:
                    <input type="text" value={this.state.newStar.role} onChange={this.handleRoleChange}/>
                    <p>{JSON.stringify(this.state.starList)}</p>
                </label>
                <label>
                    Star Info:
                    <p>{this.state.newStar.name} is famous for {this.state.newStar.role}</p>
                    Star List:
                    <ul>
                        {starListArray}
                    </ul>
                </label>
                    <button onClick={this.handleSubmit}>Submit</button>
             </form>
        )//end return
    }//end render
}// end class

export default Star;
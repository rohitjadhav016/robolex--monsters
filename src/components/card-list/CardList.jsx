import { Component } from "react";
import Card from "./card/Card";
import './card-list.styles.css'

class CardList extends Component{
    render(){
        const { monsters } = this.props;
        return(
        <div className="card-list">
            {
                monsters.map((mon) => {
                return(
                    <Card monster = {mon}/>
                );})
            }
        </div>
        )
    }
}

export default CardList;
import React from "react";
import {useSelector} from "react-redux";
import {selectBombAmount, selectFlagAmount} from "../../reducers/game/game.selector";
import './counter.style.css';

export const Counter = () => {

    const bombAmount = useSelector(selectBombAmount);
    const flagAmount = useSelector(selectFlagAmount);

    return (
        <div>
            <span className="bomb_amount">{bombAmount - flagAmount}</span>
            <div className="image_container"><img className="bomb_image" src="bomb.svg" alt="123"/></div>
        </div>
    )
}
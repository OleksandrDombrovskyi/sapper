import React, {useEffect} from "react";
import {formatTime} from "../../utils/timerUtils";
import './timer.style.css';
import {useDispatch, useSelector} from "react-redux";
import {selectGameTime} from "../../reducers/game/game.selector";
import {incrementTime} from "../../actions/actions";

let intervalId: NodeJS.Timeout;

export const Timer = () => {
    const gameTime = useSelector(selectGameTime);

    const dispatch = useDispatch();

    useEffect(() => {
        intervalId = setInterval(
            () => dispatch(incrementTime()),
            1000
        );

        return () => {
            clearInterval(intervalId);
        }
    }, [dispatch])

    return (
        <div>
            <span className="timer_span">{formatTime(gameTime)}</span>
        </div>
    );
}
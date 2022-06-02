import React,{useState} from 'react'
import TinderCard from 'react-tinder-card';
import './Cards.css';
export default function Cards() {
    const [situations, setSituations] = useState([
        {
            id:1,
            situation: "Esta es una situacion",
            answers: ["simon", "nel"],
        },
        {
            id:2,
            situation: "Esta es otra situacion",
            answers: ["simon", "nel"],
        },
    ]);
    return (
      <div>
        <div className="tinderCards_cardContainer">
          {situations.map((situation) => (
            <TinderCard
              className="swipe"
              key={situation.id}
              preventSwipe={["up", "dowm"]}
            >
              <div className="card">
                <h3>{situation.situation}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
}

import TinderCard from 'react-tinder-card';
import React,{useEffect, useState} from 'react';
import database from './firebaseManager'
import {onSnapshot, collection, query,addDoc} from "firebase/firestore";
import './DCards.css';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";




function DCards() {
  const [decision, setDecision] = useState([]);
  const [finished, setFinished] = useState(false);
  const [situation, setSituation] = useState([
    {
      id: 1,
      name: "",
      description: "",
    },
  ]);

  const getData = async () => {
    return await query(collection(database, "cards"));
  };

  useEffect(() => {
    getData().then((query) => {
      const unsubscribe = onSnapshot(query, (QuerySnapshot) =>
        setSituation(QuerySnapshot.docs.map((doc) => doc.data()))
      );

      return () => {
        unsubscribe();
      };
    });
  }, []);

  useEffect(() => {
    if (situation.length === 0) {
      setFinished(true);
      const stringData = decision.reduce((result, item) => {
        return `${result}${item.value}-`;
      }, "");
      const docRef = addDoc(collection(database, "answers"), {
        values: stringData,
      });
    }
  }, [situation]);

  useEffect(() => {
    if (decision.length > 0) {
      console.log(decision);
    }
  }, [decision]);

  const deleteItem = (index) => {
    setSituation((situation) => situation.filter((situ, i) => i !== index));
  };

  const onSwipe = (direction) => {
    if (direction === "left" || direction === "right") {
      setDecision((decision) => [...decision, { value: direction }]);
    }
  };

  return (
    <div className="cardcontainer">
      <Popup open={finished} modal nested>
        {(close) => (
          <div className="modal">
            <div className="content">
              <p>Gracias por haber contestado esta encuesta.</p>
            </div>
            <div className="actions"></div>
          </div>
        )}
      </Popup>
      {situation.map((situ, index) => (
        <div className="swipe">
          <h1 className="descriptionContainer" key={situ.description}>
            {situ.description}
          </h1>

          <div className="lastContainer">
            <div className="sideBtnContainer" key={situ.leftA}>
              <p>{situ.leftA}</p>
            </div>
            <TinderCard
              onCardLeftScreen={() => deleteItem(index)}
              preventSwipe={["up", "down"]}
              onSwipe={onSwipe}
              className="card"
              key={situ.key}
            >
              <div
                className="cardImageHolder"
                style={{ backgroundImage: `url(${situ.url})` }}
              >
                <p>{situ.name}</p>
              </div>
            </TinderCard>
            <div className="sideBtnContainer" key={situ.rightA}>
              <p>{situ.rightA}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DCards;
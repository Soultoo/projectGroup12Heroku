// Ska dispalya counter och kunna ändra på den

// INTE KLAR LÄGG IN RESTEN

import firestore from "../js/firebase" // Dessa 2 behövs alltså för att utnyttja databasen (denna och nedan)

import { useCollectionData } from "react-firebase-hooks/firestore";

import { connect } from "react-redux";

import HighScoreView from "../views/HighScoreView";

import { useEffect } from "react";

//const connected = connect(
//)(HighScoreView);


const HighScoreContainer = ({nav}) => {

  

  const scoreStoreRef = firestore.collection("highScores");
  const query = scoreStoreRef.orderBy("score").limit(100);
  const [scores] = useCollectionData(query,{idField:"id"});

  useEffect(()=>{
    console.log("scores:")
    console.log(scores)
                }, [scores])

  return HighScoreView({nav, scores})
}

export default HighScoreContainer;


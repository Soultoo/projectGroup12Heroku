// Ska dispalya counter och kunna ändra på den

// INTE KLAR LÄGG IN RESTEN

import firestore from "../js/firebase" // Dessa 2 behövs alltså för att utnyttja databasen (denna och nedan)

import { useCollectionData } from "react-firebase-hooks/firestore";

import { connect } from "react-redux";

import HighScoreView from "../views/HighScoreView";

//const connected = connect(
//)(HighScoreView);


const HighScoreContainer = ({nav}) => {

  const addScore = ()=>scoreStoreRef.add({name:"cool", score:2});

  const scoreStoreRef = firestore.collection("highScores");
  const query = scoreStoreRef.orderBy("score", "desc").limit(15);
  const [scores] = useCollectionData(query,{idField:"id"});
  return HighScoreView({nav, scores, addScore})
}

export default HighScoreContainer;


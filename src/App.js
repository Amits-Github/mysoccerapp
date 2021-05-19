import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";

export default function App() {
  const [goals, setGoal] = useState("");

  const { data: players, loading, error } = useFetch(
    "players?category=glenview"
  );

  function renderPlayers(p) {
    return (
      <div key={p.id}>
        <h4 className="players">{p.name}</h4>
        <p className="goals">
          Scored - {p.goals} &nbsp; &nbsp; {p.description}
        </p>
      </div>
    );
  }

  const filteredPlayers = goals
    ? players.filter((p) => p.goals >= parseInt(goals))
    : players;

  if (error) throw error;
  if (loading) return <Spinner />;

  return (
    <>
      <div className="content">
        <Header name="Glenview United"></Header>
        <main>
          <div>
            <label>Filter by Goals Scored:</label>{" "}
            <select value={goals} onChange={(e) => setGoal(e.target.value)}>
              <option value="">All goals</option>
              <option value="5">5+</option>
              <option value="3">3+</option>
              <option value="2">2+</option>
            </select>
            {goals && <h2>Found {filteredPlayers.length} players</h2>}
          </div>

          <div>{filteredPlayers.map(renderPlayers)}</div>
        </main>
      </div>
      <Footer name="Glenview United" />
    </>
  );
}

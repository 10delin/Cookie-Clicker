const PlayerRanking = () => {
  const storedPlayers = Object.values({ ...localStorage }).map((str) =>
    JSON.parse(str)
  );
  const sortedPlayers = storedPlayers.sort((a, b) => b.points - a.points);

  return (
    <div className="ranking-players">
      <h2>Player Ranking</h2>
      <div className="ranking-players__wraper">
        {sortedPlayers.map((player, index) => (
          <div className="ranking-player" key={index}>
            <div className="ranking-player__position">{index + 1}</div>
            <div className="ranking-player__name">{player.name}</div>
            <div className="ranking-player__points">
              {player.points} <span>points</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerRanking;

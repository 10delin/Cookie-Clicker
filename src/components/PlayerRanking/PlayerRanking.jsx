import { useTranslation } from "react-i18next";

const PlayerRanking = () => {
  const { t } = useTranslation();

  const storedPlayers = Object.values({ ...localStorage }).map((str) =>
    JSON.parse(str)
  );
  const sortedPlayers = storedPlayers.sort((a, b) => b.points - a.points);

  return (
    <div className="ranking-players">
      <h2>{t("ranking.title")}</h2>
      <div className="ranking-players__wraper">
        {sortedPlayers.map((player, index) => (
          <div className="ranking-player" key={index}>
            <div className="ranking-player__position">{index + 1}</div>
            <div className="ranking-player__name">{player.name}</div>
            <div className="ranking-player__points">
              {player.points} <span>{t("ranking.points")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerRanking;

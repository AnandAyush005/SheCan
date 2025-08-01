

function Rewards() {
  const rewards = [
    { title: "Bronze Badge", unlocked: true },
    { title: "Silver Badge", unlocked: false },
    { title: "Free T-Shirt", unlocked: false },
  ];

  return (
    <div>
      <h3>Rewards & Unlockables</h3>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>
            {reward.title} {reward.unlocked ? "✅" : "🔒"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rewards;

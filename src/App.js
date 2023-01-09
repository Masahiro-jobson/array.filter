import "./styles.css";

export default function App() {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
  ];

  const result = words.filter((word) => word.length < 6);

  console.log(words);
  console.log(result);

  return (
    <div className="App">
      <h1>filter</h1>
      {/* {条件を満たした要素だけを残す関数} */}
      {/* {条件を満たさない要素は削除される} */}
    </div>
  );
}

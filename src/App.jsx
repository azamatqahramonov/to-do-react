import { useRef, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const text = useRef(null);
  const Reset = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="w-80 p-6 bg-gray-900 rounded-lg shadow-lg">
        <input
          type="number"
          ref={text}
          className="w-full p-3 text-lg text-gray-900 bg-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Seconds"
        />
        <button
          onClick={() => {
            const count = text.current.value;
            text.current.value = "";
            setTime(count);

            const id = setInterval(() => {
              setTime((prevTime) => {
                if (prevTime <= 1) {
                  clearInterval(id);
                  return 0;
                }
                return prevTime - 1;
              });
            }, 1000);
          }}
          className="w-full p-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Start
        </button>
        <button
          onClick={() => {
            clearInterval(Reset.current);
            setTime(0);
          }}
          className="w-full mt-4 p-3 text-lg font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Reset
        </button>
        <h1 className="mt-6 text-center text-4xl font-bold">{time}</h1>
      </div>
    </div>
  );
};

export default App;

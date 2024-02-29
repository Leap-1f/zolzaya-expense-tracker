
import { Chart as ChartJS,} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";

export default function Home() {
  const API_ENDPOINT = "http://localhost:8080/user";
  const [data, setData] = useState([]);
  const [name,setName] = useState()
  const [age,setAge] = useState()

const isSubmitButtonDisabled = name === "" || age === "";

  const createData = async () => {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, id: uuid () }),
    }).then((response) => response.json());
    setData(response);
  };
  const addData = () => {

    console.log(data);
    createData();
  };

  const getData = async () => {
    const response = await fetch(API_ENDPOINT).then(
      async (response) => await response.json()
    );
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center gap-3">
      <div className=" flex flex-col justify-center items-center gap-3">
        <input type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Name"
        ></input>
        <input type="number" className=" mx-6"
          onChange={(event) => setAge(event.target.value)}
          value={age}
          placeholder="Age"
        ></input>

        <button
          disabled={isSubmitButtonDisabled}
          onClick={addData}
        >
          submit
        </button>
      </div>

      <div>
        {data?.map((element) => (
          <div className=" flex gap-2">
            <p>{element.name}</p>
            <p>{element.age}</p>
            <button>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

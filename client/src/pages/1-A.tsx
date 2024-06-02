import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TableComponent from "../components/Table";

const Question1_B = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [tableTitle, setTableTitle] = useState<string[]>();
  const [tableData, setTableData] = useState<string[][]>();
  const [tableName, setTableName] = useState<string>("student");

  const button_style = "border-2 px-2 hover:cursor-pointer hover:bg-gray-200";

  useEffect(() => {
    axios.get(`http://localhost:3000/question1_A/${tableName}`).then((res) => {
      setTableTitle(res.data[0]);
      setTableData(res.data[1]);
    });
  }, [tableName]);

  const handleButton = (name: string) => {
    setTableName(name);
  };

  return (
    <div className="w-full">
      <div>
        <button
          className={button_style}
          onClick={() => handleButton("Student")}
        >
          Student
        </button>
        <button
          className={button_style}
          onClick={() => handleButton("Professor")}
        >
          Professor
        </button>
        <button className={button_style} onClick={() => handleButton("Course")}>
          Course
        </button>
        <button className={button_style} onClick={() => handleButton("Enroll")}>
          Enroll
        </button>
        <button
          className={button_style}
          onClick={() => handleButton("Lecture")}
        >
          Lecture
        </button>
      </div>
      {tableData && tableTitle && (
        <TableComponent title={tableTitle} content={tableData} />
      )}
    </div>
  );
};

export default Question1_B;

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TableComponent from "../components/Table";

const Question1_B = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [tableTitle, setTableTitle] = useState<string[]>();
  const [tableData, setTableData] = useState<string[][]>();

  useEffect(() => {
    axios.get(`http://localhost:3000/question1_B/student`).then((res) => {
      setTableTitle(res.data[0]);
      setTableData(res.data[1]);
    });
  }, []);

  const handleSearch = () => {
    if (inputRef.current) {
      axios
        .get(`http://localhost:3000/question1_B/${inputRef.current.value}`)
        .then((res) => {
          setTableTitle(res.data[0]);
          setTableData(res.data[1]);
        });
    }
  };

  const handleCancel = () => {
    axios.get(`http://localhost:3000/question1_B/student`).then((res) => {
      setTableTitle(res.data[0]);
      setTableData(res.data[1]);
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <input
          type="text"
          ref={inputRef}
          className="W-1/3 border-2 border-black"
          placeholder="Michael Jordan"
        />
        <button className="border-2 border-black ml-5" onClick={handleSearch}>
          검색
        </button>
        <button className="border-2 border-black ml-5" onClick={handleCancel}>
          취소
        </button>
      </div>
      {tableData && tableTitle && (
        <TableComponent title={tableTitle} content={tableData} />
      )}
    </div>
  );
};

export default Question1_B;

import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../components/Table";

const Question1_C = () => {
  const [tableTitle, setTableTitle] = useState<string[]>();
  const [tableData, setTableData] = useState<string[][]>();

  useEffect(() => {
    axios.get(`http://localhost:3000/question1_C/student`).then((res) => {
      setTableTitle(res.data[0]);
      setTableData(res.data[1]);
    });
    console.log(tableData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {tableData && tableTitle && (
        <TableComponent
          title={tableTitle}
          content={tableData}
          IseditButton={true}
        />
      )}
    </div>
  );
};

export default Question1_C;

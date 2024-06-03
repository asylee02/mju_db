// 1-C에서 사용되는 수정버튼

import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EditButton({ id }: { id: number }) {
  const navigate = useNavigate();
  const handleEdit = () => {
    axios
      .patch(`http://localhost:3000/question1_C/student/edit/${id}`)
      .then(() => {
        alert("수정 되었습니다!");
        navigate(0);
      });
  };

  return <button onClick={handleEdit}>수정하기</button>;
}

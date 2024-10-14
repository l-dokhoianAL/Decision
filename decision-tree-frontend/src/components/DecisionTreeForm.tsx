import React, { useState } from "react";
import axios from "axios";

const DecisionTreeForm: React.FC = () => {
  const [treeData, setTreeData] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/execute", JSON.parse(treeData));
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error executing tree:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={treeData} onChange={(e) => setTreeData(e.target.value)} placeholder="Enter your decision tree JSON here" />
      <button type="submit">Execute Decision Tree</button>
    </form>
  );
};

export default DecisionTreeForm;

import React, { useContext, useEffect } from "react";
import { UserContext } from '../UserContext';
import axios from 'axios';

const LoadProposals = () => {
  const { state, update } = useContext(UserContext);

  const loadProposals = async () => {
    const proposals = await axios.get('https://e2yxzz8nm1.execute-api.us-east-1.amazonaws.com/loadDaoProposals');
    console.log("proposals", proposals);
    update({ proposals: proposals.data });
  }

  useEffect(() => {
    loadProposals();
  }, []);
    
  return (
    <></>
  );
}

export default LoadProposals;

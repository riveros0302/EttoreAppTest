import React, { useEffect, useState } from "react";
import { fakeAPI } from "../api";
import { Tip } from "../types/tips";

export default function useTips() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fakeAPI.getHealthTips();
        setTips(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    tips,
    loading,
  };
}

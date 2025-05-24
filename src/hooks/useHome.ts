import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { User } from "../types/user";
import { fakeAPI } from "../api";
import { useToast } from "expo-toast";

export default function useHome() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>();
  const toast = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fakeAPI.getUserData();
        setUser(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const syncSteps = async () => {
    try {
      setLoading(true);
      const response = await fakeAPI.syncDevice();
      toast.show(response.message);
    } catch (error) {
      toast.show("Ocurrió un error al sincronizar");
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    syncSteps,
  };
}

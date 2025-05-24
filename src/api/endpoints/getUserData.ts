import { User } from "../../types/user";

export async function getUserData() {
  // Simula una petición de red
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Bryan Riveros",
        steps: 7850,
      });
    }, 500);
  });
}

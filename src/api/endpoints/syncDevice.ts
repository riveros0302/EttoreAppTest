export async function syncDevice(): Promise<{ message: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "Sincronización exitosa con el dispositivo BLE",
      });
    }, 2000);
  });
}

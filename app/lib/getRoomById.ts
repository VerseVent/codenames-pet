export async function getRoomById(roomId: string) {
  const roomData = await fetch(`http://localhost:3000/api/room/${roomId}`, {
    cache: "no-cache",
  });
  return roomData.json();
}

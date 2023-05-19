export async function addPlayer(
  roomId: string,
  nickname: string
): Promise<IPlayerResponse> {
  const playerRes = await fetch(
    `http://${process.env.NEXT_PUBLIC_SERVER_URL}:3000/api/room/${roomId}/players`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname }),
    }
  );
  return playerRes.json();
}
type IPlayerResponse = {
  nickname: string;
};

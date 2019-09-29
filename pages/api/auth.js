import Pusher from "pusher";

const pusherClient = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
  encrypted: true
});

export default async (req, res) => {
  const { socket_id, channel_name } = req.body;

  res.send(pusherClient.authenticate(socket_id, channel_name));
};

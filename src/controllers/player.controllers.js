import axios from "axios";

const api_token = process.env.API_TOKEN;
const options = {
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI0Yjk2ZDM5LTA0ZTUtNDk1MS05ODA1LWJlMjk3ZmRjOThjZSIsImlhdCI6MTY3MjQyOTY1NCwic3ViIjoiZGV2ZWxvcGVyL2NiYzRmNjg0LTg4ZTQtNTZjOC1kMTU1LWJjNDFjZWFmNjBlNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xNjAuMTIwLjEyNiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Aj9OrjO06gK7TnVTi84rsLAKaLY9Y6myzU74shgHUbV1i9dkYCxz4zqrNBKQtmSf73OgHzIyjTHSa826mamTjA`,
  },
};

const url = "https://api.clashroyale.com/v1/players/";

export const findByTag = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${url}${encodeURIComponent(id)}`, options);
    res.send(response.data);
  } catch (err) {
    res.send(err);
  }
};


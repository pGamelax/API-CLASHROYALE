import axios from "axios";

const api_token = process.env.API_TOKEN;
const options = {
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA3YzM1YzIyLTM2MjQtNGM5Ny04YmM1LWJiOTU4MDBhOTA3MSIsImlhdCI6MTY3MjI2NDkxMywic3ViIjoiZGV2ZWxvcGVyL2NiYzRmNjg0LTg4ZTQtNTZjOC1kMTU1LWJjNDFjZWFmNjBlNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzAuMjU0LjIwLjE3OCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.VqBhLBcVkNXhI6qOjmkNgbd4wpJHGGF0gB-bI1l4jRr7UclXZhaFPNcrqaVjHgzYJrB_p0P-13s_2N8GmY3g0w`,
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


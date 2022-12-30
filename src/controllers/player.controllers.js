import axios from "axios";

const api_token = process.env.API_TOKEN;
const options = {
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImUwYjRkNTBlLWJlY2UtNGE1OS04YWJkLTZjZjMxODcxZjhlMSIsImlhdCI6MTY3MjQzMDQxMiwic3ViIjoiZGV2ZWxvcGVyL2NiYzRmNjg0LTg4ZTQtNTZjOC1kMTU1LWJjNDFjZWFmNjBlNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNC4yMTEuMjAwLjg1Il0sInR5cGUiOiJjbGllbnQifV19.5JuEVGGl6LuXCD1MYb6KC1FZGTvi4sBfxzD-v0bqo7abqZ5JT62khSkpqFQj2N2xS78OiPT91FM-DuL0G0Cb9g`,
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


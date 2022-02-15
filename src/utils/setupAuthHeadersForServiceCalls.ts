const axios = require("axios");

export default function setupAuthHeaderForServiceCalls(token: string | null) {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
}

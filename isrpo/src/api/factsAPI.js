import axios from "axios";

const API_URL = "https://uselessfacts.jsph.pl/random.json?language=en";

export const fetchFact = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching fact:", error);
    return null;
  }
};
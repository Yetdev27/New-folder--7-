// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  try {
    const query = `q=${username}+location:${location}+repos:>${minRepos}`;
    const response = await axios.get(`https://api.github.com/search/users?${query}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};


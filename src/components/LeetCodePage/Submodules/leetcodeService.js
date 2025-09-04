// src/components/Stats/leetcodeService.js

// fallback data (will be used if API fails)
const fallbackUserData = {
  username: "safiiiii",
  name: "safiiiii",
  avatar: "https://assets.leetcode.com/users/default_avatar.jpg",
  ranking: 1773235,
  reputation: 0,
};

const fallbackSolvedData = {
  solvedProblem: 65,
  easySolved: 28,
  mediumSolved: 33,
  hardSolved: 4,
  totalSubmissionNum: [
    { difficulty: "All", count: 69, submissions: 209 },
    { difficulty: "Easy", count: 28, submissions: 55 },
    { difficulty: "Medium", count: 37, submissions: 150 },
    { difficulty: "Hard", count: 4, submissions: 4 },
  ],
  acSubmissionNum: [
    { difficulty: "All", count: 65, submissions: 101 },
    { difficulty: "Easy", count: 28, submissions: 41 },
    { difficulty: "Medium", count: 33, submissions: 56 },
    { difficulty: "Hard", count: 4, submissions: 4 },
  ],
};

export const fetchLeetCodeStats = async (username, setStats) => {
  try {
    // Fetch user info
    const userRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}`);
    if (!userRes.ok) throw new Error(`User info fetch failed: ${userRes.status}`);
    const userData = await userRes.json();

    // Fetch solved stats
    const solvedRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
    if (!solvedRes.ok) throw new Error(`Solved stats fetch failed: ${solvedRes.status}`);
    const solvedData = await solvedRes.json();

    // Merge responses
    const combinedData = {
      username: userData.username,
      name: userData.name,
      avatar: userData.avatar,
      ranking: userData.ranking,
      reputation: userData.reputation,

      totalSolved: solvedData.solvedProblem,
      easySolved: solvedData.easySolved,
      mediumSolved: solvedData.mediumSolved,
      hardSolved: solvedData.hardSolved,
    };

    setStats(combinedData);
  } catch (err) {
    console.error("Error fetching LeetCode stats, using fallback:", err);

    // use fallback values
    const combinedFallback = {
      username: fallbackUserData.username,
      name: fallbackUserData.name,
      avatar: fallbackUserData.avatar,
      ranking: fallbackUserData.ranking,
      reputation: fallbackUserData.reputation,

      totalSolved: fallbackSolvedData.solvedProblem,
      easySolved: fallbackSolvedData.easySolved,
      mediumSolved: fallbackSolvedData.mediumSolved,
      hardSolved: fallbackSolvedData.hardSolved,
    };

    setStats(combinedFallback);
  }
};

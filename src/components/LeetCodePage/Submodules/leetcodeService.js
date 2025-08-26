// src/components/Stats/leetcodeService.js
export const fetchLeetCodeStats = async (username, setStats) => {
  try {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    const data = await res.json();
    if (data.status === "success") {
      setStats(data);
    }
  } catch (err) {
    console.error("Error fetching LeetCode stats:", err);
  }
};

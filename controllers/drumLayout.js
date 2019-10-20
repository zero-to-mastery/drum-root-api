const getLayout = (req, res) => {
  return res.json([
    {
      name: "hiHat",
      icon: "🇹🇼",
      beats: [true, true, true, true]
    },
    {
      name: "bass",
      icon: "🛢️",
      beats: [true, false, false, false]
    },
    { name: "snare", icon: "🥁", beats: [false, false, true, false] }
  ]);
};

module.exports = { getLayout };

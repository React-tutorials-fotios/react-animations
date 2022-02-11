const getHeight = (len) => {
  if (len >= 100 && len < 200) return 850;
  if (len >= 200 && len < 300) return 900;
  if (len >= 300 && len < 400) return 950;
  if (len >= 400 && len < 500) return 1000;
  if (len >= 500 && len < 600) return 1050;
  if (len >= 600 && len < 700) return 1100;
  if (len >= 700) return 1150;
};

export default getHeight;

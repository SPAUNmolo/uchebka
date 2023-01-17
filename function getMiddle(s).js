function getMiddle(s) {
return !(s.length % 2) ? s.substr(s.length / 2 - 1, 2) : s[Math.round(s.length / 2) - 1];
}

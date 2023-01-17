function areYouPlayingBanjo(name) {
  let name2
 if (name[0] === 'r' || name[0] === 'R') {
 name2 = name + " plays banjo"
 } else {
  name2 = name + " does not play banjo"
 }
  return  name2
}

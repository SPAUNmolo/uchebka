function App() {
  let d = new Date(2012, 1, 20, 3, 12);
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
return alert( days[d.getDay()] );
}

function jourtravaille(date){
  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin","Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
  if(date.getDate() == 1 && date.getMonth() == 0 ||
  date.getDate() == 13 && date.getMonth() == 3 ||
  date.getDate() == 1 && date.getMonth() == 4 ||
  date.getDate() == 8 && date.getMonth() == 4 ||
  date.getDate() == 21 && date.getMonth() == 4 ||
  date.getDate() == 1 && date.getMonth() == 5 ||
  date.getDate() == 14 && date.getMonth() == 6 ||
  date.getDate() == 15 && date.getMonth() == 7 ||
  date.getDate() == 1 && date.getMonth() == 10 ||
  date.getDate() == 11 && date.getMonth() == 10 ||
  date.getDate() == 25 && date.getMonth() == 11){
      return 'Le ' + date.getDate() +' '+ monthNames[date.getMonth()] +' '+ date.getFullYear() + ' est un jour férié'
  }
  else if(date.getDay() == 6 || date.getDate() == 0){
      return 'Non, ' + date.getDate() +' '+ monthNames[date.getMonth()] +' '+ date.getFullYear() + ' est un week-end'
  }
  else{
      return 'Oui, ' + date.getDate() +' '+ monthNames[date.getMonth()] +' '+ date.getFullYear() + ' est un jour de travail'
  }
}

let date = new Date(2020, 7, 22)
alert(jourtravaille(date))
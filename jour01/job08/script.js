function sommenombrespremiers(nombre1, nombre2){
  if(nombre1 < 2 || nombre2 < 2)
      return false;
  else if(nombre1 == 2 && nombre2 == 2)
      return nombre1 + nombre2
  else if(nombre1 == 2)
      for(var i = 2; i < nombre2; i++)
          if(nombre2%i === 0)
              return false;
          else
              return nombre1 + nombre2;
  else if(nombre2 == 2)
      for(var i = 2; i < nombre1; i++)
          if(nombre1%i === 0)
              return false;
          else
              return nombre1 + nombre2;
  else
      for(var i = 2; i < nombre1 && i < nombre2; i++)
          if(nombre1%i === 0 || nombre2%i === 0)
              return false;
          else
              return nombre1 + nombre2;
}

alert(sommenombrespremiers(29, 7));
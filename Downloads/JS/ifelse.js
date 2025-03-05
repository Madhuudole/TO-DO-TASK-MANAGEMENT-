function checkAge(age)
{
      if(age>=18){
        console.log("vote eligible");
      }
      else{
        console.log("not eligible");
      }
}
checkAge(10);
checkAge(20);

//
function checkNumber(number)
{
  if(number > 0){
      console.log('number is +ve');
    }
  else if(number < 0)
    {
      console.log('number is -ve');
    }
  else  {console.log('zero number found');
  }
}

checkNumber(10);
checkNumber(-9);

//nested if-else

function checkGrade(score){
  let grade;
  if(score>=90){
    grade = "a";
  }
  else{
    if(score>=80)
    {
      grade = "b";
    }
    else{
      if(score>=70){
        grade = "c";
      }
      else{
        grade = "d";
      }
    }
  }
  console.log(grade);
}

checkGrade(75);
checkGrade(40);
checkGrade(88);

//
let browser = "chrome";
if(browser == "chrome")
{
  console.log("launch chrome");
}
else if(browser == "edge")
{
  console.log("launch edge");
}
else if(browser == "firfox")
{
  console.log("launch firefox");
}
else{
  console.log("plz pass right browser");
}

//switch statement
//break is not allowed for if else statement  

function checkDayOfWeek(dayNumber)
{
  let day;
  switch (dayNumber)
  {
   case 0:
   day = "sunday";
   break;
   case 1:
   day = "monday";
   break;  
   case 2:
   day = "tuesday";
   break;
   case 3:
   day = "wednesday";
   break;
   case 4:
   day ="thursady";
   break;
   case 5:
   day ="friday";
   break;
   case 6:
   day = "saturday";
  break;

      default:
        console.log("Invalid day");
        break;
  }
  return day;
}

console.log(checkDayOfWeek(0));
console.log(checkDayOfWeek(5));
console.log(checkDayOfWeek(10));
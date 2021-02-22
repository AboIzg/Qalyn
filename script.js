var theForm = document.forms["Qalyn"];

var age = new Array();
age["1.5"]=1.5;
age["1.2"]=1.2;
age["0.95"]=0.95;

function getAge()
{
    var Ages=0;
    var theForm = document.forms["qalyn"];
    var Radios = theForm.elements["Radios"];
    for(var i = 0; i < Radios.length; i++)
    {
        if(Radios[i].checked)
        {
            Ages = agess[Radios[i].value];
            break;
        }
    }
    return Ages;
}

var grades= new Array();
grades["un"]=1.5;
grade["co"]=1.2;
grade["hi"]=1.05;
grade["mi"]=0.9;

function getGrades()
{
    var grades=0;
    var theForm = document.forms["qalyn"];
     var inputState = theForm.elements["inputState"];
    grades = inputStates[inputState.value];
    return grades;
}

var grade1= new Array();
grade1["90"]=2;
grade1["75"]=1.5;
grade1["50"]=1.2;

function getGrades1()
{
    var grades1=0;
    var theForm = document.forms["qalyn"];
     var inputState1 = theForm.elements["inputState1"];
    grades1 = inputStates1[inputState1.value];
    return grades1;
}

function Price1()
{
    var Price1=0;
    var theForm = document.forms["qalyn"];
    var defaultCheck1 = theForm.elements["defaultCheck1"];
    if(defaultCheck1.checked==true)
    {
        Price1=100;
    }
    return Price1;
}

function Price2()
{
    var Price2=0;
    var theForm = document.forms["qalyn"];
    var defaultCheck2 = theForm.elements["defaultCheck2"];
    if(defaultCheck2.checked==true)
    {
        Price2=200;
    }
    return Price2;
}

function Price3()
{
    var Price3=0;
    var theForm = document.forms["qalyn"];
    var defaultCheck3 = theForm.elements["defaultCheck3"];
    if(defaultCheck3.checked==true)
    {
        Price3=150;
    }
    return Price3;
}

function Price4()
{
    var Price4=0;
    var theForm = document.forms["qalyn"];
    var defaultCheck4 = theForm.elements["defaultCheck4"];
    if(defaultCheck4.checked==true)
    {
        Price4=100;
    }
    return Price4;
}

function Price5()
{
    var Price5=0;
    var theForm = document.forms["qalyn"];
    var defaultCheck10 = theForm.elements["defaultCheck10"];
    if(defaultCheck10.checked==true)
    {
        Price5=0.85;
    }
    return Price5;
}

function Price6()
{
    var Price6=0;
    var theForm = document.forms["qalyn"];
    var defaultCheck11 = theForm.elements["defaultCheck11"];
    if(defaultCheck11.checked==true)
    {
        Price6=0.9;
    }
    return Price6;
}

function Price7()
{
    var Price7=0;
    var theForm = document.forms["qalyn"];
    var defaultCheck12 = theForm.elements["defaultCheck12"];
    if(defaultCheck12.checked==true)
    {
        Price7=200;
    }
    return Price7;
}

function getTotal()
{
    var Price = (500 * getGrades() * getGrades1() +
    (Price1() + Price2() + Price3() + Price4())) *
    getAge() * Price5() * Price6() - Price7();
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price $"+Price;

}
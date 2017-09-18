
var windows1 = [];


function getRandom(){
    var human = ['Men','Women','Child'];
    var random = Math.floor( Math.random() * human.length );
    return human[ random ];

}

function round() {
    if (windows1.length == 0) {
        windows1=[ {name: 'Window1' , time:30 , men:0 ,women:0 , child:0} , { name : 'Window2' , time:45 , men:0 , women:0 , child:0} , {name:'Window3' , time:60 , men:0 , women:0 , child:0}];
    }
    var humanType= getRandom();
    var totalWindows = [];
    var totalTimes = [];

    for ( var i = 0; i < 3; i++){
        totalWindows[i] = windows1[i].men+windows1[i].women+windows1[i].child;
        totalTimes[i] =  totalWindows[i] * windows1[i].time;
    }

    if (humanType === 'Child'){
        var random = Math.floor(Math.random() * windows1.length);
        windows1[random].child = windows1[random].child + 1 ;
    }


    if ( humanType === 'Women'){
        var i = totalWindows.length , min = totalWindows[0] , index = 0;
        while (i--) {
            if (totalWindows[i] < min) {
                min = totalWindows[i];
                index = i;

            }
        }
        windows1[index].women = windows1[index].women +1;
    }
    if ( humanType === 'Men') {
        var j = totalTimes.length , minTime = totalTimes[0] , minIndex = 0;
        while (j--) {
            if (totalTimes[j] < minTime) {
                minTime = totalTimes[j];
                minIndex = j;

            }

        }
        windows1[minIndex].men = windows1[minIndex].men +1;
    }
    console.log(humanType);
    console.log('Дети в очереди:    ' + windows1.map(windows1 => windows1.child ));
    console.log('Женщины в очереди: ' + windows1.map(windows1 => windows1.women ));
    console.log('Мужчины в очереди: ' + windows1.map(windows1 => windows1.men ));
    console.log('Общее времея : ' + totalTimes);


    var childhtml1= document.getElementById("1");
    childhtml1.innerText=windows1[0].child;
    var childhtml2= document.getElementById("2");
    childhtml2.innerText=windows1[0].women;
    var childhtml3= document.getElementById("3");
    childhtml3.innerText=windows1[0].men;

    var childhtml11= document.getElementById("11");
    childhtml11.innerText=windows1[1].child;
    var childhtml12= document.getElementById("12");
    childhtml12.innerText=windows1[1].women;
    var childhtml13= document.getElementById("13");
    childhtml13.innerText=windows1[1].men;

    var childhtml21= document.getElementById("21");
    childhtml21.innerText=windows1[2].child;
    var childhtml22= document.getElementById("22");
    childhtml22.innerText=windows1[2].women;
    var childhtml23= document.getElementById("23");
    childhtml23.innerText=windows1[2].men;

    return totalWindows;
}
console.log(round());
var btn = document.querySelector('button');
btn.addEventListener("click" ,function() {
    round();
});





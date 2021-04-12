const age=4;
if (age){
    console.log("condition true")
}

else{
    console.log('condition false')
}
//False 0 "" undefined null NaN

const student = [
    {id:21 , name:'Omar Sunny'},
    {id:31 , name:'Maaa'},
    {id:41 , name:'Moyori'},
    {id:11 , name:'DeepJol'}

];

const names= student.map(s =>s.name);
const ids= student.map(s => s.id)
const bigger= student.filter( s=> s.id>30 );
console.log(bigger);
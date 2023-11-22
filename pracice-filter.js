let song=[
    {"name": "one","gener":"rock","year_of_release":"2003"},
    {"name": "two","gener":"metal","year_of_release":"2008"},
    {"name": "three","gener":"metal","year_of_release":"2012"},
    {"name": "four","gener":"rock","year_of_release":"2003"},
    {"name": "five","gener":"metal","year_of_release":"2008"},
    {"name": "six","gener":"rock","year_of_release":"2000"},
    {"name": "seven","gener":"metal","year_of_release":"2003"},
    {"name": "eight","gener":"metal","year_of_release":"2000"},
    {"name": "nine","gener":"metal","year_of_release":"2000"},
    {"name": "ten","gener":"rock","year_of_release":"2012"}
    ]
    console.log(song)


//Q.fetch data from song object and filter following
//1.search year_of_release=2000;


let year_filter=song.filter((i)=>{
    return i.year_of_release==2000
    
})
console.log(year_filter)

//2.search gener=rock

function filter_gener(i){
    if(i.gener=="rock"){
        return i
    }
}

let gener_filter=song.filter(filter_gener);
console.log(gener_filter)

//apply filter on filter
let gener_filter_deep=gener_filter.filter((i)=>{
    return i.year_of_release==2000
})

console.log(gener_filter_deep)


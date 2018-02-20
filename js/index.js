function init(){
  let cards=d3.select('#main')
    .append('div').attr('class',"row")
  	.selectAll('div')
  	.data(data).enter()
  	.append('div').attr('class',"col-sm-6")
  	.append('div').attr('class',"card").attr('id',function(d,i){return `q${i}`});

  for(let i=0;i<data.length;i++){
    card=d3.select(`#q${i}`)
    d=data[i];
    card.append('div').attr('class',"card-header").text(function(d){return d.aim});
    card.append('div').attr('class',"card-body")
        .append('p').text(function(d){
          let body=`
           Question:${d.question}
           Graph:${d.graphic.type}
           Data:${d.data.values}
          `
          return body

        });

  }


}


$( document ).ready(function() {
    console.log( "ready!" );
    init()
});

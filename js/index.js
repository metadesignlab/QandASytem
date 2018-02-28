function init(){
  let cards=d3.select('#main')
    .append('div').attr('class',"row sortable")
  	.selectAll('div')
  	.data(data).enter()

  	.append('div').attr('class',"card").attr('id',function(d,i){return `q${i}`});

  for(let i=0;i<data.length;i++){
    card=d3.select(`#q${i}`)
    d=data[i];
    card.append('div').attr('class',"card-header handle").text(function(d){return d.aim});
    card.append('div').attr('class',"card-body").attr('contenteditable','false')
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
function edit(){
  if (editable){
    editable=false;
    $('.sortable').sortable({
        handle: '.handle'
    });

    $('#edit').text("Edit")
    $('#edit').toggleClass( "btn-danger" )
    d3.selectAll('.card-body').attr('contenteditable','false');


  }else{
    editable=true;
    $('.sortable').sortable('destroy');
    $('#edit').text("Done")
    $('#edit').toggleClass( "btn-danger" )
    d3.selectAll('.card-body').attr('contenteditable','true');
  }
}

let editable=false;

$( document ).ready(function() {
    console.log( "ready!" );
    init()
    $('.sortable').sortable({
        handle: '.handle'
    });
});

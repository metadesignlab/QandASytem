function init(){
  let cards=d3.select('#main')
    .append('div').attr('class',"row sortable")
  	.selectAll('div')
  	.data(data).enter()
    .append('div').attr('class',"col-sm-12")

  	.append('div').attr('class',"card").attr('id',function(d,i){return `q${i}`});

  for(let i=0;i<data.length;i++){
    card=d3.select(`#q${i}`)
    d=data[i];
    card.append('div').attr('class',"card-header handle").attr('contenteditable','false').text(function(d){return d.aim});
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






function hide(){
  $( ".card-header" ).toggle();
}
function edit(){
  if (editable){
    // enable sortable
    d3.selectAll('.notHandle').classed("handle", true).classed("notHandle", false);
    $('.sortable').sortable({
        handle: '.handle'
    });


    // update button
    $('#edit').text("Edit")
    $('#edit').toggleClass( "btn-danger" )
    d3.selectAll('.card-body').attr('contenteditable','false');
    d3.selectAll('.card-header').attr('contenteditable','false');


    // set new edit state
    editable=false;

  }else{
    // disable sortable
    $('.sortable').sortable('destroy');
    d3.selectAll('.handle').classed("notHandle", true).classed("handle", false);

    // update button
    $('#edit').text("Done")
    $('#edit').toggleClass( "btn-danger" )
    // enable text edit
    d3.selectAll('.card-body').attr('contenteditable','true');
    d3.selectAll('.card-header').attr('contenteditable','true');

    // set new edit state
    editable=true;
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

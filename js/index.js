function init(){
  let cards=d3.select('#questions')
  	.selectAll('div')
  	.data(data).enter()
    .append('div').attr('class',"col-sm-12")

  	.append('div').attr('class',"card").attr('id',function(d,i){return `q${i}`});

  for(let i=0;i<data.length;i++){
    card=d3.select(`#q${i}`)
    d=data[i];
    card.append('div').attr('class',"card-header handle").attr('contenteditable','false').text(function(d){return d.aim});
    cardBody=card.append('div').attr('class',"card-body").attr('contenteditable','false');
    cardBody.append('h4').attr("class","quest").text(function(d){ return d.question});
    cardBody.append('div').attr('class','graphDiv col-sm-6').append('canvas').attr('id',`#g${i}_1`);
    cardBody.append('div').attr('class','graphDiv col-sm-6').append('canvas').attr('id',`#g${i}_2`);
    drawChart(`#g${i}_1`,data[i],0)
    drawChart(`#g${i}_2`,data[i],1)

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

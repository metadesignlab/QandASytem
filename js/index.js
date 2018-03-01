function init(){
  let cards=d3.select('#questions')
  	.selectAll('div')
  	.data(data).enter()
    .append('div').attr('class',"col-sm-12")

  	.append('div').attr('class',"card").attr('id',function(d,i){return `q${i}`});

  for(let i=0;i<data.length;i++){
    card=d3.select(`#q${i}`)
    d=data[i];
    card.append('div').attr('class',"card-header handle editable").attr('contenteditable','false').text(function(d){return d.aim});
    cardBody=card.append('div').attr('class',"card-body");
    cardBody.append('h4').attr("class","quest editable").attr('contenteditable','false').text(function(d){ return d.question});
    cardBody.append('div').attr('class','graphDiv col-sm-6').append('canvas').attr('id',`#g${i}_1`);
    cardBody.append('div').attr('class','graphDiv col-sm-6').append('canvas').attr('id',`#g${i}_2`);
    drawChart(`#g${i}_1`,data[i],0)
    drawChart(`#g${i}_2`,data[i],1)

  }
  makeSortable()
}






function hide(){
  $( ".card-header" ).toggle();
}
function edit(){
  if (editable){
    // enable sortable
    d3.selectAll('.notHandle').classed("handle", true).classed("notHandle", false);
    makeSortable()


    // update button
    $('#edit').text("Edit")
    $('#edit').toggleClass( "btn-danger" )
    d3.selectAll('.editable').attr('contenteditable','false');


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
    d3.selectAll('.editable').attr('contenteditable','true');


    // set new edit state
    editable=true;
  }
}

let editable=false;

$( document ).ready(function() {
    console.log( "ready!" );
    init()
});


function makeSortable(){

  let startIndex, changeIndex, uiHeight;

  $('.sortable').sortable({
      handle: '.handle',
    'placeholder': 'marker',
    start: function(e, ui) {

      startIndex = ui.placeholder.index();
      uiHeight = ui.item.outerHeight(true);//get offset incl margin

      ui.item.nextAll('li:not(.marker)').css({
        transform: 'translateY(' +uiHeight+ 'px)'
      });

      ui.placeholder.css({
        height: 0,
        padding: 0
      });
    },
    change: function(e, ui) {

      changeIndex = ui.placeholder.index();


      if (startIndex > changeIndex) {

        var slice = $('ul li').slice(changeIndex, $('ul li').length);

        slice.not('.ui-sortable-helper').each(function() {
          var item = $(this);
          item.css({
            background:'lightcoral',
            transform: 'translateY(' +uiHeight+ 'px)'
          });
        });

      } else if (startIndex < changeIndex) {

        var slice = $('ul li').slice(startIndex, changeIndex);

        slice.not('.ui-sortable-helper').each(function() {
          var item = $(this);
          item.css({
            background: 'lightgreen',
            transform: 'translateY(0px)'
          });
        });
      }

      startIndex = changeIndex
    },
    stop: function(e, ui) {
      $('.ui-sortable-handle').css({
        background: 'lightblue',
        transform: 'translateY(0)'
      })
    }
  });
}

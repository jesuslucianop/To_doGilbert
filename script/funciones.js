$(document).ready(function()
{
  $("#addMore").click(function()
  {

    $('<div class="row">'+
      '<div class="col-sm-6">'+
       '<div class="form-group">'+
       '<input type="text" class="form-control txtTask" id="txtTask" placeholder="Nueva Tarea"  />'+
       '</div>'+
       '</div>'+
       '<div class="col-sm-6">'+
       '<div class="form-group">'+
       '<select class="form-control select" id="selectTipo">'+
       '<option>Seleccione la Prioridad...</option>'+
       '<option>Normal</option>'+
       '<option>Urgente</option>'+
       '</select>'+
       '</div>'+
       '</div>'+
       '<div class="col-sm-6">'+
       '</div>'+
       '</div>').appendTo(".formclass");

       recorre();
     });
   function recorre()
   {
     var inp = $(".txtTask");
     $(".txtTask").each( function()
     {
       console.log($(this).val());
//  console.log($(this).attr("value"));
      });
     $(".select").each( function()
     {
       console.log($(this).val());
//  console.log($(this).attr("value"));
      });
      $( ".select" )
  .change(function() {

    $( "select option:selected" ).each(function() {
       console.log($( this ).val());
    });

  });
    }
});

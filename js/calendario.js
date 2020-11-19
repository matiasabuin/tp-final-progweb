$(document).ready(function() {

  $('#calendar').fullCalendar({
    
    editable: true,
    eventLimit: true,
    events: [
      
      {
        title: 'Hepatitis B',
        start: '2020-11-14'
        },
		  {
        title: 'Quintuple',
        start: '2020-11-20'
        },
		  {
        title: 'Antigripal',
        start: '2020-12-03'
        },
		  {
        title: 'Hepatitis A',
        start: '2020-12-18'
        },
		  {
        title: 'Triple Viral',
        start: '2021-01-06'
        }, 
      {
        title: 'Varicela',
        start: '2021-01-15'
        },
      {
        title: 'Triple Bacteriana Celular',
        start: '2021-01-25'
        },
      {
        title: 'Triple Bacteriana Acelular',
        start: '2021-02-10'
        },
      
      ]

    });

  });

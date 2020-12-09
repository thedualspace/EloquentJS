//first need to compute a tableFor function which will construct our 2x2 correlation table.
const JOURNAL = require('./journal.js');

//Compute correlation between 2 variables in a table
const phi = function( table ) {
  return (table[3]*table[0] - table[2]*table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2])
    );
}

//Construct table for an event given a journal array
const tableFor = function( event, journal ) {
  let table = [ 0, 0, 0, 0 ];
  for( let i = 0 ; i < journal.length ; i++ ) {
    let entry = journal[i], index = 0;
    
    /* 
    original method:
    for( let j = 0 ; j < entry.events.length ; j++) {
      if ( entry.events[j] === event ) index += 1;
    }
    */
    /* more succinct method: */
    if ( entry.events.includes(event) ) index += 1;

    if ( entry.squirrel ) index += 2;
    table[ index ] += 1;
  }
  return table;
};

//Determine all distinct journal events
const journalEvents = function (journal) {
  let allEvents = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if ( !allEvents.includes(event) ) allEvents.push(event);
    };
  };
  return allEvents;
}

//Return ordered array or activities and their correlation
const sortedCorrelation = function() {
  let sortedArray = [];
  for ( let activity of journalEvents(JOURNAL) ) {
    sortedArray.push( [activity, phi(tableFor( activity, JOURNAL ))] );
  }

  return sortedArray.sort( (a, b) => b[1] - a[1] );
}

console.log( sortedCorrelation() );

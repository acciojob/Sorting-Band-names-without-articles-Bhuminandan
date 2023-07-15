let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function strip(bandname) {  
  return bandname.replace(/^(a |the |an)/i, '').trim()
}

const sortedBands = touristSpots.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.getElementById( 'bands' ).innerHTML = sortedBands.map( ( b ) => `<li>${b}</li>` ).join('');

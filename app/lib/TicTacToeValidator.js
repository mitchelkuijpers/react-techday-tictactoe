function validateBoard(arr) {
  // Horizontal checks
  for (var i = 0; i < 3; i++) {
    var j = i * 3;

    if (isValid([arr[j], arr[1 + j], arr[2 + j]])) {
      console.log('WON HORIZONTAL - ' + i);
      
      return {
        'winner': arr[j],
        'winningCells': [0 + j, 1 + j, 2 + j],
      }
    }
  };

  // Vertical checks
  for (var i = 0; i < 3; i++) {
    if (isValid([arr[i], arr[i + 3], arr[i + 6]])) {
      console.log('WON VERTICAL - ' + i);

      return {
        'winner': arr[i],
        'winningCells': [i, i+3, i+6]
      }
    }
  };

  // Diagonal check (left > right)
  if (isValid([arr[0], arr[4], arr[8]])) {
    console.log('WON DIAGONAL LEFT RIGHT');
  
    return {
      'winner': arr[0],
      'winningCells': [0, 4, 8]
    }
  }

  // Diagonal check (right > left)
  if (isValid([arr[2], arr[4], arr[6]])) {
    console.log('WON DIAGONAL RIGHT LEFT');
    
    return {
      'winner': arr[2],
      'winningCells': arr[2, 4, 6]
    }
  }

  return {};
}

function isValid(arr) {
  if(_.contains(arr, undefined)) {
    return false;
  }

  return arr[0] === arr[1] && arr[0] === arr[2];
}

module.exports = {validateBoard: validateBoard};

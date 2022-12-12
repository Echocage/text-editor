// text editor
// save text
  function saveText() {
    var text = document.getElementById('text').value;
    localStorage.setItem('text', text);
  }

// load text
  function loadText() {
    var text = localStorage.getItem('text');
    document.getElementById('text').value = text;
  }

// save text on input
  document.querySelector('textarea').addEventListener('input', saveText);

// textarea
  // change textarea height on input
  document.getElementById('text').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

  // change textarea height on load
    document.getElementById('text').style.height = 'auto';
    document.getElementById('text').style.height = (document.getElementById('text').scrollHeight) + 'px';

  // load text on load
    loadText();

// line count
  // get line count
    function getLineCount() {
      var text = document.getElementById('text').value;
      var lineCount = text.split('\n').length;
      return lineCount;
    }

  // set line count
    function setLineCount() {
      var lineCount = getLineCount();
      var lineCountList = document.getElementById('linecount');
      var lineCountListItems = lineCountList.getElementsByTagName('li');
      var lineCountListItemsLength = lineCountListItems.length;

      if (lineCountListItemsLength < lineCount) {
        for (var i = lineCountListItemsLength; i < lineCount; i++) {
          var li = document.createElement('li');
          li.appendChild(document.createTextNode(i + 1));
          lineCountList.appendChild(li);
        }
      } else if (lineCountListItemsLength > lineCount) {
        for (var i = lineCountListItemsLength; i > lineCount; i--) {
          lineCountList.removeChild(lineCountList.lastChild);
        }
      }
    }

  // set line count on input
    document.getElementById('text').addEventListener('input', setLineCount);

  // set line count on load
    setLineCount();

// scroll to bottom on load
  window.onload = function () {
    var text = document.getElementById('text');
    text.scrollTop = text.scrollHeight;

    var lineCount = document.getElementById('linecount');
    lineCount.scrollTop = lineCount.scrollHeight;
  }
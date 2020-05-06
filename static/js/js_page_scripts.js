// These are the scripts needed for the JS page.


function scramble()
{
  //grabs the input from the form, and gives error if none.
  let text_to_scramble = document.querySelector('#scramble_text').value;
  if (text_to_scramble === '')
  {
    alert('You have to type something in for me to scramble it!');
    return;
  }

  function getRandomInt(n) 
  {
    return Math.floor(Math.random() * n);
  }
  
  function shuffle(s) 
  {
    // Convert String to array
    var arr = s.split('');           
    
     // Length of the array
    var n = arr.length;             
    
    for(var i=0 ; i<n-1 ; ++i) 
    {
      // Get random of [0, n-1]
      var j = getRandomInt(n);   

      // Swap arr[i] and arr[j]
      var temp = arr[i];             
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    // Convert Array to string and return results
    s = arr.join('');               
    return s;
  }

  //calls function above to scamble text
  scrambled_text = shuffle(text_to_scramble);

  // Alert to display
  alert('Scambled Text: ' + scrambled_text);
}

// function to toggle greying out of the submit button for the scramble function.
function toggle_input()
{ 
  // disables the submit buton if text is empty upon the toggle being pressed.
  if (document.querySelector("#scramble_text").value === "" & document.querySelector('#input_checkbox').checked)
  {
    document.querySelector("#scramble_submit").disabled = true;
  }
  else
  {
    document.querySelector("#scramble_submit").disabled = false;
  }

  // disables/re-enables when toggle is on.
  document.querySelector("#scramble_text").onkeyup = function ()
  {
    if (document.querySelector("#scramble_text").value === "" & document.querySelector('#input_checkbox').checked)
    {
      document.querySelector("#scramble_submit").disabled = true;
    }
    else
    {
      document.querySelector("#scramble_submit").disabled = false;
    }
  }
}


// helper function to check if a string is a browser-supported color that CSS can recognize
function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

// updates the font color based on user input
function color_change(id_of_input)
{
  
  // checks if color exists using the helper function
  var fetched_color = document.querySelector(id_of_input).value;
  if (isColor(fetched_color) == false)
  {
    alert(fetched_color + " is not a browser-recognized color!")
  }
  
  var style = document.createElement('style');
  
  // if input id is "bg_color", changes the color of the background
  if (id_of_input === "#bg_color")
  {
    // removes a w3 class that creates a a grey bg for a div
    document.querySelector('#has_grey_class').classList.remove("w3-light-grey");
    
    //adds new style based on input color
    style.innerHTML = `
    * {
    background-color: ` + fetched_color + ` !important;
    }
    `;
    document.head.appendChild(style);
  }
  
  // if input id is "font_color," changing the font color with the input. 
  else
  {
    style.innerHTML = `
    * {
    color: ` + fetched_color + ` !important;
    }
    `;
    document.head.appendChild(style);

    style = document.createElement('style');
    // Reassigns the default W3-grey font to the input color, since it is not overridden with the previous style.
    style.innerHTML = `
    .w3-text-grey {
    color: ` + fetched_color + ` !important;
    }
    `;
    document.head.appendChild(style);
  }
}


// changes font size based on user input
function font_size_change()
{
  var fetched_size = document.querySelector('#font_size').value;
  var style = document.createElement('style');
  style.innerHTML = `
  * {
  font-size: ` + fetched_size + `px !important;
  }
  `;
  document.head.appendChild(style);
}


// List of all CSS supported fonts. Only the second list is used, but I like the idea of keeping a properly cased CSS fonts list somewhere.
var supported_fonts_cased = ['Abadi MT Condensed Light', 'Aharoni', 'Aharoni Bold', 'Aldhabi', 'AlternateGothic2 BT', 'Andale Mono', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Aparajita', 'Apple Chancery', 'Arabic Typesetting', 'Arial', 'Arial Black', 'Arial narrow', 'Arial Nova', 'Arial Rounded MT Bold', 'Arnoldboecklin', 'Avanta Garde', 'Bahnschrift', 'Bahnschrift Light', 'Bahnschrift SemiBold', 'Bahnschrift SemiLight', 'Baskerville', 'Batang', 'BatangChe', 'Big Caslon', 'BIZ UDGothic', 'BIZ UDMincho Medium', 'Blippo', 'Bodoni MT', 'Book Antiqua', 'Bookman', 'Bradley Hand', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Brush Script Std', 'Brushstroke', 'Calibri', 'Calibri Light', 'Calisto MT', 'Cambodian', 'Cambria', 'Cambria Math', 'Candara', 'Century Gothic', 'Chalkduster', 'Cherokee', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Constantia', 'Copperplate', 'Copperplate Gothic Light', 'Copperplate Gothic Bold', 'Corbel', 'Cordia New', 'CordiaUPC', 'Coronet script', 'Courier', 'Courier New', 'DaunPenh', 'David', 'DengXian', 'DFKai-SB', 'Didot', 'DilleniaUPC', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Estrangelo Edessa', 'EucrosiaUPC', 'Euphemia', 'FangSong', 'Florence', 'Franklin Gothic Medium', 'FrankRuehl', 'FressiaUPC', 'Futara', 'Gabriola', 'Garamond', 'Gautami', 'Geneva', 'Georgia', 'Georgia Pro', 'Gill Sans', 'Gill Sans Nova', 'Gisha', 'Goudy Old Style', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Hebrew', 'Helvetica', 'Hoefler Text', 'HoloLens MDL2 Assets', 'Impact', 'Ink Free', 'IrisUPC', 'Iskoola Pota', 'Japanese', 'JasmineUPC', 'Javanese Text', 'Jazz LET', 'KaiTi', 'Kalinga', 'Kartika', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korean', 'Lao', 'Lao UI', 'Latha', 'Leelawadee', 'Leelawadee UI', 'Leelawadee UI Semilight', 'Levenim MT', 'LilyUPC', 'Lucida Bright', 'Lucida Console', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode', 'Lucidatypewriter', 'soft YaHei UI', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Miriam', 'Monaco', 'Mongolian Baiti', 'MoolBoran', 'MS Gothic', 'MS Mincho', 'MS PGothic', 'MS PMincho', 'MS UI Gothic', 'MV Boli', 'Myanmar Text', 'Narkisim', 'Neue Haas Grotesk Text Pro', 'New Century Schoolbook', 'News Gothic MT', 'Nirmala UI', 'No automatic language associations', 'Noto', 'NSimSun', 'Nyala', 'Oldtown', 'Optima', 'Palatino', 'Palatino Linotype', 'papyrus', 'Parkavenue', 'Perpetua', 'Plantagenet Cherokee', 'PMingLiU', 'Raavi', 'Rockwell', 'Rockwell Extra Bold', 'Rockwell Nova', 'Rockwell Nova Cond', 'Rockwell Nova Extra Bold', 'Rod', 'Sakkal Majalla', 'Sanskrit Text', 'segoeMDL2Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Emoji', 'Segoe UI Historic', 'Segoe UI Symbol', 'Shonar Bangla', 'Shruti', 'SimHei', 'SimKai', 'Simplified Arabic', 'Simplified Chinese', 'SimSun', 'SimSun-ExtB', 'Sitka', 'Snell Roundhan', 'Stencil Std', 'Sylfaen', 'Symbol', 'Tahoma', 'Thai', 'Times New Roman', 'Traditional Arabic', 'Traditional Chinese', 'Trattatello', 'Trebuchet MS', 'UD Digi Kyokasho', 'UD Digi Kyokasho NK-R', 'UD Digi Kyokasho NP-R', 'UD Digi Kyokasho N-R', 'Urdu Typesetting', 'URW Chancery', 'Utsaah', 'Vani', 'Verdana', 'Verdana Pro', 'Vijaya', 'Vrinda', 'Webdings', 'Westminster', 'Wingdings', 'Yu Gothic', 'Yu Gothic UI', 'Yu Mincho', 'Zapf Chancery']
var supported_fonts = ['abadi mt condensed light', 'aharoni', 'aharoni bold', 'aldhabi', 'alternategothic2 bt', 'andale mono', 'andalus', 'angsana new', 'angsanaupc', 'aparajita', 'apple chancery', 'arabic typesetting', 'arial', 'arial black', 'arial narrow', 'arial nova', 'arial rounded mt bold', 'arnoldboecklin', 'avanta garde', 'bahnschrift', 'bahnschrift light', 'bahnschrift semibold', 'bahnschrift semilight', 'baskerville', 'batang', 'batangche', 'big caslon', 'biz udgothic', 'biz udmincho medium', 'blippo', 'bodoni mt', 'book antiqua', 'bookman', 'bradley hand', 'browallia new', 'browalliaupc', 'brush script mt', 'brush script std', 'brushstroke', 'calibri', 'calibri light', 'calisto mt', 'cambodian', 'cambria', 'cambria math', 'candara', 'century gothic', 'chalkduster', 'cherokee', 'comic sans', 'comic sans ms', 'consolas', 'constantia', 'copperplate', 'copperplate gothic light', 'copperplate gothic bold', 'corbel', 'cordia new', 'cordiaupc', 'coronet script', 'courier', 'courier new', 'daunpenh', 'david', 'dengxian', 'dfkai-sb', 'didot', 'dilleniaupc', 'dokchampa', 'dotum', 'dotumche', 'ebrima', 'estrangelo edessa', 'eucrosiaupc', 'euphemia', 'fangsong', 'florence', 'franklin gothic medium', 'frankruehl', 'fressiaupc', 'futara', 'gabriola', 'garamond', 'gautami', 'geneva', 'georgia', 'georgia pro', 'gill sans', 'gill sans nova', 'gisha', 'goudy old style', 'gulim', 'gulimche', 'gungsuh', 'gungsuhche', 'hebrew', 'helvetica', 'hoefler text', 'hololens mdl2 assets', 'impact', 'ink free', 'irisupc', 'iskoola pota', 'japanese', 'jasmineupc', 'javanese text', 'jazz let', 'kaiti', 'kalinga', 'kartika', 'khmer ui', 'kodchiangupc', 'kokila', 'korean', 'lao', 'lao ui', 'latha', 'leelawadee', 'leelawadee ui', 'leelawadee ui semilight', 'levenim mt', 'lilyupc', 'lucida bright', 'lucida console', 'lucida handwriting', 'lucida sans', 'lucida sans typewriter', 'lucida sans unicode', 'lucidatypewriter', 'microsoft jhenghei ui', 'microsoft new tai lue', 'microsoft phagspa', 'microsoft sans serif', 'microsoft tai le', 'microsoft uighur', 'microsoft yahei', 'microsoft yahei ui', 'microsoft yi baiti', 'mingliu', 'mingliu_hkscs', 'mingliu_hkscs-extb', 'mingliu-extb', 'miriam', 'monaco', 'mongolian baiti', 'moolboran', 'ms gothic', 'ms mincho', 'ms pgothic', 'ms pmincho', 'ms ui gothic', 'mv boli', 'myanmar text', 'narkisim', 'neue haas grotesk text pro', 'new century schoolbook', 'news gothic mt', 'nirmala ui', 'no automatic language associations', 'noto', 'nsimsun', 'nyala', 'oldtown', 'optima', 'palatino', 'palatino linotype', 'papll nova extra bold', 'rod', 'sakkal majalla', 'sanskrit text', 'segoemdl2assets', 'segoe print', 'segoe script', 'segoe ui', 'segoe ui emoji', 'segoe ui historic', 'segoe ui symbol', 'shonar bangla', 'shruti', 'simhei', 'simkai', 'simplified arabic', 'simplified chinese', 'simsun', 'simsun-extb', 'sitka', 'snell roundhan', 'stencil std', 'sylfaen', 'symbol', 'tahoma', 'thai', 'times new roman', 'traditional arabic', 'traditional chinese', 'trattatello', 'trebuchet ms', 'ud digi kyokasho', 'ud digi kyokasho nk-r', 'ud digi kyokasho np-r', 'ud digi kyokasho n-r', 'urdu typesetting', 'urw chancery', 'utsaah', 'vani', 'verdana', 'verdana pro', 'vijaya', 'vrinda', 'webdings', 'westminster', 'wingdings', 'yu gothic', 'yu gothic ui', 'yu mincho', 'zapf chancery']

// function to change font style based on user input
function font_style_change()
{
  var fetched_font = document.querySelector('#font_style').value;
  if (supported_fonts.includes(fetched_font.toLowerCase()) == false)
  {
    alert(fetched_font + " is not a valid font")
  }
  else
  {
    var style = document.createElement('style');
    style.innerHTML = `
    * {
    font-family: ` + fetched_font + ` !important;
    }
    `;
    document.head.appendChild(style);
  }
}

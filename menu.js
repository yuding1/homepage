


/* Make one tab visible and the others hiddne */
function visibleTab() {
    var currentId = getHash(this.getAttribute('href'));
    
    var id;
    for (id in contentSet) {
        if (id == currentId) {
            linksSet[id].className = 'selected';
            contentSet[id].className = 'sectionData';
        } else {
            linksSet[id].className = '';
            contentSet[id].className = 'sectionData hide';
        }
    }
    
    return false;
}

var linksSet = new Array();
var contentSet = new Array();


/* Collect all sections,
   assign them actions, and 
   select the first section. */
function collectTabs() {
    
    var mainmenu = document.getElementById('mainmenu').childNodes;
    var items = mainmenu[1].childNodes;
    var firstTab = true;
    
    // go through all elements in mainmenu
    for (var i = 0; i < items.length; i++) {
        if (items[i].nodeName == "LI" ) {
            var tabLink = firstChild(items[i], 'A');
            var ID = getHash(tabLink.getAttribute('href'));
            
            // link
            linksSet[ID] = tabLink;
            linksSet[ID].onclick = visibleTab;
            linksSet[ID].onfocus = function() {
                this.blur();
            }
            
            contentSet[ID] = document.getElementById(ID);
            
            // select first tab but hide the other tabs
            if (firstTab) {
                firstTab  = false;
                linksSet[ID].className = 'selected';
            } else {
                contentSet[ID].className = 'sectionData hide';
            }
            
        }
    }
    
}



function firstChild( element, tagName ) {
    for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
    }
}

function getHash( url ) {
    var hashPos = url.lastIndexOf ( '#' );
    return url.substring( hashPos + 1 );
}

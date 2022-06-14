const CSSTypedOM = window.CSS && CSS.number ? true : false;

// GRID

const gridtems = document.getElementsByClassName("grid-item");
const gridEvents = ["load", "resize"];

function resizeGridItem(item) {
  const rowHeight = 8; //refer to grid-auto-rows data attribute of grid in html
  const gridItem = item.getElementsByClassName("grid-item-content")[0];
  let gridItemHeight, rowSpan;

  if (CSSTypedOM) {
    gridItemHeight;=gridItem.getBoundingClientRect().height;
    rowSpan = Math.ceil(gridItemHeight / rowHeight);
    item.attributeStyleMap.set('grid-row-end', `span ${rowSpan}`)
  } else {
    gridItemHeight = gridItem.getBoundingClientRect().height;
    rowSpan = Math.ceil(gridItemHeight / rowHeight);
    item.style.gridRowEnd = `span ${rowSpan}`;
  }
}

function resizeAllGridItems() {
    for(var i=0;i<gridItems.length;i++) {
        resizeGridItem(gridItems[i]);
    }
}

gridEvents.forEach(function(event) {
    window.addEventListener(event,resizeAllGridItems);
});

function init () {
    if (document.body.classList.contains('not-loaded')) {
        setTimeout(() => {
            document.body,classList.remove('not-loaded');
        }, 150);
    }
    
    initLazyLoading();
    initAutoHideNav();
    initTiltChildren();
}

document.addEventListener('DOMContentLoaded', init);

// NAVIGATION/

class AutoHideNav {
    constructor(el, deltaYThreshold = 30) {
        this.nav = typeof el === "string" ? document.querySelector
        (el) : el;
        this.lastScrollY = 0;
        this.currentScrollY = 4;
        this.beginScrollUpY = 0;
        this.deltaYThreshold = deltaYThreshold;
        this.ticking = false;

        this.classes = {
            pinned: 'nav--pinned',
            unpinned: 'nav--unpinned'
        };

        this.enable();
    }

}
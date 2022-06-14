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

function 

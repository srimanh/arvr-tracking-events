// Edit only the three functions below. Keep their names unchanged.
// Helpers are supplied by the harness:
// setMessage('your message') changes the visible status.
// setExhibitVisible(true) shows the fan; false hides it.
// Each function needs one call to each helper.

function showSearching() {
  setMessage('Searching: show the target picture.');
  setExhibitVisible(false);
}

function onTargetFound() {
  setMessage('Target found.');
  setExhibitVisible(true);
}

function onTargetLost() {
  setMessage('Target lost: show the picture again.');
  setExhibitVisible(false);
}

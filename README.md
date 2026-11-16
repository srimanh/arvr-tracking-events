# Tracking Event Handlers — LU 2.8

## Live demo

[Open the working assignment](https://srimanh.github.io/arvr-tracking-events/)

Runs in a desktop browser. No cloning or local server required.

A supplied simulator displays a fan on a stand. Its three state functions are incomplete. Fix only `student.js`; no scene construction is required.

**Simulation only:** the buttons emit JavaScript `targetFound` and `targetLost` events. They do not use a camera or recognise an image. Real tracking integration is outside this assignment.

## Start

1. Fork this repository into your GitHub account.
2. Clone your fork, replacing `<your-username>`:

```bash
git clone https://github.com/<your-username>/arvr-tracking-events.git
cd arvr-tracking-events
```

3. Open the folder in VS Code. Open `index.html` in a current Chrome, Edge or Firefox browser with WebGL enabled. All assets and A-Frame 1.7.0 are bundled; no npm install or camera permission is required.
4. If local files are restricted, use VS Code Live Server, or run `python3 -m http.server 8000 --bind 127.0.0.1` from this folder and open http://localhost:8000 . Stop the server with Ctrl+C. Python is needed only for this alternative.
5. Confirm the page, stand, fan and buttons load. The starter fan incorrectly stays visible and the status does not react; this is the fault to repair.

## The three tasks

Open `student.js`. Each function needs two helper calls. `setMessage('text')` changes the status; `setExhibitVisible(true)` shows the fan and `setExhibitVisible(false)` hides it. Helpers and button wiring are already provided in `harness.js`.

1. Complete `showSearching()`: message **Searching: show the target picture.**; fan hidden. This function runs on page load and Reset.
2. Complete `onTargetFound()`: message **Target found.**; fan visible.
3. Complete `onTargetLost()`: message **Target lost: show the picture again.**; fan hidden.

Keep function names, HTML, geometry, helper functions and event wiring unchanged. Save and reload after editing.

## Verify

Reload → Searching → Found → Lost → Found again → Reset. Check the message and fan at every step. The stand should never disappear. Found after Lost must restore the fan. Repeated Found or Lost clicks must leave the state correct. Use Tab and Enter to verify keyboard activation. Event history records simulated inputs, not a grading result; inspect the actual fan and message.

## Submission

Commit and push `student.js` to your fork. Upload one PDF with exactly three labelled genuine screenshots:

1. **Searching:** initial message and empty stand after reload.
2. **Target Found:** found message and visible fan after Simulate Found.
3. **Target Lost:** recovery message and hidden fan after Simulate Lost.

Include the forked repository link in the PDF. No separate report or additional upload is required.

## What you learn

Implement event handlers, update visible status, control 3D object visibility and test recovery between states. Screenshot evidence alone does not prove physical tracking or authorship.

## Credits

Fan and stand use original procedural geometry. A-Frame 1.7.0 is bundled from https://aframe.io/releases/1.7.0/aframe.min.js with MIT licence in `vendor/AFRAME-LICENSE` and bundled dependency notices retained. No third-party model download is required.

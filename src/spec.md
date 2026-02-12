# Specification

## Summary
**Goal:** Remove all photo upload/add-photo UI from the Valentine flow so users cannot add or upload images anywhere in the app.

**Planned changes:**
- Remove all user-facing “add/upload photo” controls, clickable areas that open an image file chooser, and related call-to-action text across the frontend.
- Update `frontend/src/components/PostYesMovieDatePage.tsx` to remove the `PhotoSlot` section and rebalance the layout so no empty space remains where photos used to appear.
- Update `frontend/src/components/ValentineAskPage.tsx` to remove the readonly `PhotoSlot` grid from the post-acceptance celebration state while keeping the Yes/No flow and navigation working.
- Remove or retire the `PhotoSlot` component so there are no remaining imports/usages and the frontend builds cleanly.

**User-visible outcome:** The Valentine experience (including the movie date page and celebration state) works as before, but no screens offer photo slots, “add photo” prompts, or any way to open an image picker.

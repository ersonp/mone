# Mone

## Developing

Install dependencies

```bash
npm install
```

Check linting

```bash
npm run lint
```

Format

```bash
npm run format
```

Start a development server:

```bash
npm run tauri dev
```

## Improvements

- [ ] Local Database Improvements
  - [ ] Add a way to Backup the data base
  - [ ] Restore database from landing page
  - [ ] Create new database from landing page
  - [ ] Select databases from landing page
- [ ] API
  - [ ] Add a check to see if the URL is valid
- [ ] Tauri
  - [ ] Fix
    ```
    RemoteLayerTreeDrawingAreaProxyMac::scheduleDisplayLink(): page has no displayID
    2024-03-25 12:33:36.605 mone[72959:46565387] WARNING: Secure coding is automatically enabled for restorable state! However, not on all supported macOS versions of this application. Opt-in to secure coding explicitly by implementing NSApplicationDelegate.applicationSupportsSecureRestorableState:.
    ```

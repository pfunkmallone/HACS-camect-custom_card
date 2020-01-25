# camect-home-assistant-custom_card
A custom card for Home Assistant for Camect
**MUST** be used with the Camect custom_component

Once installed, be sure to activate it in Lovelace.
## Configure
In Lovelace, do the following:
- Add this to the ui-lovelace.yaml file:
```yaml
resources:
  - url: /community_plugin/camect-home-assistant-custom_card/camect_card.js
    type: module
```

- Create a "manual" card, and enter the following YAML:
```yaml
type: "custom:camect-card"
entity: camera.camect_YOUR_CAMERA_ID
```

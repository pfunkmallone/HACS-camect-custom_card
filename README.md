# camect-home-assistant-custom_card
A custom card for Home Assistant for Camect
**MUST** be used with the Camect custom_component

Once installed, be sure to activate it in Lovelace.
## Configure
In Lovelace, create a "manual" card, and enter the following YAML:
```yaml
type: "custom:camect-card"
entity: camera.camect_YOUR_CAMERA_ID
```

# camect-home-assistant-custom_card
A custom card for Home Assistant for Camect

## Configure
- If you are using lovelace, put following into $ha_config_dir/ui-lovelace.yaml
```yaml
resources:
  - url: /local/camect-card.js
    type: module

views:
  - title: Camect
    cards:
      - type: "custom:camect-card"
        entity: camera.camect_YOUR_CAMERA_ID
```
  If you don't have ui-lovelace.yaml yet, add the following into $ha_config_dir/configuration.yaml
```yaml
lovelace:
   mode: yaml
```

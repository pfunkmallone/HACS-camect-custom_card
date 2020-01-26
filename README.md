# HACS-camect-custom_card
A custom card which exposes the Camect video streams via the Home Assistant Lovelace interface.

I did NOT create this custom card. I simply created *this* repo to simplify the installation of the custom card via [Home Assistant Community Store (aka HACS)](https://hacs.xyz/).

To use this card, you **MUST** have already installed the Camect custom_component available [HERE](https://github.com/pfunkmallone/HACS-camect-integration)

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

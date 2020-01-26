# HACS-camect-custom_card
A custom card which exposes the Camect video streams via the Home Assistant Lovelace interface.

I did NOT create this custom card. I simply created *this* repo to simplify the installation of the custom card via [Home Assistant Community Store (aka HACS)](https://hacs.xyz/).

## Prerequisites:
- A [Camect](https://camect.com) Home Security recorder
- [Home Assistant](https://home-assistant.io)
- [Home Assistant Community Store (HACS)](https://hacs.xyz)
- The [Camect/Home Assistant Custom Component](https://github.com/pfunkmallone/HACS-camect-integration) (Can be installed via HACS)

## Installation Steps:
- Add this repo to HACS
- In HACS, install this card
- Add the resources to Lovelace
-- Add this to the ui-lovelace.yaml file:
```yaml
resources:
  - url: /community_plugin/camect-home-assistant-custom_card/camect_card.js
    type: module
```
- Create a "manual" card in Lovelace, and enter the following YAML:
```yaml
type: "custom:camect-card"
entity: camera.camect_YOUR_CAMERA_ID
```

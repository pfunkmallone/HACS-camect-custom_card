# HACS-camect-custom_card
[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration) 
[![HACS-camect-custom_card](https://img.shields.io/github/v/release/pfunkmallone/HACS-camect-custom_card.svg?1)](https://github.com/pfunkmallone/HACS-camect-custom_card) ![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)

A custom card which exposes the Camect video streams via the Home Assistant Lovelace interface.

<img src="https://github.com/pfunkmallone/HACS-camect-custom_card/blob/master/images/doorbell.png">


**I did NOT create this custom card**. I simply created *this* repo to simplify the installation of the custom card via [Home Assistant Community Store (aka HACS)](https://hacs.xyz/). The original proof-of-concept custom card (written by one of the Camect developers) is located [HERE](https://github.com/camect/home-assistant-integration). The Camect developers don't use Home Assistant so they can't prioritize improvements on the integration or custom card. Ideally, they hope that users in the Home Assistant community will take on the responsibility to improve it and keep it up-to-date with Home Assistant. **I am not a developer**, so I'm incapable of doing so.

## Prerequisites:
- A [Camect](https://camect.com) Home Security recorder
- [Home Assistant](https://home-assistant.io)
- [Home Assistant Community Store (HACS)](https://hacs.xyz)
- The [Camect/Home Assistant Custom Component](https://github.com/pfunkmallone/HACS-camect-integration) (Can be installed via HACS)

## Installation Steps:
- Add this repo to HACS (as type "plugin")
- In HACS, install this card
- Add the resources to Lovelace
-- Add this to the ui-lovelace.yaml file:
```yaml
resources:
  - url: /community/HACS-camect-custom_card/HACS-camect-custom_card.js
    type: js
```
- Create a "manual" card in Lovelace, and enter the following YAML:
```yaml
type: "custom:camect-card"
entity: camera.camect_YOUR_CAMERA_ID
```

# HACS-camect-custom_card
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs) 
[![HACS-camect-custom_card](https://img.shields.io/github/v/release/pfunkmallone/HACS-camect-custom_card.svg?1)](https://github.com/pfunkmallone/HACS-camect-custom_card) ![Maintenance](https://img.shields.io/maintenance/yes/2020.svg)

A custom card which exposes the Camect video streams via the Home Assistant Lovelace interface.

To use this card, you **MUST** have already installed the Camect custom_component. It is available as a HACS repo [HERE](https://github.com/pfunkmallone/HACS-camect-integration).

<img src="https://github.com/pfunkmallone/HACS-camect-custom_card/blob/master/images/doorbell.png">

Once this custom card is installed, **be sure to activate it in Lovelace.**
## Configure
Goto your entities, and find the entity that you want to show video from. Example: camera.camect_c2c9afadd3asdf304ae16f6
- Create a "manual" card, and enter the following YAML:
```yaml
type: "custom:camect-card"
entity: camera.camect_YOUR_CAMERA_ID
```

# NOTE
**I did NOT create this custom card**. I simply created *this* repo to simplify the installation of the custom card via [Home Assistant Community Store (aka HACS)](https://hacs.xyz/). The original proof-of-concept custom card (written by one of the Camect developers) is located [HERE](https://github.com/camect/home-assistant-integration). The original developers don't use Home Assistant and have no desire to maintain or improve the integration or custom card. They hope that users in the Home Assistant community will take on the responsibility to improve it and keep it up-to-date with Home Assistant. **I am not a developer**, so I'm incapable of doing so.

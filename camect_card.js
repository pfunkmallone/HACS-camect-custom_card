import {
    LitElement,
    TemplateResult,
    css,
    customElement,
    html,
    property
} from 'https://unpkg.com/lit-element@2.1.0/lit-element.js?module';

class CamectCard extends LitElement {
    static get properties() {
        return {
            hass: {},
            config: {}
        };
    }

    static get styles() {
        return css`
            ha-card {
                display: flex;
                flex-direction: column;
                flex: 1;
                width: 480px;
                min-height: 240px;
                overflow: hidden;
                position: relative;
                border-radius: 5px;
            }`;
    }

    getCardSize() {
        return 3;
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error('You need to define entity');
        }
        this.config = config;
    }

    render() {
        if (!this.config || !this.hass) {
            return html``;
        }

        const stateObj = this.hass.states[this.config.entity];
        if (!stateObj) {
            return html`<div class="not-found">Entity ${this.config.entity} not found.</div>`;
        }
        CamectCard._loadCSS('https://home.camect.com/font/fontface.css');
        CamectCard._loadJS('https://home.camect.com/js/embedded_bundle.min.js');
        const camId = stateObj.attributes.device_id;
        const wsUrlCbName = 'camect_' + camId + '_ws_cb';
        window[wsUrlCbName] = this.getWsUrl_.bind(this);
        const camectSite = stateObj.attributes.camect_site;
        return html`
            <ha-card>
                <camect-camera ws-url-cb-name="${wsUrlCbName}" cam-id="${camId}" width="480"
                               camect-site="${camectSite}">
                </camect-camera>
            </ha-card>`;
    }

    getWsUrl_() {
        const stateObj = this.hass.states[this.config.entity];
        let wsUrl = stateObj.attributes.ws_url || '';
        if (wsUrl && wsUrl.startsWith('/')) {
            if (location.protocol == 'https:') {
               wsUrl = 'wss://' + location.host + wsUrl;
            } else {
               wsUrl = 'ws://' + location.host + wsUrl;
            }
            if (wsUrl.indexOf('?') > 0) {
                wsUrl += '&token=' + stateObj.attributes.access_token;
            } else {
                wsUrl += '?token=' + stateObj.attributes.access_token;
            }
        }
        return wsUrl;
    }

    static _loadCSS(css_url) {
        if (CamectCard._loaded_css) return;
        CamectCard._loaded_css = true;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = css_url;
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    static _loadJS(js_url) {
        if (CamectCard._loaded_js) return;
        CamectCard._loaded_js = true;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = js_url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}
CamectCard._loaded_css = false;
CamectCard._loaded_js = false;

customElements.define('camect-card', CamectCard);

<template>
    <div>
        <b-container class="mb-4">
            <h1>{{ $t("title") }}</h1>
        </b-container>
        <b-container class="mb-4">
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link> / 
            <nuxt-link :to="switchLocalePath('ja')">日本語</nuxt-link>
        </b-container>
        <b-container>
            <b-row>
                <b-col md="6">
                    <b-form-group>
                        <b-form-radio-group v-model="mode" name="mode" value="text" :options="modes"></b-form-radio-group>
                    </b-form-group>
                    <div v-show="mode === 'text'">
                        <b-form-textarea
                            v-model="text"
                            rows="3"
                            max-rows="10"
                        ></b-form-textarea>
                    </div>
                    <div v-show="mode === 'card'">
                        <p><small class="text-muted">{{ $t("noteFunctionsForLegacy") }}</small></p>
                        <CardForm v-model="card" />
                    </div>
                    <div v-show="mode === 'bm'">
                        <p><small class="text-muted">{{ $t("noteFunctionsForLegacy") }}</small></p>
                        <BookmarkForm v-model="bm" />
                    </div>
                    <hr>
                    <b-container>
                        <ChoiceField :label="$t('options.type')" id="qrType" v-model="type" :options="types" :small="$t('options.autoExpandsType')" />
                        <ChoiceField :label="$t('options.eccLevel')" id="eccLevel" v-model="level" :options="levels" />
                        <ChoiceField :label="$t('options.division')" id="qrDivision" v-model="division" :options="divisions"
                            :small="$t('options.noteDivisions')" />
                        <RangeField :label="$t('options.thickness')" id="qrThickness" v-model="thickness" min="1" max="7" />
                        <ColorField
                            :labelForeground="$t('options.foreground')"
                            :labelBackground="$t('options.background')"
                            :labelInverse="$t('options.reverse')"
                            idPrefix="qrColor"
                            v-model="color" />
                        <ChoiceField :label="$t('options.encoding')" id="qrEncoding" v-model="encoding" :options="encodings" />
                        <ChoiceField :label="$t('options.mask')" id="qrMasking" v-model="masking" :options="maskings" />
                        <b-form-group>
                            <b-row>
                                <b-col sm="3">
                                    <label class="col-form-label">{{ $t("options.options") }}</label>
                                </b-col>
                                <b-col sm="9">
                                    <b-form-checkbox v-model="flipHorizontal">{{ $t("options.flipHorizontal") }}</b-form-checkbox>
                                    <b-form-checkbox v-model="useEci">{{ $t("options.useEciHeader") }} <small class="text-muted">{{ $t("options.someDeviceNotSupportEci") }}</small></b-form-checkbox>
                                    <b-form-checkbox v-model="transparent">{{ $t("options.transparent") }}</b-form-checkbox>
                                    <b-form-checkbox v-model="debug">{{ $t('options.debug') }}</b-form-checkbox>
                                </b-col>
                            </b-row>
                        </b-form-group>
                    </b-container>
                </b-col>
                <b-col md="6" class="text-center">
                    <p><QrCanvas :data="dataStr" v-model="qrcode" :qrOptions="qrOptions" :canvasOptions="canvasOptions" class="qr" /></p>
                    <div v-if="qrcode.supportBlob">
                        <p><a :href="dataUri" class="btn btn-primary" download="qr.png">{{ $t("download") }}</a></p>
                        <p><b-textarea class="text-muted" v-model="dataUri"></b-textarea></p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col>
                    <small class="text-muted">{{ $t("trademark") }}</small>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import { QROptions, CanvasOptions, TYPE_MAX, TYPE_MIN, EccLevel, CanvasDrawer } from '@zu-min/qrcode'
import type { Mask } from '@zu-min/qrcode'
import Vue from 'vue'
export default Vue.extend({
    data() {
        const types = [];
        for (let type = TYPE_MIN;type <= TYPE_MAX;type++) {
            types.push({
                value: type, text: (type === 1 ? this.$t("auto") : type)
            });
        }

        const data = {
            mode: 'text',
            modes: [
                { text: this.$t("mode.text"), value: 'text' },
                { text: this.$t("mode.contact"), value: 'card' },
                { text: this.$t("mode.bookmark"), value: 'bm' },
            ],
            text: this.$t("examples").toString(),
            card: {
                name: '',
                kana: '',
                tel: '',
                email: '',
                carrier: 'docomo',
                text: ' ',
            },
            bm: {
                name: '',
                url: '',
                text: ' ',
            },
            type: 1,
            types: types,
            level: EccLevel.L,
            levels: [
                { value: EccLevel.L, text: 'L - ' + this.$t("options.levelLow") },
                { value: EccLevel.M, text: 'M' },
                { value: EccLevel.Q, text: 'Q' },
                { value: EccLevel.H, text: 'H - ' + this.$t("options.levelHigh") },
            ],
            division: 1,
            divisions: [
                { value: 1, text: this.$t("options.divisionOne") },
                { value: 2, text: '2' },
                { value: 3, text: '3' },
                { value: 4, text: '4' },
                { value: 9, text: '9' },
                { value: 16, text: '16' },
            ],
            thickness: '3',
            thicknesses: [
                { value: '1', text: '1' },
                { value: '2', text: '2' },
                { value: '3', text: '3' },
                { value: '4', text: '4' },
                { value: '5', text: '5' },
                { value: '6', text: '6' },
                { value: '7', text: '7' },
            ],
            color: {
                foreground: '#000000',
                background: '#ffffff',
            },
            encoding: 'shiftjis',
            encodings: [
                { value: 'shiftjis', text: 'Shift_JIS' },
            ],
            masking: -1,
            maskings: [
                { value: -1, text: this.$t("auto") },
                { value: 0, text: '0' },
                { value: 1, text: '1' },
                { value: 2, text: '2' },
                { value: 3, text: '3' },
                { value: 4, text: '4' },
                { value: 5, text: '5' },
                { value: 6, text: '6' },
                { value: 7, text: '7' },
            ],
            flipHorizontal: false,
            useEci: false,
            transparent: false,
            debug: false,
            qrcode: {
                drawer: {},
                canvas: {},
                supportBlob: false,
            },
            dataUri: "",
            blobUri: "",
        }

        if (typeof TextEncoder !== "undefined") {
            data.encoding = "utf8"
            data.encodings.unshift({ value: 'utf8', text: 'UTF-8' })
        }
        return data
    },
    computed: {
        dataStr (): string {
            switch (this.mode) {
                case 'card':
                    return this.card.text
                case 'bm':
                    return this.bm.text
                default:
                    return this.text
            }
        },
        qrOptions (): QROptions {
            const options: QROptions = {
                type: this.type,
                level: this.level,
                division: this.division,
                encoder: {
                    charset: this.encoding,
                    useEci: this.useEci,
                },
                debug: this.debug,
            }
            if (this.masking !== -1) {
                options.mask = this.masking as Mask
            }
            return options
        },
        canvasOptions (): CanvasOptions {
            return {
                thickness: parseInt(this.thickness as string),
                color: this.color.foreground,
                autoResize: undefined,
                debug: this.debug,
                backgroundColor: this.color.background,
                flipHorizontal: this.flipHorizontal,
                transparent: this.transparent,
            }
        },
    },
    watch: {
        "qrcode" () {
            if (!this.qrcode.drawer) {
                return
            }
            const drawer = this.qrcode.drawer as CanvasDrawer

            if (!this.qrcode.supportBlob) {
                return
            }
            const canvas = this.qrcode.canvas as HTMLCanvasElement
            canvas.toBlob((blob) => {
                if (blob === null) {
                    return
                }
                if (this.blobUri) {
                    URL.revokeObjectURL(this.blobUri)
                }
                this.blobUri = URL.createObjectURL(blob)
            })

            drawer.toDataUri().then((uri) => {
                if (uri === null) {
                    return
                }
                this.dataUri = uri
            })
        }
    }
})
</script>

<style>
.qr canvas {
    border:1px dashed #c0c0c0;
    
    background:
        linear-gradient(45deg, rgba(0, 0, 0, 0.08) 25%, transparent 0),
        linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.08) 0),
        linear-gradient(45deg, rgba(0, 0, 0, 0.08) 25%, transparent 0),
        linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.08) 0),
        white;
    background-position: 0px 0, 10px 10px, 10px 10px, 20px 20px;
    background-size: 20px 20px;
}
</style>
<template>
    <div>
        <div class="alert alert-danger" v-if="error !== ''">{{ error }}</div>
        <svg ref="svg" v-show="error === ''"></svg>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as qr from '@zu-min/qrcode'
export default Vue.extend({
    props: {
        data: String,
        qrOptions: Object,
        svgOptions: Object
    },
    mounted() {
        this.generate()
    },
    data () {
        return {
            error: '',
        }
    },
    watch: {
        data () {
            this.generate()
        },
        qrOptions () {
            this.generate()
        },
        svgOptions () {
            this.generate()
        }
    },
    methods: {
        generate () {
            this.error = ''
            try {
                const qrcode = qr.generate(this.data, this.qrOptions)
                const svg = this.$refs.svg as SVGElement
                const drawer = qrcode.drawToSvg(svg, this.svgOptions)
                this.$emit("input", {
                    qrcode,
                    drawer,
                    svg
                })
            } catch (e) {
                console.log(e)
                this.error = e.message
            }
        }
    }
})
</script>

<style scoped>
canvas {
    image-rendering: crisp-edges;
}
</style>
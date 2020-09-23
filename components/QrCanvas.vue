<template>
    <div>
        <div class="alert alert-danger" v-if="error !== ''">{{ error }}</div>
        <canvas ref="canvas" v-show="error === ''"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as qr from '@zu-min/qrcode'
export default Vue.extend({
    props: {
        data: String,
        qrOptions: Object,
        canvasOptions: Object
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
        canvasOptions () {
            this.generate()
        }
    },
    methods: {
        generate () {
            this.error = ''
            try {
                const qrcode = qr.generate(this.data, this.qrOptions)
                const canvas = this.$refs.canvas as HTMLCanvasElement
                const drawer = qrcode.drawToCanvas(canvas, this.canvasOptions)
                this.$emit("input", {
                    qrcode,
                    drawer,
                    canvas,
                    supportBlob: typeof canvas.toBlob !== "undefined"
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
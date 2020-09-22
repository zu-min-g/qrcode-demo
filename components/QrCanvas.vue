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
                var qrcode = qr.generate(this.data, this.qrOptions)
                var drawer = qrcode.drawToCanvas(this.$refs.canvas as HTMLCanvasElement, this.canvasOptions)
                this.$emit("input", {
                    qrcode,
                    drawer,
                })
            } catch (e) {
                console.log(e)
                this.error = e.message
            }
        }
    }
})
</script>
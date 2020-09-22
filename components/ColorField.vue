<template>
    <div>
        <b-form-group>
            <b-row>
                <b-col sm="3">
                    <label class="col-form-label" :for="idPrefix+'Foreground'">{{ labelForeground }}</label>
                </b-col>
                <b-col sm="6">
                    <b-form-input type="color" :id="idPrefix+'Foreground'" v-model="foreground" @input="$emit('input', newValue())" />
                </b-col>
            </b-row>
        </b-form-group>
        <b-form-group>
            <b-row>
                <b-col sm="3">
                    <label class="col-form-label" :for="idPrefix+'Background'">{{ labelBackground }}</label>
                </b-col>
                <b-col sm="6">
                    <b-form-input type="color" :id="idPrefix+'Background'" v-model="background" @input="$emit('input', newValue())" />
                </b-col>
                <b-col sm="3">
                    <b-button variant="outline-primary" @click="inverse();$emit('input', newValue())">{{ labelInverse }}</b-button>
                </b-col>
            </b-row>
        </b-form-group>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        labelForeground: String,
        labelBackground: String,
        labelInverse: String,
        value: Object,
        idPrefix: String,
    },
    data() {
        return {
            foreground: this.value.foreground,
            background: this.value.background,
        }
    },
    methods: {
        newValue() {
            return {
                foreground: this.foreground,
                background: this.background,
            }
        },
        inverse() {
            const temp = this.background;
            this.background = this.foreground;
            this.foreground = temp;
        }
    }
})
</script>
<template>  
    <b-form-group>
        <b-row>
            <b-col sm="3">
                <label class="col-form-label" :for="id">{{ label }}</label>
            </b-col>
            <b-col sm="9">
                <b-form-input :id="id"
                    type="range"
                    :min="min"
                    :max="max"
                    v-model="newValue"
                    @input="$emit('input', newValue)" />
                <small v-if="small" class="text-muted">{{ small }}</small>
            </b-col>
        </b-row>
    </b-form-group>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        label: String,
        value: [String, Number],
        min: [String, Number],
        max: [String, Number],
        id: String,
        small: {type: String, default: '' },
    },
    data() {
        return {
            newValue: this.value
        }
    }
})
</script>